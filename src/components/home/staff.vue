<template>
  <div>
    <p class="staff-description txt-center">A type of businesses need access to development resources, so we<br> give you the option to decide how much you need to use.</p>
    <div v-if="listStaff.length > 0">
      <no-ssr>
        <slick
          ref="slick"
          :options="slickOptions">
          <div class="pl-4 pr-4 txt-center staff-item" v-for="(staff, index) of listStaff" :key="index">
            <div class="staff-item staff-content pb-2 txt-center">
              <img v-if="staff.avatar" class="staff-avatar" :src="staff.avatar">
              <h4>{{ staff.name }}</h4>
              <span class="staff-position">{{ staff.position }}</span>
              <p class="staff-desc pl-8 pr-8">{{ staff.desc }}</p>
              <div>
                <v-icon class="mr-1" v-for="(icon, index) of staff.speciality" :key="index">${{ icon }}</v-icon>
              </div>
            </div>
          </div>
        </slick>
      </no-ssr>
      <div class="mt-2 txt-center action-btn">
        <button class="mr-2"><i class="material-icons" @click="prev()">keyboard_arrow_left</i></button>
        <button class="ml-2"><i class="material-icons" @click="next()">keyboard_arrow_right</i></button>
      </div>
    </div>
  </div>
</template>
<script>

import {api} from '../../helpers/services/api.service'

export default {
  components: {
  },
  created() {
    api.get(['staffs']).then(res => {
      if (res) {
        res.map(x => {
          x.speciality = x.speciality.toLowerCase();
          x.speciality = x.speciality.split(',');
        })
        this.listStaff = res;
        // this.reInit();
      }
    })
  },
  data() {
    return {
      listStaff: [],
      slickOptions: {
        infinite: true,
        dots: false,
        arrows: false,
        slidesToShow: 3,
        responsive: [
          {
            breakpoint: 960,
            settings: {
              slidesToShow: 2,
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
            }
          }
          // You can unslick at a given breakpoint now by adding:
          // settings: "unslick"
          // instead of a settings object
        ]
      },
    }
  },
  methods: {
    next() {
      this.$refs.slick.next();
    },
    prev() {
      this.$refs.slick.prev();
    },
    // reInit() {
    //   let currIndex = this.$refs.slick.currentSlide();
    //   this.$refs.slick.destroy();
    //   this.$nextTick(() => {
    //     this.$refs.slick.create();
    //     this.$refs.slick.goTo(currIndex, true);
    //   });
    // }
  }
}
</script>
