import { createRouter, createWebHistory } from 'vue-router'
import Main from '../views/Main.vue'
import Register from '../views/Register.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Main
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    }
  ]
})

export default router
