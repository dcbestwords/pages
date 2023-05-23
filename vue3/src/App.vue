<script>
  import Todos from './components/Todos.vue'
  import ToastNotification from './components/ToastNotification.vue'
  import Clock from './components/Clock.vue'
  import Testimonial from './components/testimonial-box-switcher.vue'
  import StickyNavigation from './components/StickyNavigation.vue'

  export default{
    name: 'App',
    components:{Todos,ToastNotification,Clock,Testimonial,StickyNavigation},
  }
</script>

<template>
  <!-- <Todos/> -->
  <!-- <ToastNotification/> -->
  <!-- <Clock></Clock> -->
  <!-- <Testimonial></Testimonial> -->
  <StickyNavigation></StickyNavigation>
</template>

<style>
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
</style>