<template>
    <main>
      <h1>Travel Across the States</h1>
      <template v-for="(item, index) in twenty_four_list" :key="index">
        <li>{{ item }}</li>
      </template>
      <p> 2024 Hightlights</p>
      <twentyFourSlide />
      <template v-for="(item, index) in twenty_three_list" :key="index">
        <li>{{ item }}</li>
      </template>
      <p> 2023 Hightlights</p>
      <twentyThreeSlide />
      <template v-for="(item, index) in early_list" :key="index">
        <li>{{ item }}</li>
      </template>
      <p> Early Hightlights</p>
      <earlySlide />
    </main>
</template>
    
<script>
  import { defineComponent } from 'vue';
  import earlySlide from '@/components/EarlySlider.vue'
  import twentyFourSlide from '@/components/TwentyFourSlider.vue';
  import twentyThreeSlide from '@/components/TwentyThreeSlider.vue'
  
  export default defineComponent({
    name: 'PhotoGallary',
    components: {
      earlySlide,
      twentyFourSlide,
      twentyThreeSlide
    },
    data: () => {
      return {
        twenty_four_list: [
          "May 2024 - Indianapolis, IN",
          "May 10th 2024 - Aurora light",
          "May 2024 - Holland, MI",
          "April 8th 2024 - Solar Eclipse",
          "Feb 2024 - Phoenix, AZ",
        ],
        twenty_three_list: [
          "Jul 2023 - Denver CO",
          "May 2023 - Minneapolis MN",
          "Mar 2023 - Seatle, WA",
        ],
        early_list: [
          "Sep 2022 - Los Angeles, CA",
          "Jul 2022 - Madison, WI",
          "Dec 2021 - Houston, TX",
          "Jul 2021 - Chicago, IL",
          "Jul 2021 - Dune National Park, IN",
          "Dec 2019 - Dallas, TX",
        ]
      }
    }
  });
</script>
  
<style scoped>
  main {
    text-align: left;
    padding: 20px;
    background-color: lightgrey;
  }
  ul {
    list-style-type: none;
    padding: 0;
    margin: 0;
  }

  li {
    margin-bottom: 10px;
    background-color: #f0f0f0;
    padding: 10px;
    border-radius: 5px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }

</style>
    