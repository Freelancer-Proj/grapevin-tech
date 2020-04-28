<template>
  <div class="main">
    <section>
      <video width="100%" id="video-background" muted loop autoplay="autoplay" playsinline>
        <source src="../assets/video/video-bg.mp4" type="video/mp4">
      </video>
    </section>
  </div>
</template>

<script>
const isServer = typeof window === 'undefined'
const WOW = !isServer ? require('wow.js') : null

import Dialog from '../components/dialog.vue'

export default {
  components: {
    Dialog
  },
  data() {
    return {
    }
  },
  mounted() {
    new WOW().init()
  },
  methods: {
  }
}
</script>
