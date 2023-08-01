<script>
  import Container from "$lib/components/Container.svelte";
  import ThemeToggle from "$lib/components/ThemeToggle.svelte";
</script>

<header
  class="bg-white dark:bg-dark-blue w-full min-h-fit h-[8rem] shadow-sm flex items-center"
>
  <Container classes="flex items-center justify-between py-6 w-full">
    <a href="/">
      <h1 class="font-extrabold text-[1.4rem] sm:text-[2.4rem]">
        Where in the world?
      </h1>
    </a>
    <ThemeToggle />
  </Container>
</header>
