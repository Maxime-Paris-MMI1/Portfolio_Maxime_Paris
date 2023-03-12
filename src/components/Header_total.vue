<template>
<header id="haute">
    <div class=" justify-between items-start lg:flex hidden">
      <RouterLink to="/">
        <img id="haut_accueil" src="../../public/images/logo_blanc.webp" class=" ml-[100px] pt-[90px] object-contain animate__animated animate__fadeIn
        xs:w-[84px] xxs:w-[60px]" alt="logo blanc de mon portfolio">
      </RouterLink>


      <div class="pt-[90px] relative z-30 animate__animated animate__fadeIn">
        <ul class="text-white text-right font-unbounded text-xl font-bold">

          <div class="flex justify-end">
            <RouterLink to="/projets">
              <li class="mb-[50px] mr-[11px] animation_texte">Mes projets</li>
            </RouterLink>
            <Barre_menu class="mt-[15px]"/>
          </div>

          <div class="flex justify-end">
            <a href="/#contact">
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



    <div class="xs:hidden flex justify-between mx-8 pt-10">
      <RouterLink to="/">
        <img src="../../public/images/logo_blanc.webp" class="object-contain animate__animated animate__fadeIn
        xxxs:w-[50px] xxs:w-[70px] xs:w-[80px] sm:w-[84px]" alt="logo blanc de mon portfolio">
      </RouterLink>

      <button class="relative z-50 text-xl" aria-haspopup="true" aria-controls="menu" :aria-expanded="menuOuvert" @click="menuOuvert = !menuOuvert">
        <div>
          <img id="haut_accueil2" src="../../public/images/Ligne-header.svg" alt="menu" class="animate__animated animate__fadeIn" :class="{menuOuvert}"/>
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
           <a href="/#contact" :class="{' motion-safe:animate-[Depart_0.6s_ease-in-out]' : menuOuvert}">Contact</a>
          </ul>
        </nav>   
    </div>




    <div class="xxxs:hidden lg:hidden xs:flex flex justify-between mx-8 pt-10">
      <RouterLink to="/">
        <img src="../../public/images/logo_blanc.webp" class="object-contain animate__animated animate__fadeIn
        xxxs:w-[50px] xxs:w-[70px] xs:w-[80px] sm:w-[84px]" alt="logo blanc de mon portfolio">
      </RouterLink>

      <button class="relative z-50 text-xl" aria-haspopup="true" aria-controls="menu" :aria-expanded="menuOuvert" @click="menuOuvert = !menuOuvert">
        <div>
          <img id="haut_accueil2" src="../../public/images/Ligne-header.svg" alt="menu" class="animate__animated animate__fadeIn" :class="{menuOuvert}"/>
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
           <a href="/#contact" :class="{' motion-safe:animate-[Depart_0.6s_ease-in-out]' : menuOuvert}">Contact</a>
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

<div>
    <a href="#haute">
      <button @click="scrollTop" v-if="showButton" class="fixed bottom-4 right-4 bg-white text-black p-3 rounded-full shadow-2xl buttoned">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="black">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
      </button>
    </a>
</div>

</template>

<style>

.buttoned {
  z-index: 500;
  animation-name: slideInFromRight;
  animation-duration: 0.5s;
  animation-timing-function: ease-out;
  transition: all;
}

@keyframes slideInFromRight {
  0% {
    opacity: 0;
    transform: scale(0);
  }
  100% {
    opacity: 1;
    transform: scale(100%);
  }
}



</style>

<script>

import Barre_menu from './icons/barre_menu.vue';
import Card_projet from './Card_projet.vue';
import Barre_contact from './icons/barre_contact.vue';


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

    window.addEventListener('scroll', this.handleScroll);
    // Récupérer l'ancre dans l'URL
    const anchor = window.location.hash.slice(1);
    // Vérifier si l'ancre existe sur la page
    const element = document.getElementById(anchor);
    if (element) {
      // Scroll vers l'ancre
      element.scrollIntoView({ behavior: 'smooth' });
    }
  },

  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll);
  },


  data() {
    return {
      menuOuvert: false,
      showButton: false,
    }
},


methods: {
  handleScroll() {
      this.showButton = window.pageYOffset > 200},
},

}

</script>