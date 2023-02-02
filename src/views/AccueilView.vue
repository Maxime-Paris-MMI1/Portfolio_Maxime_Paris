<template>
  <header>
    <div class="flex justify-between">
      <img src="../../public/images/logo_blanc.webp" class=" ml-[100px] mt-[50px] object-contain" alt="logo blanc de mon portfolio">
      <div class="mt-[90px] ">
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
    <h1 class="font-unbounded text-[100px] text-white font-bold ml-[100px] -mt-[40px]">PORTFOLIO</h1>
    <img src="../../public/images/portfolio-stroke.webp" alt="portfolio sans fond" class="ml-[120px] -mt-[95px]">
  </section>
</template>

<script>

import Barre_menu from '../components/icons/barre_menu.vue';

export default {
  components: { Barre_menu },
};

</script>


