<script lang="ts">
  import { intervalToDuration } from "date-fns";
  import type { Props } from "$lib/Types.svelte";

  const { date, leaderboard }: Props = $props();

  const formatDuration = (part2: number) => {
    const fmt = (unit: string, value: number | undefined) =>
      value ? `${value}${unit} ` : "";

    const duration = intervalToDuration({
      start: date.getTime(),
      end: part2 * 1000,
    });

    const unitMap = {
      y: duration.years,
      mo: duration.months,
      d: duration.days,
      h: duration.hours,
      m: duration.minutes,
      s: duration.seconds,
    };

    return Object.entries(unitMap)
      .map(([unit, duration]) => fmt(unit, duration))
      .join("")
      .trim();
  };

  const top5 = Object.values(leaderboard.members)
    .map((member) => ({
      id: member.id,
      timestamp: member.completion_day_level[date.getDate()]?.[2]?.get_star_ts,
    }))
    .filter((member) => member.timestamp)
    .sort((a, b) => (a.timestamp ?? Infinity) - (b.timestamp ?? Infinity))
    .slice(0, 5);
</script>

<div>
  {#if date.getDate() < 26}
    {#if top5.length != 0}
      <p class="top-desc mb-[.5em]">Dagens top 5:</p>
      <ol class="list-decimal pl-[2em]">
        {#each top5 as { id, timestamp }, i}
          {#if timestamp}
            <li class="leaderboard-item leaderboard-pos-{i} pl-[1em]">
              <p class="toplist-name">{leaderboard.members[id].name}</p>
              <span>{new Date(timestamp * 1000).toLocaleTimeString()}</span>
              /
              <span>{formatDuration(timestamp)}</span>
            </li>
          {/if}
        {/each}
      </ol>
    {/if}
  {/if}
</div>

<style>
  .top-desc {
    font-size: 1.2em;
  }

  .leaderboard-item {
    margin-bottom: 1em;
  }

  .leaderboard-pos-0 .toplist-name {
    font-size: 2em;
    color: #ffff66;
    text-shadow:
      0 0 2px #fff200,
      0 0 15px #fff200;
  }

  .leaderboard-pos-1 .toplist-name {
    font-size: 1.5em;
    color: #deedfe;
    text-shadow:
      0 0 2px #deedfe,
      0 0 15px #deedfe;
  }

  .leaderboard-pos-2 .toplist-name {
    font-size: 1.2em;
    color: #ea9745;
    text-shadow:
      0 0 2px #cd7f32,
      0 0 5px #cd7f32;
  }

  .leaderboard-pos-3 .toplist-name {
    text-shadow:
      0 0 2px #cccccc50,
      0 0 5px #cccccc50;
  }

  .leaderboard-pos-4 .toplist-name {
    text-shadow:
      0 0 2px #cccccc50,
      0 0 5px #cccccc50;
  }
</style>
