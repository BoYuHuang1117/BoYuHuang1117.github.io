<template>
  <div>
    <InterestRow
      v-for="(interest, index) in interests"
      :key="index"
      :interest="interest"
      :isExpanded="expandedIndex === index"
      @toggle="handleToggle(index)"
    >
      <template v-for="(item, index) in interest.items" :key="index">
        <p> - {{ item }} </p>
      </template>
    </InterestRow>
  </div>
</template>

<script>
import InterestRow from "./InterestRow.vue";
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'InterestSection',
  components: { InterestRow },
  setup() {
    const interests = ref([
      {
        key: 'Basketball Analysis',
        icons: ['fa-solid fa-basketball'],
        items: ['Small forward', 'Golden State Warriors fans'],
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

    const expandedIndex = ref(null);

    const handleToggle = (index) => {
      expandedIndex.value = expandedIndex.value === index ? null : index;
    };

    return {
      interests,
      expandedIndex,
      handleToggle
    };
  },
});
</script>
