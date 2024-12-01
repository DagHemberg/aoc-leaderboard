import type { LeaderboardProps } from "$lib/Types.svelte";
import { readFileSync } from "node:fs";

export function load(): LeaderboardProps {
  const json = readFileSync("./leaderboards/2024.json", "utf-8");
  const leaderboard: LeaderboardProps = JSON.parse(json.toString());
  return leaderboard;
}
