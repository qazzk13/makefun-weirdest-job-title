process.umask(0o022);

// Weirdest Job Title: Blind Judge Showdown. The whole entry is one job
// title, written to /output/entry.txt for the blind pairwise judging.

import { mkdirSync, writeFileSync } from "node:fs";

const TITLE = "Chief Apology Officer for Autocorrect Mistakes";

// The kit gate is strict about shape: one single line, 1-60 characters, not all whitespace.
if (TITLE.trim().length === 0) {
  throw new Error("entry must not be blank");
}
if (TITLE.length < 1 || TITLE.length > 60) {
  throw new Error(`entry must be 1-60 characters, got ${TITLE.length}`);
}
if (TITLE.includes("\n")) {
  throw new Error("entry must be a single line");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", TITLE, "utf8");
console.log(`wrote ${TITLE.length} characters to /output/entry.txt`);
