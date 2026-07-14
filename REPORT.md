# RRS Situation Trainer — Build Report

DRAFT — requires human review (specifically §4: have a rules-qualified sailor spot-check).

## 1. Eval set results (spec §2.2)

Golden eval set: **15 situations, 15/15 pass (100%)** — required before library work proceeded.

| # | Situation | Type | Result |
|---|-----------|------|--------|
| e01 | Port meets starboard on the beat | trivial (R10) | PASS |
| e02 | Sagging onto a leeward boat | trivial (R11) | PASS |
| e03 | Catching the boat ahead | trivial (R12) | PASS |
| e04 | Tack onto your lee bow | compound (11+15) | PASS |
| e05 | Late leeward roll at the mark | compound (11+15+17+18.2a+43.1b) | PASS |
| e06 | Outside leeward boat luffs mid-rounding | compound (11+16.1+18.2a+43.1b) | PASS |
| e07 | Rolled from astern on the run | compound (11+15+17) | PASS |
| e08 | Port boat tacks inside the zone | tricky (11+18.3) | PASS |
| e09 | Leeward luffs after overlap from astern | tricky (11+16.1+17) | PASS |
| e10 | Port layline, in the zone first | intuition-wrong (10+18.1(a)) | PASS |
| e11 | Opposite tacks at the leeward mark | intuition-wrong (10+18.2a+43.1b) | PASS |
| e12 | Doubtful late overlap | 12+18.2a+18.2e | PASS |
| e13 | Barging at the committee boat | 11+Section C preamble | PASS |
| e14 | Overlap breaks inside the zone | 12+18.2a | PASS |
| e15 | Starboard hunts the ducker | 10+16.1 | PASS |

The checker was additionally validated with **7 negative tests** (deliberately corrupted answers
and geometry) — all 7 were caught, so the 100% is not vacuous.

## 2. Verification disagreements (spec §2.1) — the headline number

**Path A (authoring) and Path B (independent re-derivation) disagreed twice during the build.
Both were Path A authoring errors, both fixed; the shipped library has 41/41 verified, 0 disputed,
0 excluded.**

1. **qa06 (Q&A cross-check, P tacks outside zone then glides in):** I declared the boats
   "overlapped" in the facts, but the geometry I drew had S clear astern. The engine derived
   Rule 12 where I'd written Rule 11. Fixed the facts to match the geometry (the teaching point —
   P entitled to mark-room under 18.2(a) — was unaffected).
2. **s17 (starboard boat holds while port crosses):** I authored Rule 16.1 into the applicable
   rules, but the correct action is to *hold course* — 16.1 only engages if the right-of-way boat
   alters. Removed from the rules list; kept in the prose as the conditional consequence.

Both incidents are the two-path system working as designed: geometry and rule text overruled
the author.

## 3. Final situation count

**41 shipped situations** (15 eval + 26 library), all verified. Additionally **13 Q&A cross-check
scenarios** (not shipped as drills) encoded directly from the Dellenbaugh/Perry webinar Q&A with
their answers as expected output: **13/13 agree** with the engine.

By rule (situations citing each; most cite several):
R10 ×9 · R11 ×24 · R12 ×4 · R13 ×2 · R14 ×3 · R15 ×3 · R16.1 ×5 · R17 ×5 ·
**R18 family ×20** (18.1(a) ×1, 18.2(a) ×14, 18.2(b) ×1, 18.2(c) ×1, 18.2(e) ×1, 18.3 ×1, 18.4 ×1,
Section C preamble ×1) · R19 ×1(+1 QA) · R20 ×2 · R21 ×2 · R31 ×1 · R43.1(b) ×10.

By difficulty: 6 basic / 20 club / 15 expert.

Rule 18 coverage hits every item the spec called out: zone-entry timing (e05, e12, e14, e41),
overlap before vs. after zone entry (e05, s41), overlap broken inside the zone (e14),
inside entitled vs. inside with right of way (s28 vs. s29), 18 off on opposite-tack beats
(e10), 18 + 15 + 16 interactions (e05, e06), windward vs. leeward mark failure modes
(s34, e08 vs. e11, s26), plus 18.2(c), 18.3, 18.4, gates, and the "no rule requires taking
mark-room" trap (s33).

## 4. Things a human who knows the rules should double-check

Flagging honestly, per spec §9.4. Sources available to me were the Dellenbaugh/Perry Q&A and the
Plaatje poster (the rulebook PDFs were excluded at your instruction), plus trained knowledge of
the 2025–2028 rules. The Q&A quotes rule text extensively, but I could not do a word-by-word check
against the official text for:

1. **Rule 18.3 exact conditions (e08):** I state the tacker "must not cause you to sail above
   close-hauled and must give mark-room if you're overlapped inside her," applying it to a boat
   that has been on starboard since entering the zone, tacker passing head to wind port→starboard
   inside the zone. This matches the Q&A discussion but 18.3's precise 2025 wording (e.g., "then
   fetching the mark") should be verified.
2. **Rule 43.1(b) scope (used in 10 situations):** I describe exoneration for a boat "sailing
   within the mark-room to which she is entitled" breaking Section A rules / 15 / 16 / 31. The
   exact list of exonerated rules should be confirmed against the printed 43.1(b).
3. **Rule 21 numbering (s23, s24):** The 2025 renumbering (old 22 → new 21: returning to start,
   penalty turns, moving astern) is confirmed by the Q&A ("see rule 21.3") and the poster (21.1,
   21.3 callouts), but worth a glance. Note the spec's own §3 cited "21 — Exoneration," which is
   the 2021–2024 numbering; exoneration is now Rule 43.1 and the app teaches it as such.
4. **s37 (no door-shutting at another racer's stern near the start):** rests on US App. 123-style
   "at an obstruction" reasoning via the Q&A's Slide 17 discussion. The teaching matches the Q&A
   answer, but it's the subtlest start-area item in the library.
5. **s20/s36 (rule 17 across the starting signal):** that a rule-17-bound leeward boat may luff
   freely before the gun but must drop to proper course at the signal is straight from the Q&A;
   the phrase "unless in doing so she promptly sails astern" edge case is not drilled.

## 5. What I'd build in v2

- **Q&A/Case ingestion at scale** (spec's own flagged v2): the two-path verification engine is
  built and validated — pointing it at the World Sailing Case Book / more webinar Q&As multiplies
  the library safely now that the checker exists.
- **Multi-boat scenarios** (3 boats: the classic leeward-mark stack, "the rules see two boats"
  pairwise reasoning as its own drill type).
- **Spaced repetition** proper (per-situation intervals, not just weak-rule weighting).
- **Post-answer "why" taps**: tap a rule chip to read the digest entry for that rule.
- **Protest-room mode**: same diagrams, but you're the umpire — assign the penalty.

## 6. How things were verified (spec §7)

- Eval 15/15; negative tests 7/7 caught; library 41/41 verified; Q&A cross-checks 13/13.
- Played 18 situations end-to-end twice (36 rounds) in Chrome via Playwright at iPhone size
  (390×844): scoring, per-rule stats, weak-rule weighting, persistence across reload, stats
  screen, reset — all pass; zero page errors; zero horizontal overflow at any step.
- Deliberately answered wrong: correct option highlighted, both verdict lines, umpire ruling
  and cost shown. All 41 explanations are ≤4 sentences (statically checked).
- Diagrams eyeballed at phone width and desktop: boats/tack colors distinguishable, dashed
  zone ring + "3 lengths" label, abeam line, wind arrow always visible, YOU badge, auto-fit
  framing. Tap targets ≥52px.
- Service worker active on localhost; offline caching + installability wired (manifest, icons).

## Known cosmetic limits

- Red/green tack coding is spec-mandated but red-green CVD-unfriendly; geometry, wind arrow, and
  boat labels carry the same information redundantly. A CVD palette toggle would be a small v2 item.
- The 2-second "approach" is a slide-in along each boat's trail, not a full kinematic replay.
