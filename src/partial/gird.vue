<template>
  <div class="gird row f-row">
    <a class="col-sm-6" v-for="(item, index) of listImg" :key="index">
      <img :src="item" alt="">
    </a>
  </div>
</template>
<script>
export default {
  data() {
    return {
      listImg: [
        require('~/assets/img/about-us/1.jpg'),
        require('~/assets/img/about-us/2.jpg'),
        require('~/assets/img/about-us/3.jpg'),
        require('~/assets/img/about-us/4.jpg')
      ]
    }
  }
}
</script>
