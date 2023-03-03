<template>
  <header>
    <Header_total/>
  </header>



      <div class="contenair">
              <h1 class=" justify-center flex text-5xl text-white font-unbounded mt-16 mb-16 carret lg:-mt-[0px]">
                  <span>
                      À-propos
                  </span>
              </h1>
      </div>


    <div class="overflow-x-hidden parallax-offset">
      <div class="flex justify-center gap-5">
        <img :style="{ transform: 'translateX(' + positionX + 'px)', }" src="../../public/images/fond_emorphoz.png" class="parallax-base h-[300px] mb-5 object-contain" />
        <img :style="{ transform: 'translateX(' + positionX + 'px)', }" src="../../public/images/fond_emorphoz.png" class="parallax-base h-[300px] object-contain" />
      </div>

      <div class="flex justify-center gap-5">
        <img :style="{ transform: 'translateX(' + positionXX + 'px)', }" src="../../public/images/fond_emorphoz.png" class="parallax-base h-[300px] object-contain" />
        <img :style="{ transform: 'translateX(' + positionXX + 'px)', }" src="../../public/images/fond_emorphoz.png" class="parallax-base h-[300px] mb-5 object-contain" />
      </div>

      <div class="flex justify-center gap-5">
        <img :style="{ transform: 'translateX(' + positionXXX + 'px)', }" src="../../public/images/fond_emorphoz.png" class="parallax-base h-[300px] object-contain " />
        <img :style="{ transform: 'translateX(' + positionXXX + 'px)', }" src="../../public/images/fond_emorphoz.png" class="parallax-base h-[300px] object-contain " /> 
      </div>
    </div>
    <div class="mb-[5000px]">

    </div>
</template>

<script>
import Header_total from '../components/Header_total.vue'

export default {

  components: {Header_total},


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





</style>