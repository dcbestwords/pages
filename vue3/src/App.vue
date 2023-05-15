<script>
  import Todos from './components/Todos.vue'
  import ToastNotification from './components/ToastNotification.vue'
  import Clock from './components/Clock.vue'
  export default{
    name: 'App',
    components:{Todos,ToastNotification,Clock},
  }
</script>

<template>
  <!-- <Todos/> -->
  <!-- <ToastNotification/> -->
  <Clock></Clock>
</template>

<style>
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
</style>