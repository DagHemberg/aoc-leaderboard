import { AOC_SESSION } from "$env/static/private";

import { scheduleJob } from "node-schedule";
import { writeFileSync } from "node:fs";

const update = async () => {
  if (new Date().getMonth() != 11) return;
  const raw = await fetch(
    "https://adventofcode.com/2024/leaderboard/private/view/2321388.json",
    {
      headers: {
        cookie: `session=${AOC_SESSION}`,
      },
    },
  );
  const data = await raw.json();

  writeFileSync("./leaderboards/2024.json", JSON.stringify(data, null, 2));
  console.log("Leaderboard updated");
};
await update();
const job = scheduleJob("0 */15 * * * *", update);
