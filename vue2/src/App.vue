<template>
  <!-- <Todos></Todos> -->
  <!-- <ToastNotification/> -->
  <!-- <Clock></Clock> -->
  <Testimonial></Testimonial>
</template>

<script>
import Todos from './components/myTodos'
import ToastNotification from './components/ToastNotification'
import Clock from './components/Clock'
import Testimonial from './components/testimonial-box-switcher'

export default {
  name: 'App',
  components: {
    Todos,
    ToastNotification,
    Clock,
    Testimonial
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
