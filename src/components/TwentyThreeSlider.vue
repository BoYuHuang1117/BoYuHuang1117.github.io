<template>
    <Carousel :autoplay="2000" :itemsToShow="3.95" :wrapAround="true" :transition="500">
        <Slide v-for="slide in slides" :key="slide.id">
            <div class="carousel__item">
              <img :src=slide.src style="width: 100%;"/>
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
      name: 'twentyThreeSlide',
      components: {
        Carousel,
        Slide,
        Pagination,
      },
      data: () => {
        return {
          slides: [
              {id: 1, src:'images/2023/snow-1.jpg'},
              {id: 2, src:'images/2023/snow-2.jpg'},
              {id: 3, src:'images/2023/WA-1.jpg'},
              {id: 4, src:'images/2023/WA-2.jpg'},
              {id: 5, src:'images/2023/WA-3.jpg'},
              {id: 6, src:'images/2023/WA-4.jpg'},
              {id: 7, src:'images/2023/MN-1.jpg'},
              {id: 8, src:'images/2023/MN-2.jpg'},
              {id: 9, src:'images/2023/MN-3.jpg'},
              {id: 10, src:'images/2023/CO-1.jpg'},
              {id: 11, src:'images/2023/CO-2.jpg'},
              {id: 12, src:'images/2023/CO-3.jpg'},
              {id: 13, src:'images/2023/google.jpg'},
          ]
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