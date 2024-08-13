<template>
  <PhotoSlider :photos="slides"></PhotoSlider>
</template>
  
<script>
  import { defineComponent } from 'vue'
  import PhotoSlider from './PhotoSlider.vue';
  
  import 'vue3-carousel/dist/carousel.css'
  
  export default defineComponent({
    name: 'twentyFourSlide',
    components: {
      PhotoSlider
    },

    setup() {
      const slides = [
        'images/2024/AZ-1.jpg',
        'images/2024/AZ-2.jpg',
        'images/2024/AZ-3.jpg',
        'images/2024/AZ-4.jpg',
        'images/2024/solar-eclipse.JPG',
        'images/2024/MI-1.jpg',
        'images/2024/MI-2.jpg',
        'images/2024/MI-3.jpg',
        'images/2024/Aurora-light-1.jpg',
        'images/2024/Aurora-light-2.jpg',
        'images/2024/IN-1.jpg',
        'images/2024/IN-2.jpg',
        'images/2024/IN-3.jpg',
      ];

      return { slides };
    }
})
</script>
  
<style scoped>

</style>