<template>
  <div class="blog-page pt-10 pb-10">
    <div class="container content">
      <h2 class="txt-center mb-8">Blogs</h2>
      <BlogList :listBlog="listBlog"/>
    </div>
  </div>
</template>
<script>
import BlogList from '../../components/blogs/blog-list'
import {api} from '../../helpers/services/api.service'

export default {
  components: {
    BlogList
  },
  created() {
    api.get(['blogs']).then(res => {
      if (res) {
        this.listBlog = res;
      }
    })
  },
  data() {
    return {
      page: 1,
      // responser: [
      //   require('~/assets/img/about-us/1.jpg'),
      //   require('~/assets/img/about-us/2.jpg'),
      //   require('~/assets/img/about-us/3.jpg'),
      //   require('~/assets/img/about-us/4.jpg')
      // ],
      listBlog: []
    }
  }
}
</script>
