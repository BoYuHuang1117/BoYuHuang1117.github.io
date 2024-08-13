<template>
    <Carousel :autoplay="2000" :itemsToShow="3.95" :wrapAround="true" :transition="500">
        <Slide v-for="photo in photos" :key="photo">
            <div class="carousel__item">
              <img :src=photo style="width: 100%;"/>
            </div>
        </Slide>
      <template #addons>
        <Pagination />
      </template>
    </Carousel>
</template>
    
 <script>
    import { defineComponent } from 'vue'
    import { Carousel, Pagination, Slide } from 'vue3-carousel'

    import 'vue3-carousel/dist/carousel.css'

    export default defineComponent({
        name: 'PhotoSlider',
        components: {
            Carousel,
            Slide,
            Pagination,
        },
        props: {
            photos:  {
                type: Array,
                required: true
            }
        },
    })
</script>
    
 <style scoped>
  .carousel__item {
    min-height: 400px;
    width: 100%;
    background-color: var(--vc-clr-primary);
    color: var(--vc-clr-white);
    font-size: 20px;
    border-radius: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .carousel__slide {
    padding: 5px;
  }
    
  .carousel__viewport {
    perspective: 2000px;
  }
    
  .carousel__track {
    transform-style: preserve-3d;
  }
    
  .carousel__slide--sliding {
    transition: 0.5s;
  }
    
  .carousel__slide {
    opacity: 0.9;
    transform: rotateY(-20deg) scale(0.9);
  }
    
  .carousel__slide--active ~ .carousel__slide {
    transform: rotateY(20deg) scale(0.9);
  }
    
  .carousel__slide--prev {
    opacity: 1;
    transform: rotateY(-10deg) scale(0.95);
  }
    
  .carousel__slide--next {
    opacity: 1;
    transform: rotateY(10deg) scale(0.95);
  }
    
  .carousel__slide--active {
    opacity: 1;
    transform: rotateY(0) scale(1.1);
  }
</style>