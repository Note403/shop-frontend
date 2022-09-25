<template>
  <div class="w-screen h-screen flex flex-col">
    <TopBar @login="showLogin"></TopBar>
    <Login></Login>
  </div>
</template>

<script>
export default {
  name: "Main",
  data() {
    return {
      vis: {
        login: false
      }
    }
  },
  mounted() {
  },
  methods: {
    showLogin() {
      this.vis.login = true;
    }
  }
}
</script>

<style scoped>

</style>