import Vue from 'vue'
import { format } from 'date-fns'
import { ja } from 'date-fns/locale'

const filterPlugin = {
  install() {
    Vue.filter('dateTime', (value, formatDate = 'dd MMMM yyyy') => {
      switch (typeof(value)) {
        case 'string':
          const date = new Date(value);
          if (date.toString() === 'Invalid Date') {
            return 'Invalid Date';
          } else {
            return format(date, formatDate, { locale: ja });
          }
        case 'object':
          return format(value, formatDate, { locale: ja });
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
