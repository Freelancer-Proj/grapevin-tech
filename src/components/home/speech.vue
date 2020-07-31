<template>
  <div class="speech-list">
    <no-ssr>
      <slick ref="slick" :options="slickOptions" v-if="speechData">
        <div class="speech-item txt-center" v-for="(speech, index) of speechData" :key="`speech${index}`">
          <h4>{{ speech.title }}</h4>
          <p v-html="speech.content"></p>
        </div>
      </slick>
    </no-ssr>
    <button class="action-btn prev-btn"><i class="material-icons" @click="prev()">keyboard_arrow_left</i></button>
    <button class="action-btn next-btn"><i class="material-icons" @click="next()">keyboard_arrow_right</i></button>
  </div>
</template>
<script>
import {api} from '../../helpers/services/api.service'

export default {
  components: {
  },
  created() {
    api.get(['speeches']).then(res => {
      if (res) {
        this.speechData = res;
        this.reInit();
      }
    });
  },
  data() {
    return {
      slickOptions: {
        infinite: false,
        dots: false,
        arrows: false,
        slidesToShow: 1
      },
      speechData: Array
    }
  },
  methods: {
    next() {
      this.$refs.slick.next();
    },
    prev() {
      this.$refs.slick.prev();
    },
    reInit() {
      let currIndex = this.$refs.slick.currentSlide();
      this.$refs.slick.destroy();
      this.$nextTick(() => {
        this.$refs.slick.create();
        this.$refs.slick.goTo(currIndex, true);
      });
    }
  }
}
</script>
