<template>
  <div class="wrapper container blog-detail pt-10 pb-10" v-if="blogDetail">
    <div>
      <div class="blog-banner" v-if="blogDetail.images">
        <img :src="blogDetail.images.url" alt="">
        <span class="date-post">{{ new Date(blogDetail.updated_at) | dateTime('dd MMMM') }}</span>
      </div>
      <div class="blog-view pt-5">
        <p class="blog-view mr-4"><span class="material-icons mr-2">sms</span><strong>131</strong></p>
        <p class="blog-view mr-4"><span class="material-icons mr-2">visibility</span><strong>255</strong></p>
        <p class="blog-view mr-4"><span class="material-icons mr-2">sms</span><strong>14</strong></p>
      </div>
    </div>
    <h2 class="mb-3">{{ blogDetail.title }}</h2>
    <p class="blog-desc" v-html="blogDetail.content"></p>
    <div class="blog-share-tag mt-4">
      <div class="share-social">
        <h4 class="mb-2">Share:</h4>
        <p>
          <span class="material-icons mr-2">facebook</span>
          <span class="material-icons mr-2">facebook</span>
          <span class="material-icons mr-2">facebook</span>
          <span class="material-icons mr-2">facebook</span>
        </p>
      </div>
      <div class="detail-tag">
        <h4 class="mb-2">Tags:</h4>
        <p v-if="blogTag.length">
          <span class="pd-2" v-for="(tag, index) of blogTag" :key="index">{{ tag }}</span>
        </p>
      </div>
    </div>
  </div>
</template>
<script>

import {api} from '../../helpers/services/api.service';


export default {
  components: {},
  created() {
    const routePath = this.$router.currentRoute.params.path;
    api.get(['blogs', routePath]).then(res => {
      if (res) {
        this.blogDetail = res;
        this.blogTag = res.tags ? res.tags.split(',') : [];
      }
    })
  },
  props: [],
  data() {
    return {
      blogDetail: Object,
      blogTag: Array
    }
  },
  methods: {
  }
}
</script>