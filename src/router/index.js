import { createRouter, createWebHistory } from 'vue-router'
import AccueilView from '../views/AccueilView.vue'
import EmorphozView from '../views/page_projet/EmorphozView.vue'
import AproposView from '../views/AproposView.vue'
import ProjetsView from '../views/ProjetsView.vue'
import MentionslegalesView from '../views/MentionslegalesView.vue'
import Togethearth from '../views/page_projet/Togethearth.vue'
import CookiesView from '../views/page_projet/CookiesView.vue'
import LogoMaxmotiondesignView from '../views/page_projet/LogoMaxmotiondesignView.vue'
import MaxblenderView from '../views/page_projet/MaxblenderView.vue'
import MeatmygrillView from '../views/page_projet/MeatmygrillView.vue'
import SpreadNightView from '../views/page_projet/SpreadNightView.vue'
import UsineBlenderView from '../views/page_projet/UsineBlenderView.vue'
import Alpha1View from '../views/page_projet/Alpha1View.vue'
import View404   from      '../views/View404.vue'



const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'Accueil', component: AccueilView,   },
    { path: '/emorphoz', name: 'EmorphozView', component: EmorphozView, },
    { path: '/a_propos', name: 'AproposView', component: AproposView, },
    { path: '/projets', name: 'ProjetsView', component: ProjetsView, },
    { path: '/mentions_legales', name: 'MentionslegalesView', component: MentionslegalesView, },
    { path: '/togethearth', name: 'Togethearth', component: Togethearth, },
    { path: '/alpha1', name: 'Alpha1View', component: Alpha1View, },
    { path: '/cookies_site', name: 'CookiesView', component: CookiesView, },
    { path: '/motion_design_logo_max', name: 'LogoMaxmotiondesignView', component: LogoMaxmotiondesignView, },
    { path: '/max_blender', name: 'MaxblenderView', component: MaxblenderView, },
    { path: '/meat_my_grill', name: 'MeatmygrillView', component: MeatmygrillView, },
    { path: '/spread_night', name: 'SpreadNightView', component: SpreadNightView, },
    { path: '/usine_blender', name: 'UsineBlenderView', component: UsineBlenderView, },
    { path: '/:pathMatch(.*)*', name: 'View404', component: View404 },
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
