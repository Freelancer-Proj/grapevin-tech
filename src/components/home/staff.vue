<template>
  <div>
    <p class="staff-description txt-center">A type of businesses need access to development resources, so we<br> give you the option to decide how much you need to use.</p>
    <ListStaff :listStaff="listStaff"/>
  </div>
</template>
<script>

import ListStaff from '../list-staff';
import {api} from '../../helpers/services/api.service'

export default {
  components: {
    ListStaff
  },
  data() {
    return {
      listStaff : []
    }
  },
  created() {
    api.get(['staffs']).then(res => {
      if (res) {
        res.map(x => {
          x.speciality = x.speciality.toLowerCase();
          x.speciality = x.speciality.split(',');
        })
        this.listStaff = res;
      }
    })
  }
}
</script>
