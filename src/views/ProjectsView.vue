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

        <h1> Modified v6 file system <a href="https://github.com/BoYuHuang1117/V6-File-System" target="_blank" rel="noopener noreferrer"> Link </a></h1>
        <li> Serve as a file system that accepts Unix-like command </li>
        <li> Capabilities </li>
        <p> - Initalization v6 file system: initfs (filename) (# of block) (# of i-nodes) </p>
        <p> - Choose the v6 file system: v6Name (filename) </p>
        <p> - Copy external file into v6 file system: cpin (externalfile) (v6-file) </p>
        <p> - Copy file in v6 file system out to external file: cpout (v6-file) (externalfile) </p>
        <p> - Remove file: rm (v6-file) </p>
        <p> - Create new directory: mkdir (v6dir) </p>
        <p> - Change current directory: cd (v6dir) </p>
        <p> - Display files in current directory: ls </p>
        <p> - Exit the program: q </p>
        
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