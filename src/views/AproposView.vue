<template>
  <div class="derriere2">
    <header>
      <Header_total/>
    </header>
  
        <div class="contenair">
                <h1 class=" justify-center flex text-5xl text-white font-unbounded mt-16 pb-16 carret lg:-mt-[0px]">
                    <span>
                        À-propos
                    </span>
                </h1>
        </div>
  </div>
  <div class="border-t-4 border-white"></div>

      <div class="flex justify-center">
        <img class="w-[500px] -mt-10" src="../../public/images/card-apropos.webp" alt="image de présentation">
      </div>


      <!-- <div class="flex justify-center mb-[50px] mt-[120px]">
        <a href="../../public/images/cv_Maxime_Paris.jpg" target="blank_" download>
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
           py-3 animation_texte">Télécharger mon C.V</button>


        </a>
      </div> -->

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
            Je m'appelle Maxime et je suis actuellement âgé de 19 ans. Je suis étudiant en bachelor universitaire de technologie métiers du multimédia et de l'internet à Montbéliard, où j'ai choisi de me spécialiser en design. Ce portfolio est crée dans le cadre d’un exercice pédagogique au sein de ma formation.
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
        <img src="../../public/images/picto_ampoule.webp" class="sm:w-[200px] xxxs:w-[170px]" alt="icone créatif">
        <p class="text-white font-unbounded font-bold flex justify-center">Créatif</p>
      </div>

      <Barre_contact class="md:flex xxxs:hidden"/>

      <div class="flex flex-col gap-8">
        <img src="../../public/images/picto_livre.webp" class="sm:w-[200px] xxxs:w-[170px]" alt="icone veille">
        <p class="text-white font-unbounded font-bold flex justify-center">Curieux</p>
      </div>

      <Barre_contact class="md:flex xxxs:hidden"/>

      <div class="flex flex-col gap-8">
        <img src="../../public/images/picto_user.webp" class="sm:w-[200px] xxxs:w-[170px]" alt="icone autonome">
        <p class="text-white font-unbounded font-bold flex justify-center">Autonome</p>
      </div>

    </div>

xxxs:w-[100px] xsme:
    <div class="flex justify-center mt-[150px] mx-10">
        <p class="font-unbounded font-[700] text-white
              lg:text-[35px]
              md:text-[35px]
              sm:text-[30px]
              xs:text-[25px]
              xxs:text-[20px]
              xxxs:text-[16px]">Les logiciels que je maîtrise </p>
    </div>
    <div class="flex flex-col items-center justify-center">
        <div class="xxs:mx-auto xxxs:mx-5 my-8 grid xxxs:grid-cols-2 xsme:grid-cols-3 gap-10">
          <a target="_blank" class="hover:scale-110 ease-in-out duration-300" href="https://www.blender.org/">
            <img src="../../public/images/blender.webp" class="xxxs:w-[100px] xs:w-[150px]" alt="logo blender">
          </a>

          <a target="_blank" class="hover:scale-110 ease-in-out duration-300" href="https://www.adobe.com/fr/products/audition.html">
            <img src="../../public/images/audition.webp" class="xxxs:w-[100px] xs:w-[150px]" alt="logo audition">
          </a>

            <a target="_blank" class="hover:scale-110 ease-in-out duration-300" href="https://www.adobe.com/fr/products/aftereffects/landpb.html?gclid=Cj0KCQjwk7ugBhDIARIsAGuvgPaogRoRe6zK-CHgDkXoHAYgmz-a9pFVU6Y6iUySLnsMnH03c9S5xTIaAkOJEALw_wcB&mv=search&mv=search&sdid=MYYBRYZH&ef_id=Cj0KCQjwk7ugBhDIARIsAGuvgPaogRoRe6zK-CHgDkXoHAYgmz-a9pFVU6Y6iUySLnsMnH03c9S5xTIaAkOJEALw_wcB:G:s&s_kwcid=AL!3085!3!600183576446!e!!g!!adobe%20after%20effects!1435912503!56537400619">
              <img src="../../public/images/logo_after_effect.webp" class="xxxs:w-[100px] xs:w-[150px]" alt="logo after effect">
            </a> 

            <a target="_blank" class="hover:scale-110 ease-in-out duration-300" href="https://www.adobe.com/fr/products/photoshop/landpb.html?gclid=Cj0KCQjwk7ugBhDIARIsAGuvgPb9lnnSKiPCzkxpaNzqzkJS6xTJd7NS5IMIxUha28EAUiFuDdRg5-EaAsuREALw_wcB&mv=search&mv=search&sdid=LZ32SYVR&ef_id=Cj0KCQjwk7ugBhDIARIsAGuvgPb9lnnSKiPCzkxpaNzqzkJS6xTJd7NS5IMIxUha28EAUiFuDdRg5-EaAsuREALw_wcB:G:s&s_kwcid=AL!3085!3!441889279823!e!!g!!adobe%20photoshop!1435912275!56537390339">
              <img src="../../public/images/photoshop.webp" class="xxxs:w-[100px] xs:w-[150px]" alt="logo photoshop">
            </a>   

            <a target="_blank" class="hover:scale-110 ease-in-out duration-300" href="https://www.adobe.com/fr/products/premiere/landpb.html?gclid=Cj0KCQjwk7ugBhDIARIsAGuvgPZeNl1L_9IQRmMJejR2UaJYXsTPqWHQfeaTYZ2A82t07oFPFKJwNgAaAv-zEALw_wcB&mv=search&mv=search&sdid=LQLZT7BT&ef_id=Cj0KCQjwk7ugBhDIARIsAGuvgPZeNl1L_9IQRmMJejR2UaJYXsTPqWHQfeaTYZ2A82t07oFPFKJwNgAaAv-zEALw_wcB:G:s&s_kwcid=AL!3085!3!341217015802!e!!g!!adobe%20premiere%20pro!1435912734!56537474099">
              <img src="../../public/images/premiere_pro.webp" class="xxxs:w-[100px] xs:w-[150px]" alt="logo première pro">
            </a>
    
            <a target="_blank" class="hover:scale-110 ease-in-out duration-300" href="https://www.adobe.com/fr/products/illustrator.html?gclid=Cj0KCQjwk7ugBhDIARIsAGuvgPZJoZ7BR-evM4IwNzZYreQ8FSTIJN4p3v_rafd9oIZCLdaX5c4dY_AaAuLMEALw_wcB&mv=search&mv=search&sdid=KCJMVLF6&ef_id=Cj0KCQjwk7ugBhDIARIsAGuvgPZJoZ7BR-evM4IwNzZYreQ8FSTIJN4p3v_rafd9oIZCLdaX5c4dY_AaAuLMEALw_wcB:G:s&s_kwcid=AL!3085!3!600183673892!e!!g!!adobe%20illustrator!1478148655!58836721084">
              <img src="../../public/images/illustrator.webp" class="xxxs:w-[100px] xs:w-[150px]" alt="logo illustrator">
            </a>
    
            <a target="_blank" class="hover:scale-110 ease-in-out duration-300" href="https://code.visualstudio.com/">
              <img src="../../public/images/vscode.webp" class="xxxs:w-[100px] xs:w-[150px]" alt="logo vscode">
            </a>
    
            <a target="_blank" class="hover:scale-110 ease-in-out duration-300" href="https://www.adobe.com/fr/products/indesign/landpb.html?gclid=Cj0KCQjwk7ugBhDIARIsAGuvgPaGnZxOkNB3jDKSsz6NK2KHSZhENkkVpmQfidcn8qLsgsJNBxg1gIYaAgkHEALw_wcB&mv=search&mv=search&sdid=LCDWTLJX&ef_id=Cj0KCQjwk7ugBhDIARIsAGuvgPaGnZxOkNB3jDKSsz6NK2KHSZhENkkVpmQfidcn8qLsgsJNBxg1gIYaAgkHEALw_wcB:G:s&s_kwcid=AL!3085!3!600117236569!e!!g!!indesign!1435912704!58952470471">
              <img src="../../public/images/indesign.webp" class="xxxs:w-[100px] xs:w-[150px]" alt="logo indesign">
            </a>
    
            <a target="_blank" class="hover:scale-110 ease-in-out duration-300" href="https://www.figma.com/">
              <img src="../../public/images/figma.webp" class="xxxs:w-[100px] xs:w-[150px]" alt="logo figma">
            </a>

      </div>

    </div>



    <div class="flex justify-center mt-[50px] mx-10">
        <p class="font-unbounded font-[700] text-white
              lg:text-[35px]
              md:text-[35px]
              sm:text-[30px]
              xs:text-[25px]
              xxs:text-[20px]
              xxxs:text-[16px]">N’hésitez pas à voir mes projets !</p>
    </div>


    <div class="overflow-x-hidden parallax-offset hidden xs:grid">
      <div class="flex justify-center gap-5 xxxs:-ml-[4800px] md:-ml-[4000px]">
        <img :style="{ transform: 'translateX(' + positionX + 'px)', }" src="../../public/images/citron.webp" class="parallax-base h-[300px] mb-5 object-contain" />
        <img :style="{ transform: 'translateX(' + positionX + 'px)', }" src="../../public/images/casque.webp" class="parallax-base h-[300px] object-contain" />
        <img :style="{ transform: 'translateX(' + positionX + 'px)', }" src="../../public/images/usine_200.webp" class="parallax-base h-[300px] object-contain" />
        <img :style="{ transform: 'translateX(' + positionX + 'px)', }" src="../../public/images/fond_emorphoz.webp" class="parallax-base h-[300px] object-contain" />
        <img :style="{ transform: 'translateX(' + positionX + 'px)', }" src="../../public/images/Montage_fantome_large.webp" class="parallax-base h-[300px] object-contain" />
        <img :style="{ transform: 'translateX(' + positionX + 'px)', }" src="../../public/images/casque.webp" class="parallax-base h-[300px] object-contain" />
      </div>

      <div class="flex justify-center gap-5 xxxs:-mr-[2350px] md:-mr-[1900px]">
        <img :style="{ transform: 'translateX(' + positionXX + 'px)', }" src="../../public/images/Max_Blender_large.webp" class="parallax-base h-[300px] object-contain" />
        <img :style="{ transform: 'translateX(' + positionXX + 'px)', }" src="../../public/images/Usine_large.webp" class="parallax-base h-[300px] mb-5 object-contain" />
        <img :style="{ transform: 'translateX(' + positionXX + 'px)', }" src="../../public/images/geometry_node.png" class="parallax-base h-[300px] mb-5 object-contain" />
        <img :style="{ transform: 'translateX(' + positionXX + 'px)', }" src="../../public/images/Emorphoz_large.webp" class="parallax-base h-[300px] mb-5 object-contain" />
        <img :style="{ transform: 'translateX(' + positionXX + 'px)', }" src="../../public/images/asteroide.webp" class="parallax-base h-[300px] mb-5 object-contain" />
      </div>

      <div class="flex justify-center gap-5 xxxs:-ml-[3200px] md:-ml-[2800px]">
        <img :style="{ transform: 'translateX(' + positionXXX + 'px)', }" src="../../public/images/casque-flou.webp" class="parallax-base h-[300px] object-contain " />
        <img :style="{ transform: 'translateX(' + positionXXX + 'px)', }" src="../../public/images/Max_Blender_large.webp" class="parallax-base h-[300px] object-contain " /> 
        <img :style="{ transform: 'translateX(' + positionXXX + 'px)', }" src="../../public/images/canette.webp" class="parallax-base h-[300px] object-contain " /> 
        <img :style="{ transform: 'translateX(' + positionXXX + 'px)', }" src="../../public/images/Blender_site_large.webp" class="parallax-base h-[300px] object-contain " /> 
        <img :style="{ transform: 'translateX(' + positionXXX + 'px)', }" src="../../public/images/geometry_node.png" class="parallax-base h-[300px] object-contain " /> 
      </div>
    </div>

    
    <div class="flex justify-center mt-16 mb-10 xs:hidden">
      <RouterLink to="/projets">
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
         py-3 animation_texte">Voir mes projets</button>
      </RouterLink>
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

.derriere2 {
  position: relative;
}
.derriere2::before {
  content: "";
  background-image: url(../../public/images/Emorphoz_large.webp);
  background-size: cover;
  opacity: 0.5;
  position: absolute;
  background-position: bottom;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
}

.parallax-offset {
  transform: translateY(50px);
}

.parallax-base {
  position: relative;
  left: 200px;
}
</style>