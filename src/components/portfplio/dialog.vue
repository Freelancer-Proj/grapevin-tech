<template>
  <div>
    <v-row class="f-row f-center-x">
      <v-col sm="6" cols="12" class="pd-5">
        <no-ssr>
          <slick ref="slick">
            <div class="about-us-box" v-for="(item, index) of portfplioData.images" :key="index">
              <img :src="item.url" alt="portfplio image">
            </div>
          </slick>
        </no-ssr>
      </v-col>
      <v-col sm="6" cols="12" class="pd-5">
        <p v-html="portfplioData.description"></p>
      </v-col>
    </v-row>
  </div>
</template>
<script>

export default {
  components: {
  },
  props: {
    portfplioData: Object,
  },
  data() {
    return {
    }
  }
}
</script>
