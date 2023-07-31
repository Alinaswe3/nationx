<script lang="ts">
  import { page } from "$app/stores";
  import Icon from "@iconify/svelte";

  console.log($page);
</script>

<div
  class="text-center w-full h-full flex items-center justify-center flex-col gap-10"
>
  <Icon icon="material-symbols:error-outline" class="w-20 h-20" />
  {#if $page.status === 404}
    <h1>
      Country: <span class="font-semibold">{$page.params.country}</span> not found
    </h1>
  {:else}
    <div>
      <h1>Something went wrong</h1>
    </div>
  {/if}
  <a href="/">Go to home page</a>
</div>

<style>
  h1 {
    font-weight: 500;
    font-size: 4.2rem /* 72px */;
    line-height: 1;
    margin-bottom: 2rem;
  }

  a {
    background: hsl(209, 23%, 22%);
    color: #fff;
    padding: 1rem 2rem;
    font-size: 1.5rem;
    border-radius: 5px;
    transition: all 0.3s;
  }

  a:hover {
    background: hsl(207, 26%, 17%);
  }
</style>
