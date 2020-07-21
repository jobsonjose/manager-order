<template>
  <div id="app">
    <header-sub-nave></header-sub-nave>
    <header-nave></header-nave>
    <router-view/>
  </div>
</template>

<script>
import headerHome from '@/components/componentsTela/HeaderHome.vue';
import subHeaderHome from '@/components/componentsTela/SubHeaderHome.vue';

export default {
  name: 'App',
  components: {
    'header-nave': headerHome,
    'header-sub-nave': subHeaderHome
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
body{
  margin: 0px !important;
}
</style>
