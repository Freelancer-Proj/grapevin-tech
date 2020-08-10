<template>
  <div>abc</div>
</template>
<script>

import {api} from '../../helpers/services/api.service'

export default {
  components: {
  },
  created() {
    api.get(['news']).then(res => {
      if (res) {
        this.listNews = res;
      }
    })
  },
  data() {
    return {
      page: 1,
      listNews: []
    }
  }
}
</script>
