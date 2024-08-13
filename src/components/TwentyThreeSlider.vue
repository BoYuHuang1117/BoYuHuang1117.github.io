<template>
  <PhotoSlider :photos="slides"></PhotoSlider>
</template>
    
<script>
  import { defineComponent } from 'vue'
  import PhotoSlider from './PhotoSlider.vue';
  
  import 'vue3-carousel/dist/carousel.css'
  
  export default defineComponent({
    name: 'twentyThreeSlide',
    components: {
      PhotoSlider
    },

    setup() {
      const slides = [
        'images/2023/snow-1.jpg',
        'images/2023/snow-2.jpg',
        'images/2023/WA-1.jpg',
        'images/2023/WA-2.jpg',
        'images/2023/WA-3.jpg',
        'images/2023/WA-4.jpg',
        'images/2023/MN-1.jpg',
        'images/2023/MN-2.jpg',
        'images/2023/MN-3.jpg',
        'images/2023/CO-1.jpg',
        'images/2023/CO-2.jpg',
        'images/2023/CO-3.jpg',
        'images/2023/google.jpg',
      ]

      return { slides };
    }
    
  })
</script>
    
<style scoped>
  
</style>