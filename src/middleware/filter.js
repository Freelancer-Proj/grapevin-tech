import Vue from 'vue'
import { format } from 'date-fns'
import { ja } from 'date-fns/locale'

const filterPlugin = {
  install() {
    Vue.filter('dateTime', (value, formatDate = 'dd MMMM yyyy') => {
      const messege = 'Invalid Date';
      if (typeof(value) === 'string') {
        const date = new Date(value);
        return date.toString() === messege ? messege : format(date, formatDate, { locale: ja });
      } else if (value instanceof Date) {
        return format(value, formatDate, { locale: ja });
      } else {
        return messege;
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
