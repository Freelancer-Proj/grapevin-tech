<template>
  <div v-if="portfolioData">
    <div class="txt-center">
      <!-- <span class="btn btn-green txt-bold">What We Offerd</span> -->
      <h2 class="mt-3 mb-2">Portfolio</h2>
      <p class="portflio-description txt-center">実績の一部</p>
      <v-row class="pt-3 f-row f-center-x">
        <v-col
          sm="4"
          cols="12"
          class="pd-5"
          v-for="(item, index) of portfolioData" :key="index">
          <div class="portfolio-content" :class="{ 'portfolio-center' : index === 1 }">
            <img v-if="item.listImg.length" :src="item.listImg[0]" alt="">
            <span>{{item.type_portfolio}}</span>
            <span class="portfolio-time pd-2">{{ item.updated_at | dateTime('MMMM yyyy') }}</span>
            <h4 class="">{{item.title}}</h4>
            <p class="pt-4 pl-4 pr-4">{{ item.desccription | HTMLtoText | shortDesc(100) }}</p>
            <div class="pt-4 pl-4 pr-4 pb-4">
              <button class="btn btn-primary" @click.stop="showDialog(item.id)">View More</button>
            </div>
          </div>
        </v-col>
      </v-row>
    </div>
  </div>
</template>
<script>

import {api} from '../../helpers/services/api.service'

export default {
  created() {
    api.get(['portfolios']).then(res => {
      if (res) {
        res.map(x => {
          if (x.cover) {
            x.listImg = [x.cover.url];
          }
          x.desccription = this.$options.filters.shortDesc(x.desc);
        })
        this.portfolioData = res;
      }
    });
  },
  methods: {
    showDialog(id) {
      this.currentPortfolio = this.portfolioData.find(x => x.id === id)
      this.$emit('dialogOpen', this.currentPortfolio)
    },
    closeDialog() {
      // this.dialog = false;
      // this.isPortfolioDialogShow = false
      // this.currentPortfolio = null
      // this.$emit('dialogOpen', false)
      // document.getElementsByClassName('v-dialog__container')[0].setAttribute('display', 'none');
    }
  },
  // methods: {
  //   short: (val) => {
  //     console.log(Vue.filter('shortDesc'));
  //     return this.$options.filters.shortDesc(val);
  //   }
  // },
  data() {
    return {
      dialog: false,
      isPortfolioDialogShow: false,
      currentPortfolio: Object,
      portfolioData: Array
    }
  },
  mounted() {
  }
}
</script>

