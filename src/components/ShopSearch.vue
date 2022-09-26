<template>
  <div class="flex w-2/6">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-7 h-7 mr-3">
      <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
    </svg>
    <input id="shop_search" class="search-input p-1 text-center w-5/6" placeholder="Search . . .">
  </div>
</template>

<script>
export default {
  name: "ShopSearch",
  data() {
    return {}
  },
  mounted() {
    window.addEventListener('keydown', this.keyInput);
  },
  methods: {
    keyInput(event) {
      if (document.activeElement.id !== 'shop_search') {
        return false;
      }

      if (event.key === 'Enter') {
        this.send();
      }
    },
    send() {

    }
  }
}
</script>

<style scoped>

</style>