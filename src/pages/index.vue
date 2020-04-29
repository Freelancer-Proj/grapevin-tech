<template>
  <div class="home">
    <section>
      <video width="100%" id="video-background" muted loop autoplay="autoplay" playsinline>
        <source src="https://firebasestorage.googleapis.com/v0/b/stg-grapevin-tech.appspot.com/o/video-bg.mp4?alt=media&token=b6861919-7a6c-4c70-8b5f-012255a959cc" type="video/mp4">
      </video>
    </section>
    <section id="about-us">
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
        <h2 class="pb-10">What we are doing?</h2>
        <WhatWeDoing/>
      </div>
      <div class="shape-2">
        <svg viewBox="0 0 500 150" preserveAspectRatio="none" style="height: 100%; width: 100%;">
          <path d="M0.00,49.98 C150.00,150.00 349.20,-50.00 500.00,49.98 L500.00,150.00 L0.00,150.00 Z" style="stroke: none; fill: #fff;"></path>
        </svg>
      </div>
    </section>
  </div>
</template>

<script>
const isServer = typeof window === 'undefined'
const WOW = !isServer ? require('wow.js') : null

import WhatWeDoing from '../components/home/what-we-do'
import AboutUs from '../components/home/about-us'

export default {
  components: {
    WhatWeDoing,
    AboutUs
  },
  data() {
    return {
    }
  },
  mounted() {
    new WOW().init()
  },
  methods: {
  }
}
</script>
