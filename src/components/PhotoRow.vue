<template>
    <div class="list-item-container">
      <div class="list-item-head p-8">
        <li>{{ photo_list.key }}
          <span
            class="expand"
            @click="handleClick"
            v-text="toggletText[isExpanded ? 1 : 0]"
          ></span>
        </li>
      </div>
      <div class="list-item-body p-8" v-show="isExpanded">
        <slot />
      </div>
    </div>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'PhotoRow',
  props: {
    photo_list: Object,
    isExpanded: Boolean
  },
  setup(props, { emit }) {
    const toggletText = ["Show", "Hide"];

    const handleClick = () => {
      emit('toggle');
    };

    return { toggletText, handleClick };
  }
});
</script>

<style scoped>
  li {
    margin-bottom: 10px;
    background-color: #f0f0f0;
    padding: 10px;
    border-radius: 5px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
  
  .expand {
    font-weight: 100;
    text-align: right;
    float: right;
  }
</style>
