<template>
  <div>
    <nav class="menu" :class="{ 'nav-lock': lock, 'nav-close': closed, 'menu-nowidth': !isNavShow && !isNavOpen, 'nav-open': isNavOpen === true, 'nav-closed': isNavOpen === false && !isNavShow }">
      <div class="shortcut-menu" v-if="isNavShow">
        <img class="logo" src="../assets/img/grape-w-vertical.png" alt="">
        <ul class="menu-bar shortcut-menu-bar">
          <li v-for="(item, index) in sectionPos" :key="index" @click="activeSection(index)" :class="{ active : item.active }">
            <span>{{ item.key }}</span>
            <!-- <transition
              :duration="5000"
              leave-active-class="animated fadeOutDown">
              <span class="menu-line" v-if="item.active" :style="{height: `${((currentScroll - item.top) / item.height) * 40}px`}"></span>
            </transition> -->
          </li>
        </ul>
      </div>
      <div class="full-menu">
        <a class="close-btn" @click="closeMenu()"><i class="material-icons">close</i></a>
        <div class="menu-container">
          <img class="logo" src="../assets/img/grape-w.png" alt="">
          <ul class="menu-bar">
            <li v-for="(item, index) in homePos" :key="index" @click="activeSection(index)">
              <nuxt-link :to="item.link">
                <span :class="{ active : item.active }">{{ item.name }}</span>
              </nuxt-link>
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
      <i class="material-icons icon-lock" v-if="isNavShow" @click="toggleLock()">{{!lock? 'lock_open' : 'lock_outline'}}</i>
    </nav>
    <div class="menu-layer" v-if="isNavOpen === true" @click="closeMenu()"></div>
  </div>
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
    isNavShow: false,
    fullMenu: [
      {
        name: 'Home',
        link: '/',
        child: [
          {
            key: '01',
            name: 'Intro',
            active: true,
            sectionId: "#introduction"
          },
          {
            key: '02',
            name: 'Portfolio',
            sectionId: "#portfolio",
            active: false
          },
          {
            key: '03',
            name: 'What we do',
            sectionId: "#what-we-do",
            active: false
          },
          {
            key: '04',
            name: 'Blogs',
            sectionId: "#blogs",
            active: false
          },
          {
            key: '05',
            name: 'Our Team',
            sectionId: "#staff",
            active: false
          },
          // {
          //   key: '06',
          //   name: 'Skills',
          //   sectionId: "#skills",
          //   active: false
          // },
          {
            key: '06',
            name: 'Statistics',
            sectionId: "#statistics",
            active: false
          },
          {
            key: '07',
            name: 'Speech',
            sectionId: "#speech",
            active: false
          },
          {
            key: '08',
            name: 'Reviews',
            sectionId: "#reviews",
            active: false
          },
          {
            key: '09',
            name: 'Get In Touch',
            sectionId: "#get-in-touch",
            active: false
          }
        ],
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
      // {
      //   name: 'Contact',
      //   link: '/contact',
      //   active: false
      // }
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
      {
        key: '04'
      },
      {
        key: '05'
      },
      {
        key: '06'
      },
      {
        key: '07'
      },
      {
        key: '08'
      },
      {
        key: '09'
      },
      // {
      //   key: '10'
      // }
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
          // height: this.$store.state.homeSectionPosition.height,
          // top: this.$store.state.homeSectionPosition.top
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
          // height: this.$store.state.homeSectionPosition.height,
          // top: this.$store.state.homeSectionPosition.top
        })
      )
      return this.fullMenu;
    },
    isNavOpen () {
      return this.$store.state.navIsOpen
    }
  },
  watch:{
    $route (to, from){
      this.setShortcutNavBar()
      if (!['/home', '/'].includes(from.path) && ['/home', '/'].includes(to.path)) {
        this.activeSection(0)
      }
    }
  },
  mounted() {
    $(window).on('scroll', () => {
      // this.currentScroll = $(window).scrollTop() + ($(window).height() / 2)
      this.currentScroll = $(window).scrollTop()
    })
    this.setShortcutNavBar()
    window.addEventListener("resize", () => {
      this.setShortcutNavBar()
    })
  },
  methods: {
    setShortcutNavBar() {
      this.isNavShow = $(window).width() >= 768 && ['/home', '/'].includes(this.$route.path)
      this.$store.commit('setShortcutNavbar', this.isNavShow)
    },
    scrollToDiv(sectionId) {
      this.$root.$emit('triggerScrollToSection', `js-${sectionId.substring(1)}`)
    },
    activeSection(id) {
      this.fullMenu.forEach((element, index) => {
        element.active = index === id
      });
    },
    toggleLock() {
      this.lock = !this.lock
      this.$store.commit('toggleLockNavbar', this.lock)
    },
    closeMenu() {
      this.lock = false;
      this.closed = true;
      if (this.isNavShow) {
        this.$store.commit('toggleLockNavbar', this.lock)
      } else {
        this.$store.commit('openNav', !this.closed)
      }
      setTimeout(() => {
        this.closed = false;
      }, 500)
    },
  }
}
</script>
<style lang="scss">
</style>
