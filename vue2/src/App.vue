<template>
  <!-- <Todos></Todos> -->
  <ToastNotification/>
</template>

<script>
import Todos from './components/myTodos'
import ToastNotification from './components/ToastNotification'

export default {
  name: 'App',
  components: {
    Todos,
    ToastNotification
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
