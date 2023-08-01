<script>
  import { onMount } from "svelte";
  import Icon from "@iconify/svelte";

  let isDarkMode = false;

  onMount(() => {
    if (localStorage.theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  });
</script>

<button
  class="flex gap-3 items-center text-[1.2rem] sm:text-[1.6rem] font-semibold tracking-wide"
  on:click={() => {
    isDarkMode = document.documentElement.classList.toggle("dark");
    if (isDarkMode) localStorage.setItem("theme", "dark");
    else localStorage.setItem("theme", "light");
  }}
>
  {#if !isDarkMode}
    <Icon icon="ph:moon" />
    <span> Dark Mode</span>
  {:else}
    <Icon icon="ph:sun" />
    <span>Light Mode</span>
  {/if}
</button>
