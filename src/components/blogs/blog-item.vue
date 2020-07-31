<template>
  <article class="blog-item pd-2">
    <BlogGrid :images="blog.listImages"/>
    <div class="blog-content pd-2">
      <h4>{{ blog.title }}</h4>
      <span class="txt-light">{{ blog.date | dateTime }}</span>
      <p class="blog-description mt-3 mb-3">{{ blog.desc }}</p>
      <div class="responser">
        <img v-for="(responser, index) of blog.responser" :key="index" class="circle-image" :src="responser">
      </div>
    </div>
  </article>
</template>
<script>

import BlogGrid from '../../partial/blog-grid';
export default {
  components: {
    BlogGrid
  },
  props: ['blog'],
  data() {
    return {
    }
  }
}
</script>
