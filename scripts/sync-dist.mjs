import { cpSync, existsSync, mkdirSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = resolve(__dirname, "..");
const dist = resolve(root, "dist");

if (!existsSync(dist)) {
  throw new Error("dist/ does not exist. Run npm run build first.");
}

mkdirSync(root, { recursive: true });
cpSync(resolve(dist, "index.html"), resolve(root, "index.html"), { force: true });

if (existsSync(resolve(dist, "assets"))) {
  cpSync(resolve(dist, "assets"), resolve(root, "assets"), {
    recursive: true,
    force: true
  });
}
