<template>
  <!-- <Todos></Todos> -->
  <!-- <ToastNotification/> -->
  <Clock></Clock>
</template>

<script>
import Todos from './components/myTodos'
import ToastNotification from './components/ToastNotification'
import Clock from './components/Clock'

export default {
  name: 'App',
  components: {
    Todos,
    ToastNotification,
    Clock
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
