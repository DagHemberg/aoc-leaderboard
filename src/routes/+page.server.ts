import type { Leaderboard } from "$lib/Types.svelte";
import { readFileSync } from "node:fs";

export function load(): Leaderboard {
  const json = readFileSync("./leaderboards/2024.json", "utf-8");
  const leaderboard: Leaderboard = JSON.parse(json.toString());
  return leaderboard;
}
