<template>
  <interest-row v-for="(interest, index) in interests" :key="index" :interest="interest">
    <template v-for="(item, index) in interest.items" :key="index">
      <p> - {{ item }}</p>
    </template>
  </interest-row>
</template>

<script>
import InterestRow from "./Interests.vue"
import { defineComponent, ref } from 'vue';

export default defineComponent({
    name: 'InterestSection',
    components: { InterestRow },
    setup() {
      const interests = ref([
        {
          key: 'Basketball Analysis',
          icons: ['fa-solid fa-basketball'],
          items: ['Small forward', 'Golden State Warriors fans',],
        },
        {
          key: 'Pickleball lover',
          icons: ['fa-solid fa-table-tennis-paddle-ball'],
          items: ['Kitchen (non-valley zone)', 'Newbie'],
        },
        {
          key: 'Backend Software Engineering',
          icons: ['fa-solid fa-laptop', 'fa-solid fa-database', 'fa-solid fa-server'],
          items: ['Python Flask', 'MySQL', 'Celery asynchronous task', 'Docker'],
        },
        {
          key: 'Natural Language Processing and LLM',
          icons: ['fa-solid fa-language'],
          items: ['Bert', 'Transfer Learning', 'LSTM', 'Recurrent Neural Network (RNN)'],
        }
      ]);
      return {
        interests,
      };
    },
  });

</script>

