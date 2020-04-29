<template>
  <nav class="menu" :class="{ 'nav-lock': lock, 'nav-close': closed }">
    <div class="shortcut-menu">
      <img class="logo" src="../assets/img/grape-w-vertical.png" alt="">
      <ul class="menu-bar shortcut-menu-bar">
        <li v-for="(item, index) in shortcutMenu" :key="index" @click="activeSection(index)" :class="{ active : item.active }">
          <span :class="{ active : item.active }">{{ item.name }}</span>
          <span class="menu-line"></span>
        </li>
      </ul>
    </div>
    <div class="full-menu">
      <a class="close-btn" @click="closeMenu()"><i class="material-icons">close</i></a>
      <div class="menu-container">
        <img class="logo" src="../assets/img/grape-w.png" alt="">
        <ul class="menu-bar">
          <li v-for="(item, index) in fullMenu" :key="index" @click="activeSection(index)">
            <span :class="{ active : item.active }">{{ item.name }}</span>
            <ul class="menu-bar-sub">
              <li v-for="(child, indexChild) in item.child" :key="indexChild" :class="{ active : item.active && child.active }">{{ child.name }}</li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
    <i class="material-icons icon-lock" @click="toggleLock()">{{!lock? 'lock_open' : 'lock_outline'}}</i>
  </nav>
</template>
<script>
import { mapState } from 'vuex'

export default {
  props: ['type'],
  data: () => ({
    lock: false,
    closed: false,
    customWidth: 'auto',
    fullMenu: [
      {
        name: 'Home',
        child: [
          {
            name: 'About us',
            active: true
          },
          {
            name: 'PortFolio',
            active: false
          },
          {
            name: 'Our Team',
            active: false
          },
        ],
        active: true
      },
      {
        name: 'Blogs',
        active: false
      },
      {
        name: 'News',
        active: false
      },
      {
        name: 'Contact',
        active: false
      }
    ],
    shortcutMenu: [
      {
        name: '01',
        active: true
      },
      {
        name: '02',
        active: false
      },
      {
        name: '03',
        active: false
      },
      {
        name: '04',
        active: false
      }
    ]
  }),
  methods: {
    activeSection(id) {
    },
    toggleLock() {
      this.lock = !this.lock
      this.$store.commit('toggleLockNavbar', this.lock)
    },
    closeMenu() {
      this.lock = false;
      this.closed = true;
      setTimeout(() => {
       this.closed = false;
      }, 500)
    }
  }
}
</script>
<style lang="scss">
</style>
