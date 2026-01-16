import { existsSync } from "node:fs";
import { rm } from "node:fs/promises";
import { spawn } from "node:child_process";

const lockPath = new URL("../.next/dev/lock", import.meta.url);

try {
  if (existsSync(lockPath)) {
    await rm(lockPath, { force: true });
    console.log("Removed stale Next.js dev lock:", lockPath.pathname);
  }
} catch (error) {
  console.warn("Could not remove dev lock:", error?.message ?? error);
}

const child = spawn("npm", ["run", "dev"], {
  stdio: "inherit",
  env: process.env,
  shell: true,
});

child.on("exit", (code) => process.exit(code ?? 0));
