<template>
  <div>
    <app-header/>
    <app-nav/>
    <div class="wrapper" :class="{'wrapper-lock': navbarIsLock}">
      <nuxt />
    </div>
    <app-footer/>
  </div>
</template>
<script>
import AppHeader from '../common-layouts/header'
import AppFooter from '../common-layouts/footer'
import AppNav from '../common-layouts/nav'


export default {
  components: {
    AppHeader,
    AppFooter,
    AppNav
  },
  // watch:{
  //   $route (to, from){
  //     // this.$store.commit('setSidebar', false)
  //   }
  // },
  computed: {
    navbarIsLock () {
      return this.$store.state.navbarIsLock
    }
  },
  methods: {
    scrollTop() {
      window.scrollTo({top: 0, behavior: 'smooth'})
    }
  }
}
</script>
