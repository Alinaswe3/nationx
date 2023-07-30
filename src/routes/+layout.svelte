<script>
  import "../app.postcss";
  import "@fontsource-variable/nunito-sans";
</script>

<slot />

<style>
  :global(body) {
    font-family: "Nunito Sans", sans-serif;
  }
</style>
