<script>
  import Icon from "@iconify/svelte";
  import { searchedValue } from "$lib/stores/CountriesStore";
</script>

<div
  class="flex-grow max-w-[48rem] h-[5.6rem] relative rounded-[5px] overflow-hidden"
>
  <input
    bind:value={$searchedValue}
    type="text"
    placeholder="Search for a country..."
    class="text-4xl input rounded-sm w-full h-full pl-20 tracking-wider bg-white text-darker-blue dark:text-white dark:bg-dark-blue placeholder:text-dark-gray"
  />
  <Icon
    icon="carbon:search"
    class="absolute top-1/2 -translate-y-1/2 left-5 w-10 h-10 text-dark-gray"
  />
</div>
