import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/views/HomeView.vue';
import AddTask from '@/views/AddTask.vue';
import AboutView from '@/views/AboutView.vue';
import CombinedView from '@/views/CombinedView.vue';
import TaskList from '@/views/TaskList.vue';


const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView,
  },
  {
    path: '/addtask',
    name: 'AddTask',
    component: AddTask,
  },
  {
    path: '/tasklist',
    name: 'TaskList',
    component: TaskList,
  },
  {
    path: '/combinedview',
    name: 'CombinedView',
    component: CombinedView,
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
