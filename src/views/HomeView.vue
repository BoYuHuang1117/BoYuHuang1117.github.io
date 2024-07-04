<template>
  <main>
    <MiddleMain />
  </main>
</template>

<script>
import MiddleMain from '../components/MiddleMain.vue';
export default {
  name: 'HomePage',
  components: {
    MiddleMain,
  },
};
</script>

<style scoped>
  main {
    padding: 20px;
    background-color: lightgrey;
  }
</style>