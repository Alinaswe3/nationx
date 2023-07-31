import type Country from "$lib/components/Country.svelte";
import { writable } from "svelte/store";

export const countries = writable<Array<Country>>([]);

export const isLoading = writable(true);
export const isError = writable(false);

const url = "https://restcountries.com/v3.1/all";

async function getNations(url: string) {
  try {
    const res = await fetch(url);
    countries.set(await res.json());
    isLoading.set(false);
  } catch (err) {
    isError.set(true);
  }
}

getNations(url);
