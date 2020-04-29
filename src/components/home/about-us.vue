<template>
  <div class="row f-row f-center-y pt-10 pb-10">
    <div class="col-sm-4">
      <Grid/>
      <div class="dot row f-row f-end-x mt-3">
        <span class="active"></span>
        <span></span>
        <span></span>
      </div>
    </div>
    <div class="col-sm-4 pl-8">
      <h1  class="txt-bold">Hi,<br> We are Grapevine!</h1>
      <h4 class="txt-bold txt-uppercase mb-3">About us</h4>
      <p>私たちは、海外のコンテンツ・プランナーとのネットワークも有していますの。<br>アプリやさらにオンラインゲームに関する海外の情報をいち早く提供するな。<br>特徴抽出などの豊富な導入実績がお役に立つと思います。</p>
    </div>
  </div>
</template>
<script>
import Grid from '../../partial/gird'

export default {
  components: {
    Grid
  },
  data() {
    return {
      
    }
  }
}
</script>
