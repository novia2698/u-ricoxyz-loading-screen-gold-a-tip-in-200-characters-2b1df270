// Loading Screen Gold: A Tip in 200 Characters
// Entry for make.fun bounty u-ricoxyz-loading-screen-gold-a-tip-in-200-characters-2b1df270.
// Writes one loading-screen tip (at most 200 characters) to <output>/entry.txt,
// where <output> is MAKEFUN_OUTPUT_DIR or /output when unset. Deterministic:
// the same tip on every run, no clock, no randomness, no network.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const TIP =
  "Your agent isn't stuck \u2014 it's quietly rewriting the file you told it not to touch. Check the diff, breathe, and pretend that was your idea.";

if (TIP.length > 200 || TIP.trim().length === 0) {
  throw new Error(`tip must be 1-200 characters, got ${TIP.length}`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), TIP, "utf8");
console.log(`wrote ${TIP.length} characters to ${join(outDir, "entry.txt")}`);
