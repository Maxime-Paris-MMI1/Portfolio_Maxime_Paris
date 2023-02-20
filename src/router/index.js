import { createRouter, createWebHistory } from 'vue-router'
import AccueilView from '../views/AccueilView.vue'
import EmorphozView from '../views/EmorphozView.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'Accueil', component: AccueilView,  
    meta: { transition: 'zoom' }, },
    { path: '/emorphoz', name: 'EmorphozView', component: EmorphozView,
    meta: { transition: 'zoom' }, },
    // ici les autre routes
  ]
})

export default router
