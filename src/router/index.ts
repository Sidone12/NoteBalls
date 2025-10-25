import {createRouter, createWebHashHistory} from 'vue-router';
import { useStoreAuth } from '@/stores/storeAuth';

const router = createRouter({
  history: createWebHashHistory(),
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

router.beforeEach(async (to, from) => {
  const storeAuth = useStoreAuth()

  if (!storeAuth.signedUser.id && to.name !== 'auth') {
    return { name: 'auth'}
  }
  if (storeAuth.signedUser.id && to.name === 'auth') {
    return false
  }
})

export default router
