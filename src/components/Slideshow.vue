<template>
  <div class="w-screen h-1/4 flex flex-col justify-center items-center">
    <div class="w-4/6 h-5/6 rounded-2xl bg-gray-200 flex justify-center items-center">
      AD PICTURE - {{ slideshow_index + 1 }}
    </div>
    <div class="w-1/6 flex justify-evenly items-center mt-2">
      <div v-if="slideshow_index != 0" class="w-1/6 h-1 rounded-3xl bg-gray-400"></div>
      <div v-if="slideshow_index == 0" class="w-1/6 h-1 rounded-3xl bg-gray-200"></div>
      <div v-if="slideshow_index != 1" class="w-1/6 h-1 rounded-3xl bg-gray-400"></div>
      <div v-if="slideshow_index == 1" class="w-1/6 h-1 rounded-3xl bg-gray-200"></div>
      <div v-if="slideshow_index != 2" class="w-1/6 h-1 rounded-3xl bg-gray-400"></div>
      <div v-if="slideshow_index == 2" class="w-1/6 h-1 rounded-3xl bg-gray-200"></div>
      <div v-if="slideshow_index != 3" class="w-1/6 h-1 rounded-3xl bg-gray-400"></div>
      <div v-if="slideshow_index == 3" class="w-1/6 h-1 rounded-3xl bg-gray-200"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Slideshow",
  data() {
    return {
      slideshow_index: 0
    }
  },
  mounted() {
    window.setInterval(() => {
      this.changeSlideshowImg();
    }, 8000)
  },
  methods: {
    changeSlideshowImg() {
      if ((this.slideshow_index + 1) < 4) {
        this.slideshow_index++;
      } else {
        this.slideshow_index = 0;
      }
    }
  }
}
</script>

<style scoped>

</style>