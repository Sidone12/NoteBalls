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
    {
      path: '/editNote/:id',
      name: 'edit-note',
      component: () => import('@/views/ViewEditNote.vue'),
    },
    {
      path: '/auth',
      name: 'auth',
      component: () => import('@/views/ViewAuth.vue'),
    },
  ],
});

export default router
