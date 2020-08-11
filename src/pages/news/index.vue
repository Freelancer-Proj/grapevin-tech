<template>
  <div class="news-page">
    <div class="wrapper container pt-10 pb-10">
      <h2 class="txt-center">NEWS</h2>
      <div v-if="listNews.length">
        <v-simple-table class="mt-6 mb-4 news-table">
          <template v-slot:default>
            <tbody>
              <tr v-for="(item, index) of listNews" :key="index">
                <td>{{ item.notify_at | dateTime }}</td>
                <td class="pt-2 pb-2">
                  <h4 class="news-title">{{ item.title }}</h4>
                  <p v-html="item.content"></p>
                </td>
              </tr>
            </tbody>
          </template>
        </v-simple-table>
        <div class="txt-center">
          <v-pagination
            v-model="page"
            :circle="circle"
            :disabled="disabled"
            :length="totalPage"
            :next-icon="nextIcon"
            :prev-icon="prevIcon"
            :page="page"
            :total-visible="totalVisible"
            :number="getPage(page)"
          ></v-pagination>
        </div>
      </div>
      <div v-else>
        <h4 class="txt-center mt-6">データーがない。</h4>
      </div>
    </div>
  </div>
</template>
<script>

import {api} from '../../helpers/services/api.service'

export default {
  components: {
  },
  created() {
    this.getNews(1);
  },
  data() {
    return {
      page: 1,
      listNews: [],
      circle: false,
      disabled: false,
      totalPage: 1,
      nextIcon: 'navigate_next',
      prevIcon: 'navigate_before',
      totalVisible: 6,
    }
  },
  methods: {
    getNews(page) {
      api.get(['news'], {page: page}).then(res => {
        if (res) {
          this.listNews = res.new;
          this.totalPage =  res.meta.total_page;
        }
      });
    },
    getPage(page) {
      this.getNews(page);
    }
  }
}
</script>
