<script>
  import Icon from "@iconify/svelte";
  import { searchedCountry } from "$lib/stores/CountriesStore";
</script>

<div
  class="flex-grow max-w-[48rem] h-[5.6rem] relative rounded-[5px] overflow-hidden"
>
  <input
    bind:value={$searchedCountry}
    type="text"
    placeholder="Search for a country..."
    class="placeholder:text-[1.4rem] placeholder:sm:text-[1.2rem] text-3xl input rounded-sm w-full h-full pl-20 tracking-wider bg-white text-darker-blue dark:text-white dark:bg-dark-blue placeholder:text-dark-gray"
  />
  <Icon
    icon="carbon:search"
    class="absolute top-1/2 -translate-y-1/2 left-5 w-10 h-10 text-dark-gray"
  />
</div>
