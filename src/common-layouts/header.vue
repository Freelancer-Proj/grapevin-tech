<template>
  <header 
    v-bind:class="{ 'header-close' : status === 'close', 'header-hover' : status === 'hover', 'header-lock' : status === 'lock' }"
    @mouseover="mouseOver"
  >
    <!-- @mouseleave="hover = false" -->
    <!-- @mouseover="hover = true" -->
    <a v-if="status === 'lock'" class="close-header" v-on:click="closeHeader()">X</a>
    <img src="../assets/img/grape-w.png" alt="">
    <ul v-bind:class="{ 'menu-hover' : status === 'hover', 'menu-close': status !== 'hover'}" class="menu-bar">
      <li v-for="(item, index) in section" :key="index" v-on:click="activeSection(index)" v-bind:class="{ active : item.active }">
        {{ status === 'hover' ? '0' + (index + 1) : item.name }}
        <ul class="child-menu" v-if="item.child && status !== 'hover'">
          <li v-for="(child, indexChild) in item.child" :key="indexChild" v-bind:class="{ active : item.active && child.active }">{{ child.name }}</li>
        </ul>
      </li>
    </ul>
    <a class="lock-menu" v-on:click="lockHeader()">{{ lock ? 'unlock' : 'lock' }}</a>
  </header>
</template>
<script>
import { mapState } from 'vuex'

export default {
  props: ['type'],
  data: () => ({
    // hover: false,
    // lock header
    lock: false,
    // has 3 status: close, hover, lock
    status: 'hover',
    section : [ 
      {
        name: 'Home',
        child: [
          { 
            name: 'About us',
            active: true
          },
          { 
            name: 'PortFolio',
            active: false
          },
          { 
            name: 'Our Team',
            active: false
          },
        ],
        active: true
      },
      {
        name: 'Blogs',
        active: false
      },
      {
        name: 'News',
        active: false
      },
      {
        name: 'Contact',
        active: false
      }
    ],
  }),
  created: function () {
    // this.status = this.hover ? 'close' : 'hover';
  },
  methods: {
    activeSection(id) {
      console.log(id);
    },

    mouseOver: function(){
      if (this.status !== 'lock') {
        this.status = 'hover';
      }
    },

    closeHeader() {
      this.status = 'hover';
    },

    lockHeader() {
      this.lock = !this.lock;
      this.status = this.lock ? 'lock': 'hover';
    }
  }
}
</script>
<style lang="scss">
</style>
