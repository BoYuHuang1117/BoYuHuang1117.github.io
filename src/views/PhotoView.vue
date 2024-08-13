<template>
    <main>
      <h1>Travel Across the States</h1>
      <PhotoRow 
        v-for="(photo_list, index) in twenty_four_list"
        :key="index"
        :photo_list="photo_list"
        :isExpanded="expandedIndex[0] === index"
        @toggle="handleToggle(0, index)"
      >
        <!-- <template v-for="(item, index) in photo_list.items" :key="index">
          <img :src="item" style="width: 400px;height: 300px; text-align: center;">
        </template> -->
      </PhotoRow>
      <p> 2024 Hightlights </p>
      <twentyFourSlide />
      
      <PhotoRow 
        v-for="(photo_list, index) in twenty_three_list"
        :key="index"
        :photo_list="photo_list"
        :isExpanded="expandedIndex[1] === index"
        @toggle="handleToggle(1, index)"
      >
        
      </PhotoRow>
      <p> 2023 Hightlights </p>
      <twentyThreeSlide />
      
      <PhotoRow 
        v-for="(photo_list, index) in early_list"
        :key="index"
        :photo_list="photo_list"
        :isExpanded="expandedIndex[2] === index"
        @toggle="handleToggle(2, index)"
      >
        
      </PhotoRow>
      <p> Early Hightlights </p>
      <earlySlide />
    </main>
</template>
    
<script>
  import { defineComponent, ref } from 'vue';
  import PhotoRow from '@/components/PhotoRow.vue';
  import earlySlide from '@/components/EarlySlider.vue'
  import twentyFourSlide from '@/components/TwentyFourSlider.vue';
  import twentyThreeSlide from '@/components/TwentyThreeSlider.vue'
  
  export default defineComponent({
    name: 'PhotoGallary',
    components: {
      PhotoRow,
      earlySlide,
      twentyFourSlide,
      twentyThreeSlide
    },
    setup () {
      const twenty_four_list = [
        {
          key: "May 2024 - Indianapolis, IN",
          items: ['images/2024/IN-1.jpg', 'images/2024/IN-2.jpg', 'images/2024/IN-3.jpg']
        },
        {
          key: "May 10th 2024 - Aurora light",
          items: ['images/2024/Aurora-light-1.jpg', 'images/2024/Aurora-light-2.jpg']
        },
        {
          key: "May 2024 - Holland, MI",
          items: ['images/2024/MI-1.jpg', 'images/2024/MI-2.jpg', 'images/2024/MI-3.jpg']
        },
        {
          key: "April 8th 2024 - Solar Eclipse",
          items: ['images/2024/solar-eclipse.JPG']
        },
        {
          key: "Feb 2024 - Phoenix, AZ",
          items: ['images/2024/AZ-1.jpg', 'images/2024/AZ-2.jpg', 'images/2024/AZ-3.jpg']
        }
      ];

      const twenty_three_list = [
        {
          key: "Jul 2023 - Denver CO",
          items: ['images/2023/CO-1.jpg', 'images/2023/CO-2.jpg', 'images/2023/CO-3.jpg']
        },
        {
          key: "May 2023 - Minneapolis MN",
          items: ['images/2023/MN-1.jpg', 'images/2023/MN-2.jpg', 'images/2023/MN-3.jpg']
        },
        {
          key: "Mar 2023 - Seatle, WA",
          items: ['images/2023/WA-1.jpg', 'images/2023/WA-2.jpg', 'images/2023/WA-3.jpg', 'images/2023/WA-4.jpg']
        }
      ];
      
      const early_list = [
        {
          key: "Sep 2022 - Los Angeles, CA",
          items: ['images/~2022/LA-1.jpg', 'images/~2022/LA-2.jpg', 'images/~2022/LA-3.jpg', 'images/~2022/LA-4.jpg']
        },
        {
          key: "Jul 2022 - Madison, WI",
          items: ['images/~2022/Madison.JPG']
        },
        {
          key: "Dec 2021 - Houston, TX",
          items: ['images/~2022/Houston-1.jpg']
        },
        {
          key: "Jul 2021 - Chicago, IL",
          items: ['images/~2022/Chicago-1.JPG']
        },
        {
          key: "Jul 2021 - Dune National Park, IN",
          items: ['images/~2022/Dune.jpg']
        },
        {
          key: "Dec 2019 - Dallas, TX",
          items: ['images/~2022/2019.JPG']
        }
      ];
      
      const expandedIndex = ref([null, null, null]);
      
      const handleToggle = (list_idx, index) => {
        expandedIndex.value[list_idx] = expandedIndex.value[list_idx] === index ? null : index;
      };

      return {
        twenty_four_list,
        twenty_three_list,
        early_list,
        expandedIndex,
        handleToggle
      };
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
    