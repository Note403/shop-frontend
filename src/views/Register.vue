<template>
  <div class="w-screen h-screen flex justify-center items-center">
    <div class="h-3/6 w-1/4 shadow shadow-gray-400 rounded-2xl flex flex-col justify-center items-center flex flex-col justify-center items-center">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-10 h-10 mb-4">
        <path fill-rule="evenodd" d="M8.25 6.75a3.75 3.75 0 117.5 0 3.75 3.75 0 01-7.5 0zM15.75 9.75a3 3 0 116 0 3 3 0 01-6 0zM2.25 9.75a3 3 0 116 0 3 3 0 01-6 0zM6.31 15.117A6.745 6.745 0 0112 12a6.745 6.745 0 016.709 7.498.75.75 0 01-.372.568A12.696 12.696 0 0112 21.75c-2.305 0-4.47-.612-6.337-1.684a.75.75 0 01-.372-.568 6.787 6.787 0 011.019-4.38z" clip-rule="evenodd" />
        <path d="M5.082 14.254a8.287 8.287 0 00-1.308 5.135 9.687 9.687 0 01-1.764-.44l-.115-.04a.563.563 0 01-.373-.487l-.01-.121a3.75 3.75 0 013.57-4.047zM20.226 19.389a8.287 8.287 0 00-1.308-5.135 3.75 3.75 0 013.57 4.047l-.01.121a.563.563 0 01-.373.486l-.115.04c-.567.2-1.156.349-1.764.441z" />
      </svg>
      <input class="input w-1/2 mb-4" placeholder="Name" type="text" v-model="data.name">
      <input class="input w-1/2 mb-4" placeholder="E-Mail" type="text" v-model="data.email">
      <input class="input w-1/2 mb-4" placeholder="Password" type="password" v-model="data.password">
      <input class="input w-1/2 mb-4" placeholder="Confirm Password" type="password" v-model="data.confirm_password">
      <button class="btn btn-primary">Register</button>
      <a href="/" class="flex mt-1 justify-center items-center url">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
          <path fill-rule="evenodd" d="M7.28 7.72a.75.75 0 010 1.06l-2.47 2.47H21a.75.75 0 010 1.5H4.81l2.47 2.47a.75.75 0 11-1.06 1.06l-3.75-3.75a.75.75 0 010-1.06l3.75-3.75a.75.75 0 011.06 0z" clip-rule="evenodd" />
        </svg>
        <div class="ml-1">
          Home
        </div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "Register",
  data() {
    return {
      data: {
        name: null,
        email: null,
        password: null,
        confirm_password: null
      }
    }
  },
  mounted() {
  },
  methods: {
    register() {

    },
    validate() {
      for (const [key, value] of Object.entries(this.data)) {
        if (value == null) {
          return false;
        }
      }
    }
  }
}
</script>

<style scoped>

</style>