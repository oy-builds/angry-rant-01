// Angry Judge: The Short Rant Contest — entry program (Node 22, stdlib only).
// Writes one short, funny rant about a broken printer to entry.txt.
// Output: $MAKEFUN_OUTPUT_DIR/entry.txt (default /output/entry.txt).
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const RANT =
  "My printer has one job. ONE. It sits there blinking like it's thinking, " +
  "then tells me the cyan is low. I print in black. It has never once " +
  "printed in cyan. It jams on page two, prints a test page nobody asked " +
  "for, and I've spent more on ink than the machine cost. It's not broken. " +
  "It's a small grey landlord collecting rent.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), RANT, "utf8");
console.log(`Wrote ${RANT.length} characters to entry.txt`);
