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

      <div class="flex justify-center">
        <img class="w-[500px] -mt-10" src="../../public/images/card-apropos.webp" alt="image de présentation">
      </div>

      <div class="flex justify-center mt-[90px]">
        <p class="font-unbounded font-[700] text-white mx-10
              lg:text-[35px]
              md:text-[35px]
              sm:text-[30px]
              xs:text-[25px]
              xxs:text-[20px]
              xxxs:text-[16px]">Bienvenue sur mon site portfolio !</p>
      </div>


      <div class="xxxs:mx-auto xxxs:ml-10 xxxs:mr-10 xxxs:mt-10 sm:mx-60">
        <p class="font-ubuntu xxxs:text-[14px] sm:text-[16px] text-white text-left mb-6 font-[400]">
            Je m'appelle Maxime et je suis actuellement âgé de 19 ans. Je suis étudiant en bachelor orienté vers les métiers du multimédia et de l'internet à Montbéliard, où j'ai choisi de me spécialiser en design. Ce portfolio est crée dans le cadre d’un exercice pédagogique au sein de ma formation.
        </p>
        <p class="font-ubuntu xxxs:text-[14px] sm:text-[16px] text-white text-left mb-6 font-[400]">
          Grâce au MMI, j'ai pu acquérir des compétences techniques solides dans les domaines du design graphique, de la création de sites web et de l'expérience utilisateur. J'ai également appris à travailler en équipe et à communiquer efficacement avec mes collègues de travail.

        </p>
        <p class="font-ubuntu xxxs:text-[14px] sm:text-[16px] text-white text-left mb-6 font-[400]">
          Je suis passionné par le design depuis plusieurs années et j'ai eu l'opportunité de travailler sur divers projets. J'aime concevoir des visuels et toute sorte de design graphique à destinations de clients.
        </p>
        <p class="font-ubuntu xxxs:text-[14px] sm:text-[16px] text-white text-left font-[400]"> 
          Sur ce site, vous trouverez une sélection de mes travaux récents, ainsi que des informations sur mes compétences. N'hésitez pas à me contacter si vous avez des questions !
        </p>
      </div>

      <div class="flex justify-center mt-28 mb-10">
      <a href="mailto:maximepro.contact25@gmail.com">
        <button class="text-white font Unbounded 
                      lg:text-[25px] 
                      md:text-[22px]
                      sm:text-[20px] 
                      xs:text-[18px]
                      xxs:text-[15px]
                      xxxs:text-[12px] 
        font-bold border 
        lg:px-[130px]
        md:px-[110px]
        sm:px-[90px] 
        xs:px-[70px]
        xxs:px-[50px]
        xxxs:px-[50px] 
         py-3 animation_texte">Me contacter par mail</button>


      </a>
    </div>

    <div class="flex justify-center mt-[150px] mx-10">
        <p class="font-unbounded font-[700] text-white
              lg:text-[35px]
              md:text-[35px]
              sm:text-[30px]
              xs:text-[25px]
              xxs:text-[20px]
              xxxs:text-[16px]">Mes principales qualités</p>
    </div>
    <div class="flex md:flex-row xxxs:flex-col justify-center items-center gap-16 mt-16">

      <div class="flex flex-col gap-8">
        <img src="../../public/images/creatif.webp" alt="icone créatif">
        <p class="text-white font-unbounded font-bold flex justify-center">Créatif</p>
      </div>

      <Barre_contact class="md:flex xxxs:hidden"/>

      <div class="flex flex-col gap-8">
        <img src="../../public/images/veille.webp" alt="icone veille">
        <p class="text-white font-unbounded font-bold flex justify-center">Veille</p>
      </div>

      <Barre_contact class="md:flex xxxs:hidden"/>

      <div class="flex flex-col gap-8">
        <img src="../../public/images/autonome.webp" alt="icone autonome">
        <p class="text-white font-unbounded font-bold flex justify-center">Autonome</p>
      </div>

    </div>

    <div class="flex justify-center mt-[150px] mx-10">
        <p class="font-unbounded font-[700] text-white
              lg:text-[35px]
              md:text-[35px]
              sm:text-[30px]
              xs:text-[25px]
              xxs:text-[20px]
              xxxs:text-[16px]">N’hésitez pas à voir mes projets !</p>
    </div>


    <div class="overflow-x-hidden parallax-offset">
      <div class="flex justify-center gap-5 xxxs:-ml-[4800px] md:-ml-[4000px]">
        <img :style="{ transform: 'translateX(' + positionX + 'px)', }" src="../../public/images/fond_emorphoz.webp" class="parallax-base h-[300px] mb-5 object-contain" />
        <img :style="{ transform: 'translateX(' + positionX + 'px)', }" src="../../public/images/Affiche_large.webp" class="parallax-base h-[300px] object-contain" />
        <img :style="{ transform: 'translateX(' + positionX + 'px)', }" src="../../public/images/Casque_large.webp" class="parallax-base h-[300px] object-contain" />
        <img :style="{ transform: 'translateX(' + positionX + 'px)', }" src="../../public/images/fond_emorphoz.webp" class="parallax-base h-[300px] object-contain hidden lg:flex" />
        <img :style="{ transform: 'translateX(' + positionX + 'px)', }" src="../../public/images/Montage_fantome_large.webp" class="parallax-base h-[300px] object-contain hidden lg:flex" />
        <img :style="{ transform: 'translateX(' + positionX + 'px)', }" src="../../public/images/Affiche_large.webp" class="parallax-base h-[300px] object-contain hidden lg:flex" />
      </div>

      <div class="flex justify-center gap-5 xxxs:-mr-[2350px] md:-mr-[1900px]">
        <img :style="{ transform: 'translateX(' + positionXX + 'px)', }" src="../../public/images/Max_Blender_large.webp" class="parallax-base h-[300px] object-contain" />
        <img :style="{ transform: 'translateX(' + positionXX + 'px)', }" src="../../public/images/Togethearth_large.webp" class="parallax-base h-[300px] mb-5 object-contain" />
        <img :style="{ transform: 'translateX(' + positionXX + 'px)', }" src="../../public/images/Spread_night_large.webp" class="parallax-base h-[300px] mb-5 object-contain" />
        <img :style="{ transform: 'translateX(' + positionXX + 'px)', }" src="../../public/images/Max_Blender_large.webp" class="parallax-base h-[300px] mb-5 object-contain hidden lg:flex" />
        <img :style="{ transform: 'translateX(' + positionXX + 'px)', }" src="../../public/images/Montage_fantome_large.webp" class="parallax-base h-[300px] mb-5 object-contain hidden lg:flex" />
      </div>

      <div class="flex justify-center gap-5 xxxs:-ml-[3200px] md:-ml-[2800px]">
        <img :style="{ transform: 'translateX(' + positionXXX + 'px)', }" src="../../public/images/Usine_large.webp" class="parallax-base h-[300px] object-contain " />
        <img :style="{ transform: 'translateX(' + positionXXX + 'px)', }" src="../../public/images/Emorphoz_large.webp" class="parallax-base h-[300px] object-contain " /> 
        <img :style="{ transform: 'translateX(' + positionXXX + 'px)', }" src="../../public/images/Blender_site_large.webp" class="parallax-base h-[300px] object-contain " /> 
        <img :style="{ transform: 'translateX(' + positionXXX + 'px)', }" src="../../public/images/Usine_large.webp" class="parallax-base h-[300px] object-contain  hidden lg:flex" /> 
        <img :style="{ transform: 'translateX(' + positionXXX + 'px)', }" src="../../public/images/Blender_site_large.webp" class="parallax-base h-[300px] object-contain  hidden lg:flex" /> 
      </div>
    </div>

    <footer>
      <div class="mt-[100px]">
        <Footer_total/>
      </div>
    </footer>
</template>

<script>
import Barre_contact from '../components/icons/barre_contact.vue';
import Header_total from '../components/Header_total.vue'
import Footer_total from '../components/Footer_total.vue'

export default {

  components: {Header_total, Footer_total, Barre_contact},


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
      this.positionXX = -window.scrollY * 0.5 // Réglage de la vitesse de défilement
      this.positionXXX = window.scrollY * 0.5 // Réglage de la vitesse de défilement
    }
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll)
  }
  };

</script>

<style>

.parallax-offset {
  transform: translateY(50px);
}

.parallax-base {
  position: relative;
  left: 200px;
}
</style>