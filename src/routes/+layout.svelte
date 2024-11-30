<script lang="ts">
  import "../app.css";

  let { children } = $props();
</script>

<svelte:head>
  <title>Advent of Code | D-sektionen</title>
</svelte:head>

{@render children()}
