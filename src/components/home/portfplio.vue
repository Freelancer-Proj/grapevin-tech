<template>
<div>
  <div class="txt-center">
    <span class="btn btn-green txt-bold">What We Offerd</span>
    <h2 class="mt-3 mb-2 wow fadeIn">Creative Design And Creative Services</h2>
    <p class="portflio-description txt-center">All types of businesses need access to development resources, so we<br> give you the option to decide how much you need to use.</p>
    <v-row class="pt-10 f-row f-center-x">
      <v-col
        sm="4"
        cols="12"
        class="pd-5"
        v-for="(item, index) of portfplioData" :key="index">
        <div class="portfploi-content" :class="{ 'portfploi-center' : index === 1 }">
          <img :src="item.images" alt="">
          <h4 class="pb-5">{{item.name}}</h4>
        </div>
      </v-col>
    </v-row>
  </div>
</div>
</template>
<script>

export default {
  components: {
  },
  data() {
    return {
      portfplioData: [
        {
          name: 'ライブ配信/生放送アプリ',
          images: require('~/assets/img/portfplio/1.jpg'),
        },
        {
          name: 'ECアプリ（体験型）',
          images: require('~/assets/img/portfplio/2.jpg'),
        },
        {
          name: 'eラーニングサイト',
          images: require('~/assets/img/portfplio/3.jpg'),
        }
      ]
    }
  }
}
</script>
