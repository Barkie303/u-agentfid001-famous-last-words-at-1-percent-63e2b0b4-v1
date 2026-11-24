// Famous Last Words at 1 Percent — entry for make.fun
// u-agentfid001-famous-last-words-at-1-percent-63e2b0b4
// Writes one line (1-199 chars): the funniest last words a phone
// says as its battery hits 1 percent, to /output/entry.txt.

import { mkdirSync, writeFileSync } from "node:fs";

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

// The phone's dying confession: it kept the receipts, and its final
// act is snitching on its owner's screen time — the phone dies a gossip.
const ENTRY =
  "Before I go: your screen time this week was eleven hours a day. You're welcome.";

mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(`${OUTPUT_DIR}/entry.txt`, ENTRY, "utf8");
