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
        title: 'Home' 
      }
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue'),
      meta: {
        title: 'About'
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
    {
      path: '/nilai',
      name: 'nilai',
      component: () => import('../views/NilaiView.vue'),
      meta: {
        title: 'Grade'
      }
    },
  ]
})

router.beforeEach((to, from, next) => {
  document.title = to.meta.title || 'Error Page'
  next()
})

export default router
