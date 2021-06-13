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
              <img class="staff-avatar" :src="staff.avatar ? staff.avatar : defaultAvatar">
              <h4>{{ staff.name }}</h4>
              <span class="staff-position">{{ staff.position }}</span>
              <p class="staff-desc pl-8 pr-8">{{ staff.desc }}</p>
              <div class="f-row f-center">
                <button v-if="staff.speciality.length > 3" class="mr-2 inline-flex"><i class="material-icons" @click="() => prevIcon(index)">keyboard_arrow_left</i></button>
                <div style="width: 50%">
                  <slick ref="slickIcons" :options="specialOptions">
                    <v-icon class="ml-1 mr-1" v-for="(icon, index) of staff.speciality" :key="index">${{ icon }}</v-icon>
                  </slick>
                </div>
                <button v-if="staff.speciality.length > 3" class="ml-2 inline-flex"><i class="material-icons" @click="() => nextIcon(index)">keyboard_arrow_right</i></button>
              </div>
            </div>
          </div>
        </slick>
      </no-ssr>
      <div class="mt-2 txt-center action-btn">
        <button :disabled="+currentSlide === 0" class="mr-2 slide-btn" @click="prev()"><i class="material-icons">keyboard_arrow_left</i></button>
        <button :disabled="+currentSlide === (listStaff.length - 4)" class="ml-2 slide-btn" @click="next()"><i class="material-icons">keyboard_arrow_right</i></button>
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
      currentSlide: 0,
      slickOptions: {
        infinite: false,
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
      specialOptions: {
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: false,
        arrows: false,
      },
      defaultAvatar: require('../../assets/img/staff/founder.png')
    }
  },
  mounted() {
    setTimeout(() => {
      this.reInit();
    }, 1000)
  },
  methods: {
    next() {
      this.$refs.slick.next();
      this.currentSlide = this.$refs.slick.currentSlide();
      this.reInit();
    },
    prev() {
      this.$refs.slick.prev();
      this.currentSlide = this.$refs.slick.currentSlide();
      this.reInit();
    },
    nextIcon(index) {
      this.$refs.slickIcons[index].next();
    },
    prevIcon(index) {
      this.$refs.slickIcons[index].prev();
    },
    reInit() {
      this.$refs.slickIcons.forEach(x => {
        this.$nextTick(() => {
          x.reSlick();
        });
      });
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
