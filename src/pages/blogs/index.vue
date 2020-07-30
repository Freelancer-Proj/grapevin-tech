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
      console.log(res);
      if (res) {
        res.map(x => {
          x.responser = this.responser;
          x.images = [res.images.url];
        })
        this.listBlog = res;
      }
    })
  },
  data() {
    return {
      responser: [
        require('~/assets/img/about-us/1.jpg'),
        require('~/assets/img/about-us/2.jpg'),
        require('~/assets/img/about-us/3.jpg'),
        require('~/assets/img/about-us/4.jpg')
      ],
      listBlog: [
        // {
        //   name: 'Guide to Pro Photography',
        //   date: new Date(),
        //   description: `Let me start off by saying, you can do this! It will be hard work, but isn't impossible.`,
        //   images: [
        //     require('~/assets/img/about-us/1.jpg'),
        //     // require('~/assets/img/about-us/2.jpg'),
        //     // require('~/assets/img/about-us/3.jpg'),
        //     // require('~/assets/img/about-us/4.jpg'),
        //     // require('~/assets/img/about-us/5.jpg'),
        //     // require('~/assets/img/about-us/6.jpg'),
        //     // require('~/assets/img/about-us/7.jpg')
        //   ],
        //   responser: [
        //     require('~/assets/img/about-us/1.jpg'),
        //     require('~/assets/img/about-us/2.jpg'),
        //     require('~/assets/img/about-us/3.jpg'),
        //     require('~/assets/img/about-us/4.jpg')
        //   ]
        // },
        // {
        //   name: 'Mordern Industrial Design',
        //   date: new Date(),
        //   description: `Industrial designs require little furniture and more floor space. This design gerve wants people to be able`,
        //   images: [
        //     require('~/assets/img/about-us/1.jpg'),
        //     require('~/assets/img/about-us/2.jpg'),
        //     // require('~/assets/img/about-us/3.jpg'),
        //     // require('~/assets/img/about-us/4.jpg'),
        //     // require('~/assets/img/about-us/5.jpg'),
        //     // require('~/assets/img/about-us/6.jpg'),
        //     // require('~/assets/img/about-us/7.jpg')
        //   ],
        //   responser: [
        //     require('~/assets/img/about-us/1.jpg'),
        //     require('~/assets/img/about-us/2.jpg'),
        //     require('~/assets/img/about-us/3.jpg'),
        //     require('~/assets/img/about-us/4.jpg')
        //   ]
        // },
        // {
        //   name: 'Learning Design Process',
        //   date: new Date(),
        //   description: `This involves a methodical intergration of pedagical and technological elements to enrich all learning`,
        //   images: [
        //     require('~/assets/img/about-us/1.jpg'),
        //     require('~/assets/img/about-us/2.jpg'),
        //     require('~/assets/img/about-us/3.jpg'),
        //     // require('~/assets/img/about-us/4.jpg'),
        //     // require('~/assets/img/about-us/5.jpg'),
        //     // require('~/assets/img/about-us/6.jpg'),
        //     // require('~/assets/img/about-us/7.jpg')
        //   ],
        //   responser: [
        //     require('~/assets/img/about-us/1.jpg'),
        //     require('~/assets/img/about-us/2.jpg'),
        //     require('~/assets/img/about-us/3.jpg'),
        //     require('~/assets/img/about-us/4.jpg')
        //   ]
        // },
        // {
        //   name: 'Design Thinking Process',
        //   date: new Date(),
        //   description: `This involves a methodical intergration of pedagical and technological elements to enrich all learning`,
        //   images: [
        //     require('~/assets/img/about-us/1.jpg'),
        //     require('~/assets/img/about-us/2.jpg'),
        //     require('~/assets/img/about-us/3.jpg'),
        //     require('~/assets/img/about-us/4.jpg'),
        //     require('~/assets/img/about-us/5.jpg'),
        //     require('~/assets/img/about-us/6.jpg'),
        //     require('~/assets/img/about-us/7.jpg')
        //   ],
        //   responser: [
        //     require('~/assets/img/about-us/1.jpg'),
        //     require('~/assets/img/about-us/2.jpg'),
        //     require('~/assets/img/about-us/3.jpg'),
        //     require('~/assets/img/about-us/4.jpg')
        //   ]
        // },
        // {
        //   name: 'Design Thinking Process',
        //   date: new Date(),
        //   description: `This involves a methodical intergration of pedagical and technological elements to enrich all learning`,
        //   images: [
        //     require('~/assets/img/about-us/1.jpg'),
        //     require('~/assets/img/about-us/2.jpg'),
        //     require('~/assets/img/about-us/3.jpg'),
        //     require('~/assets/img/about-us/4.jpg'),
        //     require('~/assets/img/about-us/5.jpg'),
        //     require('~/assets/img/about-us/6.jpg'),
        //     require('~/assets/img/about-us/7.jpg')
        //   ],
        //   responser: [
        //     require('~/assets/img/about-us/1.jpg'),
        //     require('~/assets/img/about-us/2.jpg'),
        //     require('~/assets/img/about-us/3.jpg'),
        //     require('~/assets/img/about-us/4.jpg')
        //   ]
        // },
        // {
        //   name: 'Guide to Pro Photography',
        //   date: new Date(),
        //   description: `Let me start off by saying, you can do this! It will be hard work, but isn't impossible.`,
        //   images: [
        //     require('~/assets/img/about-us/1.jpg'),
        //     // require('~/assets/img/about-us/2.jpg'),
        //     // require('~/assets/img/about-us/3.jpg'),
        //     // require('~/assets/img/about-us/4.jpg'),
        //     // require('~/assets/img/about-us/5.jpg'),
        //     // require('~/assets/img/about-us/6.jpg'),
        //     // require('~/assets/img/about-us/7.jpg')
        //   ],
        //   responser: [
        //     require('~/assets/img/about-us/1.jpg'),
        //     require('~/assets/img/about-us/2.jpg'),
        //     require('~/assets/img/about-us/3.jpg'),
        //     require('~/assets/img/about-us/4.jpg')
        //   ]
        // }
      ]
    }
  }
}
</script>
