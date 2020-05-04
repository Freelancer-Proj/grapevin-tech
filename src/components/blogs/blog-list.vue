<template>
  <div class="blog-list">
    <v-row class="f-row f-space-between">
        <v-col sm="3" cols="12" v-for="(blog, index) of listBlog" :key="index">
          <BlogItem :blog="blog" />
        </v-col>
    </v-row>
    <v-row class="f-row f-center-y ">
      <router-link to="/blogs">See more</router-link>
    </v-row>
  </div>
</template>
<script>

import BlogItem from '../blogs/blog-item';
export default {
  components: {
    BlogItem
  },
  props: {
    listBlog: Array,
  },
  data() {
    return {
    }
  }
}
</script>
