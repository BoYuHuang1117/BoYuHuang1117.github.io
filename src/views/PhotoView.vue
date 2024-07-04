<template>
    <main>
      <h1>Travel Across the States</h1>
      <li>May 2024 - Indianapolis, IN</li>
      <li>May 10th 2024 - Aurora light</li>
      <li>May 2024 - Holland, MI</li>
      <li>April 8th 2024 - Solar Eclipse</li>
      <li>Feb 2024 - Phoenix, AZ</li>
      <p> 2024 Hightlights</p>
      <twentyFourSlide />
      <li>Jul 2023 - Denver CO</li>
      <li>May 2023 - Minneapolis MN</li>
      <li>Mar 2023 - Seatle, WA </li>
      <p> 2023 Hightlights</p>
      <twentyThreeSlide />
      <li>Sep 2022 - Los Angeles, CA</li>
      <li>Jul 2022 - Madison, WI</li>
      <li>Dec 2021 - Houston, TX</li>
      <li>Jul 2021 - Chicago, IL</li>
      <li>Jul 2021 - Dune National Park, IN</li>
      <li>Dec 2019 - Dallas, TX</li>
      <p> Early Hightlights</p>
      <earlySlide />
    </main>
</template>
    
<script>
  import earlySlide from '@/components/EarlySlider.vue'
  import twentyFourSlide from '@/components/TwentyFourSlider.vue';
  import twentyThreeSlide from '@/components/TwentyThreeSlider.vue'
  export default {
    name: 'PhotoGallary',
    components: {
      earlySlide,
      twentyFourSlide,
      twentyThreeSlide
    }
  };
</script>
  
<style scoped>
  main {
    text-align: left;
    padding: 20px;
    background-color: lightgrey;
  }
</style>
    