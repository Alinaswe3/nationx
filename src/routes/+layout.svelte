<script>
  import "../app.postcss";
  import "@fontsource-variable/nunito-sans";
</script>

<svelte:head>
  <title>NationX - The Country Dictionary</title>
</svelte:head>

<slot />

<style>
  :global(body) {
    font-family: "Nunito Sans", sans-serif;
  }
</style>
