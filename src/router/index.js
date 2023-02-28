import { createRouter, createWebHistory } from 'vue-router'
import AccueilView from '../views/AccueilView.vue'
import EmorphozView from '../views/page_projet/EmorphozView.vue'
import AproposView from '../views/AproposView.vue'
import ProjetsView from '../views/ProjetsView.vue'
import MentionslegalesView from '../views/MentionslegalesView.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'Accueil', component: AccueilView,   },
    { path: '/emorphoz', name: 'EmorphozView', component: EmorphozView, },
    { path: '/a_propos', name: 'AproposView', component: AproposView, },
    { path: '/projets', name: 'ProjetsView', component: ProjetsView, },
    { path: '/mentions_legales', name: 'MentionslegalesView', component: MentionslegalesView, },
    // ici les autre routes
  ]
})

router.beforeEach((to, from, next) => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
  next();
});

export default router
