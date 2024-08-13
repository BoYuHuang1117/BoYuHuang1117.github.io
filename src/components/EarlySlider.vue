<template>
  <PhotoSlider :photos="slides"></PhotoSlider>
</template>
    
<script>
  import { defineComponent } from 'vue'
  import PhotoSlider from './PhotoSlider.vue';
  
  import 'vue3-carousel/dist/carousel.css'
  
  export default defineComponent({
    name: 'earlySlide',
    components: {
      PhotoSlider
    },

    setup() {
      const slides = [
        'images/~2022/2019.JPG',
        'images/~2022/Chicago-1.JPG',
        'images/~2022/Houston-1.jpg',
        'images/~2022/LA-1.jpg',
        'images/~2022/LA-2.jpg',
        'images/~2022/LA-3.jpg',
        'images/~2022/LA-4.jpg',
        'images/~2022/Madison.JPG',
        'images/~2022/MKE-1.JPG',
        'images/~2022/Dune.jpg',
      ]

      return { slides };
    }
    
  })
</script>
    
<style scoped>
  
</style>
