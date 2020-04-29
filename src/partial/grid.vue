<template>
  <v-row class="grid-images" no-gutters>
    <v-col
      v-for="(item, index) of images" :key="index"
      cols="6">
      <ImageRatio :imageLink="item"/>
    </v-col>
  </v-row>
</template>
<script>
import ImageRatio from './image-ratio'

export default {
  components: {
    ImageRatio
  },
  props: {
    images: Array,
  }
}
</script>
<style lang="scss" scoped>
  .grid-images {
    .col {
      padding: 2px !important;
    }
  }
</style>
