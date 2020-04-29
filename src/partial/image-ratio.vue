<template>
  <div class="image-ratio" :style="{paddingBottom: `calc(100% * ${ratioY} / ${ratioX})`, backgroundImage: `url(${imageLink})`}">
  </div>
</template>
<script>
export default {
  props: {
    imageLink: String,
    ratioX: {
      type: Number,
      default: 1
    },
    ratioY: {
      type: Number,
      default: 1
    }
  }
}
</script>
<style scoped>
.image-ratio {
  height: 0;
  width: 100%;
  background-size: cover;
  background-repeat: no-repeat;
}
</style>
