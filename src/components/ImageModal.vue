<template>
    <div class="modal-overlay" @click.self="close">
      <img :src="src" class="modal-image" />
      <div class="modal-content">
        <button class="close-button" @click="close">X</button>
        <slot></slot>
      </div>
    </div>
</template>
  
<script>
  import { defineComponent } from 'vue';
  
  export default defineComponent({
        name: 'ImageModal',
        props: {
            src: {
                type: String,
                required: true
            }
        },
        
        setup(props, { emit }) {
            const close = () => {
                emit('close');
            };

            return { close };
        }
    })

</script>
  
<style scoped>
  .modal-image {
    max-width: 90%;
    max-height: 90%;
    object-fit: contain
  }
  .modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.7);
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .modal-content {
    position: relative;
    max-width: 90%;
    max-height: 90%;
    background: #fff;
    padding: 20px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  }
  
  .close-button {
    position: absolute;
    top: 10px;
    right: 10px;
    background: transparent;
    border: none;
    font-size: 24px;
    color: #333;
    cursor: pointer;
  }
</style>
  