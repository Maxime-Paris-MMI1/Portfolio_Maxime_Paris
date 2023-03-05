<template>
    <header>
        <Header_total/>
    </header>
    <section>
        <div class="contenair">
              <h1 class=" justify-center flex text-5xl text-white font-unbounded mt-16 mb-16 carret lg:mt-[20px]">
                  <span>
                      Mentions légales
                  </span>
              </h1>
        </div>
        <div class="mb-40 text-white">
            <h3 class="text-white">Information de contact</h3>
        </div>
    </section>

    <footer>
        <Footer_total/>
    </footer>




</template>

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