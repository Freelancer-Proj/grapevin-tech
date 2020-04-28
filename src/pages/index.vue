<template>
  <div class="main">
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
