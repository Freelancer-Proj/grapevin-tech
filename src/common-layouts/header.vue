<template>
  <header class="">
    <div class="header header-sp">
      <div class="header-menu" @click="openNav()">
        <div></div>
        <div></div>
        <div></div>
      </div>
      <img class="logo" src="../assets/img/grape-w.png" alt="">
    </div>
    <div class="header header-pc container">
      <div class="header-box">
        <img class="logo" src="../assets/img/grape-w.png" alt="">
        <ul class="header-menu-bar">
          <li class="header-menu-bar-item" v-for="(item, index) in fullMenu" :key="index">
            <nuxt-link :to="item.link">
              <span :class="{ active : item.active }">{{ item.name }}</span>
            </nuxt-link>
          </li>
        </ul>
      </div>
    </div>
  </header>
</template>
<script>
import { mapState } from 'vuex'

export default {
  data() {
    return {
      fullMenu: [
      {
        name: 'Home',
        link: '/home',
        active: true
      },
      {
        name: 'Blogs',
        link: '/blogs',
        active: false
      },
      {
        name: 'News',
        link: '/news',
        active: false
      },
      {
        name: 'Contact',
        link: '/contact',
        active: false
      }
    ],
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
