<template>
  <main>
    <h1>Introduction</h1>
    <p>I am a genuine sports fan who plays basketball, pickleball and tennis who loves sci-fi movies and animations.</p>
    
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
    
    <h1>Achievement</h1>
    <li>Silver Award of 2019 ICBHI</li>
    <img src="../assets/ICBHI-onStage.jpg" alt="on stage" style="width: 400px;height: 300px;">
    <img src="../assets/ICBHI-solo.jpg" alt="solo" style="width: 300px;height: 400px;">
    
    <h1>Publications</h1>
    <li><a href="https://link.springer.com/chapter/10.1007/978-3-030-30636-6_52" target="_blank" rel="noopener noreferrer"> Improvement of Environment and Camera Setting on Extraction of Heart Rate Using Eulerian Video Magnification</a></li>
    <li><a href="https://www.semanticscholar.org/paper/An-Finite-Element-Analysis-of-Patellar-and-Tendon-Huang-Hsu/bd83636e6fd716d94296545a6fe52e1976392e5d" target="_blank" rel="noopener noreferrer"> A Finite Element Analysis Simulation of Patellar and Quadriceps Tendon injury during Squatting</a></li>
    
    <h1>Area of Interests</h1>
    <li>Basketball Analysis <font-awesome-icon icon="fa-solid fa-basketball" /></li>
    <li>Pickleball lover <font-awesome-icon icon="fa-solid fa-table-tennis-paddle-ball" /></li>
    <li>Backend Software Engineering <font-awesome-icon icon="fa-solid fa-laptop" /> <font-awesome-icon icon="fa-solid fa-database" /> <font-awesome-icon icon="fa-solid fa-server" /></li>
    <li>Natural Language Processing and LLM <font-awesome-icon icon="fa-solid fa-language" /></li>
    
    <h1>More about Me</h1>
    <li>Location: Chicago-Milwaukee area <font-awesome-icon icon="fa-solid fa-location-crosshairs" /></li>
    <li><a href="https://www.linkedin.com/in/bo-yuhuang-michael/" target="_blank" rel="noopener noreferrer"> Linkedin Profile </a><font-awesome-icon icon="fa-brands fa-linkedin" /></li>
    <li><a href="https://github.com/BoYuHuang1117" target="_blank" rel="noopener noreferrer"> Github Profile </a><font-awesome-icon icon="fa-brands fa-github" /></li>
    <li><a href="https://leetcode.com/u/michael_byhuang/" target="_blank" rel="noopener noreferrer"> Leetcode Profile </a><font-awesome-icon icon="fa-solid fa-code" /></li>
  </main>
</template>
  
<script>
  import earlySlide from './EarlySlider.vue'
  import twentyFourSlide from './TwentyFourSlider.vue';
  import twentyThreeSlide from './TwentyThreeSlider.vue'
  export default {
    name: 'MiddleMain',
    components: {
      earlySlide,
      twentyFourSlide,
      twentyThreeSlide
    }
  };
</script>

<style scoped>
  /* Add your CSS styles here */
  main {
    padding: 20px;
  }
</style>
  