<script>
  import Container from "$lib/components/Container.svelte";
  import Countries from "$lib/components/Countries.svelte";
  import Filters from "$lib/components/Filters.svelte";
  import Header from "$lib/components/Header.svelte";
</script>

<div class="grid grid-rows-[max-content_1fr] gap-[4rem] h-full">
  <Header />
  <Container
    classes="grid grid-rows-[max-content_1fr] gap-[2rem] h-full w-full overflow-scroll"
  >
    <Filters />
    <Countries />
  </Container>
</div>
