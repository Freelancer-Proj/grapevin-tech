<template>
  <nav class="menu" :class="{ 'nav-lock': lock, 'nav-close': closed }">
    <div class="shortcut-menu">
      <img class="logo" src="../assets/img/grape-w-vertical.png" alt="">
      <ul class="menu-bar shortcut-menu-bar">
        <li v-for="(item, index) in sectionPos" :key="index" @click="activeSection(index)" :class="{ active : item.active }">
          <span>{{ item.key }}</span>
          <transition
            :duration="5000"
            leave-active-class="animated fadeOutDown">
            <span class="menu-line" v-if="item.active" :style="{height: `${((currentScroll - item.top) / item.height) * 40}px`}"></span>
          </transition>
        </li>
      </ul>
    </div>
    <div class="full-menu">
      <a class="close-btn" @click="closeMenu()"><i class="material-icons">close</i></a>
      <div class="menu-container">
        <img class="logo" src="../assets/img/grape-w.png" alt="">
        <ul class="menu-bar">
          <li v-for="(item, index) in homePos" :key="index" @click="activeSection(index)">
            <span :class="{ active : item.active }">{{ item.name }}</span>
            <ul class="menu-bar-sub">
              <li
                v-for="(child, indexChild) in item.child"
                :key="indexChild"
                :class="{ active : item.active && child.active }"
                @click="scrollToDiv(child.sectionId)">{{ child.name }}</li>
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
    currentScroll: 0,
    fullMenu: [
      {
        name: 'Home',
        child: [
          {
            key: '01',
            name: 'Intro',
            active: true,
            sectionId: "#introduction"
          },
          {
            key: '02',
            name: 'About us',
            active: false,
            sectionId: "#about-us"
          },
          {
            key: '03',
            name: 'What we do',
            sectionId: "#what-we-do",
            active: false
          },
          // {
          //   name: 'Our Team',
          //   sectionId: "#what-we-do",
          //   active: false
          // },
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
        key: '01'
      },
      {
        key: '02'
      },
      {
        key: '03'
      },
      // {
      //   key: '04'
      // }
    ]
  }),
  computed: {
    sectionPos () {
      return this.shortcutMenu.map(x =>
        ({
          key: x.key,
          active: x.key === this.$store.state.homeSectionPosition.id,
          height: this.$store.state.homeSectionPosition.height,
          top: this.$store.state.homeSectionPosition.top
        })
      )
    },
    homePos () {
      this.fullMenu[0].child = this.fullMenu[0].child.map(x =>
        ({
          name: x.name,
          sectionId: x.sectionId,
          key: x.key,
          active: x.key === this.$store.state.homeSectionPosition.id,
          height: this.$store.state.homeSectionPosition.height,
          top: this.$store.state.homeSectionPosition.top
        })
      )
      return this.fullMenu;
    }
  },
  mounted() {
    $(window).on('scroll', () => {
      // this.currentScroll = $(window).scrollTop() + ($(window).height() / 2)
      this.currentScroll = $(window).scrollTop()
    })
  },
  methods: {
    scrollToDiv(sectionId) {
      $('html, body').animate({
        scrollTop: $(sectionId).offset().top + 1
      }, 500);
    },
    activeSection(id) {
      this.fullMenu.forEach((element, index) => {
        if(index === id) {
          element.active = true;
        } else {
          element.active = false;
        }
      });
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
