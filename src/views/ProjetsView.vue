<template>
  <div class="derriere">
        <header>
            <Header_total/>
        </header>
        <section>
          <div class="contenair">
                <h1 class=" justify-center flex text-5xl text-white font-unbounded mt-16 mb-16 carret lg:-mt-[0px]">
                    <span>
                        Mes projets
                    </span>
                </h1>
          </div>
  
  
          <div class=" flex flex-row justify-around mt-[50px] pb-[47px]">
  
  
                  <button         
                   class="text-white font Unbounded text-xl font-bold border px-5 py-2 animation_texte
                  lg:text-[25px] 
                  md:text-[22px]
                  sm:text-[20px] 
                  xs:text-[18px]
                  xxs:text-[15px]
                  xxxs:text-[12px]" @click="filtrerCartes('tout')" v-bind:class="{ 'btn-selected': filtreActif === 'tout' }">Tout</button>
  
  
                    <button          
                    class="text-white font Unbounded text-xl font-bold border px-5 py-2 animation_texte
                    lg:text-[25px] 
                    md:text-[22px]
                    sm:text-[20px] 
                    xs:text-[18px]
                    xxs:text-[15px]
                    xxxs:text-[12px]" @click="filtrerCartes('éducatif')" v-bind:class="{ 'btn-selected': filtreActif === 'éducatif' }">Éducatif</button>
  
  
  
                  <button 
                  
                  class="text-white font Unbounded text-xl font-bold border px-5 py-2 animation_texte
                  lg:text-[25px] 
                  md:text-[22px]
                  sm:text-[20px] 
                  xs:text-[18px]
                  xxs:text-[15px]
                  xxxs:text-[12px]" @click="filtrerCartes('personnel')" v-bind:class="{ 'btn-selected': filtreActif === 'personnel' }">Personnel</button>
  
  
          </div>
        </section>

        </div>

        <section>
          <div class="border-t-4 border-white"></div>
  
          <div class="flex flex-col items-center">
              <div class="mx-auto my-8 grid xxxs:grid-cols-1 xs:grid-cols-2 md:grid-cols-3 gap-7">
              
              
                <div v-for="carte in cartesFiltrees" :key="carte.id">
                  <Card_projet 
                  :carte="carte" 
                  :id="carte.id" 
                  :titre="carte.titre" 
                  :img_presentation="carte.img_presentation" 
                  :lien="carte.lien"
                  v-show="carte.titre === categorieSelectionnee || categorieSelectionnee === 'Tout'"/>
  
                </div>
  
  
              </div>
          </div>
        </section>




    <footer>
        <Footer_total/>
    </footer>
</template>

<style> 
.derriere {
  position: relative;
}
.derriere::before {
  content: "";
  background-image: url(../../public/images/Usine_large.webp);
  background-position: center;
  opacity: 0.3;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
}

</style>

<script>

import Header_total from '../components/Header_total.vue'
import Footer_total from '../components/Footer_total.vue'
import Card_projet from '../components/Card_projet.vue';

export default {
  components: { Header_total, Footer_total, Card_projet},

  beforeMount() {
  this.$router.afterEach(() => (this.menuOuvert = false));

  window.addEventListener('scroll', () => {
    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    const seuilDeScroll = 100; // seuil de scroll à partir duquel le menu se fermera automatiquement

    if (scrollPosition > seuilDeScroll) {
      this.menuOuvert = false;
    }
  });

},

mounted() {
    // Récupérer l'ancre dans l'URL
    const anchor = window.location.hash.slice(1);
    // Vérifier si l'ancre existe sur la page
    const element = document.getElementById(anchor);
    if (element) {
      // Scroll vers l'ancre
      element.scrollIntoView({ behavior: 'smooth' });
    }
  },

  data() {
    return {
      cartes: [
        { id: 1, titre: 'E-morphoz', categorie: 'éducatif', img_presentation: 'images/e-morphoz_presentation.webp', lien: '/emorphoz' },
        { id: 2, titre: 'Usine Blender', categorie: 'personnel', img_presentation: 'images/Usine_blender.webp', lien: '/usine_blender' },
        { id: 3, titre: 'Togethearth', categorie: 'éducatif', img_presentation: 'images/Togethearth_presentation.jpg', lien: '/emorphoz' },
        { id: 4, titre: 'Logo MAX', categorie: 'personnel', img_presentation: 'images/Logo_MAX.webp', lien: '/emorphoz' },
        { id: 5, titre: 'Affiche Alpha1', categorie: 'éducatif', img_presentation: 'images/Alpha1.webp', lien: '/emorphoz' },
        { id: 6, titre: 'Site cookies', categorie: 'personnel', img_presentation: 'images/Animation_cookie.webp', lien: '/emorphoz' },
        { id: 7, titre: 'Meat my grill', categorie: 'éducatif', img_presentation: 'images/Meat_my_grill.webp', lien: '/emorphoz' },
        { id: 8, titre: 'MAX Blender', categorie: 'personnel', img_presentation: 'images/Blender_MAX.webp', lien: '/emorphoz' },
        { id: 9, titre: 'Spread-night', categorie: 'éducatif', img_presentation: 'images/Spread_night.webp', lien: '/emorphoz' },
      ],
      filtreActif: null,
      filtreCategorie: 'tout',
      categorieSelectionnee: 'Tout',
      menuOuvert: false,
    };
  },

  computed: {
    cartesFiltrees() {
      if (this.filtreCategorie === 'tout') {
        return this.cartes;
      } else {
        return this.cartes.filter(carte => carte.categorie === this.filtreCategorie);
      }
    },
  },
  methods: {


    
    filtrerCartes(categorie) {
      this.filtreCategorie = categorie;
    },
}};
</script>