<template>
  <div>
    <v-row class="pt-10 f-row">
      <v-col sm="4" cols="12" class="pl-4 pr-4 txt-center staff-item" v-for="(staff, index) of listStaff" :key="index">
        <div class="staff-content pb-10">
          <div class=" pl-10 pr-10">
            <img :src="staff.avatar">
          </div>
          <h4>{{ staff.name }}</h4>
          <span class="staff-position">{{ staff.position }}</span>
          <p class="pl-8 pr-8">{{ staff.description }}</p>
          <div>
            <v-icon class="mr-1" v-for="(icon, index) of staff.speciality" :key="index">${{ icon }}</v-icon>
          </div>
        </div>
      </v-col>
    </v-row>
    <div class="pb-10 txt-center action-btn">
      <button><i class="material-icons">arrow_back_ios</i></button>
      <button><i class="material-icons">arrow_forward_ios</i></button>
    </div>
  </div>
</template>
<script>

export default {
  components: {
  },
  props: {
    listStaff: Array,
  },
  data() {
    return {
    }
  }
}
</script>
