<script lang="ts">
  import Icon from "@iconify/svelte";
  import { selectedRegion } from "$lib/stores/CountriesStore";

  let isVisible = false;
  let selectedValue = "";

  $: {
    if (selectedValue !== "Filter by region") $selectedRegion = selectedValue;
  }

  function setSelectedValue(value: string) {
    selectedValue = value;
    isVisible = false;
  }
</script>

<div
  class="relative w-[20rem] h-[5.6rem] text-[1.4rem] dark:text-white text-very-dark-blue"
>
  <button
    on:click={() => (isVisible = !isVisible)}
    class="flex items-center justify-between pl-[2.4rem] pr-[1.8rem] rounded-[5px] w-full h-full dark:bg-dark-blue dark:text-white bg-white"
  >
    <span>{selectedValue || "Filter by region"}</span>
    <Icon
      icon="ion:chevron-down"
      class={`transition-all duration-300 ${
        isVisible ? "rotate-180" : "rotate-0"
      }`}
    />
  </button>

  <ul
    class={`${
      isVisible ? "show" : "hide"
    } [&>*:hover]:dark:bg-dark-gray [&>*:hover]:bg-dark-gray absolute overflow-hidden dark:bg-dark-blue bg-white w-full z-30 top-full mt-4 left-0 rounded-[5px] flex flex-col`}
  >
    <li>
      <button on:click={() => setSelectedValue("Filter by region")}>
        None
      </button>
    </li>
    <li>
      <button on:click={() => setSelectedValue("Africa")}> Africa </button>
    </li>
    <li>
      <button on:click={() => setSelectedValue("America")}> America </button>
    </li>
    <li>
      <button on:click={() => setSelectedValue("Asia")}> Asia </button>
    </li>
    <li>
      <button on:click={() => setSelectedValue("Europe")}> Europe </button>
    </li>
    <li>
      <button on:click={() => setSelectedValue("Oceania")}> Oceania </button>
    </li>
  </ul>
</div>

<style>
  li button {
    cursor: pointer;
    padding: 1.6rem 2.4rem;
    width: 100%;
    text-align: start;
  }

  .show {
    opacity: 1;
    visibility: visible;
    transform: translateY(0%);
    transition: all 0.3s;
  }

  .hide {
    transform: translateY(10%);
    opacity: 0;
    visibility: hidden;
    transition: all 0.3s;
  }
</style>
