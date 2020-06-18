<template>
  <no-ssr>
    <full-page class="home" ref="fullpage" :options="options" id="fullpage">
      <section id="introduction" class="section">
        <div class="overflow-video">
          <video width="100%" id="video-background" muted loop autoplay="autoplay" playsinline>
            <source src="https://firebasestorage.googleapis.com/v0/b/test-beebb.appspot.com/o/video-bg%20(1).mp4?alt=media&token=3dcc8afb-bfa0-4d2c-a4c3-f0fc172c1d55" type="video/mp4">
          </video>
        </div>
        <section class="about-us">
          <div class="container content">
            <AboutUs :typing="true"/>
          </div>
        </section>
      </section>
      <section v-if="isMobileDevice" id="about-us" class="about-us section">
        <div class="container content">
          <AboutUs :typing="false"/>
        </div>
      </section>
      <section id="portfolio" class="section">
        <div class="container content f-row f-center-x">
          <Portfolio/>
        </div>
      </section>
      <section id="what-we-do" class="section">
        <div class="shape-1">
          <svg viewBox="0 0 500 100" preserveAspectRatio="none" style="height: 100%; width: 100%;">
            <path d="M0.00,49.98 C150.00,150.00 271.49,-50.00 500.00,49.98 L500.00,0.00 L0.00,0.00 Z" style="stroke: none; fill: #fff;"></path>
          </svg>
        </div>
        <div class="container content">
          <h2 class="pb-10">What we are doing?</h2>
          <WhatWeDoing/>
        </div>
        <div class="shape-2">
          <svg viewBox="0 0 500 100" preserveAspectRatio="none" style="height: 100%; width: 100%;">
            <path d="M0.00,49.98 C150.00,150.00 349.20,-50.00 500.00,49.98 L500.00,150.00 L0.00,150.00 Z" style="stroke: none; fill: #fafafa;"></path>
          </svg>
        </div>
      </section>
      <section id="blogs" class="section">
        <div class="container content">
          <h2 class="pb-7">Blogs</h2>
          <BlogList :listBlog="listBlog.slice(0,3)"/>
        </div>
      </section>
      <section id="staff" class="section">
        <div class="container content">
          <h2 class="pt-3 pb-3">Our Team</h2>
          <Staff/>
        </div>
      </section>
      <section id="statistics" class="section">
        <div class="container content">
          <h2 class="pt-2 pb-10">Skills & Statistics</h2>
          <img :src="require('~/assets/img/portfplio/portfplio-flow.svg')" alt="">
          <v-row no-gutters class="f-row pt-10">
            <v-col sm="3" cols="6" class="txt-center" v-for="(item, index) of statistics" :key="index">
              <AnimationNumber :valueNum="item.num" />
              <p class="txt-bold">{{ item.text }}</p>
            </v-col>
          </v-row>
        </div>
      </section>
      <!-- <section id="statistics" class="pt-10 pb-10 section">
        <div class="container content">
          <v-row no-gutters class="f-row">
            <v-col sm="3" cols="6" class="txt-center" v-for="(item, index) of statistics" :key="index">
              <AnimationNumber :valueNum="item.num" />
              <p class="txt-bold">{{ item.text }}</p>
            </v-col>
          </v-row>
        </div>
      </section> -->
      <section id="speech" class="section">
        <div class="container content f-row f-center-x">
          <Speech/>
        </div>
      </section>
      <section id="reviews" class="section">
        <Reviews/>
      </section>
      <section id="get-in-touch" class="section">
        <div class="container content">
          <GetInTouch/>
        </div>
      </section>
      <section class="section">
        <div class="fullscreen">
          <app-footer class="footer-home"/>
        </div>
      </section>
    </full-page>
  </no-ssr>
</template>

<script>
const isServer = typeof window === 'undefined'
const WOW = !isServer ? require('wow.js') : null

import WhatWeDoing from '../components/home/what-we-do'
import AboutUs from '../components/home/about-us'
import Staff from '../components/home/staff'
import BlogList from '../components/blogs/blog-list'
import Skills from '../components/home/skill-design'
import AnimationNumber from '../partial/animated-number'
import Speech from '../components/home/speech'
import GetInTouch from '../components/home/get-in-touch'
import Portfolio from '../components/home/portfplio'
import Reviews from '../components/home/reviews'
import AppFooter from '../common-layouts/footer'

export default {
  components: {
    AppFooter,
    WhatWeDoing,
    AboutUs,
    Staff,
    BlogList,
    Skills,
    AnimationNumber,
    Speech,
    GetInTouch,
    Portfolio,
    Reviews
  },
  data() {
    return {
      scrollable: false,
      currentSection: null,
      sectionList: [
        '#introduction',
        '#portfolio',
        '#what-we-do',
        '#blogs',
        '#staff',
        '#skills',
        '#statistics',
        '#speech',
        '#reviews',
        '#get-in-touch'
      ],
      options: {
        licenseKey: null,
        scrollOverflow: true,
        // scrollBar: true,
        scrollOverflowReset: true,
        // autoScrolling: true,
        anchors: [
          'js-introduction',
          'js-portfolio',
          'js-what-we-do',
          'js-blogs',
          'js-staff',
          'js-statistics',
          'js-speech',
          'js-reviews',
          'js-get-in-touch'
        ],
      },
      isMobileDevice: false,
      listBlog: [
        {
          name: 'Guide to Pro Photography',
          date: new Date(),
          description: `Let me start off by saying, you can do this! It will be hard work, but isn't impossible.`,
          images: [
            require('~/assets/img/about-us/1.jpg'),
            // require('~/assets/img/about-us/2.jpg'),
            // require('~/assets/img/about-us/3.jpg'),
            // require('~/assets/img/about-us/4.jpg'),
            // require('~/assets/img/about-us/5.jpg'),
            // require('~/assets/img/about-us/6.jpg'),
            // require('~/assets/img/about-us/7.jpg')
          ],
          responser: [
            require('~/assets/img/about-us/1.jpg'),
            require('~/assets/img/about-us/2.jpg'),
            require('~/assets/img/about-us/3.jpg'),
            require('~/assets/img/about-us/4.jpg')
          ]
        },
        {
          name: 'Mordern Industrial Design',
          date: new Date(),
          description: `Industrial designs require little furniture and more floor space. This design gerve wants people to be able`,
          images: [
            require('~/assets/img/about-us/1.jpg'),
            require('~/assets/img/about-us/2.jpg'),
            // require('~/assets/img/about-us/3.jpg'),
            // require('~/assets/img/about-us/4.jpg'),
            // require('~/assets/img/about-us/5.jpg'),
            // require('~/assets/img/about-us/6.jpg'),
            // require('~/assets/img/about-us/7.jpg')
          ],
          responser: [
            require('~/assets/img/about-us/1.jpg'),
            require('~/assets/img/about-us/2.jpg'),
            require('~/assets/img/about-us/3.jpg'),
            require('~/assets/img/about-us/4.jpg')
          ]
        },
        {
          name: 'Learning Design Process',
          date: new Date(),
          description: `This involves a methodical intergration of pedagical and technological elements to enrich all learning`,
          images: [
            require('~/assets/img/about-us/1.jpg'),
            require('~/assets/img/about-us/2.jpg'),
            require('~/assets/img/about-us/3.jpg'),
            // require('~/assets/img/about-us/4.jpg'),
            // require('~/assets/img/about-us/5.jpg'),
            // require('~/assets/img/about-us/6.jpg'),
            // require('~/assets/img/about-us/7.jpg')
          ],
          responser: [
            require('~/assets/img/about-us/1.jpg'),
            require('~/assets/img/about-us/2.jpg'),
            require('~/assets/img/about-us/3.jpg'),
            require('~/assets/img/about-us/4.jpg')
          ]
        },
        {
          name: 'Design Thinking Process',
          date: new Date(),
          description: `This involves a methodical intergration of pedagical and technological elements to enrich all learning`,
          images: [
            require('~/assets/img/about-us/1.jpg'),
            require('~/assets/img/about-us/2.jpg'),
            require('~/assets/img/about-us/3.jpg'),
            require('~/assets/img/about-us/4.jpg'),
            require('~/assets/img/about-us/5.jpg'),
            require('~/assets/img/about-us/6.jpg'),
            require('~/assets/img/about-us/7.jpg')
          ],
          responser: [
            require('~/assets/img/about-us/1.jpg'),
            require('~/assets/img/about-us/2.jpg'),
            require('~/assets/img/about-us/3.jpg'),
            require('~/assets/img/about-us/4.jpg')
          ]
        },
        {
          name: 'Design Thinking Process',
          date: new Date(),
          description: `This involves a methodical intergration of pedagical and technological elements to enrich all learning`,
          images: [
            require('~/assets/img/about-us/1.jpg'),
            require('~/assets/img/about-us/2.jpg'),
            require('~/assets/img/about-us/3.jpg'),
            require('~/assets/img/about-us/4.jpg'),
            require('~/assets/img/about-us/5.jpg'),
            require('~/assets/img/about-us/6.jpg'),
            require('~/assets/img/about-us/7.jpg')
          ],
          responser: [
            require('~/assets/img/about-us/1.jpg'),
            require('~/assets/img/about-us/2.jpg'),
            require('~/assets/img/about-us/3.jpg'),
            require('~/assets/img/about-us/4.jpg')
          ]
        }
      ],
      statisticsInit: false,
      statistics: [
        {
          num: 0,
          text: 'アプリ開発'
        },
        {
          num: 0,
          text: 'WEBサイト開発'
        },
        {
          num: 0,
          text: '組込み系'
        },
        {
          num: 0,
          text: '人口知能導入'
        }
      ]
    }
  },
  watch:{
    $route (to, from){
      if (to.hash === '#js-statistics' && !this.statisticsInit) {
        this.statistics = [
          {
            num: 275,
            text: 'アプリ開発'
          },
          {
            num: 352,
            text: 'WEBサイト開発'
          },
          {
            num: 60,
            text: '組込み系'
          },
          {
            num: 33,
            text: '人口知能導入'
          }
        ];
        this.statisticsInit = true;
      }
    }
  },
  // this.$refs.fullpage.api.setAutoScrolling(false)}, 500)
  mounted() {
    new WOW().init()
    $(window).on('scroll', () => {
      this.sectionList.forEach(x => {
        this.triggerPos(x)
      })
    })
  },
  methods: {
    triggerPos(sectionId) {
      if (this.currentSection !== sectionId) {
        const scrollTopLine = $(window).scrollTop()
        const sectionTopLine = $(sectionId).position().top
        const sectionHeight = $(sectionId).outerHeight(true)
        if (
          scrollTopLine >= sectionTopLine &&
          scrollTopLine < sectionTopLine + sectionHeight
        ) {
          const indexSection = this.sectionList.findIndex(x => x === sectionId)
          this.$store.commit('setSectionPos', {
            height: sectionHeight,
            top: sectionTopLine,
            id: indexSection + 1 < 10 ? `0${indexSection + 1}` : `${indexSection + 1}`
          })
          this.currentSection = sectionId
        }
      }
    },
    lockScroll() {
      $('html, body').css({
        overflow: 'hidden'
      });
    },
    unlockScroll() {
      $('html, body').css({
        overflow: 'visible'
      });
    },
  }
}
</script>
