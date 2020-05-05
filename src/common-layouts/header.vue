<template>
  <header class="">
    <div class="header-menu" @click="openNav()">
      <div></div>
      <div></div>
      <div></div>
    </div>
    <img class="logo" src="../assets/img/grape-w.png" alt="">
  </header>
</template>
<script>
import { mapState } from 'vuex'

export default {
  data() {
    return {
      // sidebarDisplay: false
    }
  },
  methods: {
    openNav() {
      // this.sidebarDisplay = true
      this.$store.commit('openNav', true)
    }
  }
}
</script>
<style lang="scss">
</style>
