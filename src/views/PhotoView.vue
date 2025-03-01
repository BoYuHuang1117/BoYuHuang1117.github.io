<template>
    <main>
      <div class="year-navigation">
        <button 
          v-for="year in availableYears" 
          :key="year"
          :class="['year-btn', { active: currentYear === year }]"
          @click="currentYear = year"
        >
          {{ year }}
        </button>
      </div>

      <div v-if="currentYear === 2024" class="year-section">
        <section class="gallery-section">
          <h1>Travel around the world</h1>
          <p>2024 East Europe Highlights</p>
          <PhotoSlider :photos="twenty_four_europe_slides"></PhotoSlider>
        </section>

        <section class="gallery-section">
          <h1>Travel across the States</h1>
          <p>2024 Highlights</p>
          <PhotoSlider :photos="twenty_four_slides"></PhotoSlider>

          <PhotoRow 
            v-for="(photo_list, index) in twenty_four_list"
            :key="index"
            :photo_list="photo_list"
            :isExpanded="expandedIndex[0] === index"
            @toggle="handleToggle(0, index)"
          >
            <template v-for="(item, index) in photo_list.items" :key="index">
              <ImageEnlarge :src="item.img" :width="item.w" :height="item.h" />
            </template>
          </PhotoRow>
        </section>
      </div>

      <div v-if="currentYear === 2023" class="year-section">
        <section class="gallery-section">
          <h1>2023 Collection</h1>
          <PhotoSlider :photos="twenty_three_slides"></PhotoSlider>

          <PhotoRow 
            v-for="(photo_list, index) in twenty_three_list"
            :key="index"
            :photo_list="photo_list"
            :isExpanded="expandedIndex[1] === index"
            @toggle="handleToggle(1, index)"
          >
            <template v-for="(item, index) in photo_list.items" :key="index">
              <ImageEnlarge :src="item.img" :width="item.w" :height="item.h" />
            </template>
          </PhotoRow>
        </section>
      </div>

      <div v-if="currentYear === 2022" class="year-section">
        <section class="gallery-section">
          <h1>2022 and Earlier</h1>
          <PhotoSlider :photos="early_slides"></PhotoSlider>

          <PhotoRow 
            v-for="(photo_list, index) in early_list"
            :key="index"
            :photo_list="photo_list"
            :isExpanded="expandedIndex[2] === index"
            @toggle="handleToggle(2, index)"
          >
            <template v-for="(item, index) in photo_list.items" :key="index">
              <ImageEnlarge :src="item.img" :width="item.w" :height="item.h" />
            </template>
          </PhotoRow>
        </section>
      </div>
    </main>
</template>
    
<script>
  import { defineComponent, ref } from 'vue';
  import ImageEnlarge from '@/components/ImageEnlarge.vue';
  import PhotoRow from '@/components/PhotoRow.vue';
  import PhotoSlider from '@/components/PhotoSlider.vue';
  
  export default defineComponent({
    name: 'PhotoGallary',
    components: {
      ImageEnlarge,
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
      
      const twenty_four_europe_slides = [
        'images/world/2024/ast-hall.jpg',
        'images/world/2024/cz-ck.jpg',
        'images/world/2024/cz-kv.jpg',
        'images/world/2024/cz-pra.jpg',
        'images/world/2024/sla-1.jpg',
        'images/world/2024/sla-2.jpg',
        'images/world/2024/hu-1.JPG',
        'images/world/2024/hu-2.jpg',
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

      const currentYear = ref(2024);
      const availableYears = [2024, 2023, 2022];

      return {
        twenty_four_list,
        twenty_three_list,
        early_list,
        twenty_four_europe_slides,
        twenty_four_slides,
        twenty_three_slides,
        early_slides,
        expandedIndex,
        handleToggle,
        currentYear,
        availableYears,
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

  .year-navigation {
    display: flex;
    justify-content: center;
    gap: 10px;
    margin-bottom: 30px;
    padding: 10px;
    background-color: white;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }

  .year-btn {
    padding: 8px 16px;
    border: none;
    border-radius: 4px;
    background-color: #e0e0e0;
    cursor: pointer;
    font-size: 1.1em;
    transition: all 0.3s ease;
  }

  .year-btn.active {
    background-color: #2c3e50;
    color: white;
  }

  .year-btn:hover {
    background-color: #2c3e50;
    color: white;
  }

  .gallery-section {
    margin-bottom: 40px;
    background-color: white;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }

  .gallery-section h1 {
    color: #2c3e50;
    margin-bottom: 15px;
    font-size: 1.8em;
  }

  .gallery-section p {
    color: #666;
    margin-bottom: 20px;
  }

  @media (max-width: 768px) {
    .year-navigation {
      flex-wrap: wrap;
    }

    .year-btn {
      font-size: 1em;
      padding: 6px 12px;
    }
  }
</style>
    