<template>
  <!-- <Todos></Todos> -->
  <!-- <ToastNotification/> -->
  <!-- <Clock></Clock> -->
  <!-- <Testimonial></Testimonial> -->
  <StickyNavigation></StickyNavigation>
</template>

<script>
import Todos from './components/myTodos'
import ToastNotification from './components/ToastNotification'
import Clock from './components/Clock'
import Testimonial from './components/testimonial-box-switcher'
import StickyNavigation from './components/StickyNavigation'

export default {
  name: 'App',
  components: {
    Todos,
    ToastNotification,
    Clock,
    Testimonial,
    StickyNavigation
  }
}
</script>

<style>
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
</style>
