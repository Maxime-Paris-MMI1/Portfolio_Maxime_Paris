<template>
  <header>
    <div class="flex justify-between">
      <img src="../../public/images/logo_blanc.webp" class=" ml-[100px] -mt-[40px] object-contain" alt="logo blanc de mon portfolio">
      <div class="mt-[90px] relative z-30">
        <ul class="text-white text-right font-unbounded text-xl">

          <div class="flex justify-end">
            <li class="mb-[50px] mr-[11px]">Mes projets</li>
            <Barre_menu class="mt-[15px]"/>
          </div>

          <div class="flex justify-end">
            <li class="mb-[50px] mr-[11px]">Contact</li>
            <Barre_menu class="mt-[15px]"/>
          </div>

          <div class="flex justify-end">
            <li class="mr-[11px]">À propos</li>
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
</template>

<style>
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

export default {
  components: { Barre_menu },
};

</script>


