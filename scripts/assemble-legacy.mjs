import { cp, mkdir, rm } from "node:fs/promises";
import { resolve } from "node:path";

const root = resolve(import.meta.dirname, "..");
const source = resolve(root, "legacy", "dist", "intuise-web", "browser");
const destination = resolve(root, "dist", "legacy");

await rm(destination, { recursive: true, force: true });
await mkdir(destination, { recursive: true });
await cp(source, destination, { recursive: true });

console.log(`Legacy Angular build copied to ${destination}`);
