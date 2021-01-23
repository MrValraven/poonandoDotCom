import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Teatro from '../views/Teatro.vue'
import Fotografia from '../views/Fotografia.vue'
import Escrita from '../views/Escrita.vue'


const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/teatro',
    name: 'Teatro',
    component: Teatro
  },
  
  {
    path: '/fotografia',
    name: 'Fotografia',
    component: Fotografia
  },
  {
    path: '/escrita',
    name: 'Escrita',
    component: Escrita
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
