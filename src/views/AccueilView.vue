<template>
  <header>
    <div class="flex justify-between items-start">
      <img src="../../public/images/logo_blanc.webp" class=" ml-[100px] mt-[90px] object-contain" alt="logo blanc de mon portfolio">
      <div class="mt-[90px] relative z-30 lg:flex hidden">
        <ul class="text-white text-right font-unbounded text-xl font-bold">

          <div class="flex justify-end">
            <li class="mb-[50px] mr-[11px] animation_texte">Mes projets</li>
            <Barre_menu class="mt-[15px]"/>
          </div>

          <div class="flex justify-end">
            <li class="mb-[50px] mr-[11px] animation_texte">Contact</li>
            <Barre_menu class="mt-[15px]"/>
          </div>

          <div class="flex justify-end">
            <li class="mr-[11px] animation_texte">À propos</li>
            <Barre_menu class="mt-[15px]"/>
          </div>

        </ul>
      </div>
    </div>
  </header>
  <section>
    <div class="flex-row flex">
      <div class="flex flex-col justify-center -mt-[120px]">
        <div class="mb-4 -mt-[40px]">
          <h1 class="font-unbounded text-[100px] text-white font-bold ml-[100px] -mt-[40px]">PORTFOLIO</h1>
          <img src="../../public/images/portfolio-stroke.webp" alt="portfolio sans fond" class="ml-[120px] -mt-[95px]">
        </div>
        <div>
          <div>
            <h2 class="font-unbounded text-[75px] text-white font-bold ml-[100px]">MAXIME</h2>
          </div>
          <div>
            <img class="ml-[103px] -mt-[14px]" src="../../public/images/paris-stroke.webp" alt="paris sans fond">
          </div>
        </div>
      </div>
      <div class= "-mt-[220px] -ml-[60px] ">
        <img class="w-full h-full object-contain min-h-full min-w-full" src="../../public/images/photo-perso.webp" alt="">
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
    <img src="../../public/images/mes-projets-stroke.webp" alt="mes projets sans fond">
    <h2 class="font-unbounded text-[50px] text-white font-bold -ml-[3px] -mt-[34px]">MES PROJETS</h2>
    <H2 class="font-unbounded text-[50px] text-white font-bold -ml-[3px] -mt-[40px]">MES PROJETS</H2>

    <div class=" flex flex-row justify-around mt-[50px]">
      <button class="text-white font Unbounded text-xl font-bold border px-5 py-2 hover:bg-white hover:text-black">Tout</button>
      <button class="text-white font Unbounded text-xl font-bold border px-5 py-2 hover:bg-white hover:text-black">Éducatif</button>
      <button class="text-white font Unbounded text-xl font-bold border px-5 py-2 hover:bg-white hover:text-black">Personnel</button>
    </div>

  </section>
  <section>
    <div class="border-t-4 border-white mt-[47px]"></div>

    <div class="mx-auto w-3/4 justify-center items-center gap-7 mt-20 mb-20 grid grid-cols-[repeat(auto-fit,minmax(220px,1fr))]">
      <Card_projet
      titre="E-morphoz"
      img_presentation="/images/e-morphoz_presentation.webp"/>

    </div>
  </section>
</template>

<style>

.animation_texte{
  box-shadow: inset 0 0 0 0 #fff;
  color: #fff;
  margin: 0 -.25rem;
  padding: 0 .25rem;
  transition: color .3s ease-in-out, box-shadow .3s ease-in-out;
}

.animation_texte:hover {
  box-shadow: inset 250px 0 0 0 #fff;
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

export default {
  components: { Barre_menu, Card_projet },
};

</script>


