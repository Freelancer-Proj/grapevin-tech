<template>
  <div class="dialog-content">
    <div class="dialog-slide-info">
      <div class="dialog-slider">
        <no-ssr>
          <div style="position: relative">
            <button v-if="portfolioData.listImg.length > 1" class="mr-2 slide-btn slide-btn-prev" @click="prev()"><i class="material-icons">keyboard_arrow_left</i></button>
            <img class="portfolio-current-image" :src="currentImage" alt="portfplio image">
            <button v-if="portfolioData.listImg.length > 1" class="ml-2 slide-btn slide-btn-next" @click="next()"><i class="material-icons">keyboard_arrow_right</i></button>
          </div>
          <slick ref="slick" class="slide-nav" :options="slickOptionsNav">
            <div class="dialog-slide" v-for="(item, index) of portfolioData.listImg" :key="index" @click="changeCurrentImage(index)">
              <img :src="item" class="dialog-img" alt="portfplio imag">
            </div>
          </slick>
        </no-ssr>
      </div>
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
      currentImage: this.portfolioData.listImg[0],
      slickOptionsFor: {
        infinite: true,
        dots: false,
        arrows: false,
        dotsClass: 'slick-dots',
        slidesToShow: 1,
        slidesToScroll: 1,
      },
      slickOptionsNav: {
        infinite: true,
        dots: false,
        arrows: false,
        dotsClass: 'slick-dots',
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: true,
        focusOnSelect: true
      },
    }
  },
  methods: {
    changeCurrentImage(index) {
      this.currentImage = this.portfolioData.listImg[index];
    },
    next() {
      this.$refs.slick.next();
      this.currentSlide = this.$refs.slick.currentSlide();
      this.changeCurrentImage(this.currentSlide);
    },
    prev() {
      this.$refs.slick.prev();
      this.currentSlide = this.$refs.slick.currentSlide();
      this.changeCurrentImage(this.currentSlide);
    },
  }
}
</script>
<style scoped>
.portfolio-current-image {
  height: 350px;
  object-fit: contain;
}
.slide-btn {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
}
.slide-btn .material-icons {
  font-size: 70px;
}
.slide-btn-prev {
  left: 10px;
}
.slide-btn-next {
  right: 10px;
}
</style>
