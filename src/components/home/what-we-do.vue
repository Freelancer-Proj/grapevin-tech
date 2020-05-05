<template>
  <ul class="step-doing-list">
    <div class="wow bounceInLeft">
      <li
        class="step-doing-item"
        v-for="(step, index) of stepDoings.slice(0,3)"
        :key="`step${index}`">
        <v-row no-gutters class="f-row f-center-x">
          <v-col
            sm="6"
            cols="12">
            <img :src="step.cover" alt="design">
          </v-col>
          <v-col
            sm="6"
            cols="12">
            <div class="pr-10 pl-10 step-doing">
              <span class="badge badge-primary p-2 mb-2">
                0{{index + 1}}
              </span>
              <h3 class="step-doing-title">{{step.name}}<small class="pl-2">{{step.jpName}}</small></h3>
              <p class="step-doing-meta">{{step.desc}}</p>
            </div>
          </v-col>
        </v-row>
      </li>
    </div>
    <div class="wow bounceInRight">
      <li
        class="step-doing-item"
        v-for="(step, index) of stepDoings.slice(3,6)"
        :key="`step${index}`">
        <v-row no-gutters class="f-row f-center-x">
          <v-col
            sm="6"
            cols="12">
            <img :src="step.cover" alt="design">
          </v-col>
          <v-col
            sm="6"
            cols="12">
            <div class="pr-10 pl-10 step-doing">
              <span class="badge badge-primary p-2 mb-2">
                0{{index + 1}}
              </span>
              <h3 class="step-doing-title">{{step.name}}<small class="pl-2">{{step.jpName}}</small></h3>
              <p class="step-doing-meta">{{step.desc}}</p>
            </div>
          </v-col>
        </v-row>
      </li>
     </div>
  </ul>
</template>
<script>
export default {
  data() {
    return {
      stepDoings: [
        {
          name: 'Design',
          jpName: 'デザイン',
          desc: '私たちは、海外のマテリアルデザインに特化したデザイナー・ファームと繋がっており、ガイドラインに準じた最新のデザイン、満足いただけるデザイン（UX）、興味を惹き起こし関心を抱かせるデザイン（UI）の制作が可能です。',
          cover: require('~/assets/img/what-we-do/design.svg')
        },
        {
          name: 'Content',
          jpName: 'コンテンツ',
          desc: '私たちは、海外のコンテンツ・プランナーとのネットワークも有していますので、アプリやWEBさらにオンラインゲームに関する海外の情報をいち早く提供するなど、コンテンツに纏わる有益なアドバイスができます。また、貴社がAIのシステム導入をお考えの場合、私たちのAIプラッドフォームを活用したチャットボットの構築、画像の解析・編集、特徴抽出などの豊富な導入実績がお役に立つと思います。',
          cover: require('~/assets/img/what-we-do/content.png')
        },
        {
          name: 'Apps',
          jpName: 'アプリ',
          desc: '私たちは、貴社がそのアプリに求める特性（動作速度、ネイティブ機能との密接度、オフラインでの利用頻度など）やウェブアプリ、ネイティブアプリ、ハイブリッドアプリの違いと各々のメリット・デメリットを踏まえ、最もふさわしい種類のアプリを提案させていただきます。',
          cover: require('~/assets/img/what-we-do/app.png')
        },
        {
          name: 'Web',
          jpName: 'ウェブ',
          desc: 'ユーザビリティ、アクセシビリティに優れた、誰もが使いやすいインターフェイスのWEBサイト（モバイルサイト、フリーマーケットサイト、SNSサイト、生放送サイト、ECサイトなど）とそれに適合した業務用Webシステムを、そのWEB自体の目的やお客様のご要望にそって開発いたします。',
          cover: require('~/assets/img/what-we-do/web.svg')
        },
        {
          name: 'Maintenance',
          jpName: '運用保守',
          desc: '私たちが開発したアプリ・WEBシステムの運用保守については、お客様のご要望に応じて、お客さまご自身のあるいはアウトソーシングされているデータセンターやオペレーションセンターの非常事態に対するオンラインサポートを提供いたします。',
          cover: require('~/assets/img/what-we-do/maintenance.png')
        },
        {
          name: 'Other',
          jpName: 'その他サービス',
          desc: 'サーバー費用や課金手数料等の運用コストを最適化するための各種アドバイス（例：AWSの活用や決済代行システムとの連携等）は無償で提供いたします。またご希望の場合は、キャッシュフロー・マネジメントシートを無料で作成するととともに、事業計画のコンサルティング（有料）も承ります。',
          cover: require('~/assets/img/what-we-do/other.png')
        }
      ]
    }
  }
}
</script>
