<template>
  <div class="home">
    <section id="introduction">
      <video width="100%" id="video-background" muted loop autoplay="autoplay" playsinline>
        <source src="https://firebasestorage.googleapis.com/v0/b/stg-grapevin-tech.appspot.com/o/video-bg.mp4?alt=media&token=b6861919-7a6c-4c70-8b5f-012255a959cc" type="video/mp4">
      </video>
    </section>
    <section id="about-us" class="wow fadeInDown">
      <div class="container content">
        <AboutUs/>
      </div>
    </section>
    <section id="what-we-do">
      <div class="shape-1">
        <svg viewBox="0 0 500 100" preserveAspectRatio="none" style="height: 100%; width: 100%;">
          <path d="M0.00,49.98 C150.00,150.00 271.49,-50.00 500.00,49.98 L500.00,0.00 L0.00,0.00 Z" style="stroke: none; fill: #fff;"></path>
        </svg>
      </div>
      <div class="container content">
        <h2 class="pb-10 wow fadeIn">What we are doing?</h2>
        <WhatWeDoing/>
      </div>
      <div class="shape-2">
        <svg viewBox="0 0 500 100" preserveAspectRatio="none" style="height: 100%; width: 100%;">
          <path d="M0.00,49.98 C150.00,150.00 349.20,-50.00 500.00,49.98 L500.00,150.00 L0.00,150.00 Z" style="stroke: none; fill: #fafafa;"></path>
        </svg>
      </div>
    </section>
     <section id="blogs" class="wow fadeInDown">
      <div class="container content">
        <h2 class="pb-7 wow fadeIn">Blogs</h2>
        <BlogList :listBlog="listBlog.slice(0,4)"/>
      </div>
    </section>
    <section id="staff" class="wow fadeInDown">
      <div class="container content">
        <h2 class="pt-7 pb-7 wow fadeIn">Our Team</h2>
        <Staff/>
      </div>
    </section>
    <section id="skills" class="wow fadeInDown">
      <div class="container content">
        <Skills/>
      </div>
    </section>
    <section id="statistics" class="t-10 pb-10">
      <div class="container content">
        <v-row no-gutters class="f-row">
          <v-col sm="3" cols="6" class="txt-center" v-for="(item, index) of statistics" :key="index">
            <AnimationNumber :valueNum="item.num" />
            <p class="txt-bold">{{ item.text }}</p>
          </v-col>
        </v-row>
      </div>
    </section>
    <section id="speech" class="wow fadeInDown">
      <div class="container content f-row f-center-x">
        <Speech/>
      </div>
    </section>
    <section id="portfploi" class="wow fadeInDown">
      <div class="container content f-row f-center-x">
        <PortFploi/>
      </div>
    </section>
  </div>
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
import PortFploi from '../components/home/portfplio'

export default {
  components: {
    WhatWeDoing,
    AboutUs,
    Staff,
    BlogList,
    Skills,
    AnimationNumber,
    Speech,
    PortFploi
  },
  data() {
    return {
      currentSection: null,
      sectionList: [
        '#introduction',
        '#about-us',
        '#what-we-do',
        '#blogs',
        '#staff',
        '#skills',
        '#statistics'
      ],
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
  mounted() {
    new WOW().init()
    $(window).on('scroll', () => {
      this.sectionList.forEach(x => {
        this.triggerPos(x)
      })
      if ($(window).scrollTop() + ($(window).height() / 2) >= $('#statistics').position().top && !this.$attrsstatisticsInit) {
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
    })
  },
  methods: {
    triggerPos(sectionId) {
      if (this.currentSection !== sectionId) {
        // const scrollTopLine = $(window).scrollTop() + ($(window).height() / 2)
        const scrollTopLine = $(window).scrollTop()
        const sectionTopLine = $(sectionId).position().top
        const sectionHeight = $(sectionId).outerHeight(true)
        if (
          scrollTopLine >= sectionTopLine &&
          scrollTopLine < sectionTopLine + sectionHeight
        ) {
          this.$store.commit('setSectionPos', {
            height: sectionHeight,
            top: sectionTopLine,
            id: `0${this.sectionList.findIndex(x => x === sectionId) + 1}`
          })
          this.currentSection = sectionId
        }
      }
    }
  }
}
</script>
