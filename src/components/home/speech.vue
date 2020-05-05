<template>
  <div>
    <no-ssr>
      <slick ref="slick" :options="slickOptions">
        <div v-for="(speech, index) of speechData" :key="`speech${index}`">
          <v-row no-gutters class="pt-10 pb-10 f-row f-center-x txt-center">
            <v-col sm="8" cols="8" class="speech-item">
              <h4>{{ speech.title }}</h4>
              <p v-html="speech.content"></p>
            </v-col>
          </v-row>
        </div>
        <button class="action-btn prev-btn"><i class="material-icons" @click="prev()">keyboard_arrow_left</i></button>
        <button class="action-btn next-btn"><i class="material-icons" @click="next()">keyboard_arrow_right</i></button>
      </slick>
    </no-ssr>
  </div>
</template>
<script>

export default {
  components: {
  },
  data() {
    return {
      slickOptions: {
        infinite: true,
        dots: false,
        arrows: false,
        slidesToShow: 1,
      },
      speechData: [
        {
          title: '開発を委託されるにあたって…',
          content: `アプリの種類について、ウェブアプリ、ネイティブアプリ、ハイブレッドアプリという言葉を耳にされたことがあると思います。<br>
            では、それぞれの違い（メリット・デメリット）はご存知でしょうか？<br>
            私たちは、お客さまの目的やご要望にそった最もふさわしいアプリを提案させていただき、お客様にご判断いただいた上で開発いたします。`
        },
        // {
        //   title: '開発環境の選択について…',
        //   content: `すでに海外では、アプリ開発の主流は従来のLAMP環境からMEAN スタックに代わっています。<br>
        //     「データ形式を一本化できる」「フロントエンジニアの幅が広がる」「処理効率を飛躍的に高くできる」「実装部分の開発に集中できる」などが、その選ばれる理由であると言われています。<br>
        //     私たちは、MEANスタック（MongoDB、Express、Angular.js、Node.js）開発のエキスパートです。（無論、従来のLAMP型開発にも対応できます。）`
        // },
        // {
        //   title: 'AI（人工知能）の導入をお考えのあなたに…',
        //   content: `私たちは、Watsonやgoogle AIシステムを使った画像解析・加工からチャットボットの構築まで、豊富な実績を持っています。<br>
        //     AI（人口知能）の導入・活用をお考えのあなたに、<br>
        //     私たちは、これまで培った経験を活かしてあなたをサポートし、あなたのビジネスの成功に貢献します。`
        // },
        // {
        //   title: '事業を運営をされるにあたって…',
        //   content: `アプリやWEBシステムの開発は、その開発費用だけではなく、サーバー費用や課金手数料等の運用コストを適切に保つことが重要です。<br>
        //     私たちは、それぞれのコストの最適化に向けたアドバイス（例：AWS構築支援、決済代行システムとの連携等）を無償で提供します。<br>
        //     また私たちは、個々のお客さま専用のキャッシュフロー・マネジメントシートを無料で作成させていただきます。<br>
        //     さらに、資金調達のために必要な事業計画書の作成のためのコンサルティング業務（含；作成代行等）も低廉な価格（時間単位）で承ります。`
        // }
      ]
    }
  },
  methods: {
    next() {
      this.$refs.slick.next();
    },
    prev() {
      this.$refs.slick.prev();
    }
  }
}
</script>
