<template>
  <header>
    <div class="flex justify-between items-start">
      <img src="../../public/images/logo_blanc.webp" class=" ml-[100px] mt-[90px] object-contain animate__animated animate__fadeInDownBig" alt="logo blanc de mon portfolio">
      <div class="mt-[90px] relative z-30 lg:flex hidden">
        <ul class="text-white text-right font-unbounded text-xl font-bold">

          <div class="flex justify-end">
            <RouterLink to="#projets">
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
            <RouterLink to="#a_propos">
              <li class="mr-[11px] animation_texte">À propos</li>
            </RouterLink>
            <Barre_menu class="mt-[15px]"/>
          </div>

        </ul>
      </div>
    </div>
  </header>
  <section>
    <div class="flex-row flex">
      <div class="flex flex-col justify-center -mt-[120px]">
        <div class="mb-4 -mt-[40px] animate__animated animate__backInDown">
          <h1 class="font-unbounded text-[100px] text-white font-bold ml-[100px] -mt-[40px]">PORTFOLIO</h1>
          <img src="../../public/images/portfolio-stroke.webp" alt="portfolio sans fond" class="ml-[120px] -mt-[95px]">
        </div>
        <div class="animate__animated animate__backInLeft">
          <div>
            <h2 class="font-unbounded text-[75px] text-white font-bold ml-[100px]">MAXIME</h2>
          </div>
          <div>
            <img class="ml-[103px] -mt-[14px]" src="../../public/images/paris-stroke.webp" alt="paris sans fond">
          </div>
        </div>
      </div>
      <div class= "-mt-[220px] -ml-[60px] animate__animated animate__fadeInRight">
        <img class="w-full h-full object-contain min-h-full min-w-full" src="../../public/images/photo-perso.webp" alt="photo personnelle">
      </div>
    </div>
  </section>
  <section>
    <div class="container2 bg-white text-black font-unbounded font-bold text-[40px] py-5">
      <span class="txt t1">Artiste 3D - Motion Design - 3D VFX - Webdesign - Création de logo - Affiche -&nbsp;</span>
      <span class="txt t2">Artiste 3D - Motion Design - 3D VFX - Webdesign - Création de logo - Affiche -&nbsp;</span>
    </div>
  </section>
  <section class="mt-[163px] ml-[100px]">
    <div class="animate__animated animate__fadeInLeft">
      <img src="../../public/images/mes-projets-stroke.webp" alt="mes projets sans fond">
      <h2 class="font-unbounded text-[50px] text-white font-bold -ml-[3px] -mt-[34px]">MES PROJETS</h2>
      <H2 class="font-unbounded text-[50px] text-white font-bold -ml-[3px] -mt-[40px]">MES PROJETS</H2>
    </div>

    <div class=" flex flex-row justify-around mt-[50px]">
      <button class="text-white font Unbounded text-xl font-bold border px-5 py-2 animation_texte">Tout</button>
      <button class="text-white font Unbounded text-xl font-bold border px-5 py-2 animation_texte">Éducatif</button>
      <button class="text-white font Unbounded text-xl font-bold border px-5 py-2 animation_texte">Personnel</button>
    </div>

  </section>
  <section>
    <div class="border-t-4 border-white mt-[47px]"></div>

    <div class="mx-auto w-3/4 justify-center items-center gap-7 mt-20 mb-20 grid grid-cols-[repeat(auto-fit,minmax(350px,1fr))]">
      <div>
          <Card_projet 
          id="cursor"
          titre="E-morphoz"
          img_presentation="/images/e-morphoz_presentation.webp"
          lien="/emorphoz"/>

      </div>

      <div>
        <Card_projet
        id="cursor"
        titre="E-morphoz"
        img_presentation="/images/e-morphoz_presentation.webp"/>
      </div>

      <div>
        <Card_projet
        id="cursor"
        titre="E-morphoz"
        img_presentation="/images/e-morphoz_presentation.webp"/>
      </div>

      <div>
        <Card_projet
        id="cursor"
        titre="E-morphoz"
        img_presentation="/images/e-morphoz_presentation.webp"/>
      </div>

      <div>
        <Card_projet
        id="cursor"
        titre="E-morphoz"
        img_presentation="/images/e-morphoz_presentation.webp"/>
      </div>

      <div>
        <Card_projet
        id="cursor"
        titre="E-morphoz"
        img_presentation="/images/e-morphoz_presentation.webp"/>
      </div>

    </div>

    <div class="flex justify-center mt-20 relative z-20 mb-20">
      <button class="text-white font Unbounded text-xl font-bold border px-5 py-2 animation_texte">Voir tout mes projets</button>
    </div>
  </section>
  <section id="contact">
    <div class="ml-[128px]">
      <img src="../../public/images/contact_stroke.webp" alt="contact sans fond">
      <h2 class="font-unbounded text-[50px] text-white font-bold -mt-[40px]">CONTACT</h2>
      <h2 class="font-unbounded text-[50px] text-white font-bold -mt-[45px]">CONTACT</h2>
    </div>
    <div class="flex justify-center mb-[50px] mt-[120px]">
      <button class="text-white font Unbounded text-xl font-bold border px-[130px] py-3 animation_texte">Me contacter par mail</button>
    </div>
    <div class="flex justify-center gap-24">
      <img class="object-contain" src="../../public/images/Instagram_Glyph_White-1.webp" alt="logo instagram">
      <img class="object-contain" src="../../public/images/tiktok_logo.webp" alt="logo tiktok">
      <img class="object-contain" src="../../public/images/behance_logo.webp" alt="logo behance">
    </div>
    <div class="flex flex-row items-center justify-center gap-2 mb-[195px]">
      <Barre_contact class="mt-[42px]"/>
      <h3 class="font-unbounded text-[25px] text-white font-bold mt-[42px]">Mes réseaux sociaux</h3>
      <Barre_contact class="mt-[42px]"/>
    </div>
  </section>
  <footer>
    <div class="bg-white py-6 w-full">
      <div class="flex flex-row justify-center gap-[100px]">
        <img class="object-contain" src="../../public/images/logo_max_noir.webp" alt="logo de mon portfolio en noir">
        <li class="font-unbounded text-[25px] text-black font-bold  list-none mt-12 soul ml-10">À-propos</li>
        <li class="font-unbounded text-[25px] text-black font-bold  list-none mt-12 soul">Mes projets</li>
        <li class="font-unbounded text-[25px] text-black font-bold  list-none mt-12 soul">Mentions légales</li>
      </div>
    </div>
  </footer>
</template>


<style>

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

.curseur:hover {
  cursor: default;

}

#cursor{
  cursor: url('../../public/images/curseur_projet.png')  54 57, auto;

  
}

</style>

<script>


import Barre_menu from '../components/icons/barre_menu.vue';
import Card_projet from '../components/Card_projet.vue';
import Barre_contact from '../components/icons/barre_contact.vue';

export default {
  components: { Barre_menu, Card_projet, Barre_contact },
};

</script>


