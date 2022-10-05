<template>
  <div class="w-screen h-screen flex flex-col">
    <TopBar @login="showLogin"></TopBar>
    <Login v-if="vis.login" @close="closeModals"></Login>
    <div class="w-screen h-screen">
      <Slideshow></Slideshow>
      <Alert :message="alert.message" :type="alert.type"></Alert>
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
      },
      alert: {
        message: null,
        type: null
      }
    }
  },
  computed: {
    api_url() {
      return this.$store.getters.getApiURL;
    }
  },
  mounted() {
    window.addEventListener('keydown', this.testInput);

    console.log(this.api_url);
  },
  methods: {
    showLogin() {
      this.vis.login = true;
    },
    closeModals() {
      for (const [key, value] of Object.entries(this.vis)) {
        this.vis[key] = false;
      }
    },
    testInput(event) {
      switch (event.key) {
        case '1':
          this.alertmsg('Success Alert', 'success');
          break;
        case '2':
          this.alertmsg('Error Alert', 'error');
          break;
        case '3':
          this.alertmsg('Info Alert', 'info');
          break;
        default:
          return;
      }
    },
    alertmsg(message, type) {
      this.alert.message = message;
      this.alert.type = type;

      setTimeout(() => {
        this.alert.message = null;
        this.alert.type = null;
      }, 5000);
    }
  }
}
</script>

<style scoped>

</style>