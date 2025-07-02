import { createRouter, createWebHistory } from 'vue-router'
import MView from '../views/MView.vue'

const router = (basePath = '/app') => createRouter({
  history: createWebHistory(basePath),
  routes: [
    {
      path: '/',
      name: 'monthly',
      component: MView,
    },
    {
      path: '/:pathMatch(.*)*',
      redirect: '/'
    }
  ],
})

export default router
