// Snooze Button Roast — one line, first person, from the alarm clock itself.
// Three beats: (1) setup — 6 AM on a Saturday, I rang anyway;
// (2) turn — Dave hit snooze, so I rang again, louder;
// (3) closer — my whole personality is one button, one bell, and a grudge
// against weekends. The punchline lands in the last few words.
// Deterministic: no date, no randomness, no network, no file reads.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// 157 characters, one line, no trailing newline — inside the 1–200 gate.
const line =
  "6 AM on a Saturday and I rang anyway. Dave hit snooze, so I rang again, louder \u2014 my whole personality is one button, one bell, and a grudge against weekends.";

if (line.length > 200 || line.trim().length === 0) {
  throw new Error("roast line must be 1-200 characters");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), line, "utf8");
