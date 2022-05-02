import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import pedidos from '../views/Pedidos.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/pedidos',
      name: 'Pedidos',
      component: pedidos,
     
      component: () => import('../views/Pedidos.vue')
    }
  ]
})

export default router
