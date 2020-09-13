<template>
  <div class="blog-detail pt-10 pb-10" v-if="blogDetail">
    <div class="wrapper">
      <div class="container">
        <div>
          <div class="blogs-detail-slide">
            <no-ssr>
              <slick ref="slick" :options="slickOptions">
                <div class="dialog-slide" v-for="(item, index) of blogDetail.blog_images" :key="index">
                  <img :src="item.image.url" class="dialog-img" alt="blogs detail image">
                </div>
              </slick>
            </no-ssr>
            <div class="action-btn">
              <button class="previous-btn"><i class="material-icons" @click="prev()">keyboard_arrow_left</i></button>
              <button class="next-btn"><i class="material-icons" @click="next()">keyboard_arrow_right</i></button>
            </div>
          </div>
          <!-- <div class="blog-view pt-5">
            <p class="blog-view mr-4"><span class="material-icons mr-2">sms</span><strong>131</strong></p>
            <p class="blog-view mr-4"><span class="material-icons mr-2">visibility</span><strong>255</strong></p>
            <p class="blog-view mr-4"><span class="material-icons mr-2">sms</span><strong>14</strong></p>
          </div> -->
        </div>
        <h2 class="mb-3">{{ blogDetail.title }}</h2>
        <div class="blog-desc" v-html="blogDetail.desc"></div>
        <div class="blog-content" v-html="blogDetail.content"></div>
        <h4 class="blog-time mb-2">時間: </h4>{{ blogDetail.updated_at | dateTime('dd MMMM yyyy') }}
        <div class="blog-share-tag mt-4">
          <div class="share-social">
            <h4 class="mb-2">担当者:</h4>
            <p class="responser">
              <img v-for="(staff, index) of blogDetail.staffs" :key="index" class="circle-image" :src="staff.avatar">
            </p>
            <!-- <h4 class="mb-2">Share:</h4>
            <p>
              <span class="material-icons mr-2">facebook</span>
              <span class="material-icons mr-2">facebook</span>
              <span class="material-icons mr-2">facebook</span>
              <span class="material-icons mr-2">facebook</span>
            </p> -->
          </div>
          <div class="detail-tag">
            <h4 class="mb-2">タグ:</h4>
            <p v-if="blogTag.length">
              <span class="pd-2" v-for="(tag, index) of blogTag" :key="index">{{ tag }}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>

import {api} from '../../helpers/services/api.service';


export default {
  components: {},
  created() {
    const routePath = this.$router.currentRoute.params.path;
    api.get(['blogs', routePath]).then(res => {
      if (res) {
        this.blogDetail = res;
        this.blogTag = res.tags ? res.tags.split(',') : [];
      }
    })
  },
  props: [],
  data() {
    return {
      slickOptions: {
        infinite: false,
        dots: true,
        arrows: false,
        dotsClass: 'slick-dots',
        slidesToShow: 1
      },
      blogDetail: null,
      blogTag: Array,
      responser: [
        require('~/assets/img/about-us/1.jpg'),
        require('~/assets/img/about-us/2.jpg'),
        require('~/assets/img/about-us/3.jpg'),
        require('~/assets/img/about-us/4.jpg')
      ],
    }
  },
  methods: {
    next() {
      this.$refs.slick.next();
    },
    prev() {
      this.$refs.slick.prev();
    },
    // reInit() {
    //   let currIndex = this.$refs.slick.currentSlide();
    //   this.$refs.slick.destroy();
    //   this.$nextTick(() => {
    //     this.$refs.slick.create();
    //     this.$refs.slick.goTo(currIndex, true);
    //   });
    // }
  }
}
</script>