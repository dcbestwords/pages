<script>
  import Todos from './components/Todos.vue'
  import ToastNotification from './components/ToastNotification.vue'
  export default{
    name: 'App',
    components:{Todos,ToastNotification},
  }
</script>

<template>
  <!-- <Todos/> -->
  <ToastNotification/>
</template>

<style>
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
</style>