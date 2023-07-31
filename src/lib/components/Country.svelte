<script lang="ts">
  import type Country from "$lib/components/Country.svelte";
  export let data: Country;

  function commafy(num: number) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
</script>

<a
  href={data.name.common}
  class="rounded-[5px] overflow-hidden shadow-lg flex flex-col w-full h-[33.6rem] dark:bg-dark-blue bg-white"
>
  <img
    src={data.flags.svg}
    alt={data.flags.alt}
    class="w-full h-[48%] scale-110"
  />
  <div class="p-[2.4rem]">
    <p class="font-extrabold mb-5 text-[1.8rem]">{data.name.common}</p>
    <div class="flex flex-col gap-1 text-[1.4rem]">
      <p>
        <span class="font-semibold mr-2">Population:</span><span
          >{commafy(data.population)}</span
        >
      </p>
      <p>
        <span class="font-semibold mr-2">Region:</span><span>{data.region}</span
        >
      </p>
      <p>
        <span class="font-semibold mr-2">Capital:</span><span
          >{data.capital ? data.capital[0] : ""}</span
        >
      </p>
    </div>
  </div>
</a>
