<template>
  <div class="derriere3">
    <header>
        <Header_total/>
    </header>
    <section>
        <div class="contenair">
              <h1 class=" justify-center flex text-5xl text-white font-unbounded mt-16 pb-16 carret lg:mt-[20px]">
                  <span>
                      Mentions légales
                  </span>
              </h1>
        </div>

        <div class="border-t-4 border-white"></div>
    </section>
  </div>

        <div class="mb-40 text-white">
            <h3 class="text-white">Information de contact</h3>
        </div>

    <footer>
        <Footer_total/>
    </footer>




</template>

<style>

.derriere3 {
  position: relative;
}
.derriere3::before {
  content: "";
  background-image: url(../../public/images/Blender_site_large.webp);
  background-size: cover;
  opacity: 0.3;
  position: absolute;
  background-position: top;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
}

</style>

<script>

import Header_total from '../components/Header_total.vue'
import Footer_total from '../components/Footer_total.vue'
import Card_projet from '../components/Card_projet.vue';

export default {
  components: { Header_total, Footer_total, Card_projet},

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
}

</script>