<script lang="ts">
  import Main from "$lib/Main.svelte";
  import type { LeaderboardProps } from "$lib/Types.svelte";

  const { data }: { data: LeaderboardProps } = $props();
</script>

<Main leaderboard={data}/>
