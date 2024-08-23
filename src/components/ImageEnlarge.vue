<template>
    <img :src="src" :style="imageStyle" @click="openModal"/>
    <ImageModal v-if="isModalOpen" :src="src" @close="closeModal" />
</template>
  
<script>
  import { ref, computed, defineComponent } from 'vue';
  import ImageModal from './ImageModal.vue';
  
  export default defineComponent({
        name: 'ImageEnlarge',
        components: {
            ImageModal
        },
        props: {
            src: {
                type: String,
                required: true,
            },
            width: {
                type: Number,
                default: 400,
            },
            height: {
                type: Number,
                default: 300,
            },
        },
        setup(props) {
            const isModalOpen = ref(false);
  
            const imageStyle = computed(() => ({
                width: `${props.width}px`,
                height: `${props.height}px`,
            }));
    
            const openModal = () => {
                isModalOpen.value = true;
                console.log(isModalOpen.value)
            }
            
            const closeModal = () => {
                console.log(isModalOpen.value)
                isModalOpen.value = false;
                console.log(isModalOpen.value)
            }

            return { isModalOpen, imageStyle, openModal, closeModal }
        }
        
    })
</script>
  
<style scoped>
  .image-container {
    position: relative;
    display: inline-block;
  }
  
  img {
    cursor: pointer;
  }
</style>
  