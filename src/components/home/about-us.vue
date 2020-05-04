<template>
<div>
  <no-ssr>
    <slick
      ref="slick"
      :options="slickOptions">
      <div v-for="(about, index) of aboutUs" :key="`about${index}`">
        <v-row no-gutters class="pt-10 pb-10 f-row f-center-x">
          <v-col
            sm="6"
            cols="12">
            <Grid :images="about.images"/>
          </v-col>
          <v-col
            sm="6"
            cols="12">
            <div class="pl-5">
              <h1 class="mb-5">Hi,<br> We are Grapevine!</h1>
              <h4 class="txt-uppercase mb-5">{{about.name}}</h4>
              <div class="inner" v-html="about.desc"></div>
            </div>
          </v-col>
        </v-row>
      </div>
    </slick>
  </no-ssr>
</div>
</template>
<script>
import Grid from '../../partial/grid'

export default {
  components: {
    Grid
  },
  data() {
    return {
      slickOptions: {
        // centerMode: true,
        // centerPadding: '60px',
        // slidesToShow: 1,
        // arrows: false,
        infinite: true,
        dots: true,
        arrows: false,
        dotsClass: 'slick-dots',
        slidesToShow: 1
      },
      aboutUs: [
        {
          name: 'ABOUT US',
          desc: `<h6 class="txt-bold">私たちは世界中のエンジニアと繋がるクラウドソーシング・ファームです。</h6>
                <p>私たちはアプリやWEBシステムの開発とその附帯サービスを提供します。</p>
                <p>私たちは世界中のアソシエイツと連携して、お客様のご要望に的確にお応えします </p>`,
          images: [
            require('~/assets/img/about-us/1.jpg'),
            require('~/assets/img/about-us/2.jpg'),
            require('~/assets/img/about-us/3.jpg'),
            require('~/assets/img/about-us/4.jpg')
          ]
        },
        {
          name: 'OUR CLIANTS',
          desc: `<h6 class="txt-bold">私たちのお客様はアプリ・WEBシステムに関する業務のクラウドソーシングを考えておられる企業、起業家及び個人の皆さまです。</h6>
                <h6 class="txt-bold">＜業務を委託したい企業及び起業家＞</h6>
                <p>■ 開発業務のみを委託したい方へは、それに特化した業務を提供いたします。</p>
                <p>■ 企画から開発その後の運用保守業務までの委託を考えておられる方に対しては、フルサポート型のクラウドソーシングサービスを提供いたします。</p>
                <p>■ オフショア開発を検討されている方へは、コンサルティング、コーディネート、ディレクションの各業務を個別または一括して提供いたします。</p>
                <h6 class="txt-bold">＜プロフェッショナルな技術やアイデアを売買したい企業及び個人＞</h6>
                <p>■ 不定期の否定形業務を希望する方へは、成果報酬型の請負業務をコーディネートします。</p>
                <p>■ 定期の定形業務を希望する方へは、固定型の請負業務をコーディネートします。</p>
                <p>■ 斬新なビジネスモデルや革新的な技術に関するアイデアを企業や起業家に売り込みたい方、またビジネス・パートナーを求めている方へは、定額報酬型、成功報酬型の契約締結をコーディネートします。</p>`,
          images: [
            require('~/assets/img/about-us/1.jpg'),
            require('~/assets/img/about-us/2.jpg'),
            require('~/assets/img/about-us/3.jpg'),
            require('~/assets/img/about-us/4.jpg')
          ]
        },
        {
          name: 'OUR VALUE',
          desc: `<h6 class="txt-bold">私たちがお客さまに与えることのできるベネフィットは、対応のスピードと自在性、そして高いコストパフォーマンスです。</h6>
                <p>近年、Webサイト・スマホアプリの開発においては、ECサイトからフリマサイトへの移行やSNS要素を盛込んだアプリの開発が進められており、従来型のシステム構築だとコスト効率が悪いばかりか開発スピードも遅く、ビジネスチャンス（機会・時機）を逸してしまいかねません。</p>
                <p>私たちは、SNS性（リアルタイム性）に特化した言語・DB・フレームワーク（MEANスタック）を用いたアプリ開発・システム構築を得意としています。（無論、従来のLAMP型開発にも対応できます。）</p>
                <p>私たちが提供する開発方法は、アジャイル型開発なので、特にスピードを重視されるベンチャー企業や中小企業、また各種ドキュメント（項目一覧やメソッド等）の同期共有化を図りますので、自前での修正・変更も考えその容易性を求められる中堅企業の皆さまにも適しています。</p>
                <p>MEANスタックは、学習コストがかかるので、日本国内ではそのエンジニアの単価も高く、開発の見積金額は総じて大きくなりがちですが、海外では既にスタンダードなものです。私たちは世界中のエンジニア・ファームと繋がっていますので比較的安い価格（国内価格と比べた場合は非常に低廉な価格）での提供が可能です。</p>`,
          images: [
            require('~/assets/img/about-us/1.jpg'),
            require('~/assets/img/about-us/2.jpg'),
            require('~/assets/img/about-us/3.jpg'),
            require('~/assets/img/about-us/4.jpg')
          ]
        }
      ]
    }
  }
}
</script>
