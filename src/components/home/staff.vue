<template>
  <div>
    <p class="staff-description txt-center">A type of businesses need access to development resources, so we<br> give you the option to decide how much you need to use.</p>
    <ListStaff :listStaff="listStaff"/>
  </div>
</template>
<script>

import ListStaff from '../list-staff';
export default {
  components: {
    ListStaff
  },
  data() {
    return {
      listStaff : [
        {
          avatar: require('~/assets/img/staff/secretary.png'),
          name: 'Celio Jemy',
          position: 'Founder',
          description: 'Build a Beautiful, Clean & Modern Design website.',
          speciality: ['angular', 'php', 'react', 'wordpress']
        },
        {
          avatar: require('~/assets/img/staff/manager.png'),
          name: 'Vinit Saw',
          position: 'Manager',
          description: 'Build a Beautiful, Clean & Modern Design website.',
          speciality: ['angular', 'php', 'react', 'wordpress']
        },
        {
          avatar: require('~/assets/img/staff/founder.png'),
          name: 'Nina Loe',
          position: 'Ceo',
          description: 'Build a Beautiful, Clean & Modern Design website.',
          speciality: ['angular', 'php', 'react', 'wordpress']
        },
        {
          avatar: require('~/assets/img/staff/secretary.png'),
          name: 'Celio Jemy',
          position: 'Founder',
          description: 'Build a Beautiful, Clean & Modern Design website.',
          speciality: ['angular', 'php', 'react', 'wordpress']
        },
        {
          avatar: require('~/assets/img/staff/manager.png'),
          name: 'Vinit Saw',
          position: 'Manager',
          description: 'Build a Beautiful, Clean & Modern Design website.',
          speciality: ['angular', 'php', 'react', 'wordpress']
        },
        {
          avatar: require('~/assets/img/staff/founder.png'),
          name: 'Nina Loe',
          position: 'Ceo',
          description: 'Build a Beautiful, Clean & Modern Design website.',
          speciality: ['angular', 'php', 'react', 'wordpress']
        }
      ]
    }
  }
}
</script>
