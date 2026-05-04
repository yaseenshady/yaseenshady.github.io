import { cp, mkdir, rm, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const rootDir = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const distDir = path.join(rootDir, "dist");

await rm(path.join(rootDir, "index.html"), { force: true });
await rm(path.join(rootDir, "assets"), { recursive: true, force: true });
await mkdir(path.join(rootDir, "assets"), { recursive: true });
await cp(distDir, rootDir, { recursive: true });
await writeFile(path.join(rootDir, ".nojekyll"), "");
