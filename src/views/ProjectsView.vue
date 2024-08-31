<template>
    <main>
        <h1> Tetris game play with mouse <a href="https://github.com/BoYuHuang1117/Tetris-game" target="_blank" rel="noopener noreferrer"> Link </a> </h1>
        <li> Adjustable window size </li>
        <li> Play with cursor </li>
        
        <ImageEnlarge src="images/tetris.gif"></ImageEnlarge>
    </main>
</template>

<script>
    import { defineComponent } from 'vue';
    import ImageEnlarge from '@/components/ImageEnlarge.vue';

    export default defineComponent({
        name: 'ProjectPage',
        components: {
            ImageEnlarge,
        },
        setup () {
            return 
        }
    });
</script>

<style scoped>
  main { 
    text-align: left;
    background-color: lightgrey;
  }
</style>