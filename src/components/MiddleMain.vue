<template>
  <main>
    <h1>Introduction</h1>
    <p>Sports enthusiast - I am a genuine sports fan who enjoys a wide variety of sports including basketball, pickleball and tennis. 
      I also do workout to build up muscle and stay healthy.</p>
    <p>Refreshing with stories and books - In my freetime, I love watching sci-fi movies and TV shows.
      Not only do I watch pictures, I also engage in reading the original book series such as Dune and Game of Thrones.</p>
    <p>Stay curious and keep exploring - Along my journey in the US, I experience a lot including foods and great nature. 
      I try my best to enjoy the moment, be relentless and never rest! </p>
    
    <div>
      <img src="../assets/selfie.png" alt="selfie" style="width: 350px;height: 450px; text-align: center;">
    </div>
  </main>

  <h1>Area of Interests
    <font-awesome-icon icon="fa-solid fa-basketball" /><font-awesome-icon icon="fa-solid fa-table-tennis-paddle-ball" />
    <font-awesome-icon icon="fa-solid fa-laptop" /> <font-awesome-icon icon="fa-solid fa-server" /> <font-awesome-icon icon="fa-solid fa-database" /> <font-awesome-icon icon="fa-solid fa-language" />
  </h1>

  <InterestSection />
  
  <content>
    <h1>More about Me</h1>
    <li>Location: Chicago-Milwaukee area <font-awesome-icon icon="fa-solid fa-location-crosshairs" /></li>
    <li><a href="https://www.linkedin.com/in/bo-yuhuang-michael/" target="_blank" rel="noopener noreferrer"> Linkedin Profile </a><font-awesome-icon icon="fa-brands fa-linkedin" /></li>
    <li><a href="https://github.com/BoYuHuang1117" target="_blank" rel="noopener noreferrer"> Github Profile </a><font-awesome-icon icon="fa-brands fa-github" /></li>
    <li><a href="https://leetcode.com/u/michael_byhuang/" target="_blank" rel="noopener noreferrer"> Leetcode Profile </a><font-awesome-icon icon="fa-solid fa-code" /></li>
  </content>
</template>
  
<script>
  import InterestSection from "./InterestSection.vue";

  export default {
    name: 'MiddleMain',
    components: { 
      InterestSection, 
    },
  };
</script>

<style scoped>
  main {
    text-align: center;
    padding: 20px;
  }

  content {
    text-align: left;
    padding: 20px;
  }

  li {
    margin-bottom: 10px;
    background-color: lightgreen;
    padding: 6px;
    border-radius: 5px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
</style>
  