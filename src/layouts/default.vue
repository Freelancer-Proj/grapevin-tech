<template>
  <div>
    <app-header v-if="isHeaderShow"/>
    <app-nav/>
    <div class="wrapper" :class="{'wrapper-lock': navbarIsLock, 'no-wrapper': !shortcutNavbarIsShow}">
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
  watch:{
    $route (to, from){
      this.isHeaderShow = $(window).width() < 768 || !['/home', '/'].includes(to.path)
      console.log(to.path, this.isHeaderShow)
    }
  },
  data() {
    return {
      isHeaderShow: false
    }
  },
  computed: {
    navbarIsLock () {
      return this.$store.state.navbarIsLock
    },
    shortcutNavbarIsShow () {
      return this.$store.state.shortcutNavbarIsShow
    },
  },
  mounted () {
    this.isHeaderShow = $(window).width() < 768 || !['/home', '/'].includes(this.$route.path)
    window.addEventListener("resize", () => {
      this.isHeaderShow = $(window).width() < 768 || !['/home', '/'].includes(this.$route.path)
    })
  },
  methods: {
    scrollTop() {
      window.scrollTo({top: 0, behavior: 'smooth'})
    }
  }
}
</script>
