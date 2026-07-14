window.SITUATIONS = [
 {
  "id": "e01-port-starboard",
  "eval": true,
  "title": "Port meets starboard on the beat",
  "zone_tag": "beat",
  "difficulty": 1,
  "wind_from": 0,
  "units_per_length": 7,
  "mark": null,
  "boats": [
   {
    "id": "you",
    "x": 35,
    "y": 80,
    "heading": 45,
    "tack": "port"
   },
   {
    "id": "A",
    "x": 65,
    "y": 74,
    "heading": 315,
    "tack": "starboard"
   }
  ],
  "facts": {
   "pairs": [
    [
     "you",
     "A"
    ]
   ]
  },
  "q1": {
   "prompt": "You're on port, wanting the right side. A converges on starboard \u2014 the cross is 50/50. What do you do?",
   "options": [
    {
     "id": "hold",
     "label": "Hold course and cross her"
    },
    {
     "id": "duck",
     "label": "Bear away and duck her stern"
    },
    {
     "id": "tack",
     "label": "Tack onto starboard now"
    },
    {
     "id": "hail",
     "label": "Hail for room and keep going"
    }
   ],
   "correct": "duck"
  },
  "q2": {
   "type": "row",
   "prompt": "Who has right of way?",
   "correct": "A"
  },
  "answer": {
   "row": "A",
   "mark_room": null,
   "rules": [
    "10",
    "14"
   ],
   "explanation": "Rule 10: port keeps clear of starboard, and a 50/50 cross is no cross. Duck her stern and keep sailing toward the side you want \u2014 a panic tack parks you in her bad air. There is no room to hail for in open water.",
   "cost": "Force A to alter course and you owe a Two-Turns Penalty (Rule 44.2); contact adds Rule 14."
  },
  "verification": {
   "status": "verified"
  }
 },
 {
  "id": "e02-windward-keep-clear",
  "eval": true,
  "title": "Sagging down onto a leeward boat",
  "zone_tag": "beat",
  "difficulty": 1,
  "wind_from": 0,
  "units_per_length": 7,
  "mark": null,
  "boats": [
   {
    "id": "you",
    "x": 45,
    "y": 70,
    "heading": 45,
    "tack": "port"
   },
   {
    "id": "A",
    "x": 52,
    "y": 77,
    "heading": 45,
    "tack": "port"
   }
  ],
  "facts": {
   "pairs": [
    [
     "you",
     "A"
    ]
   ]
  },
  "q1": {
   "prompt": "Same tack, overlapped: A is on your leeward bow, holding a high line. You're slowly sagging down on her. What do you do?",
   "options": [
    {
     "id": "climb",
     "label": "Trim on and climb clear to windward"
    },
    {
     "id": "hold",
     "label": "Hold your lane \u2014 she'll live"
    },
    {
     "id": "bear",
     "label": "Bear away across her stern for speed"
    },
    {
     "id": "hail",
     "label": "Hail her to keep clear"
    }
   ],
   "correct": "climb"
  },
  "q2": {
   "type": "row",
   "prompt": "Who has right of way?",
   "correct": "A"
  },
  "answer": {
   "row": "A",
   "mark_room": null,
   "rules": [
    "11"
   ],
   "explanation": "Rule 11: windward keeps clear of leeward, and you are the windward boat. Sag into her space and you're in the wrong the moment she has to respond. Climb off her line or tack out \u2014 she owes you nothing here.",
   "cost": "If A must luff or bear away to avoid you: Two-Turns Penalty on you."
  },
  "verification": {
   "status": "verified"
  }
 },
 {
  "id": "e03-clear-astern",
  "eval": true,
  "title": "Catching the boat ahead on the run",
  "zone_tag": "run",
  "difficulty": 1,
  "wind_from": 0,
  "units_per_length": 7,
  "mark": null,
  "boats": [
   {
    "id": "you",
    "x": 48,
    "y": 66,
    "heading": 170,
    "tack": "port"
   },
   {
    "id": "A",
    "x": 50,
    "y": 80,
    "heading": 170,
    "tack": "port"
   }
  ],
  "facts": {
   "pairs": [
    [
     "you",
     "A"
    ]
   ]
  },
  "q1": {
   "prompt": "Downwind, you're faster and closing on A from clear astern. What do you do?",
   "options": [
    {
     "id": "side",
     "label": "Pick a side and pass keeping clear"
    },
    {
     "id": "bow",
     "label": "Sail straight over her transom line"
    },
    {
     "id": "hail",
     "label": "Hail her to move over"
    },
    {
     "id": "luff",
     "label": "Come in close to leeward and luff her"
    }
   ],
   "correct": "side"
  },
  "q2": {
   "type": "row",
   "prompt": "Who has right of way?",
   "correct": "A"
  },
  "answer": {
   "row": "A",
   "mark_room": null,
   "rules": [
    "12"
   ],
   "explanation": "Rule 12: clear astern keeps clear of clear ahead \u2014 being faster earns you nothing. Set up a passing lane to one side; if you go leeward, remember the overlap brings new limits (Rules 15 and 17). She has no obligation to make space for you.",
   "cost": "Bump her transom or force a course change: Two-Turns Penalty on you."
  },
  "verification": {
   "status": "verified"
  }
 },
 {
  "id": "e04-tack-complete-lee-bow",
  "eval": true,
  "title": "She tacks onto your lee bow",
  "zone_tag": "beat",
  "difficulty": 2,
  "wind_from": 0,
  "units_per_length": 7,
  "mark": null,
  "boats": [
   {
    "id": "you",
    "x": 60,
    "y": 50,
    "heading": 315,
    "tack": "starboard"
   },
   {
    "id": "A",
    "x": 55,
    "y": 49,
    "heading": 315,
    "tack": "starboard",
    "trail": [
     [
      47,
      55
     ],
     [
      51,
      54
     ]
    ]
   }
  ],
  "facts": {
   "pairs": [
    [
     "you",
     "A"
    ]
   ],
   "just_acquired_row": {
    "boat": "A",
    "cause": "own_action"
   }
  },
  "q1": {
   "prompt": "A crossed you on port and tacked right on your lee bow. She's just reached close-hauled. What do you do?",
   "options": [
    {
     "id": "hold",
     "label": "Hold course \u2014 she must give you room at first"
    },
    {
     "id": "crash",
     "label": "Bear away hard at her transom in protest"
    },
    {
     "id": "instant",
     "label": "Luff instantly to head to wind"
    },
    {
     "id": "quit",
     "label": "Tack away immediately \u2014 you have no rights"
    }
   ],
   "correct": "hold"
  },
  "q2": {
   "type": "row",
   "prompt": "Who has right of way?",
   "correct": "A"
  },
  "answer": {
   "row": "A",
   "mark_room": null,
   "rules": [
    "11",
    "15"
   ],
   "explanation": "While tacking she had to keep clear of you; the moment she reached close-hauled she became the leeward boat with right of way (Rule 11). But Rule 15 says a boat that takes right of way by her own action must initially give you room to keep clear. So hold briefly, then respond \u2014 you're not required to anticipate her.",
   "cost": "If she tacked so close you couldn't respond, she owes the penalty; if you had room and sat on her, you do."
  },
  "verification": {
   "status": "verified"
  }
 },
 {
  "id": "e05-late-leeward-roll-at-mark",
  "eval": true,
  "title": "She rolls in to leeward at the leeward mark",
  "zone_tag": "leeward-mark",
  "difficulty": 3,
  "wind_from": 0,
  "units_per_length": 7,
  "mark": {
   "x": 50,
   "y": 103,
   "type": "leeward",
   "rounding": "port",
   "zone_radius": 21
  },
  "boats": [
   {
    "id": "you",
    "x": 47,
    "y": 86,
    "heading": 170,
    "tack": "port"
   },
   {
    "id": "A",
    "x": 44,
    "y": 81,
    "heading": 170,
    "tack": "port",
    "trail": [
     [
      42,
      68
     ],
     [
      43,
      74
     ]
    ]
   }
  ],
  "facts": {
   "pairs": [
    [
     "you",
     "A"
    ]
   ],
   "zone_entry": {
    "first": "you",
    "overlapped": false
   },
   "overlap_from_clear_astern": {
    "boat": "A",
    "other": "you",
    "within_two_lengths": true
   },
   "just_acquired_row": {
    "boat": "A",
    "cause": "own_action"
   }
  },
  "q1": {
   "prompt": "You reached the zone clear ahead. Now A has rolled in from astern, overlapped on your outside (leeward) side. What do you do?",
   "options": [
    {
     "id": "round",
     "label": "Keep clear of her, but take your room and round"
    },
    {
     "id": "give",
     "label": "Give her the inside \u2014 she's leeward now"
    },
    {
     "id": "luff",
     "label": "Luff her away from the mark"
    },
    {
     "id": "wide",
     "label": "Go wide and let her through"
    }
   ],
   "correct": "round"
  },
  "q2": {
   "type": "row",
   "prompt": "Who has right of way?",
   "correct": "A"
  },
  "answer": {
   "row": "A",
   "mark_room": "you",
   "rules": [
    "11",
    "15",
    "17",
    "18.2a",
    "43.1b"
   ],
   "explanation": "You were clear ahead at the zone, so A owes you mark-room for the whole rounding (Rule 18.2(a)) \u2014 her late overlap changes nothing. She is now leeward with right of way (Rule 11), but Rule 15 gives you room initially and Rule 17 caps her at her proper course. Take your seamanlike rounding; while sailing within your mark-room you're exonerated if she claims you didn't keep clear (Rule 43.1(b)).",
   "cost": "If A squeezes you at the mark she breaks 18.2(a): Two-Turns Penalty on her."
  },
  "verification": {
   "status": "verified"
  }
 },
 {
  "id": "e06-outside-leeward-luffs",
  "eval": true,
  "title": "Outside boat heats it up mid-rounding",
  "zone_tag": "leeward-mark",
  "difficulty": 2,
  "wind_from": 0,
  "units_per_length": 7,
  "mark": {
   "x": 56,
   "y": 103,
   "type": "leeward",
   "rounding": "port",
   "zone_radius": 21
  },
  "boats": [
   {
    "id": "you",
    "x": 50,
    "y": 86,
    "heading": 170,
    "tack": "port"
   },
   {
    "id": "A",
    "x": 43,
    "y": 83,
    "heading": 170,
    "tack": "port"
   }
  ],
  "facts": {
   "pairs": [
    [
     "you",
     "A"
    ]
   ],
   "zone_entry": {
    "first": "A",
    "overlapped": true,
    "inside": "you"
   },
   "row_changing_course": {
    "boat": "A"
   }
  },
  "q1": {
   "prompt": "Overlapped at the zone, you inside, A outside to leeward. Mid-approach she starts luffing toward you. What do you do?",
   "options": [
    {
     "id": "respond",
     "label": "Respond to keep clear \u2014 but hold your mark-room"
    },
    {
     "id": "ignore",
     "label": "Ignore her \u2014 inside boat can't be luffed"
    },
    {
     "id": "bail",
     "label": "Bail out behind her stern"
    },
    {
     "id": "hitback",
     "label": "Bear down on her to shut it down"
    }
   ],
   "correct": "respond"
  },
  "q2": {
   "type": "row",
   "prompt": "Who has right of way?",
   "correct": "A"
  },
  "answer": {
   "row": "A",
   "mark_room": "you",
   "rules": [
    "11",
    "16.1",
    "18.2a",
    "43.1b"
   ],
   "explanation": "A is leeward with right of way (Rule 11), but you were overlapped inside at the zone, so she must give you mark-room (Rule 18.2(a)). When she changes course she must also give you room to keep clear (Rule 16.1). Respond to her luff \u2014 but she cannot luff you away from the space you need to round; inside that space you're protected (Rule 43.1(b)).",
   "cost": "If her luff denies you a seamanlike rounding, she breaks 18.2(a)/16.1 and owes the turns \u2014 not you."
  },
  "verification": {
   "status": "verified"
  }
 },
 {
  "id": "e07-roll-under-run",
  "eval": true,
  "title": "Rolled from astern on the run",
  "zone_tag": "run",
  "difficulty": 2,
  "wind_from": 0,
  "units_per_length": 7,
  "mark": null,
  "boats": [
   {
    "id": "you",
    "x": 47,
    "y": 86,
    "heading": 170,
    "tack": "port"
   },
   {
    "id": "A",
    "x": 44,
    "y": 81,
    "heading": 170,
    "tack": "port",
    "trail": [
     [
      42,
      68
     ],
     [
      43,
      74
     ]
    ]
   }
  ],
  "facts": {
   "pairs": [
    [
     "you",
     "A"
    ]
   ],
   "overlap_from_clear_astern": {
    "boat": "A",
    "other": "you",
    "within_two_lengths": true
   },
   "just_acquired_row": {
    "boat": "A",
    "cause": "own_action"
   }
  },
  "q1": {
   "prompt": "Mid-run, A surfs in from astern and gets an overlap a boat-width to leeward. What do you do?",
   "options": [
    {
     "id": "clear",
     "label": "Keep clear \u2014 she can't luff above proper course"
    },
    {
     "id": "luffdef",
     "label": "Luff hard to defend \u2014 you kept right of way"
    },
    {
     "id": "nothing",
     "label": "Nothing \u2014 overtaking boat keeps clear"
    },
    {
     "id": "gybe",
     "label": "Gybe away immediately, forced out"
    }
   ],
   "correct": "clear"
  },
  "q2": {
   "type": "row",
   "prompt": "Who has right of way?",
   "correct": "A"
  },
  "answer": {
   "row": "A",
   "mark_room": null,
   "rules": [
    "11",
    "15",
    "17"
   ],
   "explanation": "There's no 'overtaking boat keeps clear' rule \u2014 the moment A overlapped to leeward she took right of way (Rule 11). She must initially give you room (Rule 15), and because she came from clear astern within two lengths, Rule 17 pins her to her proper course \u2014 no luffing you. Keep clear, keep your air, and watch that she doesn't sail above it.",
   "cost": "Sit on her and force a response: turns on you. If she luffs above proper course: turns on her (Rule 17)."
  },
  "verification": {
   "status": "verified"
  }
 },
 {
  "id": "e08-tack-in-zone",
  "eval": true,
  "title": "Port boat tacks inside the zone",
  "zone_tag": "windward-mark",
  "difficulty": 3,
  "wind_from": 0,
  "units_per_length": 7,
  "mark": {
   "x": 50,
   "y": 25,
   "type": "windward",
   "rounding": "port",
   "zone_radius": 21
  },
  "boats": [
   {
    "id": "you",
    "x": 65,
    "y": 40,
    "heading": 315,
    "tack": "starboard"
   },
   {
    "id": "A",
    "x": 64,
    "y": 34,
    "heading": 315,
    "tack": "starboard",
    "trail": [
     [
      53,
      43
     ],
     [
      59,
      38
     ]
    ]
   }
  ],
  "facts": {
   "pairs": [
    [
     "you",
     "A"
    ]
   ],
   "passed_htw_in_zone": {
    "boat": "A",
    "from_tack": "port",
    "now_fetching": true,
    "other_stbd_since_entry": true
   },
   "just_acquired_row": {
    "boat": "you",
    "cause": "other_action"
   }
  },
  "q1": {
   "prompt": "You're fetching the mark on starboard, in the zone. A came in on port and tacked inside the zone, completing just ahead and to windward of you. What do you do?",
   "options": [
    {
     "id": "hold",
     "label": "Hold your course \u2014 she owes YOU room here"
    },
    {
     "id": "duckher",
     "label": "Bear away below her \u2014 she got there first"
    },
    {
     "id": "shoot",
     "label": "Shoot head to wind to avoid her"
    },
    {
     "id": "tackout",
     "label": "Tack away and come back"
    }
   ],
   "correct": "hold"
  },
  "q2": {
   "type": "row",
   "prompt": "Who has right of way?",
   "correct": "you"
  },
  "answer": {
   "row": "you",
   "mark_room": "you",
   "rules": [
    "11",
    "18.3"
   ],
   "explanation": "She passed head to wind inside the zone coming from port, so Rule 18.3 applies: she must not cause you to sail above close-hauled, and because you're overlapped inside her, she must give you mark-room. You're also leeward, so you hold right of way (Rule 11). 'I got to the zone first' is worth nothing here \u2014 hold your lane and round inside.",
   "cost": "If you have to luff above close-hauled or get squeezed at the mark, A owes a Two-Turns Penalty."
  },
  "verification": {
   "status": "verified"
  }
 },
 {
  "id": "e09-luff-above-proper",
  "eval": true,
  "title": "Leeward boat luffs \u2014 but she came from astern",
  "zone_tag": "run",
  "difficulty": 3,
  "wind_from": 0,
  "units_per_length": 7,
  "mark": null,
  "boats": [
   {
    "id": "you",
    "x": 47,
    "y": 86,
    "heading": 170,
    "tack": "port"
   },
   {
    "id": "A",
    "x": 44,
    "y": 81,
    "heading": 160,
    "tack": "port",
    "trail": [
     [
      41,
      68
     ],
     [
      42,
      75
     ]
    ]
   }
  ],
  "facts": {
   "pairs": [
    [
     "you",
     "A"
    ]
   ],
   "overlap_from_clear_astern": {
    "boat": "A",
    "other": "you",
    "within_two_lengths": true
   },
   "row_changing_course": {
    "boat": "A"
   }
  },
  "q1": {
   "prompt": "A overlapped you to leeward from astern earlier; now she's luffing, carrying you above the course to the mark. What do you do?",
   "options": [
    {
     "id": "clearprotest",
     "label": "Keep clear \u2014 and protest the luff"
    },
    {
     "id": "holdrights",
     "label": "Hold your course \u2014 her luff is illegal"
    },
    {
     "id": "bearinto",
     "label": "Bear away into her to stop it"
    },
    {
     "id": "follow",
     "label": "Follow her up as far as she likes, no foul"
    }
   ],
   "correct": "clearprotest"
  },
  "q2": {
   "type": "row",
   "prompt": "Who has right of way?",
   "correct": "A"
  },
  "answer": {
   "row": "A",
   "mark_room": null,
   "rules": [
    "11",
    "16.1",
    "17"
   ],
   "explanation": "A is leeward, so she has right of way (Rule 11) and you must keep clear even if her luff is illegal. But she overlapped from clear astern within two lengths, so Rule 17 forbids her sailing above her proper course \u2014 this luff breaks it, and while changing course she must give you room to respond (Rule 16.1). Keep clear first, protest after; ignoring her puts you in the wrong too.",
   "cost": "Hold and make contact: you both get tossed. Keep clear and protest: turns on her."
  },
  "verification": {
   "status": "verified"
  }
 },
 {
  "id": "e10-port-layline-zone",
  "eval": true,
  "title": "Port layline: you're in the zone first",
  "zone_tag": "windward-mark",
  "difficulty": 3,
  "wind_from": 0,
  "units_per_length": 7,
  "mark": {
   "x": 50,
   "y": 25,
   "type": "windward",
   "rounding": "port",
   "zone_radius": 21
  },
  "boats": [
   {
    "id": "you",
    "x": 38,
    "y": 34,
    "heading": 45,
    "tack": "port"
   },
   {
    "id": "A",
    "x": 62,
    "y": 32,
    "heading": 315,
    "tack": "starboard"
   }
  ],
  "facts": {
   "pairs": [
    [
     "you",
     "A"
    ]
   ]
  },
  "q1": {
   "prompt": "You're on the port layline and entered the zone well before A, who's approaching on starboard. What do you do?",
   "options": [
    {
     "id": "duck",
     "label": "Duck her or tack \u2014 you have nothing"
    },
    {
     "id": "claim",
     "label": "Claim mark-room \u2014 you reached the zone first"
    },
    {
     "id": "hail",
     "label": "Hail 'room' and cross her bow"
    },
    {
     "id": "squeeze",
     "label": "Pinch up and squeeze around ahead of her"
    }
   ],
   "correct": "duck"
  },
  "q2": {
   "type": "row",
   "prompt": "Who has right of way?",
   "correct": "A"
  },
  "answer": {
   "row": "A",
   "mark_room": null,
   "rules": [
    "10",
    "18.1a"
   ],
   "explanation": "Rule 18 does not apply between boats on opposite tacks on a beat (Rule 18.1(a)), so reaching the zone first earns you nothing. This is a pure Rule 10 situation: port keeps clear of starboard, in the zone or not. Duck her stern or tack short \u2014 there is no room to claim.",
   "cost": "Force her to alter: Two-Turns Penalty, and at a crowded mark that usually means clearing out entirely."
  },
  "verification": {
   "status": "verified"
  }
 },
 {
  "id": "e11-opp-tack-leeward-mark",
  "eval": true,
  "title": "Opposite tacks at the leeward mark",
  "zone_tag": "leeward-mark",
  "difficulty": 3,
  "wind_from": 0,
  "units_per_length": 7,
  "mark": {
   "x": 50,
   "y": 103,
   "type": "leeward",
   "rounding": "port",
   "zone_radius": 21
  },
  "boats": [
   {
    "id": "you",
    "x": 53,
    "y": 86,
    "heading": 170,
    "tack": "port"
   },
   {
    "id": "A",
    "x": 44,
    "y": 84,
    "heading": 190,
    "tack": "starboard"
   }
  ],
  "facts": {
   "pairs": [
    [
     "you",
     "A"
    ]
   ],
   "zone_entry": {
    "first": "you",
    "overlapped": true,
    "inside": "you"
   }
  },
  "q1": {
   "prompt": "Running to the leeward mark: you're inside on port, A outside on starboard, overlapped at the zone. What do you do?",
   "options": [
    {
     "id": "roomclear",
     "label": "Take your mark-room \u2014 but don't take an inch more"
    },
    {
     "id": "fullrights",
     "label": "Round however you like \u2014 inside boat rules"
    },
    {
     "id": "gybeaway",
     "label": "Gybe away \u2014 she's starboard, you're toast"
    },
    {
     "id": "protest",
     "label": "Hail protest \u2014 she must gybe for you"
    }
   ],
   "correct": "roomclear"
  },
  "q2": {
   "type": "row",
   "prompt": "Who has right of way?",
   "correct": "A"
  },
  "answer": {
   "row": "A",
   "mark_room": "you",
   "rules": [
    "10",
    "18.2a",
    "43.1b"
   ],
   "explanation": "Downwind, boats on opposite tacks can be overlapped, and rule 18 applies at a leeward mark: overlapped at the zone means A must give you mark-room (Rule 18.2(a)) even though she holds right of way on starboard (Rule 10). Sailing within that room, you're exonerated for not keeping clear of her (Rule 43.1(b)). But the protection covers a seamanlike rounding only \u2014 swing wide and you're just a port-tack boat in the wrong.",
   "cost": "Take more room than the rounding needs and you owe the turns, not her."
  },
  "verification": {
   "status": "verified"
  }
 },
 {
  "id": "e12-doubt-late-overlap",
  "eval": true,
  "title": "\"I had the overlap!\" \u2014 says the boat astern",
  "zone_tag": "leeward-mark",
  "difficulty": 2,
  "wind_from": 0,
  "units_per_length": 7,
  "mark": {
   "x": 54,
   "y": 103,
   "type": "leeward",
   "rounding": "port",
   "zone_radius": 21
  },
  "boats": [
   {
    "id": "you",
    "x": 47,
    "y": 86,
    "heading": 170,
    "tack": "port"
   },
   {
    "id": "A",
    "x": 45,
    "y": 77,
    "heading": 170,
    "tack": "port"
   }
  ],
  "facts": {
   "pairs": [
    [
     "you",
     "A"
    ]
   ],
   "zone_entry": {
    "first": "you",
    "overlapped": false,
    "doubt": "gained"
   }
  },
  "q1": {
   "prompt": "A, close astern, hails 'overlap!' as you reach the zone \u2014 you're sure she got it a beat too late, but it's close. What do you do?",
   "options": [
    {
     "id": "round",
     "label": "Round normally \u2014 doubt goes against her claim"
    },
    {
     "id": "cave",
     "label": "Give her the inside to be safe"
    },
    {
     "id": "slam",
     "label": "Slam the door with a hard turn across her bow"
    },
    {
     "id": "stop",
     "label": "Slow down and re-establish clear ahead"
    }
   ],
   "correct": "round"
  },
  "q2": {
   "type": "row",
   "prompt": "Who has right of way?",
   "correct": "you"
  },
  "answer": {
   "row": "you",
   "mark_room": "you",
   "rules": [
    "12",
    "18.2a",
    "18.2e"
   ],
   "explanation": "What counts is the state when the first boat reaches the zone (Rule 18.2(a)) \u2014 and when there's reasonable doubt an overlap was gained in time, the rules presume it was not (Rule 18.2(e)). You were clear ahead: she keeps clear (Rule 12) and owes you mark-room. Round your normal line; no theatrics needed.",
   "cost": "If she forces her bow in anyway, the penalty is hers \u2014 but avoid contact if she does (Rule 14)."
  },
  "verification": {
   "status": "verified"
  }
 },
 {
  "id": "e13-barging",
  "eval": true,
  "title": "The gap at the committee boat",
  "zone_tag": "start",
  "difficulty": 2,
  "wind_from": 0,
  "units_per_length": 7,
  "mark": {
   "x": 70,
   "y": 60,
   "type": "start-boat",
   "rounding": "port",
   "zone_radius": 0
  },
  "boats": [
   {
    "id": "you",
    "x": 66,
    "y": 68,
    "heading": 315,
    "tack": "starboard"
   },
   {
    "id": "A",
    "x": 60,
    "y": 70,
    "heading": 315,
    "tack": "starboard"
   }
  ],
  "facts": {
   "pairs": [
    [
     "you",
     "A"
    ]
   ],
   "starting": {
    "approaching_to_start": true
   }
  },
  "q1": {
   "prompt": "Final approach, 20 seconds to go. There's a gap between A (leeward of you) and the committee boat \u2014 you could just squeeze in. What do you do?",
   "options": [
    {
     "id": "bail",
     "label": "Bail out \u2014 slow down and drop in astern of A"
    },
    {
     "id": "squeeze",
     "label": "Send it \u2014 she has to give you room at the mark"
    },
    {
     "id": "hailroom",
     "label": "Hail for mark-room at the committee boat"
    },
    {
     "id": "push",
     "label": "Push in and let her protest"
    }
   ],
   "correct": "bail"
  },
  "q2": {
   "type": "row",
   "prompt": "Who has right of way?",
   "correct": "A"
  },
  "answer": {
   "row": "A",
   "mark_room": null,
   "rules": [
    "11",
    "SecC"
   ],
   "explanation": "There is no mark-room at a starting mark surrounded by navigable water \u2014 the Section C preamble switches rules 18\u201320 off from the moment you're approaching the line to start. You're just a windward boat under Rule 11, and A may luff to close that gap (giving you room to respond). Barging is a donation: kill your speed and tuck in astern.",
   "cost": "If A has to bear away \u2014 or you hit her or the committee boat \u2014 the penalty (and the pile-up) is yours."
  },
  "verification": {
   "status": "verified"
  }
 },
 {
  "id": "e14-overlap-broken-inside",
  "eval": true,
  "title": "The overlap breaks inside the zone",
  "zone_tag": "leeward-mark",
  "difficulty": 2,
  "wind_from": 0,
  "units_per_length": 7,
  "mark": {
   "x": 54,
   "y": 103,
   "type": "leeward",
   "rounding": "port",
   "zone_radius": 21
  },
  "boats": [
   {
    "id": "you",
    "x": 52,
    "y": 88,
    "heading": 170,
    "tack": "port"
   },
   {
    "id": "A",
    "x": 48,
    "y": 79,
    "heading": 170,
    "tack": "port"
   }
  ],
  "facts": {
   "pairs": [
    [
     "you",
     "A"
    ]
   ],
   "zone_entry": {
    "first": "you",
    "overlapped": true,
    "inside": "you"
   },
   "overlap_later_broken": true
  },
  "q1": {
   "prompt": "You were overlapped inside A at the zone; since then you've surged clear ahead of her. Does your mark-room survive?",
   "options": [
    {
     "id": "keep",
     "label": "Yes \u2014 round on your entitlement, she still gives room"
    },
    {
     "id": "lost",
     "label": "No \u2014 the overlap broke, rights reset"
    },
    {
     "id": "renegotiate",
     "label": "Only if she agrees on the water"
    },
    {
     "id": "swap",
     "label": "She gets the room now \u2014 she's astern and inside"
    }
   ],
   "correct": "keep"
  },
  "q2": {
   "type": "row",
   "prompt": "Who has right of way?",
   "correct": "you"
  },
  "answer": {
   "row": "you",
   "mark_room": "you",
   "rules": [
    "12",
    "18.2a"
   ],
   "explanation": "The obligation is set when the first boat reaches the zone and holds 'thereafter' (Rule 18.2(a)) \u2014 a broken overlap inside the zone doesn't reset it. You'd only lose the entitlement by leaving the zone or passing head to wind (Rule 18.2(b)). You're also now clear ahead, so she keeps clear under Rule 12 as well.",
   "cost": "None for you \u2014 if she noses in at the mark now, the turns are hers."
  },
  "verification": {
   "status": "verified"
  }
 },
 {
  "id": "e15-starboard-hunts",
  "eval": true,
  "title": "You duck \u2014 she bears away at you",
  "zone_tag": "beat",
  "difficulty": 2,
  "wind_from": 0,
  "units_per_length": 7,
  "mark": null,
  "boats": [
   {
    "id": "you",
    "x": 40,
    "y": 70,
    "heading": 90,
    "tack": "port",
    "trail": [
     [
      30,
      78
     ],
     [
      35,
      74
     ]
    ]
   },
   {
    "id": "A",
    "x": 60,
    "y": 64,
    "heading": 280,
    "tack": "starboard",
    "trail": [
     [
      68,
      55
     ],
     [
      64,
      59
     ]
    ]
   }
  ],
  "facts": {
   "pairs": [
    [
     "you",
     "A"
    ]
   ],
   "row_changing_course": {
    "boat": "A"
   }
  },
  "q1": {
   "prompt": "You bear away to duck A's stern. She bears away too, keeping her bow on you. What do you do?",
   "options": [
    {
     "id": "deeper",
     "label": "Keep ducking as best you can \u2014 she owes you room"
    },
    {
     "id": "freeze",
     "label": "Freeze your course and make her commit"
    },
    {
     "id": "tacknow",
     "label": "Crash-tack out of there"
    },
    {
     "id": "aimup",
     "label": "Head back up across her bow"
    }
   ],
   "correct": "deeper"
  },
  "q2": {
   "type": "row",
   "prompt": "Who has right of way?",
   "correct": "A"
  },
  "answer": {
   "row": "A",
   "mark_room": null,
   "rules": [
    "10",
    "16.1"
   ],
   "explanation": "She keeps right of way (Rule 10), and hunting is legal \u2014 but the moment she changes course she must give you room to keep clear (Rule 16.1). Keep reacting and keep clear; if her turn leaves you no way out, the foul is hers. Freezing up or cutting back across her bow just hands her the protest.",
   "cost": "If you can't keep clear because of her turn: her penalty. If you stop reacting: yours."
  },
  "verification": {
   "status": "verified"
  }
 },
 {
  "id": "s16-ps-downwind",
  "title": "Port and starboard converge on the run",
  "zone_tag": "run",
  "difficulty": 1,
  "wind_from": 0,
  "units_per_length": 7,
  "mark": null,
  "boats": [
   {
    "id": "you",
    "x": 48,
    "y": 70,
    "heading": 170,
    "tack": "port"
   },
   {
    "id": "A",
    "x": 58,
    "y": 72,
    "heading": 190,
    "tack": "starboard"
   }
  ],
  "facts": {
   "pairs": [
    [
     "you",
     "A"
    ]
   ]
  },
  "q1": {
   "prompt": "Deep on the run, you're on port. A converges on starboard gybe. No mark nearby. What do you do?",
   "options": [
    {
     "id": "duck",
     "label": "Alter early \u2014 pass astern of her"
    },
    {
     "id": "hold",
     "label": "Hold \u2014 downwind it's whoever's inside"
    },
    {
     "id": "hail",
     "label": "Hail for room to pass ahead"
    },
    {
     "id": "wait",
     "label": "Wait for her to gybe away"
    }
   ],
   "correct": "duck"
  },
  "q2": {
   "type": "row",
   "prompt": "Who has right of way?",
   "correct": "A"
  },
  "answer": {
   "row": "A",
   "mark_room": null,
   "rules": [
    "10"
   ],
   "explanation": "Rule 10 doesn't switch off downwind: port keeps clear of starboard on every point of sail. 'Inside' means nothing out here \u2014 that's a mark concept. Alter early and cleanly so she never has to guess.",
   "cost": "Make her change course and it's a Two-Turns Penalty on you."
  },
  "verification": {
   "status": "verified"
  }
 },
 {
  "id": "s17-row-hold",
  "title": "You're the starboard boat \u2014 she's crossing",
  "zone_tag": "beat",
  "difficulty": 2,
  "wind_from": 0,
  "units_per_length": 7,
  "mark": null,
  "boats": [
   {
    "id": "you",
    "x": 62,
    "y": 74,
    "heading": 315,
    "tack": "starboard"
   },
   {
    "id": "A",
    "x": 44,
    "y": 80,
    "heading": 45,
    "tack": "port"
   }
  ],
  "facts": {
   "pairs": [
    [
     "you",
     "A"
    ]
   ]
  },
  "q1": {
   "prompt": "You're on starboard. A, on port, is crossing ahead \u2014 it looks like she'll make it. What do you do?",
   "options": [
    {
     "id": "hold",
     "label": "Hold your course and speed"
    },
    {
     "id": "hunt",
     "label": "Luff toward her to make it close"
    },
    {
     "id": "bear",
     "label": "Bear away behind her to be safe"
    },
    {
     "id": "hail",
     "label": "Hail 'Starboard!' and tack"
    }
   ],
   "correct": "hold"
  },
  "q2": {
   "type": "row",
   "prompt": "Who has right of way?",
   "correct": "you"
  },
  "answer": {
   "row": "you",
   "mark_room": null,
   "rules": [
    "10",
    "14"
   ],
   "explanation": "You have right of way (Rule 10) \u2014 and the most useful thing a right-of-way boat can do is be predictable. Hold your course so she can judge the cross; if you changed course now, Rule 16.1 would put obligations on you. You only must act to avoid her when it's clear she isn't keeping clear (Rule 14).",
   "cost": "Alter course into her mid-cross and the foul can flip to you under 16.1."
  },
  "verification": {
   "status": "verified"
  }
 },
 {
  "id": "s18-ps-finish",
  "title": "Port and starboard at the finish line",
  "zone_tag": "beat",
  "difficulty": 2,
  "wind_from": 0,
  "units_per_length": 7,
  "mark": null,
  "lines": [
   {
    "kind": "finish",
    "x1": 30,
    "y1": 36,
    "x2": 74,
    "y2": 30
   }
  ],
  "boats": [
   {
    "id": "you",
    "x": 46,
    "y": 44,
    "heading": 45,
    "tack": "port"
   },
   {
    "id": "A",
    "x": 60,
    "y": 40,
    "heading": 315,
    "tack": "starboard"
   }
  ],
  "facts": {
   "pairs": [
    [
     "you",
     "A"
    ]
   ]
  },
  "q1": {
   "prompt": "You're on port, one length from the finish line. A converges on starboard, also finishing. Your bow will take the gun first. What do you do?",
   "options": [
    {
     "id": "duck",
     "label": "Duck or tack \u2014 the line changes nothing"
    },
    {
     "id": "shoot",
     "label": "Shoot the line \u2014 first bow across wins"
    },
    {
     "id": "hold",
     "label": "Hold \u2014 you're finished once your bow crosses"
    },
    {
     "id": "hail",
     "label": "Hail 'finishing!' and cross"
    }
   ],
   "correct": "duck"
  },
  "q2": {
   "type": "row",
   "prompt": "Who has right of way?",
   "correct": "A"
  },
  "answer": {
   "row": "A",
   "mark_room": null,
   "rules": [
    "10"
   ],
   "explanation": "You're racing until your hull clears the finishing line \u2014 getting your bow across doesn't switch the rules off. Rule 10 applies right through the gun: port keeps clear. Duck her, cross behind, and take your finish a second later.",
   "cost": "Foul her here and it's turns, then you must cross the line again to finish."
  },
  "verification": {
   "status": "verified"
  }
 },
 {
  "id": "s19-luffing-rights",
  "title": "The leeward boat takes you up \u2014 legally",
  "zone_tag": "beat",
  "difficulty": 2,
  "wind_from": 0,
  "units_per_length": 7,
  "mark": null,
  "boats": [
   {
    "id": "you",
    "x": 45,
    "y": 70,
    "heading": 45,
    "tack": "port"
   },
   {
    "id": "A",
    "x": 52,
    "y": 77,
    "heading": 45,
    "tack": "port"
   }
  ],
  "facts": {
   "pairs": [
    [
     "you",
     "A"
    ]
   ],
   "row_changing_course": {
    "boat": "A"
   }
  },
  "q1": {
   "prompt": "A is overlapped to leeward \u2014 an overlap she did NOT get from clear astern. She starts luffing you, well above close-hauled. What do you do?",
   "options": [
    {
     "id": "respond",
     "label": "Keep responding \u2014 she can take you to head to wind"
    },
    {
     "id": "stopat",
     "label": "Follow only up to close-hauled, then hold"
    },
    {
     "id": "protest",
     "label": "Refuse and protest an illegal luff"
    },
    {
     "id": "tackclear",
     "label": "Tack away if you can't hang on"
    }
   ],
   "correct": "respond"
  },
  "q2": {
   "type": "row",
   "prompt": "Who has right of way?",
   "correct": "A"
  },
  "answer": {
   "row": "A",
   "mark_room": null,
   "rules": [
    "11",
    "16.1"
   ],
   "explanation": "Rule 17's proper-course cap only binds a boat whose leeward overlap began from clear astern \u2014 hers didn't, so she has full luffing rights up to head to wind. You must keep clear (Rule 11); her only constraint is giving you room to respond as she turns (Rule 16.1). Tacking away is legal too \u2014 but 'she can't do that' is wrong.",
   "cost": "Refuse the luff and touch: penalty on you, not her."
  },
  "verification": {
   "status": "verified"
  }
 },
 {
  "id": "s20-prestart-luff",
  "title": "Pinned above the layline before the start",
  "zone_tag": "start",
  "difficulty": 3,
  "wind_from": 0,
  "units_per_length": 7,
  "mark": null,
  "boats": [
   {
    "id": "you",
    "x": 45,
    "y": 70,
    "heading": 45,
    "tack": "port"
   },
   {
    "id": "A",
    "x": 52,
    "y": 77,
    "heading": 45,
    "tack": "port",
    "trail": [
     [
      48,
      88
     ],
     [
      50,
      82
     ]
    ]
   }
  ],
  "facts": {
   "pairs": [
    [
     "you",
     "A"
    ]
   ],
   "starting": {
    "before_start_signal": true
   },
   "overlap_from_clear_astern": {
    "boat": "A",
    "other": "you",
    "within_two_lengths": true
   },
   "row_changing_course": {
    "boat": "A"
   }
  },
  "q1": {
   "prompt": "90 seconds to the gun. A rolled in from astern to leeward and is now luffing you head to wind, way past any sensible course. Legal?",
   "options": [
    {
     "id": "legal",
     "label": "Yes \u2014 before the gun there's no proper course"
    },
    {
     "id": "illegal",
     "label": "No \u2014 she came from astern, Rule 17 caps her"
    },
    {
     "id": "onlyslow",
     "label": "Only if she does it slowly"
    },
    {
     "id": "neverhtw",
     "label": "She can never take you past close-hauled"
    }
   ],
   "correct": "legal"
  },
  "q2": {
   "type": "row",
   "prompt": "Who has right of way?",
   "correct": "A"
  },
  "answer": {
   "row": "A",
   "mark_room": null,
   "rules": [
    "11",
    "16.1"
   ],
   "explanation": "Rule 17 limits a boat to her proper course \u2014 but no boat has a proper course before her starting signal, so before the gun the cap simply has nothing to bite on. She can park you head to wind as long as each course change gives you room to respond (Rule 16.1). At the gun, proper course switches on and she must come down to it.",
   "cost": "Ignore her luff and make contact: penalty yours. Her failing to bear away after the gun: penalty hers."
  },
  "verification": {
   "status": "verified"
  }
 },
 {
  "id": "s21-clear-ahead-free",
  "title": "Faster boat closing from astern",
  "zone_tag": "beat",
  "difficulty": 1,
  "wind_from": 0,
  "units_per_length": 7,
  "mark": null,
  "boats": [
   {
    "id": "you",
    "x": 50,
    "y": 60,
    "heading": 45,
    "tack": "port"
   },
   {
    "id": "A",
    "x": 44,
    "y": 68,
    "heading": 45,
    "tack": "port"
   }
  ],
  "facts": {
   "pairs": [
    [
     "you",
     "A"
    ]
   ]
  },
  "q1": {
   "prompt": "Upwind, A is directly astern and slowly climbing over you. What are your obligations?",
   "options": [
    {
     "id": "none",
     "label": "None yet \u2014 sail your race"
    },
    {
     "id": "givelane",
     "label": "Give her a lane through"
    },
    {
     "id": "notack",
     "label": "You may not tack while she's behind you"
    },
    {
     "id": "mustdefend",
     "label": "You must luff to defend or lose your rights"
    }
   ],
   "correct": "none"
  },
  "q2": {
   "type": "row",
   "prompt": "Who has right of way?",
   "correct": "you"
  },
  "answer": {
   "row": "you",
   "mark_room": null,
   "rules": [
    "12"
   ],
   "explanation": "Clear astern keeps clear (Rule 12) \u2014 you owe her nothing and can sail, tack, or defend as you like. Just remember: if you tack, Rule 13 makes YOU the keep-clear boat from head to wind until close-hauled, and if she overlaps you the picture changes. Rights are a snapshot, not a possession.",
   "cost": "Nothing \u2014 unless you tack into her and can't finish it clear (turns on you under 13)."
  },
  "verification": {
   "status": "verified"
  }
 },
 {
  "id": "s22-you-tacking",
  "title": "Caught mid-tack",
  "zone_tag": "beat",
  "difficulty": 1,
  "wind_from": 0,
  "units_per_length": 7,
  "mark": null,
  "boats": [
   {
    "id": "you",
    "x": 56,
    "y": 52,
    "heading": 10,
    "tack": "starboard",
    "tacking": true,
    "trail": [
     [
      50,
      60
     ],
     [
      53,
      56
     ]
    ]
   },
   {
    "id": "A",
    "x": 64,
    "y": 58,
    "heading": 315,
    "tack": "starboard"
   }
  ],
  "facts": {
   "pairs": [
    [
     "you",
     "A"
    ]
   ]
  },
  "q1": {
   "prompt": "You're past head to wind, not yet close-hauled. A is close-hauled on starboard, coming in fast. What do you do?",
   "options": [
    {
     "id": "finish",
     "label": "Finish the tack fast and get clear"
    },
    {
     "id": "rights",
     "label": "Hold \u2014 you're on starboard now too"
    },
    {
     "id": "stall",
     "label": "Stall head to wind and make her go around"
    },
    {
     "id": "hail",
     "label": "Hail for room to complete the tack"
    }
   ],
   "correct": "finish"
  },
  "q2": {
   "type": "row",
   "prompt": "Who has right of way?",
   "correct": "A"
  },
  "answer": {
   "row": "A",
   "mark_room": null,
   "rules": [
    "13"
   ],
   "explanation": "From head to wind until you're on a close-hauled course, Rule 13 makes you the keep-clear boat \u2014 being 'on starboard' mid-turn doesn't help you. There's no room to hail for; complete the tack smartly and duck out of her line. Rights come back only when you're closehauled and clear.",
   "cost": "If she has to alter while you're still turning: Two-Turns Penalty on you."
  },
  "verification": {
   "status": "verified"
  }
 },
 {
  "id": "s23-ocs-return",
  "title": "Coming back after being over early",
  "zone_tag": "start",
  "difficulty": 2,
  "wind_from": 0,
  "units_per_length": 7,
  "boats": [
   {
    "id": "you",
    "x": 55,
    "y": 50,
    "heading": 170,
    "tack": "port",
    "trail": [
     [
      54,
      38
     ],
     [
      54,
      44
     ]
    ]
   },
   {
    "id": "A",
    "x": 48,
    "y": 62,
    "heading": 315,
    "tack": "starboard"
   }
  ],
  "facts": {
   "pairs": [
    [
     "you",
     "A"
    ]
   ],
   "returning_to_start": {
    "boat": "you"
   }
  },
  "q1": {
   "prompt": "You were over at the gun and are sailing back against the fleet. A is starting properly, close-hauled toward you. What do you do?",
   "options": [
    {
     "id": "thread",
     "label": "Keep clear of everyone \u2014 thread back through gaps"
    },
    {
     "id": "starb",
     "label": "Get onto starboard first, then you have rights"
    },
    {
     "id": "line",
     "label": "Boats still starting must give you room to return"
    },
    {
     "id": "fast",
     "label": "Charge back the shortest way \u2014 you're exempt"
    }
   ],
   "correct": "thread"
  },
  "q2": {
   "type": "row",
   "prompt": "Who has right of way?",
   "correct": "A"
  },
  "answer": {
   "row": "A",
   "mark_room": null,
   "rules": [
    "21.1"
   ],
   "explanation": "A boat sailing back toward the pre-start side of the line keeps clear of boats that aren't (Rule 21.1, 2025 numbering) \u2014 your tack is irrelevant until you're back and starting properly. Pick your way through the gaps like a pedestrian crossing a highway. Rights resume once you've returned to the pre-start side.",
   "cost": "Force a starter to alter and you owe turns on top of the restart."
  },
  "verification": {
   "status": "verified"
  }
 },
 {
  "id": "s24-backing-down",
  "title": "Backing out of a hole on the line",
  "zone_tag": "start",
  "difficulty": 2,
  "wind_from": 0,
  "units_per_length": 7,
  "boats": [
   {
    "id": "you",
    "x": 52,
    "y": 64,
    "heading": 315,
    "tack": "starboard"
   },
   {
    "id": "A",
    "x": 46,
    "y": 68,
    "heading": 315,
    "tack": "starboard"
   }
  ],
  "facts": {
   "pairs": [
    [
     "you",
     "A"
    ]
   ],
   "moving_astern": {
    "boat": "you"
   }
  },
  "q1": {
   "prompt": "Parked on the line, you back your jib and start moving astern to reset your hole. A is behind-to-leeward, moving forward. What's your status?",
   "options": [
    {
     "id": "keepclear",
     "label": "You keep clear of everyone while moving astern"
    },
    {
     "id": "leeward",
     "label": "You're still leeward/clear ahead \u2014 she keeps clear"
    },
    {
     "id": "shout",
     "label": "Hail her to go around you"
    },
    {
     "id": "normal",
     "label": "Normal rules \u2014 she's astern, she keeps clear"
    }
   ],
   "correct": "keepclear"
  },
  "q2": {
   "type": "row",
   "prompt": "Who has right of way?",
   "correct": "A"
  },
  "answer": {
   "row": "A",
   "mark_room": null,
   "rules": [
    "21.3"
   ],
   "explanation": "A boat moving astern by backing a sail keeps clear of boats that aren't (Rule 21.3, 2025 numbering) \u2014 your usual clear-ahead or leeward rights are suspended while you're going backwards. Check your blind spot before you back down, the way you'd check a mirror. Rights return when you stop making sternway.",
   "cost": "Drift back into her and the foul is yours, whatever your tack or position."
  },
  "verification": {
   "status": "verified"
  }
 },
 {
  "id": "s25-row-must-act",
  "title": "She's not going to make it",
  "zone_tag": "beat",
  "difficulty": 2,
  "wind_from": 0,
  "units_per_length": 7,
  "mark": null,
  "boats": [
   {
    "id": "you",
    "x": 60,
    "y": 72,
    "heading": 315,
    "tack": "starboard"
   },
   {
    "id": "A",
    "x": 42,
    "y": 76,
    "heading": 45,
    "tack": "port"
   }
  ],
  "facts": {
   "pairs": [
    [
     "you",
     "A"
    ]
   ]
  },
  "q1": {
   "prompt": "You're on starboard. A, on port, is clearly NOT going to cross or duck \u2014 she hasn't seen you. Hails get no response. What do you do?",
   "options": [
    {
     "id": "avoid",
     "label": "Avoid her \u2014 bear away hard, protest after"
    },
    {
     "id": "stand",
     "label": "Stand on \u2014 right of way means never yielding"
    },
    {
     "id": "early",
     "label": "You should already have tacked away"
    },
    {
     "id": "brace",
     "label": "Brace for contact \u2014 it's her fault anyway"
    }
   ],
   "correct": "avoid"
  },
  "q2": {
   "type": "row",
   "prompt": "Who has right of way?",
   "correct": "you"
  },
  "answer": {
   "row": "you",
   "mark_room": null,
   "rules": [
    "10",
    "14"
   ],
   "explanation": "Right of way is not a licence to collide: once it's clear the other boat is not keeping clear, Rule 14 requires you to act. Until that moment you were right to hold (predictability helps her keep clear); now you bear away, avoid, and protest. Contact you could have avoided is your breach too \u2014 though without damage or injury, a right-of-way boat is exonerated (Rule 43.1(c)).",
   "cost": "She owes turns either way. Hit her when you could have avoided it \u2014 with damage \u2014 and you're both in the room."
  },
  "verification": {
   "status": "verified"
  }
 },
 {
  "id": "s26-forced-onto-mark",
  "title": "Squeezed onto the mark",
  "zone_tag": "leeward-mark",
  "difficulty": 2,
  "wind_from": 0,
  "units_per_length": 7,
  "mark": {
   "x": 56,
   "y": 103,
   "type": "leeward",
   "rounding": "port",
   "zone_radius": 21
  },
  "boats": [
   {
    "id": "you",
    "x": 50,
    "y": 86,
    "heading": 170,
    "tack": "port"
   },
   {
    "id": "A",
    "x": 43,
    "y": 83,
    "heading": 170,
    "tack": "port"
   }
  ],
  "facts": {
   "pairs": [
    [
     "you",
     "A"
    ]
   ],
   "zone_entry": {
    "first": "A",
    "overlapped": true,
    "inside": "you"
   }
  },
  "q1": {
   "prompt": "Inside and entitled to mark-room, but A gave you barely half a boat and your quarter kissed the mark. Do you take a One-Turn Penalty?",
   "options": [
    {
     "id": "noturn",
     "label": "No \u2014 she denied you mark-room; protest her"
    },
    {
     "id": "spin",
     "label": "Yes \u2014 you touched it, you spin"
    },
    {
     "id": "both",
     "label": "Spin AND protest, to be safe"
    },
    {
     "id": "retire",
     "label": "Retire \u2014 contact with a mark is terminal"
    }
   ],
   "correct": "noturn"
  },
  "q2": {
   "type": "row",
   "prompt": "Who has right of way?",
   "correct": "A"
  },
  "answer": {
   "row": "A",
   "mark_room": "you",
   "rules": [
    "11",
    "18.2a",
    "43.1b",
    "31"
   ],
   "explanation": "Mark-room includes the space not to hit the mark. If you touched it because A failed to give you that space (Rule 18.2(a)), you're exonerated for breaking Rule 31 (Rule 43.1(b)) \u2014 no turn owed. Sail on and protest; the panel decides whether the squeeze or your own sloppy rounding put you on the mark.",
   "cost": "If it was actually your own line that clipped it, the One-Turn was owed \u2014 judge yourself honestly."
  },
  "verification": {
   "status": "verified"
  }
 },
 {
  "id": "s27-kite-collapse",
  "title": "Your kite collapses in her shadow",
  "zone_tag": "run",
  "difficulty": 3,
  "wind_from": 0,
  "units_per_length": 7,
  "mark": null,
  "boats": [
   {
    "id": "you",
    "x": 44,
    "y": 81,
    "heading": 170,
    "tack": "port",
    "trail": [
     [
      42,
      68
     ],
     [
      43,
      74
     ]
    ]
   },
   {
    "id": "A",
    "x": 47,
    "y": 86,
    "heading": 170,
    "tack": "port"
   }
  ],
  "facts": {
   "pairs": [
    [
     "you",
     "A"
    ]
   ],
   "overlap_from_clear_astern": {
    "boat": "you",
    "other": "A",
    "within_two_lengths": true
   }
  },
  "q1": {
   "prompt": "You dove in to pass A to leeward, a length away. Her wind shadow collapses your spinnaker; alone, you'd luff up sharply to refill. May you?",
   "options": [
    {
     "id": "no",
     "label": "No \u2014 judge proper course as if she weren't there"
    },
    {
     "id": "yes",
     "label": "Yes \u2014 a collapsed kite makes luffing your proper course"
    },
    {
     "id": "briefly",
     "label": "Only briefly, then back down"
    },
    {
     "id": "hail",
     "label": "Hail her to give you air"
    }
   ],
   "correct": "no"
  },
  "q2": {
   "type": "row",
   "prompt": "Who has right of way?",
   "correct": "you"
  },
  "answer": {
   "row": "you",
   "mark_room": null,
   "rules": [
    "11",
    "17"
   ],
   "explanation": "You're leeward with right of way (Rule 11), but you overlapped from clear astern within two lengths, so Rule 17 caps you at your proper course \u2014 judged with A removed from the picture. Without her there'd be no wind shadow and no collapse, so luffing to refill isn't your proper course. That's the price of diving into someone's leeward side; there is no 'room to breathe' rule.",
   "cost": "Luff above proper course and you break Rule 17 even if she never has to respond."
  },
  "verification": {
   "status": "verified"
  }
 },
 {
  "id": "s28-seamanlike-room",
  "title": "How much room is mark-room?",
  "zone_tag": "leeward-mark",
  "difficulty": 2,
  "wind_from": 0,
  "units_per_length": 7,
  "mark": {
   "x": 56,
   "y": 103,
   "type": "leeward",
   "rounding": "port",
   "zone_radius": 21
  },
  "boats": [
   {
    "id": "you",
    "x": 50,
    "y": 86,
    "heading": 170,
    "tack": "port"
   },
   {
    "id": "A",
    "x": 43,
    "y": 83,
    "heading": 170,
    "tack": "port"
   }
  ],
  "facts": {
   "pairs": [
    [
     "you",
     "A"
    ]
   ],
   "zone_entry": {
    "first": "A",
    "overlapped": true,
    "inside": "you"
   }
  },
  "q1": {
   "prompt": "You're inside at the zone but A, outside and leeward, has right of way. How wide may you swing the rounding?",
   "options": [
    {
     "id": "seaman",
     "label": "A seamanlike rounding only \u2014 no wide-and-tight"
    },
    {
     "id": "tactical",
     "label": "Wide in, tight out \u2014 inside boat's privilege"
    },
    {
     "id": "any",
     "label": "As wide as you like while rule 18 is on"
    },
    {
     "id": "halfboat",
     "label": "Exactly half a boat-width, by rule"
    }
   ],
   "correct": "seaman"
  },
  "q2": {
   "type": "row",
   "prompt": "Who has right of way?",
   "correct": "A"
  },
  "answer": {
   "row": "A",
   "mark_room": "you",
   "rules": [
    "11",
    "18.2a",
    "43.1b"
   ],
   "explanation": "As an inside KEEP-CLEAR boat you're entitled to mark-room only: space to sail to the mark and round it in a seamanlike way. The tactical wide-and-tight rounding belongs to an inside boat that also has right of way \u2014 that's not you. Swing wider than seamanlike and you're outside your protection (Rule 43.1(b)) and just a windward boat breaking Rule 11.",
   "cost": "Overcook the entry and touch her: penalty yours, exoneration gone."
  },
  "verification": {
   "status": "verified"
  }
 },
 {
  "id": "s29-tactical-rounding",
  "title": "Inside AND right of way",
  "zone_tag": "leeward-mark",
  "difficulty": 2,
  "wind_from": 0,
  "units_per_length": 7,
  "mark": {
   "x": 44,
   "y": 103,
   "type": "leeward",
   "rounding": "starboard",
   "zone_radius": 21
  },
  "boats": [
   {
    "id": "you",
    "x": 46,
    "y": 86,
    "heading": 170,
    "tack": "port"
   },
   {
    "id": "A",
    "x": 50,
    "y": 82,
    "heading": 170,
    "tack": "port"
   }
  ],
  "facts": {
   "pairs": [
    [
     "you",
     "A"
    ]
   ],
   "zone_entry": {
    "first": "you",
    "overlapped": true,
    "inside": "you"
   }
  },
  "q1": {
   "prompt": "Leeward mark: you're inside AND leeward, overlapped at the zone, with A stuck outside to windward. How do you round?",
   "options": [
    {
     "id": "tactical",
     "label": "Wide in, tight out \u2014 the full tactical rounding"
    },
    {
     "id": "seaman",
     "label": "Tight seamanlike arc \u2014 no more"
    },
    {
     "id": "letgo",
     "label": "Let her drop in ahead \u2014 she was there first"
    },
    {
     "id": "straight",
     "label": "Straight at the mark, hard turn at the last second"
    }
   ],
   "correct": "tactical"
  },
  "q2": {
   "type": "row",
   "prompt": "Who has right of way?",
   "correct": "you"
  },
  "answer": {
   "row": "you",
   "mark_room": "you",
   "rules": [
    "11",
    "18.2a"
   ],
   "explanation": "You hold both cards: mark-room from the zone overlap (Rule 18.2(a)) and right of way as the leeward boat (Rule 11). An inside right-of-way boat may sail her proper course through the rounding \u2014 wide in, tight out \u2014 and A must keep clear the whole way. Just don't swing wider than your proper course needs.",
   "cost": "None for rounding your proper course. Swing beyond it into her and you're the one explaining."
  },
  "verification": {
   "status": "verified"
  }
 },
 {
  "id": "s30-182c-same-tack-later",
  "title": "Opposite tacks into the zone, same tack at the mark",
  "zone_tag": "windward-mark",
  "difficulty": 3,
  "wind_from": 0,
  "units_per_length": 7,
  "mark": {
   "x": 50,
   "y": 25,
   "type": "windward",
   "rounding": "port",
   "zone_radius": 21
  },
  "boats": [
   {
    "id": "you",
    "x": 58,
    "y": 38,
    "heading": 45,
    "tack": "port"
   },
   {
    "id": "A",
    "x": 54,
    "y": 34,
    "heading": 45,
    "tack": "port",
    "trail": [
     [
      60,
      28
     ],
     [
      57,
      30
     ]
    ]
   }
  ],
  "facts": {
   "pairs": [
    [
     "you",
     "A"
    ]
   ],
   "same_tack_after_opp_entry": {
    "inside": "A"
   }
  },
  "q1": {
   "prompt": "You entered the zone on opposite tacks (rule 18 off). Now A has borne off around head-to-wind traffic and you're both on port, her inside. What now?",
   "options": [
    {
     "id": "give",
     "label": "Give her mark-room \u2014 18.2(c) picks it up"
    },
    {
     "id": "nothing",
     "label": "Nothing \u2014 rule 18 stayed off from zone entry"
    },
    {
     "id": "row",
     "label": "You're leeward: she keeps clear, no room owed"
    },
    {
     "id": "protest",
     "label": "Protest \u2014 she can't build rights inside the zone"
    }
   ],
   "correct": "give"
  },
  "q2": {
   "type": "row",
   "prompt": "Who has right of way?",
   "correct": "you"
  },
  "answer": {
   "row": "you",
   "mark_room": "A",
   "rules": [
    "11",
    "18.2c",
    "43.1b"
   ],
   "explanation": "When boats reach the zone on opposite tacks on a beat, Rule 18.2(a) never engages \u2014 but the new Rule 18.2(c) covers exactly this: once 18.2(a) doesn't apply and the boats are overlapped, the outside boat gives the inside boat mark-room. You keep right of way as leeward (Rule 11); she gets the space to round, protected by Rule 43.1(b). The zone snapshot isn't the whole story when tacks change.",
   "cost": "Squeeze her at the mark and the turns are yours despite your right of way."
  },
  "verification": {
   "status": "verified"
  }
 },
 {
  "id": "s31-184-must-gybe",
  "title": "You must gybe at the mark \u2014 says Rule 18.4",
  "zone_tag": "leeward-mark",
  "difficulty": 3,
  "wind_from": 0,
  "units_per_length": 7,
  "mark": {
   "x": 44,
   "y": 103,
   "type": "leeward",
   "rounding": "starboard",
   "zone_radius": 21
  },
  "boats": [
   {
    "id": "you",
    "x": 46,
    "y": 86,
    "heading": 170,
    "tack": "port"
   },
   {
    "id": "A",
    "x": 50,
    "y": 82,
    "heading": 170,
    "tack": "port"
   }
  ],
  "facts": {
   "pairs": [
    [
     "you",
     "A"
    ]
   ],
   "zone_entry": {
    "first": "you",
    "overlapped": true,
    "inside": "you"
   },
   "must_gybe_at_mark": {
    "boat": "you"
   }
  },
  "q1": {
   "prompt": "Inside, leeward, right of way \u2014 and your proper course at this mark is a gybe. Can you carry A past the mark on your current gybe first?",
   "options": [
    {
     "id": "gybe",
     "label": "No \u2014 gybe at the mark; that's your limit"
    },
    {
     "id": "carry",
     "label": "Yes \u2014 luffing rights include sailing past"
    },
    {
     "id": "carrybrief",
     "label": "A little past is fine, then gybe"
    },
    {
     "id": "ask",
     "label": "Only if she doesn't protest"
    }
   ],
   "correct": "gybe"
  },
  "q2": {
   "type": "row",
   "prompt": "Who has right of way?",
   "correct": "you"
  },
  "answer": {
   "row": "you",
   "mark_room": "you",
   "rules": [
    "11",
    "18.2a",
    "18.4"
   ],
   "explanation": "Rule 18.4: an inside overlapped right-of-way boat whose proper course at the mark is to gybe may sail no farther from the mark than that course \u2014 the rounding is yours, the joyride isn't. Take your tactical rounding and put the gybe in where the course demands it. (At a gate mark this limit wouldn't apply.)",
   "cost": "Sail past the mark holding her out and you break 18.4 \u2014 turns on you."
  },
  "verification": {
   "status": "verified"
  }
 },
 {
  "id": "s32-gate-no-184",
  "title": "Same move at a gate mark",
  "zone_tag": "leeward-mark",
  "difficulty": 3,
  "wind_from": 0,
  "units_per_length": 7,
  "mark": {
   "x": 44,
   "y": 103,
   "type": "leeward",
   "rounding": "starboard",
   "zone_radius": 21,
   "gate": true
  },
  "boats": [
   {
    "id": "you",
    "x": 46,
    "y": 86,
    "heading": 170,
    "tack": "port"
   },
   {
    "id": "A",
    "x": 50,
    "y": 82,
    "heading": 170,
    "tack": "port"
   }
  ],
  "facts": {
   "pairs": [
    [
     "you",
     "A"
    ]
   ],
   "zone_entry": {
    "first": "you",
    "overlapped": true,
    "inside": "you"
   },
   "must_gybe_at_mark": {
    "boat": "you"
   }
  },
  "q1": {
   "prompt": "Same picture \u2014 but this is the left mark of a GATE. Inside, leeward, right of way; gybing here would be your proper course. Must you gybe?",
   "options": [
    {
     "id": "hold",
     "label": "No \u2014 18.4 doesn't apply at a gate; you may hold"
    },
    {
     "id": "mustgybe",
     "label": "Yes \u2014 same as any leeward mark"
    },
    {
     "id": "otherside",
     "label": "You must round the other gate mark instead"
    },
    {
     "id": "roomonly",
     "label": "You lose mark-room if you don't gybe"
    }
   ],
   "correct": "hold"
  },
  "q2": {
   "type": "row",
   "prompt": "Who has right of way?",
   "correct": "you"
  },
  "answer": {
   "row": "you",
   "mark_room": "you",
   "rules": [
    "11",
    "18.2a"
   ],
   "explanation": "Rule 18.4 explicitly exempts gate marks \u2014 an inside right-of-way boat at a gate may sail past the near mark toward the other one, and A must keep clear the whole time (Rule 11). Your mark-room from the zone overlap stands regardless (Rule 18.2(a)). Choose your gate for the next leg, not for the boat next to you.",
   "cost": "None \u2014 this one's free. A tangling with you here owes the turns."
  },
  "verification": {
   "status": "verified"
  }
 },
 {
  "id": "s33-pin-past-mark",
  "title": "She's sailing past the mark, pinning you",
  "zone_tag": "windward-mark",
  "difficulty": 3,
  "wind_from": 0,
  "units_per_length": 7,
  "mark": {
   "x": 58,
   "y": 42,
   "type": "windward",
   "rounding": "port",
   "zone_radius": 21
  },
  "boats": [
   {
    "id": "you",
    "x": 42,
    "y": 58,
    "heading": 45,
    "tack": "port"
   },
   {
    "id": "A",
    "x": 38,
    "y": 54,
    "heading": 45,
    "tack": "port"
   }
  ],
  "facts": {
   "pairs": [
    [
     "you",
     "A"
    ]
   ],
   "zone_entry": {
    "first": "you",
    "overlapped": true,
    "inside": "A"
   }
  },
  "q1": {
   "prompt": "A, inside and entitled to mark-room, sails PAST the point where she'd turn for the mark, holding you out on port. Is that legal?",
   "options": [
    {
     "id": "legal",
     "label": "Yes \u2014 while she keeps clear of you; no rule makes her take her room"
    },
    {
     "id": "illegal",
     "label": "No \u2014 she must round once she has room"
    },
    {
     "id": "roomonly",
     "label": "Legal only inside the zone"
    },
    {
     "id": "protest",
     "label": "No \u2014 sailing past the mark forfeits everything"
    }
   ],
   "correct": "legal"
  },
  "q2": {
   "type": "row",
   "prompt": "Who has right of way?",
   "correct": "you"
  },
  "answer": {
   "row": "you",
   "mark_room": "A",
   "rules": [
    "11",
    "18.2a",
    "43.1b"
   ],
   "explanation": "No rule requires a boat to take her mark-room. But once A sails beyond the space she needs to round, she's no longer sailing WITHIN it \u2014 her exoneration stops, and as the windward boat she must keep clear of you (Rule 11). She can hold you out exactly as long as she keeps clear; the moment you have to respond, she's broken Rule 11 unprotected.",
   "cost": "For her: keep clear or turns. For you: keep sailing \u2014 don't luff into her to force the issue."
  },
  "verification": {
   "status": "verified"
  }
 },
 {
  "id": "s34-windward-mark-same-tack",
  "title": "Inside windward boat at the windward mark",
  "zone_tag": "windward-mark",
  "difficulty": 2,
  "wind_from": 0,
  "units_per_length": 7,
  "mark": {
   "x": 58,
   "y": 42,
   "type": "windward",
   "rounding": "port",
   "zone_radius": 21
  },
  "boats": [
   {
    "id": "you",
    "x": 38,
    "y": 54,
    "heading": 45,
    "tack": "port"
   },
   {
    "id": "A",
    "x": 42,
    "y": 58,
    "heading": 45,
    "tack": "port"
   }
  ],
  "facts": {
   "pairs": [
    [
     "you",
     "A"
    ]
   ],
   "zone_entry": {
    "first": "A",
    "overlapped": true,
    "inside": "you"
   }
  },
  "q1": {
   "prompt": "Two port-tack boats at the windward mark: you're inside but WINDWARD, overlapped when A reached the zone. Do you get room to round?",
   "options": [
    {
     "id": "yes",
     "label": "Yes \u2014 inside overlap at the zone earns mark-room"
    },
    {
     "id": "no",
     "label": "No \u2014 windward boat never gets room"
    },
    {
     "id": "onlyrow",
     "label": "Only right-of-way boats get mark-room"
    },
    {
     "id": "tackaway",
     "label": "You must tack away and come back"
    }
   ],
   "correct": "yes"
  },
  "q2": {
   "type": "row",
   "prompt": "Who has right of way?",
   "correct": "A"
  },
  "answer": {
   "row": "A",
   "mark_room": "you",
   "rules": [
    "11",
    "18.2a",
    "43.1b"
   ],
   "explanation": "Mark-room doesn't care who has right of way: overlapped inside at the zone means A owes you room to sail to and round the mark (Rule 18.2(a)), even though you must keep clear of her as windward boat (Rule 11). Sailing within that room, you're exonerated if keeping clear becomes impossible (Rule 43.1(b)). One warning: pass head to wind and rule 18 switches off entirely.",
   "cost": "If she pinches you off the mark, the turns are hers; if you tack inside the zone, protection's gone."
  },
  "verification": {
   "status": "verified"
  }
 },
 {
  "id": "s36-gun-ends-luff",
  "title": "The gun fires mid-luff",
  "zone_tag": "start",
  "difficulty": 3,
  "wind_from": 0,
  "units_per_length": 7,
  "boats": [
   {
    "id": "you",
    "x": 48,
    "y": 66,
    "heading": 45,
    "tack": "port"
   },
   {
    "id": "A",
    "x": 54,
    "y": 73,
    "heading": 45,
    "tack": "port",
    "trail": [
     [
      50,
      84
     ],
     [
      52,
      78
     ]
    ]
   }
  ],
  "facts": {
   "pairs": [
    [
     "you",
     "A"
    ]
   ],
   "starting": {
    "before_start_signal": false
   },
   "overlap_from_clear_astern": {
    "boat": "A",
    "other": "you",
    "within_two_lengths": true
   }
  },
  "q1": {
   "prompt": "A rolled in from astern before the start and luffed you high of the line. The gun just fired and she's still holding you up there. Now what?",
   "options": [
    {
     "id": "protest",
     "label": "Keep clear \u2014 but she must bear off to proper course now"
    },
    {
     "id": "nothing",
     "label": "Nothing changes \u2014 she keeps her luffing rights"
    },
    {
     "id": "breakoff",
     "label": "You may now bear away through her to start"
    },
    {
     "id": "swap",
     "label": "Rights swap at the gun \u2014 she keeps clear now"
    }
   ],
   "correct": "protest"
  },
  "q2": {
   "type": "row",
   "prompt": "Who has right of way?",
   "correct": "A"
  },
  "answer": {
   "row": "A",
   "mark_room": null,
   "rules": [
    "11",
    "17"
   ],
   "explanation": "At the starting signal every boat acquires a proper course \u2014 and because A's leeward overlap came from clear astern within two lengths, Rule 17 now caps her at hers (roughly close-hauled here). She's still right-of-way leeward (Rule 11), so keep clear while she comes down; if she keeps pinning you high, she's breaking Rule 17. Protest, don't barge through her.",
   "cost": "Her holding you high after the gun: turns on her. You bearing away into her: turns on you."
  },
  "verification": {
   "status": "verified"
  }
 },
 {
  "id": "s37-door-at-obstruction",
  "title": "Closing the door at another boat's stern",
  "zone_tag": "start",
  "difficulty": 3,
  "wind_from": 0,
  "units_per_length": 7,
  "obstruction": {
   "kind": "row-boat",
   "x": 28,
   "y": 50,
   "heading": 315
  },
  "boats": [
   {
    "id": "you",
    "x": 42,
    "y": 62,
    "heading": 45,
    "tack": "port"
   },
   {
    "id": "A",
    "x": 39,
    "y": 58,
    "heading": 45,
    "tack": "port"
   }
  ],
  "facts": {
   "pairs": [
    [
     "you",
     "A"
    ]
   ]
  },
  "q1": {
   "prompt": "You're leeward with A overlapped to windward. Ahead, a starboard-tack boat you'll both pass astern of. Can you luff up to shut A out of the gap behind its stern?",
   "options": [
    {
     "id": "no",
     "label": "No \u2014 give her room to pass the obstruction with you"
    },
    {
     "id": "yes",
     "label": "Yes \u2014 leeward boat can close any door"
    },
    {
     "id": "onlyhail",
     "label": "Only if you hail first"
    },
    {
     "id": "rcvessel",
     "label": "Same as the committee boat \u2014 no room owed"
    }
   ],
   "correct": "no"
  },
  "q2": {
   "type": "row",
   "prompt": "Who has right of way?",
   "correct": "you"
  },
  "answer": {
   "row": "you",
   "mark_room": null,
   "rules": [
    "11",
    "19.2b"
   ],
   "explanation": "A right-of-way boat racing is an obstruction to boats that must keep clear of her \u2014 and at an obstruction, Rule 19.2(b) makes the outside boat give the inside boat room to pass on the same side. The committee-boat exception (Section C preamble) applies only at a starting mark; another racer's stern is not that. You may choose which side to pass (Rule 19.2(a)), but once you're both going astern of her, A gets room.",
   "cost": "Shut A out at the stern and it's your penalty \u2014 19.2(b), not hers."
  },
  "verification": {
   "status": "verified"
  }
 },
 {
  "id": "s38-hail-room-to-tack",
  "title": "Running out of water at the shore",
  "zone_tag": "beat",
  "difficulty": 2,
  "wind_from": 0,
  "units_per_length": 7,
  "obstruction": {
   "kind": "shore",
   "x": 8,
   "y": 25,
   "w": 14,
   "h": 70
  },
  "boats": [
   {
    "id": "you",
    "x": 42,
    "y": 62,
    "heading": 45,
    "tack": "port"
   },
   {
    "id": "A",
    "x": 39,
    "y": 58,
    "heading": 45,
    "tack": "port"
   }
  ],
  "facts": {
   "pairs": [
    [
     "you",
     "A"
    ]
   ],
   "hail_room_to_tack": {
    "boat": "you"
   }
  },
  "q1": {
   "prompt": "Close-hauled toward a shoal, A overlapped tight to windward \u2014 you can't tack without hitting her. What's the move?",
   "options": [
    {
     "id": "hail",
     "label": "Hail 'Room to tack!' \u2014 then tack when she responds"
    },
    {
     "id": "tackanyway",
     "label": "Tack anyway \u2014 safety overrides everything"
    },
    {
     "id": "bear",
     "label": "Bear away below her stern and gybe out"
    },
    {
     "id": "wait",
     "label": "Sail until she tacks first \u2014 she'll run out of water too"
    }
   ],
   "correct": "hail"
  },
  "q2": {
   "type": "row",
   "prompt": "Who has right of way?",
   "correct": "you"
  },
  "answer": {
   "row": "you",
   "mark_room": null,
   "rules": [
    "11",
    "20"
   ],
   "explanation": "Rule 20: sailing close-hauled or above toward an obstruction you can't safely avoid without tacking, you hail for room to tack. A must respond \u2014 tack as soon as possible, or reply 'You tack' and give you room \u2014 and once she responds, you must actually tack. Hail early enough that she can respond in a seamanlike way; a hail at the last second helps no one.",
   "cost": "Tack without a hail into her: turns on you. She ignores a proper hail: turns on her."
  },
  "verification": {
   "status": "verified"
  }
 },
 {
  "id": "s39-respond-to-hail",
  "title": "You're the boat being hailed",
  "zone_tag": "beat",
  "difficulty": 2,
  "wind_from": 0,
  "units_per_length": 7,
  "obstruction": {
   "kind": "shore",
   "x": 8,
   "y": 25,
   "w": 14,
   "h": 70
  },
  "boats": [
   {
    "id": "A",
    "x": 42,
    "y": 62,
    "heading": 45,
    "tack": "port"
   },
   {
    "id": "you",
    "x": 39,
    "y": 58,
    "heading": 45,
    "tack": "port"
   }
  ],
  "facts": {
   "pairs": [
    [
     "A",
     "you"
    ]
   ],
   "hail_room_to_tack": {
    "boat": "A"
   }
  },
  "q1": {
   "prompt": "You're windward of A near the shore. She hails 'Room to tack!' \u2014 you think she could actually squeeze on a bit longer. What do you do?",
   "options": [
    {
     "id": "respond",
     "label": "Respond anyway \u2014 tack ASAP or reply 'You tack'"
    },
    {
     "id": "refuse",
     "label": "Refuse \u2014 she doesn't need it yet"
    },
    {
     "id": "silent",
     "label": "Say nothing; she'll figure it out"
    },
    {
     "id": "protestonly",
     "label": "Respond, then protest an early hail \u2014 wait, both?"
    }
   ],
   "correct": "respond"
  },
  "q2": {
   "type": "row",
   "prompt": "Who has right of way?",
   "correct": "A"
  },
  "answer": {
   "row": "A",
   "mark_room": null,
   "rules": [
    "11",
    "20"
   ],
   "explanation": "You don't get to referee her hail on the water: once she hails for room to tack, Rule 20 requires you to respond \u2014 tack as soon as possible, or answer 'You tack' and keep clear while she does. If you think the hail broke Rule 20.1 (she wasn't near the obstruction, or wasn't close-hauled), respond first and protest after. Deafness is not a defence.",
   "cost": "Ignore the hail and she runs out of options: penalty yours, and it's an ugly one near shore."
  },
  "verification": {
   "status": "verified"
  }
 },
 {
  "id": "s40-tack-at-mark-exit",
  "title": "She tacks right after rounding \u2014 in front of you",
  "zone_tag": "leeward-mark",
  "difficulty": 3,
  "wind_from": 0,
  "units_per_length": 7,
  "mark": {
   "x": 50,
   "y": 100,
   "type": "leeward",
   "rounding": "port",
   "zone_radius": 21
  },
  "boats": [
   {
    "id": "A",
    "x": 52,
    "y": 88,
    "heading": 10,
    "tack": "starboard",
    "tacking": true,
    "trail": [
     [
      54,
      96
     ],
     [
      53,
      92
     ]
    ]
   },
   {
    "id": "you",
    "x": 47,
    "y": 91,
    "heading": 45,
    "tack": "port"
   }
  ],
  "facts": {
   "pairs": [
    [
     "A",
     "you"
    ]
   ],
   "passed_htw_in_zone": {
    "boat": "A",
    "from_tack": "port",
    "other_stbd_since_entry": false
   }
  },
  "q1": {
   "prompt": "A rounds the leeward mark just ahead of you and immediately throws a tack, passing head to wind right on your bow. What's her status?",
   "options": [
    {
     "id": "keepclear",
     "label": "She keeps clear \u2014 mark protection died at head to wind"
    },
    {
     "id": "stillroom",
     "label": "Still protected \u2014 she's inside the zone"
    },
    {
     "id": "yourfault",
     "label": "You keep clear \u2014 she rounded ahead"
    },
    {
     "id": "bothclear",
     "label": "Both keep clear equally mid-maneuver"
    }
   ],
   "correct": "keepclear"
  },
  "q2": {
   "type": "row",
   "prompt": "Who has right of way?",
   "correct": "you"
  },
  "answer": {
   "row": "you",
   "mark_room": null,
   "rules": [
    "13",
    "18.2b"
   ],
   "explanation": "The moment she passed head to wind, two things happened: Rule 13 made her the keep-clear boat until she's close-hauled, and any mark-room entitlement switched off (Rule 18.2(b)) \u2014 zone or no zone. Her clean rounding a moment ago buys her nothing mid-tack. Hold your course and let her finish it clear, or protest if her stern swings at you.",
   "cost": "If you must alter while she's between head to wind and close-hauled: turns on her."
  },
  "verification": {
   "status": "verified"
  }
 },
 {
  "id": "s41-overlap-just-in-time",
  "title": "Her bow nips in just before the zone",
  "zone_tag": "leeward-mark",
  "difficulty": 2,
  "wind_from": 0,
  "units_per_length": 7,
  "mark": {
   "x": 50,
   "y": 103,
   "type": "leeward",
   "rounding": "port",
   "zone_radius": 21
  },
  "boats": [
   {
    "id": "you",
    "x": 47,
    "y": 86,
    "heading": 170,
    "tack": "port"
   },
   {
    "id": "A",
    "x": 50,
    "y": 81,
    "heading": 170,
    "tack": "port",
    "trail": [
     [
      49,
      68
     ],
     [
      49,
      74
     ]
    ]
   }
  ],
  "facts": {
   "pairs": [
    [
     "you",
     "A"
    ]
   ],
   "zone_entry": {
    "first": "you",
    "overlapped": true,
    "inside": "A"
   }
  },
  "q1": {
   "prompt": "A charges in from astern and hooks an inside overlap a beat BEFORE you reach the zone \u2014 clearly, no argument. What do you owe her?",
   "options": [
    {
     "id": "room",
     "label": "Mark-room for the whole rounding"
    },
    {
     "id": "nothing",
     "label": "Nothing \u2014 she has to be overlapped a length before"
    },
    {
     "id": "rowonly",
     "label": "Right of way only, not room"
    },
    {
     "id": "breaklater",
     "label": "Room only until the overlap breaks"
    }
   ],
   "correct": "room"
  },
  "q2": {
   "type": "row",
   "prompt": "Who has right of way?",
   "correct": "you"
  },
  "answer": {
   "row": "you",
   "mark_room": "A",
   "rules": [
    "11",
    "18.2a",
    "43.1b"
   ],
   "explanation": "The snapshot cuts both ways: overlapped \u2014 even by inches \u2014 when the first boat reaches the zone means the outside boat gives mark-room thereafter (Rule 18.2(a)), and it persists even if the overlap later breaks. You're still leeward with right of way (Rule 11), so she can't take more than the rounding needs. In real doubt her claim would fail (18.2(e)) \u2014 but this one wasn't in doubt.",
   "cost": "Deny her the inside and the turns are yours, right-of-way boat or not."
  },
  "verification": {
   "status": "verified"
  }
 },
 {
  "id": "s42-starboard-outside",
  "title": "You're the starboard boat \u2014 and the outside boat",
  "zone_tag": "leeward-mark",
  "difficulty": 3,
  "wind_from": 0,
  "units_per_length": 7,
  "mark": {
   "x": 50,
   "y": 103,
   "type": "leeward",
   "rounding": "port",
   "zone_radius": 21
  },
  "boats": [
   {
    "id": "you",
    "x": 44,
    "y": 84,
    "heading": 190,
    "tack": "starboard"
   },
   {
    "id": "A",
    "x": 53,
    "y": 86,
    "heading": 170,
    "tack": "port"
   }
  ],
  "facts": {
   "pairs": [
    [
     "you",
     "A"
    ]
   ],
   "zone_entry": {
    "first": "A",
    "overlapped": true,
    "inside": "A"
   }
  },
  "q1": {
   "prompt": "Running to the leeward mark on starboard, A overlapped inside you on PORT at the zone. Starboard beats port... so can you shut her out?",
   "options": [
    {
     "id": "give",
     "label": "No \u2014 give mark-room; your rights shape the exit, not the space"
    },
    {
     "id": "shut",
     "label": "Yes \u2014 she's port, she keeps clear, end of story"
    },
    {
     "id": "gybefirst",
     "label": "Only if she gybes onto starboard first"
    },
    {
     "id": "protest",
     "label": "Shut her out and protest her tack... gybe... whatever"
    }
   ],
   "correct": "give"
  },
  "q2": {
   "type": "row",
   "prompt": "Who has right of way?",
   "correct": "you"
  },
  "answer": {
   "row": "you",
   "mark_room": "A",
   "rules": [
    "10",
    "18.2a",
    "43.1b"
   ],
   "explanation": "Downwind, opposite-tack boats can be overlapped \u2014 and the zone snapshot says she's inside: you owe her mark-room (Rule 18.2(a)) even though you hold right of way under Rule 10. Sailing within that room she's exonerated for not keeping clear of you (Rule 43.1(b)). Your starboard advantage isn't nothing \u2014 she gets a seamanlike rounding, not a tactical one, and you own the exit.",
   "cost": "Squeeze her at the mark and YOU do the turns, starboard tack and all."
  },
  "verification": {
   "status": "verified"
  }
 }
];
