<template>
  <div class="dialog-content">
    <div class="dialog-slide-info">
      <no-ssr>
        <slick ref="slick" :options="slickOptions">
          <div class="dialog-slide" v-for="(item, index) of portfolioData.listImg" :key="index">
            <img :src="item" class="dialog-img" alt="portfplio image">
          </div>
        </slick>
      </no-ssr>
      <div class="dialog-info pd-4">
        <h3>{{ portfolioData.title }}</h3>
        <ul>
          <li><span>期間：</span>{{ portfolioData.period }}</li>
          <li><span>媒体：</span>{{ portfolioData.media }}</li>
          <li><span>主な技術：</span>{{ portfolioData.main_tech }}</li>
        </ul>
      </div>
    </div>
    <p class="pd-4" v-html="portfolioData.desc"></p>
  </div>
</template>
<script>

export default {
  components: {
  },
  props: {
    portfolioData: Object,
  },
  data() {
    return {
      slickOptions: {
        infinite: true,
        dots: true,
        arrows: false,
        dotsClass: 'slick-dots',
        slidesToShow: 1
      },
    }
  }
}
</script>
