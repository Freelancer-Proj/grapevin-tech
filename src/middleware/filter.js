import Vue from 'vue'
import { format } from 'date-fns'

const filterPlugin = {
  install() {
    Vue.filter('dateTime', (value, formatDate = 'dd MMMM yyyy') => {
      return format(value, formatDate)
    });
    Vue.filter('shortDesc', (text) => {
      if (text.length > 150) {
        return text.slice(0, 150) + '...';
      } else {
        return text;
      }
    });
  },
};

Vue.use(filterPlugin)

export default filterPlugin
