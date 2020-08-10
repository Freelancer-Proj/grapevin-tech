<template>
  <v-row class="blog-grid-images" no-gutters>
    <v-col v-if="images.length === 1"
      class="blog-grid"
      cols="12">
      <figure>
        <img :src="images[0].image.url">
      </figure>
    </v-col>
    <v-col v-if="images.length === 2"
      class="blog-grid"
      v-for="(item, index) of listImage" :key="index"
      cols="6">
      <figure>
        <img :src="item.image.url">
      </figure>
    </v-col>
    <div class="blog-3grid" v-if="images.length > 2">
      <v-col class="blog-grid" cols="6">
        <figure>
          <img :src="listImage[0].image.url">
        </figure>
      </v-col>
      <v-col
        class="blog-grid"
        cols="6">
        <div v-for="(item, index) of listImage" :key="index" v-if="index > 0" class="blur-image">
          <figure>
            <img class="half-image" :src="item.image.url">
          </figure>
          <div v-if="lengthImages > 3 && index === 2" :class="{ 'more-blur': lengthImages > 3 && index === 2}"><span>{{ restImage.length + '+'}}</span></div>
        </div>
      </v-col>
    </div>
  </v-row>
</template>
<script>

export default {
  components: {
  },
  props: {
    images: Array,
  },
  data() {
    return {
      lengthImages: this.images.length,
      listImage: this.images.slice(0,3),
      restImage: this.images.splice(3, this.images.length)
    }
  }
}
</script>
<style lang="scss" scoped>
  
</style>
