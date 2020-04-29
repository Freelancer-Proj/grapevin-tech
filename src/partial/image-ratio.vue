<template>
  <div class="image-ratio" :style="{paddingBottom: `calc(100% * ${ratioY} / ${ratioX})`, backgroundImage: `url(${imageLoaded})`}">
    <img :src="imageLink" style="display: none" @load="setImageLoaded">
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
  },
  data () {
    return {
      imageLoaded: null
    }
  },
  methods: {
    setImageLoaded() {
      this.imageLoaded = this.imageLink
    }
  }
}
</script>
<style scoped>
.image-ratio {
  height: 0;
  width: 100%;
  background-size: cover;
  background-color: #f0f0f0;
  background-repeat: no-repeat;
}
</style>
