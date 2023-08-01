<script lang="ts">
  import { countries } from "$lib/stores/CountriesStore";
  import { isLoading } from "$lib/stores/CountriesStore";
  import { isError } from "$lib/stores/CountriesStore";
  import { searchedValue } from "$lib/stores/CountriesStore";
  import Country from "./Country.svelte";

  $: searchVal = $searchedValue.trim().toLowerCase();
  $: nations = $countries.filter(
    (country) =>
      country.name.common.toLowerCase().includes(searchVal) ||
      country.name.official.toLowerCase().includes(searchVal),
  );
</script>

<div class="countries w-full h-full overflow-scroll">
  {#if $isLoading}
    <span
      class="text-darker-blue dark:text-light-gray loading loading-bars loading-lg"
    ></span>
  {:else if !$isLoading && !$isError}
    {#each nations as country}
      <Country data={country} />
    {/each}
  {:else}
    <p style="color: red">Something went wrong</p>
  {/if}
</div>

<style>
  .countries {
    display: grid;
    gap: 6.6rem;
    justify-content: center;
    padding-bottom: 2.4rem;
    grid-template-columns: repeat(auto-fill, 26rem);
  }
</style>
