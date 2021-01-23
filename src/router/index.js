import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Teatro from '../views/Teatro.vue'
import Fotografia from '../views/Fotografia.vue'
import Escrita from '../views/Escrita.vue'
import Poema from '../views/escrita/Poema.vue'
import Texto from '../views/escrita/Texto.vue'
import Menstruacao from '../views/escrita/Menstruacao.vue'


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
  {
    path: '/tempo',
    name: 'Poema',
    component: Poema
  },
  {
    path: '/escrita/:nome',
    name: 'Texto',
    component: Texto,
    props: true,
  },
  {
    path: '/a-menstruacao',
    name: 'Menstruacao',
    component: Menstruacao
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
