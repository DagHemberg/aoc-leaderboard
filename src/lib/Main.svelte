<script lang="ts">
  import LongList from "$lib/LongList.svelte";
  import ShortList from "$lib/ShortList.svelte";
  import Header from "$lib/Header.svelte";
  import Footer from "$lib/Footer.svelte";
  import type { LeaderboardProps } from "$lib/Types.svelte";

  const YEAR = 2024; // TODO: change based on route
  const MONTH = 11; // december

  let date = $state(new Date(YEAR, MONTH, new Date().getDate(), 6));

  setInterval(() => {
    date = new Date(YEAR, MONTH, new Date().getDate(), 6);
  }, 1000);

  const { leaderboard }: LeaderboardProps = $props();
</script>

<main>
  <div class="content">
    <div class="left-side">
      <Header {date} />
      <ShortList {date} {leaderboard} />
      <Footer />
    </div>
    <div class="right-side">
      <LongList {date} {leaderboard} />
    </div>
  </div>
</main>

<style>
  :global(html) {
    font-family: "Source Code Pro";
    font-size: 1.05vw;
    color: #cccccc;
    background-color: #0f0f23;
  }

  :root {
    --top: 60px;
    --side: 100px;
  }

  .content {
    display: flex;
    justify-content: space-between;
    overflow: auto;
    height: 100vh;
  }

  .left-side {
    justify-content: start;
    width: 70vw;
    position: sticky;
    padding-left: var(--side);
    padding-top: var(--top);
    top: 0;
  }

  .right-side {
    display: flex;
    justify-content: end;
    padding-right: var(--side);
    padding-top: var(--top);
    width: 100vw;
    margin-bottom: var(--top);
  }
</style>
