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
        <svg viewBox="0 0 500 150" preserveAspectRatio="none" style="height: 100%; width: 100%;">
          <path d="M0.00,49.98 C150.00,150.00 349.20,-50.00 500.00,49.98 L500.00,150.00 L0.00,150.00 Z" style="stroke: none; fill: #fff;"></path>
        </svg>
      </div>
    </section>
    <section id="skill-design" class="wow fadeInDown">
      <div class="container content">
        <SkillDesign/>
      </div>
    </section>
    <v-icon>$angular</v-icon>
  </div>
</template>

<script>
const isServer = typeof window === 'undefined'
const WOW = !isServer ? require('wow.js') : null

import WhatWeDoing from '../components/home/what-we-do'
import AboutUs from '../components/home/about-us'
import SkillDesign from '../components/home/skill-design'

export default {
  components: {
    WhatWeDoing,
    AboutUs,
    SkillDesign
  },
  data() {
    return {
      currentSection: null,
      sectionList: [
        '#introduction',
        '#about-us',
        '#what-we-do'
      ]
    }
  },
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
