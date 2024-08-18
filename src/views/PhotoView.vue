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
        <template v-for="(item, index) in photo_list.items" :key="index">
          <img :src="item.img" :style="{ width: item.w + 'px', height: item.h + 'px', }" style="text-align: center">
        </template>
      </PhotoRow>
      <p> 2024 Hightlights </p>
      <PhotoSlider :photos="twenty_four_slides"></PhotoSlider>
      
      <PhotoRow 
        v-for="(photo_list, index) in twenty_three_list"
        :key="index"
        :photo_list="photo_list"
        :isExpanded="expandedIndex[1] === index"
        @toggle="handleToggle(1, index)"
      >
        <template v-for="(item, index) in photo_list.items" :key="index">
          <img :src="item.img" :style="{ width: item.w + 'px', height: item.h + 'px', }" style="text-align: center">
        </template>
        
      </PhotoRow>
      <p> 2023 Hightlights </p>
      <PhotoSlider :photos="twenty_three_slides"></PhotoSlider>
      
      <PhotoRow 
        v-for="(photo_list, index) in early_list"
        :key="index"
        :photo_list="photo_list"
        :isExpanded="expandedIndex[2] === index"
        @toggle="handleToggle(2, index)"
      >
        <template v-for="(item, index) in photo_list.items" :key="index">
          <img :src="item.img" :style="{ width: item.w + 'px', height: item.h + 'px', }" style="text-align: center">
        </template>
      </PhotoRow>
      <p> Early Hightlights </p>
      <PhotoSlider :photos="early_slides"></PhotoSlider>
    </main>
</template>
    
<script>
  import { defineComponent, ref } from 'vue';
  import PhotoRow from '@/components/PhotoRow.vue';
  import PhotoSlider from '@/components/PhotoSlider.vue';
  
  export default defineComponent({
    name: 'PhotoGallary',
    components: {
      PhotoRow,
      PhotoSlider,
    },
    setup () {
      const twenty_four_list = [
        {
          key: "May 2024 - Indianapolis, IN",
          items: [
            { img: 'images/2024/IN-2.jpg', w: 400, h: 300 },
            { img: 'images/2024/IN-3.jpg', w: 400, h: 300 }
          ]
        },
        {
          key: "May 10th 2024 - Aurora light",
          items: [
            { img: 'images/2024/Aurora-light-1.jpg', w: 400, h: 300 }
          ]
        },
        {
          key: "May 2024 - Holland, MI",
          items: [
            { img: 'images/2024/MI-1.jpg', w: 400, h: 500 },
            { img: 'images/2024/MI-3.jpg', w: 400, h: 500 }
          ]
        },
        {
          key: "April 8th 2024 - Solar Eclipse",
          items: [
            { img: 'images/2024/solar-eclipse.JPG', w: 400, h: 300 }
          ]
        },
        {
          key: "Feb 2024 - Phoenix, AZ",
          items: [
            { img: 'images/2024/AZ-1.jpg', w: 400, h: 500 },
            { img: 'images/2024/AZ-2.jpg', w: 300, h: 400 },
          ]
        }
      ];

      const twenty_three_list = [
        {
          key: "Jul 2023 - Denver CO",
          items: [
            { img: 'images/2023/CO-1.jpg', w: 400, h: 600 },
            { img: 'images/2023/CO-2.jpg', w: 400, h: 300 },
            { img: 'images/2023/CO-3.jpg', w: 400, h: 300 }
          ]
        },
        {
          key: "May 2023 - Minneapolis MN",
          items: [
            { img: 'images/2023/MN-1.jpg', w: 400, h: 300 },
            { img: 'images/2023/MN-2.jpg', w: 400, h: 300 }
          ]
        },
        {
          key: "Mar 2023 - Seatle, WA",
          items: [
            { img: 'images/2023/WA-1.jpg', w: 400, h: 300 },
            { img: 'images/2023/WA-3.jpg', w: 400, h: 300 }
          ]
        }
      ];
      
      const early_list = [
        {
          key: "Sep 2022 - Los Angeles, CA",
          items: [
            { img: 'images/~2022/LA-3.jpg', w: 400, h: 300 },
            { img: 'images/~2022/LA-4.jpg', w: 400, h: 300 }
          ]
        },
        {
          key: "Jul 2022 - Madison, WI",
          items: [{ img: 'images/~2022/Madison.JPG', w: 400, h: 300 }]
        },
        {
          key: "Dec 2021 - Houston, TX",
          items: [{ img: 'images/~2022/Houston-1.jpg', w: 400, h: 300 }]
        },
        {
          key: "Jul 2021 - Chicago, IL",
          items: [{ img: 'images/~2022/Chicago-1.JPG', w: 400, h: 300 }]
        },
        {
          key: "Jul 2021 - Dune National Park, IN",
          items: [{ img: 'images/~2022/Dune.jpg', w: 400, h: 300 }]
        },
        {
          key: "Dec 2019 - Dallas, TX",
          items: [{ img: 'images/~2022/2019.JPG', w:400, h: 500 }]
        }
      ];

      const twenty_four_slides = [
        'images/2024/AZ-1.jpg',
        'images/2024/AZ-2.jpg',
        'images/2024/AZ-3.jpg',
        'images/2024/AZ-4.jpg',
        'images/2024/solar-eclipse.JPG',
        'images/2024/MI-1.jpg',
        'images/2024/MI-2.jpg',
        'images/2024/MI-3.jpg',
        'images/2024/Aurora-light-1.jpg',
        'images/2024/Aurora-light-2.jpg',
        'images/2024/IN-1.jpg',
        'images/2024/IN-2.jpg',
        'images/2024/IN-3.jpg',
      ];

      const twenty_three_slides = [
        'images/2023/snow-1.jpg',
        'images/2023/snow-2.jpg',
        'images/2023/WA-1.jpg',
        'images/2023/WA-2.jpg',
        'images/2023/WA-3.jpg',
        'images/2023/WA-4.jpg',
        'images/2023/MN-1.jpg',
        'images/2023/MN-2.jpg',
        'images/2023/MN-3.jpg',
        'images/2023/CO-1.jpg',
        'images/2023/CO-2.jpg',
        'images/2023/CO-3.jpg',
        'images/2023/google.jpg',
      ];

      const early_slides = [
        'images/~2022/2019.JPG',
        'images/~2022/Chicago-1.JPG',
        'images/~2022/Houston-1.jpg',
        'images/~2022/LA-1.jpg',
        'images/~2022/LA-2.jpg',
        'images/~2022/LA-3.jpg',
        'images/~2022/LA-4.jpg',
        'images/~2022/Madison.JPG',
        'images/~2022/MKE-1.JPG',
        'images/~2022/Dune.jpg',
      ];
      
      const expandedIndex = ref([null, null, null]);
      
      const handleToggle = (list_idx, index) => {
        expandedIndex.value[list_idx] = expandedIndex.value[list_idx] === index ? null : index;
      };

      return {
        twenty_four_list,
        twenty_three_list,
        early_list,
        twenty_four_slides,
        twenty_three_slides,
        early_slides,
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
    