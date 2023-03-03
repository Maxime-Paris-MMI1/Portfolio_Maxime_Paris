<template>
    <RouterLink to="/">
        <button class="flex justify-center text-white">HOME</button>
    </RouterLink>

    <div>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi architecto a ad accusamus itaque, quaerat reprehenderit, quos repudiandae odio nulla quidem. Temporibus eum delectus odit quos repellendus repudiandae a quaerat!</p>
    </div>

    <div class="overflow-x-hidden parallax-offset">
      <div class="flex justify-center gap-5">
        <img :style="{ transform: 'translateX(' + positionX + 'px)', }" src="../../public/images/fond_emorphoz.png" class="parallax-base h-[300px] mb-5" />
        <img :style="{ transform: 'translateX(' + positionX + 'px)', }" src="../../public/images/fond_emorphoz.png" class="parallax-base h-[300px]" />
      </div>

      <div class="flex justify-center gap-5">
        <img :style="{ transform: 'translateX(' + positionXX + 'px)', }" src="../../public/images/fond_emorphoz.png" class="parallax-base h-[300px]" />
        <img :style="{ transform: 'translateX(' + positionXX + 'px)', }" src="../../public/images/fond_emorphoz.png" class="parallax-base h-[300px] mb-5" />
      </div>

      <div class="flex justify-center gap-5">
        <img :style="{ transform: 'translateX(' + positionXXX + 'px)', }" src="../../public/images/fond_emorphoz.png" class="parallax-base h-[300px] " />
        <img :style="{ transform: 'translateX(' + positionXXX + 'px)', }" src="../../public/images/fond_emorphoz.png" class="parallax-base h-[300px] " /> 
      </div>
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
      this.positionX = window.scrollY * 1 // Réglage de la vitesse de défilement
      this.positionXX = window.scrollY * 0.6 // Réglage de la vitesse de défilement
      this.positionXXX = window.scrollY * 0.4 // Réglage de la vitesse de défilement
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
  right: 800px;
}





</style>