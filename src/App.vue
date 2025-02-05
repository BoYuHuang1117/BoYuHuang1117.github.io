<template>
  <HeaderMain />
  <div id="app">
    <tab>
      <router-link to="/">Home</router-link>
    </tab>
    |
    <tab>
      <router-link to="/photo">Photo</router-link>
    </tab>
    |
    <tab>
      <router-link to="/publication">Publications and Awards</router-link>
    </tab>
    |
    <tab>
      <router-link to="/project">Projects</router-link>
    </tab>
    |
    <tab>
      <router-link to="/tech">Tech Blog</router-link>
    </tab>
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
tab {
  padding-left: 15px;
  padding-right: 15px;
  padding-bottom: 15px;
  padding-top: 8px;
  font-size: larger;
  font-style: italic;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  text-align: center;
  background-color: aquamarine;
  color: black;
}
</style>