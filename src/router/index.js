import { createRouter, createWebHistory } from 'vue-router'
import AccueilView from '../views/AccueilView.vue'
import EmorphozView from '../views/page_projet/EmorphozView.vue'
import AproposView from '../views/AproposView.vue'
import ProjetsView from '../views/ProjetsView.vue'
import MentionslegalesView from '../views/MentionslegalesView.vue'
import Togethearth from '../views/page_projet/Togethearth.vue'
import CookiesView from '../views/page_projet/CookiesView.vue'
import PopWaveView from '../views/page_projet/PopWaveView.vue'
import MaxblenderView from '../views/page_projet/MaxblenderView.vue'
import MeatmygrillView from '../views/page_projet/MeatmygrillView.vue'
import SpreadNightView from '../views/page_projet/SpreadNightView.vue'
import UsineBlenderView from '../views/page_projet/UsineBlenderView.vue'
import QuixhubView from '../views/page_projet/QuixhubView.vue'
import RDView from '../views/page_projet/RDView.vue'
import MotionGradientView from '../views/page_projet/MotionGradientView.vue'
import CleachocView from '../views/page_projet/CleachocView.vue'
import UniversiteView from '../views/page_projet/UniversiteView.vue'
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
    { path: '/quixhub', name: 'QuixhubView', component: QuixhubView, },
    { path: '/cookies_site', name: 'CookiesView', component: CookiesView, },
    { path: '/popwave', name: 'PopwaveView', component: PopWaveView, },
    { path: '/max_blender', name: 'MaxblenderView', component: MaxblenderView, },
    { path: '/meat_my_grill', name: 'MeatmygrillView', component: MeatmygrillView, },
    { path: '/spread_night', name: 'SpreadNightView', component: SpreadNightView, },
    { path: '/usine_blender', name: 'UsineBlenderView', component: UsineBlenderView, },
    { path: '/rd', name: 'RDView', component: RDView, },
    { path: '/motion_gradient', name: 'MotionGradientView', component: MotionGradientView, },
    { path: '/cle_a_choc', name: 'CleachocView', component: CleachocView, },
    { path: '/universite', name: 'UniversiteView', component: UniversiteView, },
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
