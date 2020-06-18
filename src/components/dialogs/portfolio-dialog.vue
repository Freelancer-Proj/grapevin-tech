<template>
  <div class="dialog-content">
    <no-ssr>
      <slick ref="slick" :options="slickOptions">
        <div class="dialog-slide" v-for="(item, index) of portfolioData.images" :key="index">
          <img :src="item" class="dialog-img" alt="portfplio image">
        </div>
      </slick>
    </no-ssr>
    <p class="pd-4" v-html="portfolioData.description"></p>
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
