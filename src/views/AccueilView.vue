<template>
  <header>
    <div class=" justify-between items-start lg:flex hidden">
      <img id="haut_accueil" src="../../public/images/logo_blanc.webp" class=" ml-[100px] mt-[90px] object-contain animate__animated animate__fadeInDownBig
      xs:w-[84px] xxs:w-[60px]" alt="logo blanc de mon portfolio">


      <div class="mt-[90px] relative z-30 animate__animated animate__slideInRight">
        <ul class="text-white text-right font-unbounded text-xl font-bold">

          <div class="flex justify-end">
            <RouterLink to="/projets">
              <li class="mb-[50px] mr-[11px] animation_texte">Mes projets</li>
            </RouterLink>
            <Barre_menu class="mt-[15px]"/>
          </div>

          <div class="flex justify-end">
            <a href="#contact">
              <li class="mb-[50px] mr-[11px] animation_texte" >Contact</li> 
            </a>

            <Barre_menu class="mt-[15px]"/>
          </div>

          <div class="flex justify-end">
            <RouterLink to="/a_propos">
              <li class="mr-[11px] animation_texte">À propos</li>
            </RouterLink>
            <Barre_menu class="mt-[15px]"/>
          </div>

        </ul>
      </div>
    </div>



    <div class="xs:hidden flex justify-between mx-8 mt-10">
      <img src="../../public/images/logo_blanc.webp" class="object-contain animate__animated animate__fadeInDownBig
      xxxs:w-[50px] xxs:w-[70px] xs:w-[80px] sm:w-[84px]" alt="logo blanc de mon portfolio">

      <button class="relative z-50 text-xl" aria-haspopup="true" aria-controls="menu" :aria-expanded="menuOuvert" @click="menuOuvert = !menuOuvert">
        <div>
          <img id="haut_accueil2" src="../../public/images/Ligne-header.svg" alt="menu" class="animate__animated animate__fadeInRightBig" :class="{menuOuvert}"/>
        </div>
        <span class="sr-only">Menu</span>
      </button>
    </div>

    <div id="menu" class="z-[50] fixed inset-0 -translate-x-0 bg-[#000] motion-safe:duration-1000 motion-safe:transition-transform h-full xs:hidden" v-if="menuOuvert"
      :class="{ 'translate-x-0': menuOuvert }">
        <div class="flex flex-row justify-end mr-10">
          <button class="relative z-50 mt-14" aria-haspopup="true" aria-controls="menu" :aria-expanded="menuOuvert" @click="menuOuvert = !menuOuvert">
            <img src="../../public/images/croix_menu.svg" alt="croix du menu" :class="{'motion-safe:animate-[BackInRight_1s_cubic-bezier(0,1,.24,1)]' : menuOuvert}">
          </button>
        </div>

        <nav class="text-white font-unbounded font-medium text-2xl pt-20">
          <ul class="flex flex-col text-center gap-[70px]">
           <RouterLink :class="{' motion-safe:animate-[Depart_0.2s_ease-in-out]' : menuOuvert}" to="/projets">Mes projets</RouterLink>
           <RouterLink :class="{' motion-safe:animate-[Depart_0.4s_ease-in-out]' : menuOuvert}" to="/a_propos">À propos</RouterLink>
           <a href="#contact" :class="{' motion-safe:animate-[Depart_0.6s_ease-in-out]' : menuOuvert}">Contact</a>
          </ul>
        </nav>   
    </div>




    <div class="xxxs:hidden lg:hidden xs:flex flex justify-between mx-8 mt-10">

      <img src="../../public/images/logo_blanc.webp" class="object-contain animate__animated animate__fadeInDownBig
      xxxs:w-[50px] xxs:w-[70px] xs:w-[80px] sm:w-[84px]" alt="logo blanc de mon portfolio">

      <button class="relative z-50 text-xl" aria-haspopup="true" aria-controls="menu" :aria-expanded="menuOuvert" @click="menuOuvert = !menuOuvert">
        <div>
          <img id="haut_accueil2" src="../../public/images/Ligne-header.svg" alt="menu" class="animate__animated animate__fadeInRightBig" :class="{menuOuvert}"/>
        </div>
        <span class="sr-only">Menu</span>
      </button>

    </div>

    <div id="menu" class="z-50 fixed inset-0  translate-x-3/4 bg-[#000] motion-safe:duration-1000 motion-safe:transition-transform xs:h-1/2 sm:h-full xxxs:hidden lg:hidden xs:flex border-l-4 border-b-4 border-t-4 border-white " v-if="menuOuvert"
      :class="{ 'translate-x-0': menuOuvert }">


        <nav class="text-white font-unbounded font-medium md:text-[25px] sm:text-[20px] flex z-[100]">
          <ul class="flex flex-col gap-[50px] text-center sm:ml-14 xs:ml-5 mt-40 xsme:ml-10 ">
           <RouterLink :class="{' motion-safe:animate-[Depart_0.2s_ease-in-out]' : menuOuvert}" to="/projets">Mes projets</RouterLink>
           <RouterLink :class="{' motion-safe:animate-[Depart_0.4s_ease-in-out]' : menuOuvert}" to="/a_propos">À propos</RouterLink>
           <a href="#contact" :class="{' motion-safe:animate-[Depart_0.6s_ease-in-out]' : menuOuvert}">Contact</a>
          </ul>
        </nav>   

        <div class="mt-16 me:ml-10 xsme:-ml-4 xs:ml-[-30px] relative z-[200]">
          <button class="" aria-haspopup="true" aria-controls="menu" :aria-expanded="menuOuvert" @click="menuOuvert = !menuOuvert">
            <div class="mx-auto">
              <img src="../../public/images/croix_menu.svg" alt="croix du menu" :class="{'motion-safe:animate-[BackInRight_1s_cubic-bezier(0,1,.24,1)]' : menuOuvert}">
            </div>
          </button>
        </div>


    </div>


  </header>


  <section>
    <div class="sm:flex-row xxxs:flex-col flex">
      <div class="flex flex-col lg:-mt-[120px] md:mt-[90px]">

        <div class="mb-4 -mt-[40px] lg:mt-6 md:mt-0 sm:mt-5 md:mb-6 animate__animated animate__backInDown">
          <div class="xxxs:flex xxxs:flex-col xxxs:items-center xxxs:mt-[80px] sm:mt-[0px]">


            <h1 class="font-unbounded  text-white font-bold sm:ml-[100px] xxs:ml-[0px]
            lg:text-[100px] 
            md:text-[75px] md:-mt-[40px] 
            sm:text-[60px] sm:mt-[40px]
            xs:text-[60px] xs:flex xs:justify-center
            xxs:text-[40px] xxs:flex xxs:justify-center
            xxxs:text-[30px] xxxs:flex xxxs:justify-center">PORTFOLIO</h1>


            <img src="../../public/images/portfolio-stroke.webp" alt="portfolio sans fond" class=
            "lg:ml-[120px] lg:-mt-[100px] lg:w-[716px]
            md:w-[530px] md:ml-[120px] md:-mt-[75px]
            sm:w-[430px] sm:ml-[113px]  sm:mb-[70px] sm:-mt-[60px]
            xs:w-[430px] xs:flex xs:justify-center xs:ml-[10px] xs:-mt-[60px]
            xxs:w-[290px] xxs:flex xxs:justify-center xxs:ml-[10px] xxs:-mt-[40px]
            xxxs:w-[215px] xxxs:flex xxxs:justify-center xxxs:ml-[8px] xxxs:-mt-[30px]">


          </div>
        </div>


        <div class="animate__animated animate__backInLeft md:mb-[70px] md:-mt-[70px] lg:mb-0 lg:-mt-[70px] sm:mb-[30px] sm:-mt-[70px]">

          <div class="xxxs:flex xxxs:flex-col xxxs:items-center sm:items-baseline xxxs:mt-5 sm:mt-0 xxxs:mb-5 sm:mb-0">
            <div>
              <h2 class="font-unbounded text-white font-bold sm:ml-[100px] xxs:ml-[0px]
              lg:text-[75px] 
              md:text-[50px]
              sm:text-[35px] 
              xs:text-[45px]
              xxs:text-[30px]
              xxxs:text-[23px]">MAXIME</h2>
            </div>
            <div>
              <img class=
              "lg:ml-[103px] lg:-mt-[14px] lg:w-[274px]
               md:w-[200px]
               sm:w-[126px] sm:ml-[103px] sm:mt-[2px] sm:mb-[70px]
               xs:w-[160px] xs:ml-[0px] xs:mt-[2px] xs:mb-[70px]
               xxs:w-[110px] xxs:ml-[0px] xxs:mt-[2px] xxs:mb-[70px]
               xxxs:w-[90px] xxxs:ml-[0px] xxxs:mt-[2px] xxxs:mb-[70px]" src="../../public/images/paris-stroke.webp" alt="paris sans fond">
            </div>
          </div>
        </div>


      </div>


      <div class= "sm:-mt-[220px] sm:-ml-[60px] flex animate__animated animate__fadeInRight">
        <img class="w-full h-full object-contain min-h-full min-w-full 
        xxxs:h-[300px] xxxs:-mt-[110px]
        xxs:h-[370px] xxs:-mt-[110px]
        xs:h-[550px] xs:-mt-[110px]
        md:h-[570px] md:mt-[90px] 
        sm:h-[445px] sm:mt-[80px]
        lg:h-full lg:mt-[0px]" 
        src="../../public/images/photo-perso.webp" alt="photo personnelle">
      </div>

    </div>
    
  </section>
  <section>


    <div class="container2 bg-white text-black font-unbounded font-bold 
    sm:text-[40px] sm:py-5
    xs:text-[30px] xs:py-5
    xxs:text-[25px] xxs:py-5
    xxxs:text-[20px] xxxs:py-3 xxxs:-mt-[20px]">

      <span class="txt t1">Artiste 3D - Motion Design - 3D VFX - Webdesign - Création de logo - Affiche -&nbsp;</span>
      <span class="txt t2">Artiste 3D - Motion Design - 3D VFX - Webdesign - Création de logo - Affiche -&nbsp;</span>

    </div>


  </section>
  <section class="mt-[163px]">
    <div class=" sm:ml-[100px] xxxs:ml-[40px]">
      <img src="../../public/images/mes-projets-stroke.webp" alt="mes projets sans fond" class="
               lg:-ml-[0px] lg:-mt-[14px] lg:w-[445px] lg:mb-[0px]
               md:w-[355px] md:-mt-[14px] md:-ml-[0px] md:mb-[7px]
               sm:w-[265px] sm:ml-[0px] sm:-mt-[50px] sm:mb-[13px]
               xs:w-[355px] xs:ml-[0px] xs:-mt-[50px] xs:mb-[7px]
               xxs:w-[222px] xxs:-ml-[1px] xxs:-mt-[70px] xxs:mb-[17px]
               xxxs:w-[205px] xxxs:-ml-[2px] xxxs:-mt-[80px] xxxs:mb-[20px]">

      <h2 class="font-unbounded text-[50px] text-white font-bold -ml-[3px] -mt-[34px] 
              lg:text-[50px] lg:-mt-[34px] lg:-mb-[34px]
              md:text-[40px] md:-mt-[34px] md:mb-[10px]
              sm:text-[30px] sm:-mt-[34px] sm:mb-[15px]
              xs:text-[40px] xs:-mt-[34px] xs:mb-[10px]
              xxs:text-[25px] xxs:-mt-[34px] xxs:mb-[20px]
              xxxs:text-[23px] xxxs:-mt-[34px] xxxs:mb-[20px]
              ">MES PROJETS</h2>

      <h2 class="font-unbounded text-[50px] text-white font-bold -ml-[3px] -mt-[40px]
              lg:text-[50px] 
              md:text-[40px]
              sm:text-[30px] 
              xs:text-[40px]
              xxs:text-[25px]
              xxxs:text-[23px]">MES PROJETS</h2>
    </div>

    <div class=" flex flex-row justify-around mt-[50px]">


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
  <section>
    <div class="border-t-4 border-white mt-[47px]"></div>

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
        
    <div class="flex justify-center mt-20 relative z-20 mb-20">

      <button class="text-white font Unbounded                      
                      lg:text-[25px] 
                      md:text-[22px]
                      sm:text-[20px] 
                      xs:text-[18px]
                      xxs:text-[15px]
                      xxxs:text-[12px]
                       font-bold border px-5 py-2 animation_texte">
        <RouterLink to="projets">
          Voir tout mes projets
        </RouterLink>
      </button>

    </div>
  </section>
  <section id="contact">
    <div class="ml-[128px] sm:ml-[100px] xxxs:ml-[40px]">

      <img src="../../public/images/contact_stroke.webp" alt="contact sans fond" class="
               lg:-ml-[0px] lg:-mt-[14px] lg:w-[310px] lg:mb-[0px]
               md:w-[249px] md:-mt-[14px] md:-ml-[0px] md:mb-[7px]
               sm:w-[188px] sm:ml-[0px] sm:-mt-[14px] sm:mb-[13px]
               xs:w-[248px] xs:ml-[0px] xs:-mt-[14px] xs:mb-[7px]
               xxs:w-[157px] xxs:-ml-[1px] xxs:-mt-[14px] xxs:mb-[17px]
               xxxs:w-[145px] xxxs:-ml-[2px] xxxs:-mt-[14px] xxxs:mb-[20px]">


      <h2 class="font-unbounded text-[50px] text-white font-bold -mt-[40px]
              lg:text-[50px] lg:-mt-[34px] lg:-mb-[34px]
              md:text-[40px] md:-mt-[34px] md:mb-[10px]
              sm:text-[30px] sm:-mt-[34px] sm:mb-[15px]
              xs:text-[40px] xs:-mt-[34px] xs:mb-[10px]
              xxs:text-[25px] xxs:-mt-[34px] xxs:mb-[22px]
              xxxs:text-[23px] xxxs:-mt-[34px] xxxs:mb-[24px]
      ">CONTACT</h2>


      <h2 class="font-unbounded text-[50px] text-white font-bold -mt-[45px]
              lg:text-[50px] 
              md:text-[40px]
              sm:text-[30px] 
              xs:text-[40px]
              xxs:text-[25px]
              xxxs:text-[23px]
      ">CONTACT</h2>
    </div>


    <div class="flex justify-center mb-[50px] mt-[120px]">
      <a href="mailto:maximepro.contact25@gmail.com">
        <button class="text-white font Unbounded 
                      lg:text-[25px] 
                      md:text-[22px]
                      sm:text-[20px] 
                      xs:text-[18px]
                      xxs:text-[15px]
                      xxxs:text-[12px] 
        font-bold border 
        lg:px-[130px]
        md:px-[110px]
        sm:px-[90px] 
        xs:px-[70px]
        xxs:px-[50px]
        xxxs:px-[50px] 
         py-3 animation_texte">Me contacter par mail</button>


      </a>
    </div>
    <div class="flex justify-center md:gap-[80px] sm:gap-[50px] xs:gap-[55px] xxs:gap-[43px] xxxs:gap-[35px]"> 

      <a href="https://www.instagram.com/max_portfolio_/" target="_blank" class="sm:w-[51px] xs:w-[40px] xxs:w-[35px] xxxs:w-[30px]">
        <img class="object-contain" src="../../public/images/Instagram_Glyph_White-1.webp" alt="logo instagram">
      </a>

      <a href="https://www.tiktok.com/@max_portfolio" target="_blank" class="xxxs:-mt-[10px] xxs:-mt-[7px] xs:-mt-[15px] md:-mt-4 sm:w-[80px] xs:w-[70px] xxs:w-[50px] xxxs:w-[50px]">
        <img class="object-contain" src="../../public/images/tiktok_logo.webp" alt="logo tiktok">
      </a>

      <a href="https://www.behance.net/maximeparis5" target="_blank" class="sm:w-[76px] xs:w-[60px] xxs:w-[50px] xxxs:w-[40px]">
        <img class="object-contain" src="../../public/images/behance_logo.webp" alt="logo behance">
      </a>

    </div>
    <div class="flex flex-row items-center justify-center gap-2">
      <Barre_contact class="mt-[42px]"/>
      <h3 class="font-unbounded                       
                      lg:text-[25px] 
                      md:text-[20px]
                      sm:text-[18px] 
                      xs:text-[16px]
                      xxs:text-[15px]
                      xxxs:text-[12px]  text-white font-bold mt-[42px]">Mes réseaux sociaux</h3>

      <Barre_contact class="mt-[42px]"/>
    </div>


    <div class=" justify-end mr-16 mb-[100px] mt-16 hidden lg:flex">
      <a href="#haut_accueil">
        <img src="../../public/images/fleche.png" class="animation_rebond" alt="flèche pour retourner en haut">
      </a>
    </div>

    <div class=" justify-center mb-[100px] mt-16 lg:hidden flex">
      <a href="#haut_accueil2">
        <img src="../../public/images/fleche.png" class="animation_rebond" alt="flèche pour retourner en haut">
      </a>
    </div>

    </section>


  <footer>
    <div class="bg-white py-6 w-full">
      <div class="flex xs:flex-row xxxs:flex-col items-center xs:justify-center md:gap-[100px] foo:gap-[80px] xfoo:gap-[60px] xs:gap-[40px]">
        <a href="#haut_accueil">
          <img class="xs:object-contain xs:w-[60px] xfoo:w-[70px] foo:w-[80px] md:w-[90px] xxxs:w-[94px]" src="../../public/images/logo_max_noir.webp" alt="logo de mon portfolio en noir">
        </a>

        <li class="font-unbounded 
        xs:text-[16px] 
        xfoo:text-[18px] 
        foo:text-[23px]  
        md:text-[25px] text-black font-bold  list-none mt-12 soul xs:ml-10 xxxs:ml-[80px] xxxs:text-[16px]"> 
          <RouterLink to="a_propos">
            À-propos
          </RouterLink>
        </li>

        <li class="font-unbounded 
        xs:text-[16px] 
        xfoo:text-[18px] 
        foo:text-[23px]  
        md:text-[25px] text-black font-bold  list-none mt-12 soul xs:ml-0 xxxs:ml-[100px] xxxs:text-[16px]">
          <RouterLink to="projets">
            Mes projets
          </RouterLink>
        </li>

        <li class="font-unbounded 
        xs:text-[16px] 
        xfoo:text-[18px] 
        foo:text-[23px]  
        md:text-[25px] text-black font-bold  list-none mt-12 soul xs:ml-0 xxxs:ml-[150px] xxxs:text-[16px]">
          <RouterLink to="mentions_legales">
            Mentions légales
          </RouterLink>
        </li>
        
      </div>
    </div>
  </footer>


</template>


<style>
.btn-selected {
    background-color: white;
    color: black;
  }

.animate__slideInRight{
  animation-delay: 0.5s;
}


.moyen{
  transform: scale(0.5);
}
.animation_rebond{
  animation: rebond 3s infinite ease-in-out;
}
@keyframes rebond {
  0%{
    transform: translateY(10px);
  }
  50%{
    transform: translateY(-10px);
    
  }
  100%{
    transform: translateY(10px);
  }
}
.animate__backInLeft{
  animation-delay: 0.15s;
}
.animate__fadeInRight{
  animation-delay: 0.3s;
}
.animate__heartBeat{
  animation-delay: 0.8s;
}
.soul{
  transform: translate(-50%, -50%);
  display: inline;
}
.soul::after{
  content: "";
  display: block;
  position: absolute;
  width: 0%;
  height: 3px;
  margin: 0 auto;
  background: #000;
  transition: width 0.2s ease-in-out;
}
.soul:hover::after{
  width: 100%;
}
.animation_texte{
  box-shadow: inset 0 0 0 0 #fff;
  color: #fff;
  margin: 0 -.25rem;
  padding: 0 .25rem;
  transition: color .3s ease-in-out, box-shadow .3s ease-in-out;
}
.animation_texte:hover {
  box-shadow: inset 550px 0 0 0 #fff;
  color: black;
}
.container2{
  display: flex;
  overflow: hidden;
  width: 100%;
  position: absolute;
  transform: translateY(-50%);
}
.txt{
  white-space: nowrap;
  animation: scrollTxt 25s linear infinite;
}
@keyframes scrollTxt {
  0%{
    transform: translate(0, 0);
  }
  100%{
    transform: translate(-100%, 0);
  }
}


</style>

<script>


import Barre_menu from '../components/icons/barre_menu.vue';
import Card_projet from '../components/Card_projet.vue';
import Barre_contact from '../components/icons/barre_contact.vue';




export default {
  components: { Barre_menu, Card_projet, Barre_contact },

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
        { id: 2, titre: 'Usine Blender', categorie: 'personnel', img_presentation: 'images/Usine_blender.webp', lien: '/emorphoz' },
        // { id: 3, titre: 'Togethearth', categorie: 'éducatif', img_presentation: 'images/Togethearth_presentation.jpg', lien: '/emorphoz' },
        { id: 3, titre: 'Logo MAX', categorie: 'personnel', img_presentation: 'images/Logo_MAX.webp', lien: '/emorphoz' },
        // { id: 4, titre: 'Affiche Alpha1', categorie: 'éducatif', img_presentation: 'images/Alpha1.webp', lien: '/emorphoz' },
        // { id: 6, titre: 'Site cookies', categorie: 'personnel', img_presentation: 'images/Animation_cookie.webp', lien: '/emorphoz' },
        { id: 5, titre: 'Meat my grill', categorie: 'éducatif', img_presentation: 'images/Meat_my_grill.webp', lien: '/emorphoz' },
        { id: 6, titre: 'MAX Blender', categorie: 'personnel', img_presentation: 'images/Blender_MAX.webp', lien: '/emorphoz' },
        { id: 7, titre: 'Spread-night', categorie: 'éducatif', img_presentation: 'images/Spread_night.webp', lien: '/emorphoz' },
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