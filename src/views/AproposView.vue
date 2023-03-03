<template>
    <RouterLink to="/">
        <button class="flex justify-center text-white">HOME</button>
    </RouterLink>

    <div class="overflow-x-hidden parallax-offset">
      <img :style="{ transform: 'translateX(' + positionX + 'px)', }" src="../../public/images/fond_emorphoz.png" class="parallax-base h-[300px] mb-5" />
      <img :style="{ transform: 'translateX(' + positionXX + 'px)', }" src="../../public/images/fond_emorphoz.png" class="parallax-base h-[300px] -ml-10 mb-5" />
      <img :style="{ transform: 'translateX(' + positionXXX + 'px)', }" src="../../public/images/fond_emorphoz.png" class="parallax-base h-[300px] -ml-20" />
    </div>


    <div>
      <h3 class="text-white flex justify-center text-2xl -mt-96">TEST Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis accusantium vitae, quia consectetur doloremque a odit quam sapiente nihil qui dolores voluptatem labore numquam quaerat vel eius tempora eligendi doloribus.</h3>
    </div>



    <div class="mb-[5000px]">

    </div>
</template>

<script>

export default {
  data() {
    return {
      positionX: 0,
      positionXX: 0,
      positionXXX: 0,
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll() {
      // Calculer la nouvelle position X en fonction de la position de défilement
      this.positionX = window.scrollY * 0.8 // Réglage de la vitesse de défilement
      this.positionXX = window.scrollY * 0.5 // Réglage de la vitesse de défilement
      this.positionXXX = window.scrollY * 0.3 // Réglage de la vitesse de défilement
    }
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll)
  }
  };

</script>

<style>

.parallax-offset {
  transform: translateY(1000px);
}

.parallax-base {
  position: relative;
  right: 100px;
}





</style>