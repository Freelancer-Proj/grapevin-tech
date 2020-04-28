<template>
  <div>
    <app-header/>
    <app-nav/>
    <nuxt />
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
  watch:{
    $route (to, from){
      // this.$store.commit('setSidebar', false)
    }
  },
  methods: {
    scrollTop() {
      window.scrollTo({top: 0, behavior: 'smooth'})
    }
  }
}
</script>
