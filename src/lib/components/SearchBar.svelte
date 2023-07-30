<script>
  import Icon from "@iconify/svelte";
</script>

<div class="flex-grow max-w-[48rem] h-[5.6rem] relative">
  <input
    type="text"
    placeholder="Search for a country..."
    class="text-4xl input rounded-sm w-full h-full pl-20 tracking-wider placeholder:text-dark-gray"
  />
  <Icon
    icon="carbon:search"
    class="absolute top-1/2 -translate-y-1/2 left-5 w-10 h-10 text-dark-gray"
  />
</div>
