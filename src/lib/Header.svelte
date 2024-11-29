<script lang="ts">
  import type { DateProps } from "./Types.svelte";

  let { date }: DateProps = $props();
</script>

<div class="title">
  <div class="name">
    <a href="https://adventofcode.com">Advent of Code</a>
  </div>
  <div class="subtitle">
    // {date.toLocaleDateString()}
  </div>
</div>

<div class="desc">
  Häng med i årets roligaste julkalender med D-sektionen! Gå med i den här leaderboarden på <span><a href="https://adventofcode.com/leaderboard/private" class="green-glow">adventofcode.com</a></span> med koden <span class="white-glow">2321388-2646ec81</span>, och följ den via <span><a href="https://dsek.se/aoc" class="green-glow">dsek.se/aoc</a></span>. Uppdateras var 15:e minut.
</div>

<style>
  .desc {
    padding-bottom: 2em;
  }

  .name {
    font-size: 2.5em;
  }

  .subtitle {
    font-size: 1.5em;
  }

  .title {
    color: #00cc00;
    text-shadow:
      0 0 10px #00cc00,
      0 0 30px #00cc00;
    margin-bottom: 15px;
  }
</style>
