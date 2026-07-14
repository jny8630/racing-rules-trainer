#!/usr/bin/env python3
"""Path B verification engine.

Independently derives, for a situation's primary pair of boats:
  - right-of-way holder
  - mark-room entitlement (or None)
  - the set of applicable rules (2025-2028 numbering)

Inputs are ONLY geometry (positions, headings, wind, mark) and objective event
facts (zone-entry snapshot, how an overlap began, hails, etc.). It never reads
the authored answer. See rules_digest.md for the rule content implemented here.

Rule token vocabulary:
  10 11 12 13 14 15 16.1 17 18.1a 18.2a 18.2b 18.2c 18.2e 18.3 18.4
  19.2a 19.2b 20 21.1 21.3 31 43.1a 43.1b 43.1c 44 SecC
Tokens 14, 44, 43.1c, 31 are "decoration" — often citable for cost/contact —
and are optional when comparing authored answers to derived answers.
"""

import json
import math
import re
import sys

OPTIONAL_TOKENS = {"14", "44", "43.1c", "31", "2"}

HULL_L = 7.0  # canvas units per hull length (default; situations may override)


def dir_vec(heading):
    """Heading 0 = up (-y), 90 = right (+x). SVG coords, y down."""
    r = math.radians(heading)
    return (math.sin(r), -math.cos(r))


def norm(a):
    return a % 360.0


def ang_diff(a, b):
    """Smallest absolute angular difference."""
    d = abs(norm(a) - norm(b)) % 360.0
    return min(d, 360.0 - d)


class Boat:
    def __init__(self, spec, L):
        self.id = spec["id"]
        self.x = spec["x"]
        self.y = spec["y"]
        self.heading = spec["heading"]
        self.declared_tack = spec.get("tack")
        self.tacking = bool(spec.get("tacking"))  # past HTW, not yet close-hauled
        self.L = L
        d = dir_vec(self.heading)
        self.bow = (self.x + d[0] * L / 2, self.y + d[1] * L / 2)
        self.stern = (self.x - d[0] * L / 2, self.y - d[1] * L / 2)
        self.dir = d

    def twa(self, wind_from):
        """Angle between heading and the wind-from direction (0=head to wind)."""
        return ang_diff(self.heading, wind_from)

    def derived_tack(self, wind_from):
        rel = norm(wind_from - self.heading)
        if rel == 0 or rel == 180:
            return self.declared_tack  # head-to-wind / dead-downwind: ambiguous
        return "starboard" if rel < 180 else "port"


def clear_astern(b, a):
    """True if boat b is clear astern of boat a (b entirely behind a's stern-abeam line)."""
    ax, ay = a.stern
    h = a.dir
    for px, py in (b.bow, b.stern):
        if (px - ax) * h[0] + (py - ay) * h[1] >= 0:
            return False
    return True


def overlap_geometric(a, b):
    return not clear_astern(a, b) and not clear_astern(b, a)


def overlap_applies(a, b, wind_from):
    """Overlap/clear-astern terms apply: same tack always; opposite tacks only
    when both boats sail more than 90 degrees from the true wind."""
    ta, tb = a.derived_tack(wind_from), b.derived_tack(wind_from)
    if ta == tb:
        return True
    return a.twa(wind_from) > 90 and b.twa(wind_from) > 90


def leeward_of_pair(a, b, wind_from):
    """Return the leeward boat of an overlapped same-tack pair."""
    downwind = dir_vec(norm(wind_from + 180))
    # lateral axis: component of downwind perpendicular to the pair's mean heading
    mh = dir_vec(a.heading)
    mh2 = dir_vec(b.heading)
    h = (mh[0] + mh2[0], mh[1] + mh2[1])
    hl = math.hypot(*h)
    if hl < 1e-9:
        h = mh
        hl = 1.0
    h = (h[0] / hl, h[1] / hl)
    dot = downwind[0] * h[0] + downwind[1] * h[1]
    perp = (downwind[0] - dot * h[0], downwind[1] - dot * h[1])
    pl = math.hypot(*perp)
    if pl < 1e-9:
        # running dead downwind: leeward side is the side opposite the tack
        # (boom side). Starboard tack -> wind over starboard -> leeward = port.
        t = a.derived_tack(wind_from)
        side = dir_vec(norm(a.heading + (-90 if t == "starboard" else 90)))
        perp, pl = side, 1.0
    perp = (perp[0] / pl, perp[1] / pl)
    proj_a = a.x * perp[0] + a.y * perp[1]
    proj_b = b.x * perp[0] + b.y * perp[1]
    return a if proj_a > proj_b else b


def hull_gap(a, b):
    """Approximate min distance between the two hull segments."""

    def seg_dist(p1, p2, q1, q2):
        def pt_seg(p, s1, s2):
            vx, vy = s2[0] - s1[0], s2[1] - s1[1]
            wx, wy = p[0] - s1[0], p[1] - s1[1]
            L2 = vx * vx + vy * vy
            t = 0 if L2 == 0 else max(0.0, min(1.0, (wx * vx + wy * vy) / L2))
            cx, cy = s1[0] + t * vx, s1[1] + t * vy
            return math.hypot(p[0] - cx, p[1] - cy)

        return min(
            pt_seg(p1, q1, q2), pt_seg(p2, q1, q2),
            pt_seg(q1, p1, p2), pt_seg(q2, p1, p2),
        )

    return seg_dist(a.bow, a.stern, b.bow, b.stern)


def boat_in_zone(b, mark, zone_r):
    for px, py in (b.bow, b.stern, (b.x, b.y)):
        if math.hypot(px - mark["x"], py - mark["y"]) <= zone_r + 1e-6:
            return True
    return False


def derive(situation):
    """Return dict: row, mark_room, rules(set), notes(list)."""
    L = situation.get("units_per_length", HULL_L)
    wind = situation.get("wind_from", 0)
    facts = situation.get("facts", {})
    boats = {b["id"]: Boat(b, L) for b in situation["boats"]}
    pair = facts.get("pairs", [[situation["boats"][0]["id"], situation["boats"][1]["id"]]])[0]
    a, b = boats[pair[0]], boats[pair[1]]
    rules = set()
    notes = []

    # --- tack sanity ---
    for bt in (a, b):
        dt = bt.derived_tack(wind)
        if bt.declared_tack and dt and dt != bt.declared_tack and not bt.tacking:
            notes.append(f"TACK MISMATCH {bt.id}: declared {bt.declared_tack}, geometry says {dt}")
    ta = a.declared_tack or a.derived_tack(wind)
    tb = b.declared_tack or b.derived_tack(wind)

    # --- overlap state (geometric, at the decision moment) ---
    ov_applies = overlap_applies(a, b, wind)
    ov = overlap_geometric(a, b) if ov_applies else False

    # --- base right of way ---
    row = None
    if facts.get("returning_to_start"):
        # rule 21.1 (2025 numbering): a boat returning to start keeps clear;
        # it supersedes the Section A rule between these boats
        rules.add("21.1")
        r = facts["returning_to_start"]["boat"]
        row = b.id if r == a.id else a.id
    elif a.tacking or b.tacking:
        rules.add("13")
        row = b.id if a.tacking else a.id
    elif facts.get("moving_astern"):
        rules.add("21.3")
        m = facts["moving_astern"]["boat"]
        row = b.id if m == a.id else a.id
    elif ta != tb:
        rules.add("10")
        row = a.id if ta == "starboard" else b.id
    elif ov:
        rules.add("11")
        lee = leeward_of_pair(a, b, wind)
        row = lee.id
    else:
        rules.add("12")
        # clear ahead boat has ROW
        if clear_astern(a, b):
            row = b.id
        elif clear_astern(b, a):
            row = a.id
        else:
            notes.append("RULE 12 GEOMETRY UNCLEAR: neither boat clear astern")

    # --- limitations ---
    if facts.get("just_acquired_row"):
        j = facts["just_acquired_row"]
        if j["boat"] == row and j.get("cause", "own_action") == "own_action":
            rules.add("15")
    if facts.get("row_changing_course"):
        if facts["row_changing_course"]["boat"] == row:
            rules.add("16.1")
    ofa = facts.get("overlap_from_clear_astern")
    before_signal = bool((facts.get("starting") or {}).get("before_start_signal"))
    if ofa and ta == tb and ov and not before_signal:
        # (before the starting signal there is no proper course, so rule 17
        # imposes no limit even when its overlap condition is met)
        # rule 17 applies to the boat that came from clear astern into a
        # LEEWARD overlap within two of her hull lengths, while it persists
        lee = leeward_of_pair(a, b, wind)
        if (
            ofa["boat"] == lee.id
            and ofa.get("within_two_lengths", True)
            and hull_gap(a, b) <= 2 * L
            and not ofa.get("began_while_windward_tacking", False)
        ):
            rules.add("17")

    # --- marks ---
    mark_room = None
    mark = situation.get("mark")
    starting = facts.get("starting")
    if mark and starting and mark.get("type") in ("start-boat", "start-pin"):
        rules.add("SecC")  # Section C off: no mark-room at a starting mark
    elif mark and mark.get("type") not in ("start-boat", "start-pin"):
        zone_r = mark.get("zone_radius", 3 * L)
        anyone_in_zone = boat_in_zone(a, mark, zone_r) or boat_in_zone(b, mark, zone_r)
        ze = facts.get("zone_entry")
        if anyone_in_zone or ze:
            beat = a.twa(wind) <= 90 and b.twa(wind) <= 90
            opp = ta != tb
            off_181a = opp and (beat or mark.get("type") == "windward")
            if off_181a and not facts.get("passed_htw_in_zone") and not facts.get("same_tack_after_opp_entry"):
                rules.add("18.1a")
            else:
                if facts.get("passed_htw_in_zone"):
                    p = facts["passed_htw_in_zone"]
                    if p.get("from_tack") == "port" and p.get("other_stbd_since_entry"):
                        rules.add("18.3")
                        # 18.3 gives the since-entry-starboard boat mark-room only
                        # if she is overlapped INSIDE the tacker. At a windward
                        # mark: port rounding -> inside = leeward boat,
                        # starboard rounding -> inside = windward boat.
                        other = b.id if p["boat"] == a.id else a.id
                        if ov and ta == tb:
                            lee = leeward_of_pair(a, b, wind).id
                            wwd = b.id if lee == a.id else a.id
                            inside = lee if mark.get("rounding", "port") == "port" else wwd
                            if inside == other:
                                mark_room = other
                        # the tacker also loses any prior entitlement: 18.2(b)
                        if ze and ze.get("entitled_was_tacker"):
                            rules.add("18.2b")
                    else:
                        # passed HTW in zone but not port->starboard-vs-fetching case:
                        # entitlement (if hers) turns off under 18.2(b)
                        rules.add("18.2b")
                elif facts.get("same_tack_after_opp_entry"):
                    # entered zone on opposite tacks (18.2(a) never engaged);
                    # now same tack and overlapped -> 18.2(c)
                    if ov:
                        rules.add("18.2c")
                        lee = leeward_of_pair(a, b, wind)
                        inside = facts["same_tack_after_opp_entry"].get("inside")
                        mark_room = inside
                elif ze:
                    rules.add("18.2a")
                    if ze.get("overlapped"):
                        mark_room = ze["inside"]
                    else:
                        mark_room = ze["first"]
                    if facts.get("left_zone_after_entry") and facts["left_zone_after_entry"]["boat"] == mark_room:
                        rules.add("18.2b")
                        mark_room = None
                    if ze.get("doubt"):
                        rules.add("18.2e")
                        # presumption: overlap NOT obtained / NOT broken in time
                        if ze.get("doubt") == "gained":
                            mark_room = ze["first"]  # late overlap presumed not in time
                # exoneration: an entitled boat that is NOT the ROW boat is
                # protected while sailing within her mark-room
                if mark_room and mark_room != row:
                    rules.add("43.1b")
                if facts.get("must_gybe_at_mark"):
                    g = facts["must_gybe_at_mark"]["boat"]
                    if g == row and ov and mark.get("type") == "leeward" and not mark.get("gate"):
                        rules.add("18.4")

    # --- obstructions ---
    obs = situation.get("obstruction")
    if obs and not facts.get("starting_mark_is_obstruction_off"):
        if facts.get("hail_room_to_tack"):
            rules.add("20")
        elif ov and ta == tb:
            rules.add("19.2b")
        if facts.get("row_choosing_side"):
            rules.add("19.2a")

    return {
        "row": row,
        "mark_room": mark_room,
        "rules": rules,
        "notes": notes,
        "overlap_now": ov,
        "tacks": {a.id: ta, b.id: tb},
    }


def compare(situation, derived):
    """Compare authored answer (Path A) to derived (Path B). Return list of disagreements."""
    ans = situation["answer"]
    probs = []
    if ans.get("row") != derived["row"]:
        probs.append(f"ROW: authored={ans.get('row')} derived={derived['row']}")
    if ans.get("mark_room") != derived["mark_room"]:
        probs.append(f"MARK-ROOM: authored={ans.get('mark_room')} derived={derived['mark_room']}")
    a_rules = set(ans.get("rules", [])) - OPTIONAL_TOKENS
    d_rules = derived["rules"] - OPTIONAL_TOKENS
    if a_rules != d_rules:
        probs.append(f"RULES: authored={sorted(a_rules)} derived={sorted(d_rules)}")
    probs.extend(derived["notes"])
    return probs


def load_situations(path):
    text = open(path, encoding="utf-8").read()
    if path.endswith(".json"):
        return json.loads(text)
    # situations.js: strip `window.SITUATIONS =` prefix and trailing `;`
    m = re.search(r"=\s*(\[.*\])\s*;?\s*$", text, re.S)
    return json.loads(m.group(1))


def main():
    path = sys.argv[1]
    sits = load_situations(path)
    n_ok, n_bad = 0, 0
    for s in sits:
        d = derive(s)
        probs = compare(s, d)
        if probs:
            n_bad += 1
            print(f"DISAGREE {s['id']}: {s.get('title','')}")
            for p in probs:
                print(f"    {p}")
        else:
            n_ok += 1
            print(f"OK       {s['id']}: {s.get('title','')}")
    print(f"\n{n_ok} agree, {n_bad} disagree, {n_ok + n_bad} total")
    return 1 if n_bad else 0


if __name__ == "__main__":
    sys.exit(main())
