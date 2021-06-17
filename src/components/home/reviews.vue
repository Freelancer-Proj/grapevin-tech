<template>
  <div class="section-views pt-10 pb-10" v-if="viewsData.length">
    <div class="shape-background transform-md-rotate" style="overflow: hidden;">
      <svg viewBox="0 0 500 150" preserveAspectRatio="none" style="height: 100%; width: 100%;">
        <path d="M208.09,0.00 C152.70,67.10 262.02,75.98 200.80,150.00 L0.00,150.00 L0.00,0.00 Z"></path>
      </svg>
    </div>
    <v-row class="shape-content f-row f-center-x pl-3 pr-3">
      <v-col sm="4"
        cols="12"
        class="pl-3 pr-3 viewer-intro">
        <h2 class="mb-3">Discover Our Client Feedback</h2>
        <p>プロダクトに携わらせて頂いたクライアント様からの評価になります。</p>
      </v-col>
      <v-col sm="8"
        cols="12"
        class="pd-5">
        <no-ssr>
          <slick
            ref="slick"
            :options="slickOptions">
            <div
              v-for="(feedbacks, idx) of viewsData" :key="`a${idx}`">
              <v-row class="pl-3 pr-3">
                <v-col
                  sm="12"
                  md="6"
                  lg="6"
                  xl="6"
                  cols="12"
                  class="pl-3 pr-3 viewer-item"
                  :class="{ 'mt-6' : index%2 === 1, 'item-even': index%2 === 0 }"
                  v-for="(item, index) of feedbacks" :key="index">
                  <div class=" pd-5 viewer-content f-row f-center-x">
                    <img class="circle-image mr-6" :src="item.avatar.url ? item.avatar.url : defaultAvatar" alt="viewer avatar">
                    <div>
                      <p style="font-size: 12px;" v-html="item.content" class="mb-3"></p>
                      <div>
                        <h5 class="viewer-name mr-1">{{ item.reviewer }}</h5>
                        <span class="viewer-position">- {{ item.position }}</span>
                      </div>
                    </div>
                  </div>
                </v-col>
              </v-row>
            </div>
          </slick>
        </no-ssr>
        <div class="mt-2 txt-center action-btn">
          <button :disabled="+currentSlide === 0" class="mr-2 slide-btn" @click="prev()"><i class="material-icons">keyboard_arrow_left</i></button>
          <button :disabled="+currentSlide === viewsData.length - 1" class="ml-2 slide-btn" @click="next()"><i class="material-icons">keyboard_arrow_right</i></button>
        </div>
      </v-col>
    </v-row>
  </div>
</template>
<script>

import {api} from '../../helpers/services/api.service'

export default {
  components: {
  },
  data() {
    return {
      viewsData: [],
      defaultAvatar: require('../../assets/img/views/1.jpg'),
      slickOptions: {
        infinite: false,
        dots: false,
        arrows: false,
        adaptiveHeight: true,
        slidesToShow: 1,
      },
      currentSlide: 0
    }
  },
  created() {
    api.get(['reviews']).then(res => {
      if (res) {
        const temp = [];
        while (res.length > 0) {
          const chunk = res.splice(0, 4);
          temp.push(chunk);
        }
        this.viewsData = temp;
      }
    })
  },
  methods: {
    next() {
      this.$refs.slick.next();
      this.currentSlide = this.$refs.slick.currentSlide();
    },
    prev() {
      this.$refs.slick.prev();
      this.currentSlide = this.$refs.slick.currentSlide();
      console.log(this.currentSlide)
    },
  }
}
</script>
