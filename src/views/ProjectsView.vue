<template>
    <main>
        <div class="category-navigation">
            <button 
                v-for="category in categories" 
                :key="category.id"
                :class="['category-btn', { active: currentCategory === category.id }]"
                @click="currentCategory = category.id"
            >
                {{ category.name }}
            </button>
        </div>

        <div v-if="currentCategory === 'games'" class="category-section">
            <section class="project-section">
                <h1>Tetris game play with mouse 
                    <a href="https://github.com/BoYuHuang1117/Tetris-game" target="_blank" rel="noopener noreferrer">Link</a>
                </h1>
                <div class="project-details">
                    <ul>
                        <li>Adjustable window size</li>
                        <li>Play with cursor</li>
                    </ul>
                    <ImageEnlarge src="images/tetris.gif" pos="center"></ImageEnlarge>
                </div>
            </section>
        </div>

        <div v-if="currentCategory === 'ai'" class="category-section">
            <section class="project-section">
                <h1>Mandarin version of Amazon "Alexa" (雅婷姊)
                    <a href="https://github.com/BoYuHuang1117/Audio-Keyword-Spotting-in-Chinese" target="_blank" rel="noopener noreferrer">Link</a>
                </h1>
                <div class="project-details">
                    <ul>
                        <li>In data preprocessing folder, voice processing includes adding background noise and generate mel frequency cepstrum (MFCC)</li>
                        <li>In main training folder (./code), it demonstrates the loss vs. epoch graph, sample test case and model hyper-parameters summary</li>
                    </ul>
                    
                    <ImageEnlarge src="images/loss-vs-epoch.png" pos="center"></ImageEnlarge>
                    <ImageEnlarge src="images/sample-audio.png" width=400 height=500 pos="center"></ImageEnlarge>
                    
                    <h2>Model architecture and hyper parameters</h2>
                    <ImageEnlarge src="images/model-detail.png" width=350 height=450 pos="center"></ImageEnlarge>
                    
                    <h2>Usage Instructions</h2>
                    <ul>
                        <li>To play with the app, a simple terminal control version is provided in ./UI folder</li>
                        <li>Install requirements for Python</li>
                        <li>Follow the prompt in terminal</li>
                        <li>Speak out the awakening keyword "Yating Jie" (雅婷姊)</li>
                    </ul>
                </div>
            </section>
        </div>

        <div v-if="currentCategory === 'systems'" class="category-section">
            <section class="project-section">
                <h1>Modified v6 file system
                    <a href="https://github.com/BoYuHuang1117/V6-File-System" target="_blank" rel="noopener noreferrer">Link</a>
                </h1>
                <div class="project-details">
                    <p>Serve as a file system that accepts Unix-like command</p>
                    <h2>Capabilities</h2>
                    <ul>
                        <li>Initalization v6 file system: initfs (filename) (# of block) (# of i-nodes)</li>
                        <li>Choose the v6 file system: v6Name (filename)</li>
                        <li>Copy external file into v6 file system: cpin (externalfile) (v6-file)</li>
                        <li>Copy file in v6 file system out to external file: cpout (v6-file) (externalfile)</li>
                        <li>Remove file: rm (v6-file)</li>
                        <li>Create new directory: mkdir (v6dir)</li>
                        <li>Change current directory: cd (v6dir)</li>
                        <li>Display files in current directory: ls</li>
                        <li>Exit the program: q</li>
                    </ul>
                </div>
            </section>
        </div>
    </main>
</template>

<script>
import { defineComponent, ref } from 'vue';
import ImageEnlarge from '@/components/ImageEnlarge.vue';

export default defineComponent({
    name: 'ProjectPage',
    components: {
        ImageEnlarge,
    },
    setup() {
        const currentCategory = ref('games');
        const categories = [
            { id: 'games', name: 'Games' },
            { id: 'ai', name: 'AI/ML' },
            { id: 'systems', name: 'Systems' }
        ];

        return {
            currentCategory,
            categories
        };
    }
});
</script>

<style scoped>
main { 
    text-align: left;
    background-color: lightgrey;
    padding: 20px;
}

.category-navigation {
    display: flex;
    justify-content: center;
    gap: 10px;
    margin-bottom: 30px;
    padding: 10px;
    background-color: white;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.category-btn {
    padding: 8px 16px;
    border: none;
    border-radius: 4px;
    background-color: #e0e0e0;
    cursor: pointer;
    font-size: 1.1em;
    transition: all 0.3s ease;
}

.category-btn.active {
    background-color: #2c3e50;
    color: white;
}

.category-btn:hover {
    background-color: #2c3e50;
    color: white;
}

.project-section {
    background-color: white;
    padding: 30px;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    margin-bottom: 30px;
}

.project-section h1 {
    color: #2c3e50;
    font-size: 1.8em;
    margin-bottom: 20px;
    text-align: center;
}

.project-section h2 {
    color: #2c3e50;
    font-size: 1.4em;
    margin: 20px 0 15px 0;
}

.project-details {
    padding: 20px;
}

.project-details ul {
    list-style-type: disc;
    padding-left: 20px;
    margin-bottom: 20px;
}

.project-details li {
    margin-bottom: 10px;
    color: #444;
    line-height: 1.5;
}

.project-details p {
    color: #444;
    line-height: 1.6;
    margin-bottom: 15px;
}

a {
    color: #42b983;
    text-decoration: none;
    margin-left: 10px;
}

a:hover {
    text-decoration: underline;
}

@media (max-width: 768px) {
    .category-navigation {
        flex-wrap: wrap;
    }

    .category-btn {
        font-size: 1em;
        padding: 6px 12px;
    }

    .project-section {
        padding: 20px;
    }

    .project-section h1 {
        font-size: 1.5em;
    }
}
</style>