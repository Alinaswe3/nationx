<script>
  import Container from "$lib/components/Container.svelte";
  import Filters from "$lib/components/Filters.svelte";
  import Header from "$lib/components/Header.svelte";
</script>

<div
  class="grid grid-rows-[max-content_minmax(max-content,1fr)] gap-[4rem] h-full"
>
  <Header />
  <Container classes="h-full w-full">
    <Filters />
    <div></div>
  </Container>
</div>
