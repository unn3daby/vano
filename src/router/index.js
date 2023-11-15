import { createRouter, createWebHistory } from 'vue-router'
import MainLayout from '@/layouts/MainLayout.vue';
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: MainLayout,
      children: [
        {
          path: '',
          name: 'home',
          component: () => import('@/views/HomeView.vue')
        },
        {
          path: '/restaurants',
          name: 'restaurants',
          component: () => import('../views/RestaurantsView.vue')
        },
        {
          path: '/restaurants/:id',
          name: 'single-restaurant',
          component: () => import('@/views/SingleRestaurantView.vue')
        },
        {
          path: '/deals',
          name: 'deals',
          component: () => import('@/views/DealsView.vue')
        },
      ],
    },
    {
      path: '/auth',
      name: 'auth', 
      component: () => import('@/views/AuthView.vue')
    }
    
  ]
})

export default router
