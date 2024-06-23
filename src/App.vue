<template>
  <div id="app">
    <HeaderMain />
    <MiddleMain />
    <FooterMain />
  </div>
</template>

<script>
import HeaderMain from './views/HeaderMain.vue';
import MiddleMain from './views/MiddleMain.vue';
import FooterMain from './views/FooterMain.vue';

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
#app {
  font-family: Arial, sans-serif;
}
</style>