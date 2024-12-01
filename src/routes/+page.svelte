<script lang="ts">
  import Main from "$lib/Main.svelte";
  import type { Leaderboard } from "$lib/Types.svelte";

  const { data }: { data: Leaderboard } = $props();
</script>

<Main leaderboard={data}/>
