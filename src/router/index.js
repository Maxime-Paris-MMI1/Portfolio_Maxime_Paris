import { createRouter, createWebHistory } from 'vue-router'
import AccueilView from '../views/AccueilView.vue'
import EmorphozView from '../views/EmorphozView.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'Accueil', component: AccueilView,   },
    { path: '/emorphoz', name: 'EmorphozView', component: EmorphozView, },
    // ici les autre routes
  ]
})

export default router
