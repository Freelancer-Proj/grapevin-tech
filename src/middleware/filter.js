import Vue from 'vue'
import { format } from 'date-fns'
import { ja } from 'date-fns/locale'

const filterPlugin = {
  install() {
    Vue.filter('dateTime', (value, formatDate = 'yyyy年MM月dd日') => {
      const message = 'Invalid Date';
      if (typeof(value) === 'string') {
        const date = new Date(value);
        return date.toString() === message ? message : format(date, formatDate);
      } else if (value instanceof Date) {
        return format(value, formatDate);
      } else {
        return message;
      }
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
