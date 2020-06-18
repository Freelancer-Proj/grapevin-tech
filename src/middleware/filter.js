import Vue from 'vue'
import { format } from 'date-fns'

const filterPlugin = {
  install() {
    Vue.filter('dateTime', (value, formatDate = 'dd MMMM yyyy') => {
      return format(value, formatDate)
    });
    Vue.filter('HTMLtoText', (value) => {
      return value.replace(/(<([^>]+)>)/ig,"")
    });
    Vue.filter('shortDesc', (text, defaultLength = 150) => {
      if (text.length > defaultLength) {
        return text.slice(0, defaultLength) + '...';
      } else {
        return text;
      }
    });
  },
};

Vue.use(filterPlugin)

export default filterPlugin
