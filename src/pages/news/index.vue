<template>
  <div class="news-page">
    <div class="wrapper container pt-10 pb-10">
      <h2 class="txt-center">NEWS</h2>
      <v-simple-table class="mt-6 mb-4 news-table">
        <template v-slot:default>
          <thead>
            <tr>
              <th>Title</th>
              <th>Content</th>
              <th class="notify-at">Notify at</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, index) of listNews" :key="index">
              <td class="news-title pt-2 pb-2">{{ item.title }}</td>
              <td v-html="item.content"></td>
              <td>{{ item.notify_at | dateTime }}</td>
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
