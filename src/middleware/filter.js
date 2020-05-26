import Vue from 'vue'
import { format } from 'date-fns'

const filterPlugin = {
  install() {
    Vue.filter('dateTime', (value, formatDate = 'dd MMMM yyyy') => {
      return format(value, formatDate)
    });
    Vue.filter('shortDateTime', (value, formatDate = 'dd MMMM') => {
      return format(value, formatDate)
    });
    Vue.filter('shortDesc', (string) => {
      console.log(string);
      if (string.length > 150) {
        return string.slice(0, 150) + '...';
      } else {
        return string;
      }
    });
  },
};

Vue.use(filterPlugin)

export default filterPlugin
