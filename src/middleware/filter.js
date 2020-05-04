import Vue from 'vue'
import { format } from 'date-fns'

const filterPlugin = {
  install() {
    Vue.filter('dateTime', (value, formatDate = 'dd MMMM yyyy') => {
      return format(value, formatDate)
    })
  },
};

Vue.use(filterPlugin)

export default filterPlugin
