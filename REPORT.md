# RRS Situation Trainer — Build Report

DRAFT — requires human review (specifically §4: have a rules-qualified sailor spot-check).

## 1. Eval set results (spec §2.2)

Golden eval set: **15 situations, 15/15 pass (100%)** — required before library work proceeded.
Re-run after the v2 update (rulebook verification, zone-entry ghosts, new situations): still 15/15.

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

**Four authoring errors have been caught and fixed to date — two by the engine during the
build, one by word-by-word rulebook verification, one by a user. The shipped library has
44/44 verified, 0 disputed, 0 excluded.**

1. **qa06 (Q&A cross-check, P tacks outside zone then glides in):** I declared the boats
   "overlapped" in the facts, but the geometry I drew had S clear astern. The engine derived
   Rule 12 where I'd written Rule 11. Fixed the facts to match the geometry (the teaching point —
   P entitled to mark-room under 18.2(a) — was unaffected).
2. **s17 (starboard boat holds while port crosses):** I authored Rule 16.1 into the applicable
   rules, but the correct action is to *hold course* — 16.1 only engages if the right-of-way boat
   alters. Removed from the rules list; kept in the prose as the conditional consequence.

3. **e15 (starboard bears away at a ducking port boat):** originally taught "hunting is
   legal" citing only Rule 16.1. Word-by-word verification against the 2025–2028 rulebook
   showed Rule 16.2 forbids a starboard boat bearing away, on a beat, at a port boat that is
   keeping clear by passing to leeward, if the port boat must change course immediately.
   Corrected to cite 10 + 16.1 + 16.2 with a rewritten explanation.
4. **s37/s38/s39 (obstruction scenarios):** a user playing the app caught diagrams whose
   boats headed AWAY from the obstruction the text says they approach. Geometry fixed, and an
   automated obstruction-direction check was added to the engine (the obstruction must lie in
   the forward half-plane of both boats) so this class of text-vs-image mismatch can't recur.

All four incidents are the verification system working as designed: geometry, rule text, and
users overruled the author — and each fix hardened the checker.

## 3. Final situation count

**44 shipped situations** (15 eval + 29 library), all verified. Additionally **13 Q&A cross-check
scenarios** (not shipped as drills) encoded directly from the Dellenbaugh/Perry webinar Q&A with
their answers as expected output: **13/13 agree** with the engine.

By rule (situations citing each; most cite several):
R10 ×10 · R11 ×26 · R12 ×4 · R13 ×2 · R14 ×3 · R15 ×4 · R16.1 ×5 · R16.2 ×1 · R17 ×5 ·
**R18 family ×23** (18.1(a) ×2, 18.2(a) ×15, 18.2(b) ×1, 18.2(c) ×1, 18.2(e) ×1, 18.3 ×1, 18.4 ×1,
Section C preamble ×1) · R19 ×1(+1 QA) · R20 ×2 · R21 ×2 · R31 ×1 · R43.1(b) ×10.

By difficulty: 6 basic / 21 club / 17 expert.

New in v2: the offset mark as its own zone (18.1(b) + a fresh 18.2(a) snapshot), the 2025
approaching-vs-leaving exception (18.1(a)(3)), gybe-gains-rights (no rule-13 analogue for
gybing; rule 15 governs), and rule 16.2. Every situation that turns on the zone-entry snapshot
now also draws ghost positions "at zone entry," machine-validated against the declared facts.

Rule 18 coverage hits every item the spec called out: zone-entry timing (e05, e12, e14, e41),
overlap before vs. after zone entry (e05, s41), overlap broken inside the zone (e14),
inside entitled vs. inside with right of way (s28 vs. s29), 18 off on opposite-tack beats
(e10), 18 + 15 + 16 interactions (e05, e06), windward vs. leeward mark failure modes
(s34, e08 vs. e11, s26), plus 18.2(c), 18.3, 18.4, gates, and the "no rule requires taking
mark-room" trap (s33).

## 4. Resolved by rulebook verification (was: open items)

All five items flagged in v1 have been checked word-by-word against
`2025-2028-RRS-with-Changes-and-Corrections.docx` (provided 2026-07-15):

1. **Rule 18.3 — RESOLVED, with a correction:** the exact text conditions on the OTHER boat
   "fetching" the mark (not the tacker, as v1's digest paraphrase implied), applies "in the zone
   of a mark to be left to port," and switches rule 18.2 off between the pair. e08's shipped
   answer and explanation were already consistent; the digest paraphrase was corrected.
2. **Rule 43.1(b) — RESOLVED:** exact exonerated list is "a rule of Section A of Part 2,
   rule 15, 16, or 31," as a consequence of an incident with a boat required to give the room —
   matches all 10 usages.
3. **Rule 21 numbering — RESOLVED:** 21.1 (returning), 21.2 (taking a penalty), 21.3 (moving
   astern by backing a sail) confirmed, plus the Section D preamble ("When rule 21 or 22 applies
   between two boats, Section A rules do not"), which is exactly how the engine models it.
4. **s37 — RESOLVED:** grounded in rule 19.1(b) ("the obstruction is another boat overlapped
   with each of them") and 19.2(b); the Section C carve-out applies only at starting marks.
5. **Rule 17 across the start — RESOLVED:** rule 17's text confirmed, including that the 2025
   edition deleted the old exception for overlaps begun while the windward boat was tacking;
   the no-proper-course-before-the-signal definition is verbatim.

The word-by-word pass also surfaced the Rule 16.2 correction now applied to e15 (see §2).

**Not yet reviewed by other sailors or a racing-rules expert — that review is still
recommended.**

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

- Eval 15/15; negative tests 7/7 caught; library 44/44 verified; Q&A cross-checks 13/13.
- v2 additions: every zone-entry situation renders ghost boats at their "at zone entry"
  positions, and the engine validates those ghost positions against the declared snapshot
  (overlap state at entry; the giver clear astern and fully outside the zone where the facts
  say so). A new engine check requires any obstruction to lie ahead of both boats. e10's
  starboard boat was repositioned clearly outside the zone to match its story.
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
