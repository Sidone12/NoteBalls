import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'notes',
      component: () => import('@/views/ViewNotes.vue'),
    },
    {
      path: '/stats',
      name: 'stats',
      component: () => import('@/views/ViewStats.vue'),
    },
  ],
});

export default router
