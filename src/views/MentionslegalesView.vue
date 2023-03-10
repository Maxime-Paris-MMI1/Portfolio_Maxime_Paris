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
  <section>
    <div class="mb-10 text-white mt-10">
        <h3 class="font-unbounded font-[700] text-white sm:mx-10 xxxs:mx-3
              lg:text-[35px]
              md:text-[35px]
              sm:text-[30px]
              xs:text-[25px]
              xxs:text-[20px]
              xxxs:text-[16px]">Contact</h3>
    </div>

    <div class="mb-10 sm:mx-10 xxxs:mx-3 text-white font-ubuntu xxxs:text-[14px] sm:text-[16px]">
      <p>Editeur du site : Maxime Paris</p>
      <p>Adresse : 4, place Tharradin 25 200 Montbéliard</p>
      <p>Numéro de téléphone : +33(0)6 36 47 01 96</p>
      <div class="flex justify-start gap-3">
        <p>Adresse email :</p>
        <a href="mailto:maximepro.contact25@gmail.com" class="underline">maximepro.contact25@gmail.com</a>
      </div>
      <p>Hébergeur du site : Infomaniak</p>
      <p>Adresse de l'hébergeur : Rue Eugène Marziano 25 1227 Les Acacias (GE)</p>
    </div>

    <div class="mb-10 text-white mt-10">
        <h3 class="font-unbounded font-[700] text-white sm:mx-10 xxxs:mx-3
              lg:text-[35px]
              md:text-[35px]
              sm:text-[30px]
              xs:text-[25px]
              xxs:text-[20px]
              xxxs:text-[16px]">Information</h3>
    </div>

    <div class="mb-10 sm:mx-10 xxxs:mx-3 text-white font-ubuntu xxxs:text-[14px] sm:text-[16px]">
      <p>Le site a été réalisé dans un cadre éducatif au sein du MMI de Montbéliard.</p>
      <p>Il ne dispose d'aucun système de paiement ni de formulaire de quelque nature que ce soit.</p>
      <p>Le site et l'ensemble de son contenu (textes, images, vidéos, etc.) sont la propriété exclusive de Maxime Paris.</p>
      <p>Le contenu du site est protégé par les lois françaises et internationales relatives à la propriété intellectuelle.</p>
    </div>

    <div class="mb-10 text-white mt-10">
        <h3 class="font-unbounded font-[700] text-white sm:mx-10 xxxs:mx-3
              lg:text-[35px]
              md:text-[35px]
              sm:text-[30px]
              xs:text-[25px]
              xxs:text-[20px]
              xxxs:text-[16px]">Droit</h3>
    </div>

    <div class="mb-10 sm:mr-96 sm:ml-10 xxxs:ml-3 xxxs:mx-auto text-white font-ubuntu xxxs:text-[14px] sm:text-[16px]">
      <p class="mb-2">Toute reproduction, représentation, diffusion ou exploitation de quelque nature que ce soit, même partielle, du contenu du site est strictement interdite sans l'autorisation préalable de Maxime Paris.</p>
      <p class="mb-2">Maxime Paris ne saurait être tenu responsable des dommages directs ou indirects qui pourraient résulter de l'accès ou de l'utilisation du site, y compris l'inaccessibilité, les pertes de données, détériorations, destructions ou virus qui pourraient affecter l'équipement informatique de l'utilisateur.</p>
      <p class="mb-2">Les liens hypertextes présents sur le site peuvent renvoyer vers des sites tiers. Maxime Paris décline toute responsabilité quant au contenu de ces sites.</p>
      <p class="mb-2">Le site utilise des cookies pour améliorer l'expérience utilisateur. Les utilisateurs peuvent désactiver les cookies dans les paramètres de leur navigateur. Les données collectées par les cookies sont utilisées exclusivement par Maxime Paris et ne sont pas transmises à des tiers.</p>
      <p>Les présentes mentions légales sont régies par le droit français. Tout litige relatif à l'utilisation du site sera soumis à la compétence exclusive des tribunaux français.</p>
    </div>


  </section>


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