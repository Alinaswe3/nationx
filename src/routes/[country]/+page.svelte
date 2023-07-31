<script lang="ts">
  import Container from "$lib/components/Container.svelte";
  import Header from "$lib/components/Header.svelte";
  import Icon from "@iconify/svelte";
  import { byIso } from "country-code-lookup";

  export let data;
  const [country] = data.country;

  let currenciesString = "undefined";
  let languagesString = "undefined";
  let borders: Array<any> = [];
  let nativeNames: Array<{
    official: string;
    common: string;
  }> = [];

  if (country.name.nativeName) {
    nativeNames = Object.values(country.name.nativeName);
  }

  if (country.currencies) {
    let currencies: Array<{
      name: string;
      symbol: string;
    }> = Object.values(country.currencies);

    currenciesString = currencies.map((currency) => currency.name).join(", ");
  }

  if (country.languages) {
    let languages: Array<object> = Object.values(country.languages);
    languagesString = languages.join(", ");
  }

  if (country.borders) {
    country.borders.forEach((bor: string) => {
      borders.push(byIso(bor));
    });
  }

  function commafy(num: number) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
</script>

<Container classes="flex flex-col gap-[4rem] w-full h-full">
  <Header />
  <a href="/" class="ml-8 flex gap-3 items-center text-[1.6rem] font-light"
    ><Icon icon="ph:arrow-left" class="w-8 h-8" /> Back</a
  >
  <div class="h-full w-full grid grid-cols-2 gap-[12rem]">
    <div>
      <img
        src={country.flags.png}
        alt={country.flags.alt}
        class="w-full h-[40rem] rounded-[5px]"
      />
    </div>
    <div>
      <h2 class="text-[3.2rem] font-extrabold mb-[2.4rem]">
        {country.name.common}
      </h2>
      <div class="flex justify-between mb-[7rem] gap-12">
        <ul>
          <li>
            <span>Native Name:</span>
            <span>{nativeNames[0] ? nativeNames[0].common : "undefined"}</span>
          </li>
          <li>
            <span>Population:</span>
            <span
              >{country.population
                ? commafy(country.population)
                : "undefined"}</span
            >
          </li>
          <li>
            <span>Region:</span>
            <span>{country?.region}</span>
          </li>
          <li>
            <span>Sub Region:</span>
            <span>{country?.subregion}</span>
          </li>
          <li>
            <span>Capital:</span><span
              >{country.capital ? country.capital[0] : "undefined"}</span
            >
          </li>
        </ul>
        <ul>
          <li>
            <span>Top Level Domain:</span>
            <span>{country.tld[0] ? country.tld[0] : "undefined"}</span>
          </li>
          <li>
            <span>Currencies:</span>
            <span>{currenciesString}</span>
          </li>
          <li>
            <span>Languages:</span>
            <span>{languagesString}</span>
          </li>
        </ul>
      </div>
      <div class="flex flex-wrap gap-6 items-center">
        <p class="text-[1.6rem] font-semibold">Border Countries:</p>
        {#if borders.length > 0}
          {#each borders as nation}
            <p
              class="bg-white dark:bg-dark-blue px-5 py-2 shadow-md font-light text-[1.4rem] rounded-[5px]"
            >
              {nation.country}
            </p>
          {/each}
        {:else}
          <p class="ml-[-1rem] text-[1.4rem] font-medium">None</p>
        {/if}
      </div>
    </div>
  </div>
</Container>

<style>
  li {
    display: flex;
    gap: 5px;
    font-size: 1.6rem;
    flex-wrap: wrap;
  }

  ul {
    line-height: 3.2rem;
  }

  li span:first-child {
    font-weight: 600;
  }
</style>
