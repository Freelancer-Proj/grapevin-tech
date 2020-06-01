<template>
<div>
  <div class="txt-center">
    <!-- <span class="btn btn-green txt-bold">What We Offerd</span> -->
    <h2 class="mt-3 mb-2 wow fadeIn">Portfolio</h2>
    <p class="portflio-description txt-center">実績の一部</p>
    <v-row class="pt-10 f-row f-center-x">
      <v-col
        sm="4"
        cols="12"
        class="pd-5"
        v-for="(item, index) of portfplioData" :key="index">
        <div class="portfolio-content" :class="{ 'portfolio-center' : index === 1 }">
          <img :src="item.images" alt="">
          <span>{{item.type}}</span>
          <span class="portfolio-time pd-2">{{ item.date | dateTime('dd MMMM') }}</span>
          <h4 class="">{{item.name}}</h4>
          <p v-html="item.description"></p>
          <button class="btn btn-primary">View More</button>
        </div>
      </v-col>
    </v-row>
  </div>
</div>
</template>
<script>
// import Vue from 'vue'

export default {
  components: {
  },
  // methods: {
  //   short: (val) => {
  //     console.log(Vue.filter('shortDesc'));
  //     return this.$options.filters.shortDesc(val);
  //   }
  // },
  data() {
    return {
      portfplioData: [
        {
          name: 'ライブ配信/生放送アプリ',
          images: require('~/assets/img/portfplio/1.jpg'),
          date: new Date(),
          type: 'Sass',
          description: `Wingtrillは、いつでも、どこでも、あなたの人生の生き生きとした重要な瞬間をあなたの友人や家族と共有するのに役立ちます。
                        ライブビデオストリームをブロードキャストすると、Facebookの友人、ツイッターフォロワー、ローカルアドレス帳の連絡先に招待状を送ってライブビデオストリームを視聴できるようになります。<br>
                        Wingtrillは、チャットウィンドウであなたのライブビデオストリームにコメントするためのオプションを友人に提供します。 友人が何らかの形でライブビデオストリームを見逃していると、後で24時間まで記録されたコピーを見ることができます。`
        },
        {
          name: 'ECアプリ（体験型）',
          images: require('~/assets/img/portfplio/2.jpg'),
          date: new Date(),
          type: 'Marketing',
          description: `特定の洋服をオンラインで購入するかどうかを決定するだけで、多くの時間が失われていますか？ この問題は、オンラインドレッシングルームの出現により、解決されており、お気に入りの洋服を購入することができます。 このアプリは、顧客がスムーズに買い物をするのを手伝うための媒体の一つとして提供されます。<br>
                        試して購入：実際には、買い手がさまざまな服を試して、オンライン上でマネキンに合わせて、フィッティング、色、スタイルなどを評価するのに役立つ非常に新しくユニークなテクニックです。 バイヤーを美化することに関連しています。 My Kool Lookドレッシングルームをチェックしたり、写真を共有したりして、お買い物をお楽しみになれます。 これは、躊躇せずに、最高かつ革新的な技術の一つです。`
        },
        {
          name: 'eラーニングサイト',
          images: require('~/assets/img/portfplio/3.jpg'),
          date: new Date(),
          type: 'Landing',
          description: `OpenSesameはiTunesから楽曲をダウンロードするのと同じくらい簡単にeラーニングコースを購入し販売します。 OpenSesameがコースをプレビューしたり、レビューを読んで研究したりします。 サブスクリプションや長期コミットメントのないコースを購入し、LMS（Learning Management System）で即座に使用できます。 OpenSesameが協力し、従業員にとって最高のコース選びに集中できます。`
        }
      ]
    }
  },
  mounted() {
    this.portfplioData = this.portfplioData.map(x => ({
      ...x,
      description: this.$options.filters.shortDesc(x.description)
    }))
  }
}
</script>
