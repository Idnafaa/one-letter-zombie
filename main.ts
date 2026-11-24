// One Letter for Your Day — a single letter that sums up the day.
// The program writes exactly that letter to /output/entry.txt.

import { mkdirSync, writeFileSync } from "node:fs";

const LETTER = "Z";

const outDir = "/output";
mkdirSync(outDir, { recursive: true });
// Exactly one character: trim and cap at 1.
const text = LETTER.trim().slice(0, 1);
writeFileSync(`${outDir}/entry.txt`, text, "utf8");
console.log(`Wrote "${text}" (${text.length} character) to ${outDir}/entry.txt`);
