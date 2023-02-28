<template>

    <header>

    <div class=" justify-between items-start lg:flex hidden">
        <RouterLink to="/">
            <img id="haut_accueil" src="../../../public/images/logo_blanc.webp" class=" ml-[100px] mt-[90px] object-contain 
            xs:w-[84px] xxs:w-[60px]" alt="logo blanc de mon portfolio">
        </RouterLink>


      <div class="mt-[90px] relative z-30" >
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



    <div class="xs:hidden flex justify-between mx-8 mt-10">
        <RouterLink to="/">
            <img src="../../../public/images/logo_blanc.webp" class="object-contain
            xxxs:w-[50px] xxs:w-[70px] xs:w-[80px] sm:w-[84px]" alt="logo blanc de mon portfolio">
        </RouterLink>

      <button class="relative z-50 text-xl" aria-haspopup="true" aria-controls="menu" :aria-expanded="menuOuvert" @click="menuOuvert = !menuOuvert">
        <div>
          <img id="haut_accueil2" src="../../../public/images/Ligne-header.svg" alt="menu" class="animate__animated animate__fadeInRightBig" :class="{menuOuvert}"/>
        </div>
        <span class="sr-only">Menu</span>
      </button>
    </div>

    <div id="menu" class="z-[50] fixed inset-0 -translate-x-0 bg-[#000] motion-safe:duration-1000 motion-safe:transition-transform h-full xs:hidden" v-if="menuOuvert"
      :class="{ 'translate-x-0': menuOuvert }">
        <div class="flex flex-row justify-end mr-10">
          <button class="relative z-50 mt-14" aria-haspopup="true" aria-controls="menu" :aria-expanded="menuOuvert" @click="menuOuvert = !menuOuvert">
            <img src="../../../public/images/croix_menu.svg" alt="croix du menu" :class="{'motion-safe:animate-[BackInRight_1s_cubic-bezier(0,1,.24,1)]' : menuOuvert}">
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
        <RouterLink to="/">
            <img src="../../../public/images/logo_blanc.webp" class="object-contain animate__animated animate__fadeInDownBig
            xxxs:w-[50px] xxs:w-[70px] xs:w-[80px] sm:w-[84px]" alt="logo blanc de mon portfolio">
        </RouterLink>

      <button class="relative z-50 text-xl" aria-haspopup="true" aria-controls="menu" :aria-expanded="menuOuvert" @click="menuOuvert = !menuOuvert">
        <div>
          <img id="haut_accueil2" src="../../../public/images/Ligne-header.svg" alt="menu" class="animate__animated animate__fadeInRightBig" :class="{menuOuvert}"/>
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
              <img src="../../../public/images/croix_menu.svg" alt="croix du menu" :class="{'motion-safe:animate-[BackInRight_1s_cubic-bezier(0,1,.24,1)]' : menuOuvert}">
            </div>
          </button>
        </div>


    </div>


  </header>


    <div class="contenair">
            <h1 class=" justify-center flex text-5xl text-white font-unbounded mt-16 mb-16 carret">
                <span>
                    E-morphoz
                </span>
            </h1>
    </div>



    <div class="column">
        <div class="row">
            
            <div class="heading-content text-black">
                <h4 class="bg-white text-center font-unbounded">Présentation</h4>
                <div class="text-white text-lg">
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim nihil delectus sed asperiores id harum iste. Quidem assumenda, optio iusto commodi dolor, magni deserunt corporis expedita corrupti, molestiae ducimus exercitationem!
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto odio facilis corrupti possimus similique, iste eaque, natus doloribus, eius consequuntur dolor tempore pariatur eveniet neque? Perspiciatis officia doloribus omnis optio.
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta saepe in iusto eius vero quae, laudantium fuga eaque ipsum. Quia nostrum accusantium omnis, alias fuga illo ratione porro. Repudiandae, maiores
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere ipsa aperiam praesentium temporibus dicta aspernatur architecto! Optio similique autem error deserunt fuga commodi repellat quisquam accusamus laboriosam, voluptatibus quidem sit!
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem, qui? Dolorem recusandae animi debitis, saepe optio mollitia repudiandae tempore laudantium officia aliquam ipsam minima eaque vitae molestiae ipsum dolor harum.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium est laboriosam commodi sed libero eveniet quam obcaecati totam illo? Rerum magnam esse, aliquid autem explicabo aspernatur maiores ullam quod quis.
                    </p>
                </div>
            </div>

            <div class="pictures-container">

                <img src="../../../public/images/gif_rendu_final.gif" alt="vidéo de présentation de mon projet">
                <img src="../../../public/images/photo-perso.webp" alt="">

            </div>

        </div>
        <div class="row">
            <div class="heading-content text-black">
                <h4 class="bg-white text-center font-unbounded">logo</h4>
            </div>
            
            <div class="pictures-container">

                <img src="../../../public/images/e-morphoz_presentation.webp" alt="">

            </div>
        </div>

        <div class="row">
            <div class="heading-content text-black">
                <h4 class="bg-white text-center font-unbounded">Harmonie colorée</h4>
            </div>
            
            <div class="pictures-container">

                <img src="../../../public/images/e-morphoz_presentation.webp" alt="">

            </div>
        </div>
    </div> 

    <div>
        <div class="parallax-effect"></div>
            <div>
                <p class="text-white font-unbounded flex justify-center text-2xl"></p>
            </div>
        <div class="parallax-effect">
        </div>
    </div>

    <div>
        <h3 class="text-white py-96 flex justify-center">Voir le résultat</h3>
    </div>

    <footer>
    <div class="bg-white py-6 w-full">
      <div class="flex xs:flex-row xxxs:flex-col items-center xs:justify-center md:gap-[100px] foo:gap-[80px] xfoo:gap-[60px] xs:gap-[40px]">
        <RouterLink to="/#haut_accueil">
            <img class="xs:object-contain xs:w-[60px] xfoo:w-[70px] foo:w-[80px] md:w-[90px] xxxs:w-[94px]" src="../../../public/images/logo_max_noir.webp" alt="logo de mon portfolio en noir">
        </RouterLink>

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

.parallax-effect {
        background-image: url("../../../public/images/fond_emorphoz.png");
        min-height: 600px;
        background-attachment: fixed;
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
      }

      .parallax-effect + div {
        height: 500px;
        background-image: #000;
        font-size: 36px;
        text-align: center;
        font-family: "Raleway", Arial, sans-serif;
      }

.carret {
    text-transform: uppercase;
    color: #000;
    font-weight: 900;
    color: transparent;
    font-size: 0px;
}

.carret span {
    display: inline-block;
    position: relative;
    overflow: hidden;
    font-size: clamp(20px, 8vw, 120px);
}


.carret span::after {
    content: "";
    display: block;
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    transform: translateX(-100%);
}
.carret:nth-child(1) {
    font-weight: 600;
    animation: txt-appearance 0s 1s forwards,  /* Ajouter une animation de fondu enchaîné */
    
}

.carret:nth-child(1) span::after {
    background:#fff;
    animation: slide-in 0.75s ease-out forwards,
    slide-out 0.75s 1s ease-out forwards;
}

@keyframes slide-in {
    100% {
        transform: translateX(0%);
    }
}
@keyframes slide-out {
    90%{
        opacity: 1;
    }
    100% {
        transform: translateX(100%);
        opacity: 0;
    }
}
@keyframes txt-appearance {
    100% {
        color: #fff;
    }
}





.contenair {
    max-width: 1600px;
    margin: 0 auto;
    padding: 20px 0;
}

.column{
    margin: 0 auto;
}

.row{
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 10px;
    padding: 10px;
}

.heading-content, h4 {
    font-size: 35px;
    padding: 0 15px;
    position: sticky;
    top: 0;
}

</style>

<script>

import Barre_menu from '../../components/icons/barre_menu.vue';
import Card_projet from '../../components/Card_projet.vue';
import Barre_contact from '../../components/icons/barre_contact.vue';


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
      menuOuvert: false,
    }
}}

</script>