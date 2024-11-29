<script lang="ts">
  import type { Member, Props } from "$lib/Types.svelte";

  const { date, leaderboard }: Props = $props();

  const now = new Date();

  function starColor(member: Member, day: number) {
    const thisDay = member.completion_day_level[day];
    return thisDay ? (thisDay[2] ? "goldstar" : "silverstar") : "graystar";
  }

  function shouldBeGray(day: number) {
    return now.getFullYear() == date.getFullYear() && day > now.getDate();
  }

  const sorted = Object.values(leaderboard.members).toSorted(
    (a, b) => b.local_score - a.local_score
  );
</script>

<div class="content">
  {#if sorted.filter((m) => m.stars > 0).length == 0}
    <div class="empty-list text-center">
      Här var det tomt.
      <br />
      Listan fylls på när folk får stjärnor!
    </div>
  {:else}
    <div class="daylist">
      {"        "}
      {#each [...Array(25).keys()] as i}
        {@const day = i + 1}
        {@const parts = day
          .toString()
          .padStart(2, " ")
          .split("")
          .join("<br />")}
        <span class="inline-block graystar">
          {#if !shouldBeGray(day)}
            <a href="https://adventofcode.com/{date.getFullYear()}/day/{day}">
              {@html parts}
            </a>
          {:else}
            {@html parts}
          {/if}
        </span>
      {/each}
    </div>
  {/if}

  <ol class="list-decimal whitespace-pre">
    {#each sorted as member}
      {#if member.stars > 0}
        <li>
          <p class="sb goldstar inline-block star-counter">
            {member.stars.toString().padStart(2, " ")}*
          </p>
          <p class="sb inline-block score">
            {member.local_score.toString().padStart(4, " ")}
          </p>
          <div class="sb inline-block all-stars">
            {#each [...Array(25).keys()] as i}
              {@const day = i + 1}
              {#if shouldBeGray(day)}
                <span class="lockedstar">{" "}</span>
              {:else}
                <span class={starColor(member, day)}>*</span>
              {/if}
            {/each}
          </div>
          <p class="sb inline-block name">{member.name}</p>
        </li>
      {/if}
    {/each}
    <div class="pb-[40px]"></div>
  </ol>
</div>

<style>
  .daylist {
    line-height: 1.2;
    padding-bottom: 4px;
  }

  .content {
    display: flex;
    flex-direction: column;
    white-space-collapse: preserve;
  }

  .empty-list {
    color: #999999;
    display: flex;
    align-items: center;
    justify-content: start;
    padding-right: 20%;
    height: 80vh;
  }

  .graystar {
    color: #333333;
  }

  .silverstar {
    color: #9999cc;
  }

  .goldstar {
    color: #ffff66;
  }

  .lockedstar {
    color: transparent;
  }

  .list-decimal > li::marker {
    content: counter(list-item) ") ";
  }
</style>
