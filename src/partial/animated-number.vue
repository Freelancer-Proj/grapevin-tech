<template>
  <span class="animation-num">{{ animatedNumber }}</span>
</template>
<script>
import {gsap} from 'gsap'

export default {
  props: {
    valueNum: {
      type: Number,
      required: true
    },
  },
  data() {
    return {
      tweenedNumber: 0
    }
  },
  computed: {
    animatedNumber: function() {
      return this.tweenedNumber.toFixed(0)
    }
  },
  watch: {
    valueNum: function (newValue, oldVal) {
      gsap.to(this.$data, { duration: 1.5, tweenedNumber: newValue })
    }
  }
}
</script>
