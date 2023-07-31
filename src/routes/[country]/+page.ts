import { error } from "@sveltejs/kit";

export async function load({ params }) {
  const url = `https://restcountries.com/v3.1/name/${params.country}?fullText=true`;

  const res = await fetch(url);
  const data = await res.json();

  if (data.status === 404)
    throw error(404, {
      message: "Country not found",
    });

  return {
    country: data,
  };
}
