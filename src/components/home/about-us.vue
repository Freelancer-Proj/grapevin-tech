<template>
<div>
  <no-ssr>
    <slick
      ref="slick"
      :options="slickOptions">
      <div v-for="(about, index) of aboutUs" :key="`about${index}`">
        <v-row no-gutters class="pt-10 pb-10 f-row f-center-x">
          <v-col
            sm="6"
            cols="12">
            <Grid :images="about.images"/>
          </v-col>
          <v-col
            sm="6"
            cols="12">
            <div class="pl-5">
              <h1 class="mb-5">Hi,<br> We are Grapevine!</h1>
              <h4 class="txt-uppercase mb-5">{{about.name}}</h4>
              <p>{{about.desc}}</p>
            </div>
          </v-col>
        </v-row>
      </div>
    </slick>
  </no-ssr>
</div>
  <!-- <div class="dot row f-row f-end-x mt-3">
        <span class="active"></span>
        <span></span>
        <span></span>
      </div> -->
</template>
<script>
import Grid from '../../partial/grid'

export default {
  components: {
    Grid
  },
  data() {
    return {
      slickOptions: {
        // centerMode: true,
        // centerPadding: '60px',
        // slidesToShow: 1,
        // arrows: false,
        infinite: true,
        dots: true,
        arrows: false,
        dotsClass: 'slick-dots',
        slidesToShow: 1
      },
      aboutUs: [
        {
          name: 'About us',
          desc: '私たちは、海外のコンテンツ・プランナーとのネットワークも有していますの。アプリやさらにオンラインゲームに関する海外の情報をいち早く提供するな。特徴抽出などの豊富な導入実績がお役に立つと思います。',
          images: [
            require('~/assets/img/about-us/1.jpg'),
            require('~/assets/img/about-us/2.jpg'),
            require('~/assets/img/about-us/3.jpg'),
            require('~/assets/img/about-us/4.jpg')
          ]
        },
        {
          name: 'About us 1',
          desc: '私たちは、海外のコンテンツ・プランナーとのネットワークも有していますの。アプリやさらにオンラインゲームに関する海外の情報をいち早く提供するな。特徴抽出などの豊富な導入実績がお役に立つと思います。',
          images: [
            require('~/assets/img/about-us/1.jpg'),
            require('~/assets/img/about-us/2.jpg'),
            require('~/assets/img/about-us/3.jpg'),
            require('~/assets/img/about-us/4.jpg')
          ]
        },
        {
          name: 'About us 2',
          desc: '私たちは、海外のコンテンツ・プランナーとのネットワークも有していますの。アプリやさらにオンラインゲームに関する海外の情報をいち早く提供するな。特徴抽出などの豊富な導入実績がお役に立つと思います。',
          images: [
            require('~/assets/img/about-us/1.jpg'),
            require('~/assets/img/about-us/2.jpg'),
            require('~/assets/img/about-us/3.jpg'),
            require('~/assets/img/about-us/4.jpg')
          ]
        }
      ]
    }
  }
}
</script>
