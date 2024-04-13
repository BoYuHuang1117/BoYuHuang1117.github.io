<!-- <template>
  <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Welcome to Your Vue.js App"/>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style> -->

<template>
  <div id="app">
    <HeaderMain />
    <MiddleMain />
    <FooterMain />
  </div>
</template>

<script>
import HeaderMain from './components/HeaderMain.vue';
import MiddleMain from './components/MiddleMain.vue';
import FooterMain from './components/FooterMain.vue';

export default {
  name: 'App',
  components: {
    HeaderMain,
    MiddleMain,
    FooterMain,
  },
};
</script>

<style>
/* Add your global CSS styles here */
#app {
  font-family: Arial, sans-serif;
}
</style>