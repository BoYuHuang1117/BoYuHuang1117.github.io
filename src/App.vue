<template>
  <HeaderMain />
  <div id="app">
    <router-link to="/">Home</router-link> |
    <router-link to="/photo">Photo</router-link> |
    <router-link to="publication">Publications and Awards</router-link>
    <router-view />
  </div>
  <FooterMain />
</template>

<script>
import HeaderMain from '@/components/HeaderMain.vue';
import FooterMain from '@/components/FooterMain.vue';

export default {
  name: 'App',
  components: {
    HeaderMain,
    FooterMain
  },
};
</script>

<style>
#app {
  font-family: Arial, sans-serif;
}
</style>