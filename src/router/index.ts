import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import NotFoundView from '../views/404View.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/estudo',
      name: 'estudo',
      component: () => import('../views/EstudoView.vue')
    },
    {
      path: '/participantes',
      name: 'participantes',
      component: () => import('../views/ParticipanteView.vue')
    },
    {
      path: '/calendario',
      name: 'calendario',
      component: () => import('../views/CalendarioView.vue')
    },
    {
      path: '/galeria',
      name: 'galeria',
      component: () => import('../views/GaleriaView.vue')
    },
    {
      path: '/faq',
      name: 'faq',
      component: () => import('../views/FAQView.vue')
    },
    {
      path: '/contactos',
      name: 'ccontactos',
      component: () => import('../views/ContactosView.vue')
    },
    {
      path: '/publicacoes',
      name: 'publicacoes',
      component: () => import('../views/PublicacoesView.vue')
    },
    {
      path: "/:catchAll(.*)",
      name: 'notFound',
      component: NotFoundView
    }
  ]
})

export default router;