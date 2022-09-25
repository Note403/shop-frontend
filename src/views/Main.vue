<template>
  <div class="w-screen h-screen flex flex-col">
    <TopBar @login="showLogin"></TopBar>
    <Login v-if="vis.login" @close="closeModals"></Login>
    <div class="w-screen h-screen">

    </div>
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
    },
    closeModals() {
      for (const [key, value] of Object.entries(this.vis)) {
        this.vis[key] = false;
      }
    }
  }
}
</script>

<style scoped>

</style>