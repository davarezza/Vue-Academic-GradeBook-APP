import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: {
        title: 'Halaman Utama' 
      }
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue'),
      meta: {
        title: 'Tentang Kami'
      }
    },
    {
      path: '/beranda',
      name: 'beranda',
      component: () => import('../views/BerandaView.vue'),
      meta: {
        title: 'Beranda'
      }
    },
  ]
})

router.beforeEach((to, from, next) => {
  document.title = to.meta.title || 'Error Page'
  next()
})

export default router
