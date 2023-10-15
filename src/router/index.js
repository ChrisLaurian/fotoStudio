import { createRouter, createWebHistory } from 'vue-router'
import Incio from '../views/Inicio.vue'
import Acerca from '../views/Acerca.vue'
import Contacto from '../views/Contacto.vue'

const routes = [
  {
    path: '/',
    name: 'inicio',
    component: Incio
  },
  {
    path: '/acerca',
    name: 'acerca',
    component: Acerca
  },
  {
    path: '/contacto',
    name: 'contacto',
    component: Contacto
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
