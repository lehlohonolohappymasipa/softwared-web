import { existsSync } from "node:fs";
import { rm } from "node:fs/promises";
import { spawn } from "node:child_process";

const nextDir = new URL("../.next", import.meta.url);

try {
  if (existsSync(nextDir)) {
    await rm(nextDir, { recursive: true, force: true });
    console.log("Removed .next cache:", nextDir.pathname);
  }
} catch (error) {
  console.warn("Could not remove .next cache:", error?.message ?? error);
}

const child = spawn("npm", ["run", "build"], {
  stdio: "inherit",
  env: process.env,
  shell: true,
});

child.on("exit", (code) => process.exit(code ?? 0));
