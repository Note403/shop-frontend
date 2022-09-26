<template>
  <div class="w-screen h-20 flex items-center shadow shadow-gray-400">
    <div class="text-2xl ml-10">
      TestShop
    </div>
    <ShopSearch class="ml-auto mr-auto"></ShopSearch>
    <button @click="loginForm" class="btn btn-primary mr-10">Login</button>
  </div>
</template>

<script>
export default {
  name: "TopBar",
  data() {

  },
  mounted() {
  },
  methods: {
    loginForm() {
      this.$emit('login');
    }
  }
}
</script>

<style scoped>

</style>