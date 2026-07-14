# RRS Situation Trainer

Drill the Racing Rules of Sailing (2025–2028) through decision moments — a phone-first PWA.

**Live app:** https://jny8630.github.io/racing-rules-trainer/

You see a top-down race-course situation, pick what you'd do, call who has right of way,
and a terse umpire tells you what the rules actually said and what a mistake would have cost.
Weak rules come back more often. Works offline once loaded; installable to your home screen.

Every shipped situation is machine-verified: authored answers are re-derived independently
from geometry and rule logic (`tools/engine.py`), checked against a golden eval set (15/15)
and against Dave Dellenbaugh / Dave Perry's 2025-2028 rules webinar Q&A (13/13).
See `REPORT.md` for eval results, coverage, and open questions.
