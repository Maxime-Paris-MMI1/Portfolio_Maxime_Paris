import { createRouter, createWebHistory } from 'vue-router'
import AccueilView from '../views/AccueilView.vue'
import EmorphozView from '../views/EmorphozView.vue'
import Test from '../views/Test.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'Accueil', component: AccueilView,   },
    { path: '/emorphoz', name: 'EmorphozView', component: EmorphozView, },
    { path: '/test', name: 'Test', component: Test, },
    // ici les autre routes
  ]
})

export default router
