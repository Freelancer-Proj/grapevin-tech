<template>
  <footer>
    <div style="height: 150px; overflow: hidden;">
      <svg viewBox="0 0 500 150" preserveAspectRatio="none" style="height: 100%; width: 100%;">
        <path d="M0.00,49.98 C150.00,150.00 271.49,-50.00 500.00,49.98 L500.00,0.00 L0.00,0.00 Z" style="stroke: none; fill: #fff;"></path>
      </svg>
    </div>
    <div class="wrapper">
      <div class="container content">
        <v-row class="f-row">
          <v-col sm="4" cols="12" v-for="(footer, index) of footerData" :key="index">
            <div class="footer-link">
              <h5 class="mb-5 txt-bold">{{ footer.type }}</h5>
              <router-link class="mb-2" v-for="(page, index) of footer.page" :key="index" :to="page.link">{{ page.name }}</router-link>
            </div>
          </v-col>
        </v-row>
        <v-row>
          <v-col sm="6" cols="12">
            <router-link class="footer-logo" to="/">Grapevine<span class="txt-bold">Tech</span></router-link>
          </v-col>
          <v-col sm="6" cols="12">

          </v-col>
        </v-row>
        <hr class="mt-8 mb-8">
        <p class="txt-center footer-team">&#64;27th line Copyright</p>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  components: {
  },
  props: {
  },
  data() {
    return {
      footerData: [
        {
          type: 'Pages',
          page: [
            { link: '/', name: 'Home' },
            { link: '/blogs', name: 'Blogs' },
            { link: '/news', name: 'News' },
          ]
        },
        // {
        //   type: 'Service',
        //   page: [
        //     { link: '', name: 'Content Writing' },
        //     { link: '', name: 'Documentation' },
        //     { link: '', name: 'Account' },
        //     { link: '', name: 'Carrers' }
        //   ]
        // },
        // {
        //   type: 'Legal',
        //   page: [
        //     { link: '', name: 'Term Of Service' },
        //     { link: '', name: 'Privacy Policy' },
        //     { link: '', name: 'Support' }
        //   ]
        // }
      ],

    }
  }
}
</script>
