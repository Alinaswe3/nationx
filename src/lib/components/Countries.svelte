<script lang="ts">
  import { countries } from "$lib/stores/CountriesStore";
  import { isLoading } from "$lib/stores/CountriesStore";
  import { isError } from "$lib/stores/CountriesStore";
  import { searchedCountry } from "$lib/stores/CountriesStore";
  import { selectedRegion } from "$lib/stores/CountriesStore";
  import Country from "./Country.svelte";

  $: searchVal = $searchedCountry.trim().toLowerCase();
  $: nations = $countries
    .filter(
      (country) =>
        country.name.common.toLowerCase().includes(searchVal) ||
        country.name.official.toLowerCase().includes(searchVal),
    )
    .filter((country) =>
      country.region.toLowerCase().includes($selectedRegion.toLowerCase()),
    );
</script>

<div class="countries w-full h-full overflow-y-auto pr-4">
  {#if $isLoading}
    <span
      class="text-darker-blue mt-16 dark:bg-white bg-dark-blue justify-self-center col-span-4 dark:text-light-gray loading loading-bars loading-lg"
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
    gap: 5.6rem;
    justify-content: center;
    padding-bottom: 2.4rem;
    grid-template-columns: repeat(auto-fill, 26rem);
  }
</style>
