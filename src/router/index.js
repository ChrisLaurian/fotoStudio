import { createRouter, createWebHistory } from 'vue-router'
import Incio from '../views/PaginaInicio.vue'
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

  {
    // El :id? permite que la URL sea /formulario o /formulario/2
    path: '/formulario/:id?', 
    name: 'ComponentFormulario', // <--- Este es el nombre que busca el push
    component: () => import('../components/ComponentFormulario.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
