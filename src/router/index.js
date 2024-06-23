import { createWebHistory, createRouter } from "vue-router";
import HomePage from "@/views/HomeView.vue";
import PhotoGallary from "@/views/PhotoView.vue";
import AwardsPage from "@/views/AwardsView.vue"

const routes = [
  {
    path: "/",
    name: "HomePage",
    component: HomePage,
  },
  {
    path: "/photo",
    name: "PhotoGallary",
    component: PhotoGallary,
  },
  {
    path: "/publication",
    name: "Awards",
    component: AwardsPage,
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;