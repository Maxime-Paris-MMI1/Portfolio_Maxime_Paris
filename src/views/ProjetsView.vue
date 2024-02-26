<template>
  <div class="derriere10">
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
  
  
          <div class="xxxs:mb-12 xxxs:grid xxxs:grid-cols-2 xxxs:justify-items-center gap-8  xxxs:items-center xxxs:mt-[50px] md:flex md:flex-row md:mt-[120px] md:mb-12 md:gap-[200px] md:justify-center mx-10">
                    
          <button         
                        class="text-white font Unbounded text-xl font-bold border px-5 py-2 animation_texte focus:bg-white focus:text-black xxxs:w-[70px] xxs:w-[120px] xs:ml-[100px] sm:ml-[275px] md:ml-0 justify-center flex
                        lg:text-[25px] 
                        md:text-[22px]
                        sm:text-[20px] 
                        xs:text-[18px]
                        xxs:text-[15px]
                        xxxs:text-[12px]" @click="filtrerCartes('tout')" v-bind:class="{ 'btn-selected': filtreActif === 'tout' }">Tout</button>
                    
          <button          
                          class="text-white font Unbounded text-xl font-bold border px-5 py-2 animation_texte xxxs:w-[100px] xxs:w-[200px] xs:mr-[100px] sm:mr-[275px] md:mr-0 justify-center flex focus:bg-white focus:text-black
                          lg:text-[25px] 
                          md:text-[22px]
                          sm:text-[20px] 
                          xs:text-[18px]
                          xxs:text-[15px]
                          xxxs:text-[12px]" @click="filtrerCartes('professionnel')" v-bind:class="{ 'btn-selected': filtreActif === 'professionnel' }">Professionnel</button>
                    
                    
                    
                    
          <button          
                        class="text-white font Unbounded text-xl font-bold border px-5 py-2 animation_texte xxxs:w-[75px] xxs:w-[150px] xs:ml-[100px] sm:ml-[275px] md:ml-0 justify-center flex focus:bg-white focus:text-black
                        lg:text-[25px] 
                        md:text-[22px]
                        sm:text-[20px] 
                        xs:text-[18px]
                        xxs:text-[15px]
                        xxxs:text-[12px]" @click="filtrerCartes('éducatif')" v-bind:class="{ 'btn-selected': filtreActif === 'éducatif' }">Éducatif</button>
                    
                    
                    
          <button 

                      class="text-white font Unbounded text-xl font-bold border px-5 py-2 animation_texte xxxs:w-[100px] justify-center flex xxs:w-[170px] xs:mr-[100px] sm:mr-[275px] md:mr-0 focus:bg-white focus:text-black
                      lg:text-[25px] 
                      md:text-[22px]
                      sm:text-[20px] 
                      xs:text-[18px]
                      xxs:text-[15px]
                      xxxs:text-[12px]" @click="filtrerCartes('personnel')" v-bind:class="{ 'btn-selected': filtreActif === 'personnel' }">Personnel</button>
                    
                    
          </div>

          <div class="border-t-4 border-white"></div>
        </section>

        </div>

        <section>
          
  
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



              <!-- <div class="mx-auto my-8 grid xxxs:grid-cols-1 xs:grid-cols-2 md:grid-cols-3 gap-7">

                <Card_projet_futur
                titre="Affiche alpha 1"
                img_presentation="/images/Alpha1.webp"/>
                <Card_projet_futur
                titre="Meat my grill"
                img_presentation="/images/Meat_my_grill.webp"/>
                <Card_projet_futur
                titre="Animation MAX"
                img_presentation="/images/Logo_MAX.webp"/>
                
              </div> -->

              
          </div>
        </section>




    <footer>
        <Footer_total/>
    </footer>
</template>

<style> 
.derriere10 {
  position: relative;
}
.derriere10::before {
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
import Card_projet_futur from '../components/Card_projet_futur.vue';

export default {
  components: { Header_total, Footer_total, Card_projet, Card_projet_futur},

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
        { id: 7, titre: 'Popwave', categorie: 'personnel', img_presentation: 'images/popwave.webp', lien: '/popwave' },
        { id: 2, titre: 'Usine Blender', categorie: 'personnel', img_presentation: 'images/Usine_blender.webp', lien: '/usine_blender' },
        { id: 8, titre: 'Quixhub', categorie: 'éducatif', img_presentation: 'images/quixhub.webp', lien: '/quixhub' },
        { id: 3, titre: 'Togethearth', categorie: 'éducatif', img_presentation: 'images/Togethearth_presentation.webp', lien: '/togethearth' },
        { id: 9, titre: 'R&D', categorie: 'professionnel', img_presentation: 'images/rd.webp', lien: '/rd' },
        { id: 4, titre: 'Site cookies', categorie: 'personnel', img_presentation: 'images/Animation_cookie.webp', lien: '/cookies_site' },
        { id: 10, titre: 'Motion gradient', categorie: 'personnel', img_presentation: 'images/motion_gradient.webp', lien: '/motion_gradient' },
        { id: 5, titre: 'MAX Blender', categorie: 'personnel', img_presentation: 'images/Blender_MAX.webp', lien: '/max_blender' },
        { id: 11, titre: 'Short clé à choc', categorie: 'professionnel', img_presentation: 'images/cle_a_choc.webp', lien: '/cle_a_choc' },
        { id: 6, titre: 'Spread-night', categorie: 'éducatif', img_presentation: 'images/Spread_night.webp', lien: '/spread_night' },
        { id: 12, titre: 'Branding université', categorie: 'éducatif', img_presentation: 'images/universite.webp', lien: '/universite' },
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