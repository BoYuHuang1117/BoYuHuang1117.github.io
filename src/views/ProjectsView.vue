<template>
    <main>
        <h1> Tetris game play with mouse <a href="https://github.com/BoYuHuang1117/Tetris-game" target="_blank" rel="noopener noreferrer"> Link </a> </h1>
        <li> Adjustable window size </li>
        <li> Play with cursor </li>
        
        <ImageEnlarge src="images/tetris.gif" pos="center"></ImageEnlarge>

        <h1> Mandarin version of Amazon "Alexa" (雅婷姊) <a href="https://github.com/BoYuHuang1117/Audio-Keyword-Spotting-in-Chinese" target="_blank" rel="noopener noreferrer"> Link </a> </h1>
        <li> In data preprocessing folder, voice processing includes adding background noise and generate mel frequency cepstrum (MFCC) </li>
        <br>
        <li> In main training folder (./code), it demonstrates the loss vs. epoch graph, sample test case and model hyper-parameters summary </li>
        <ImageEnlarge src="images/loss-vs-epoch.png" pos="center"></ImageEnlarge>
        <ImageEnlarge src="images/sample-audio.png" width=400 height=500 pos="center"></ImageEnlarge>
        <br><br>
        <li> Model architecture and hyper parameters </li>
        <ImageEnlarge src="images/model-detail.png" width=350 height=450 pos="center"></ImageEnlarge>
        <br><br>
        <li> To play with the app, a simple terminal control version is provided in ./UI folder </li>
        <p> - Install requirements for Python </p>
        <p> - Follow the prompt in terminal </p>
        <p> - Speak out the awakening keyword "Yating Jie" (雅婷姊) </p>
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
  h1 {
    text-align: center;
  }
</style>