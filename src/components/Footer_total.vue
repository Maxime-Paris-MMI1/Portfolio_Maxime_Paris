<template>
  <footer>
    <div class="bg-white py-6 w-full">
      <div class="flex xs:flex-row xxxs:flex-col items-center xs:justify-center md:gap-[100px] foo:gap-[80px] xfoo:gap-[60px] xs:gap-[40px]">
        <a href="/#haut_accueil">
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

<script>

export default {
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
}

</script>