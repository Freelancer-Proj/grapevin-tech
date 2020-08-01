<template>
  <div class="wrapper container blog-detail pt-10 pb-10">
    <div>
      <div class="blog-banner">
        <img src="../../assets/img/what-we-do/content.png" alt="">
        <span class="date-post">{{ new Date('2020-07-29T11:20:28.919Z') | dateTime('dd MMMM') }}</span>
      </div>
      <div class="blog-view pt-5">
        <p class="blog-view mr-4"><span class="material-icons mr-2">sms</span><strong>131</strong></p>
        <p class="blog-view mr-4"><span class="material-icons mr-2">visibility</span><strong>255</strong></p>
        <p class="blog-view mr-4"><span class="material-icons mr-2">sms</span><strong>14</strong></p>
      </div>
    </div>
    <h2 class="mb-3">Bootsland Perfect Performance landing Page</h2>
    <p class="blog-desc">
      Businesses need access to development resources serspiciatis unde omnis iste natus error. The expert team at Brightscout specializes in building innovative technology solutions for enterprises. Our products and services unleash new levels of productivity, enhance collaboration amongst team members, and streamline large-scale communication. We utilize a powerful mix of exquisite design and innovative technology to resolve the issues that hold back many companies today.<br><br>
      Consequat dolor sit amet, consectetur adipiscing elit. Maecenas lobortis quam id lectus aliquet euismod. Ut sagittis et augue dui gravida Cras ultricies ligula sed magna dictum porta, Sed ut perspiciatis unde omnis iste natus error sit voluptat erci tation ullamco laboris nisi ut aliq uip.eiu smod tempor the incidi dunt ut labore et dolore magna aliqua. Phasellus eget purus id felis dignissim convallis Suspendisse et augue dui gravida Cras ultricies ligula sed magna dictum porta, Sed ut perspiciatis unde omnis iste natus error sit voluptat erci tation ullamco laboris nisi ut aliq uip.eiu smod tempor the incidi dunt ut labore et dolore magna aliqua. Ut atenim ad minim veniam, quis nostrud exerci tation abore et dolore magna aliqua. Uhbt atenim
    </p>
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
        <p>
          <span class="pd-2">Web Design</span>
          <span class="pd-2">UX/UI</span>
          <span class="pd-2">Software</span>
        </p>
      </div>
    </div>
  </div>
</template>
<script>

import {api} from '../../helpers/services/api.service';


export default {
  components: {
    
  },
  created() {
    const routePath = this.$router.currentRoute.params.path
    // api.get()
  },
  props: [],
  data() {
    return {
    }
  },
  methods: {
  }
}
</script>