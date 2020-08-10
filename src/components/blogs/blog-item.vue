<template>
  <router-link :to="'blogs/' + blog.path">
    <article class="blog-item pd-2">
      <BlogGrid :images="blog.blog_images"/>
      <div class="blog-content pd-2">
        <h4>{{ blog.title }}</h4>
        <span class="txt-light">{{ blog.updated_at | dateTime }}</span>
        <p class="blog-description mt-3 mb-3" v-html="blog.desc"></p>
        <div class="responser">
          <img v-for="(responser, index) of blog.responser" :key="index" class="circle-image" :src="responser">
        </div>
      </div>
    </article>
  </router-link>
</template>
<script>

import BlogGrid from '../../partial/blog-grid';
import Router from 'vue-router'

export default {
  components: {
    BlogGrid
  },
  props: ['blog'],
  data() {
    return {
    }
  },
  methods: {
  }
}
</script>
