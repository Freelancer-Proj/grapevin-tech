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
    Vue.filter('shortDesc', (value) => {
      if (value.length > 150) {
        return value.slice(0, 150) + '...';
      } else {
        return value;
      }
    });
  },
};

Vue.use(filterPlugin)

export default filterPlugin
