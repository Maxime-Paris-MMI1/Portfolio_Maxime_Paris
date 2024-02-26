<template>
    <div>
    
        <header>
          <Header_total/>
        </header>
        
        
            <div class="contenair">
                    <h1 class=" justify-center flex text-[5xl] text-white font-unbounded mt-16 mb-16 carret lg:-mt-[100px]">
                        <span>
                            Short
                             clé à choc
                        </span>
                    </h1>
            </div>

            

            <div class="border-t-4 border-white"></div>
    </div>
    
    
    
    
        <div class="column mt-10">
    
            <!-- Première partie -->
    
    
                <div class="row">
                    
                    <div class="heading-content text-black">
                        <h4 class="bg-white text-center font-unbounded font-[500]
                  lg:text-[35px]
                  md:text-[35px]
                  sm:text-[30px]
                  xs:text-[25px]
                  xxs:text-[20px]
                  xxxs:text-[16px]
                  mb-3">Présentation</h4>
        
                        <div class=" mt-10 sm:mb-0 sm:mx-10 xxxs:mx-5 xxs:mx-7 xs:mx-9 text-white font-ubuntu xxxs:text-[14px] sm:text-[16px] hidden sm:flex sm:flex-col gap-5">    
                            <p>  
                                Dans le cadre de mon alternance, 
                                j'ai réalisé un montage destiné à YouTube Shorts pour présenter les bonnes pratiques lors de l'entretien d'une clé à choc.
                            </p>
                            <p>
                                J'ai pu expliquer les principales étapes en utilisant le motion design et une voix off.
                            </p>
                        </div>
                    </div>
        
                    <div class="pictures-container">
                        <div class=" sm:mb-0 sm:mx-10 xxxs:mx-5 xxs:mx-7 xs:mx-9 text-white font-ubuntu xxxs:text-[14px] sm:text-[16px] flex sm:hidden flex-col">   
                            <p>  
                                Dans le cadre de mon alternance, 
                                j'ai réalisé un montage destiné à YouTube Shorts pour présenter les bonnes pratiques lors de l'entretien d'une clé à choc.
                            </p>
                            <p>
                                J'ai pu expliquer les principales étapes en utilisant le motion design et une voix off.
                            </p>
                        </div>
    
                        <div class="flex flex-col gap-10">
                            <div class="flex flex-col items-center gap-10 mt-10 md:mt-0 mb-10">
                                <div class="flex flex-col">
                                <iframe width="560" height="315" class="xxxs:w-[250px] xxxs:h-[450px] xxs:w-[250px] xxs:h-[450px] xfoo:w-[250px] xfoo:h-[450px] sm:w-[250px] sm:h-[450px] sm:rounded-3xl xxxs:rounded-xl z-10" src="https://www.youtube.com/embed/H89VmcdZFXY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </div>
                            </div>
    
    
                        </div>
        
        
                    </div>
        
                </div>


        </div>
    
        <div class="border-t-4 border-white mt-10 sm:flex hidden"></div>
    

        <div class="border-t-4 border-white sm:flex hidden"></div>
    
        <footer>
            <Footer_total/>
        </footer>
    
    </template>
    
    <style>

@media only screen and (max-width: 1000px) {
  .vers_bas{
    opacity: 0;
    transform: translateY(-150px);
    animation: deplacement2 2s cubic-bezier(.97,-0.01,.63,1) forwards;
  }

  @keyframes deplacement2 {
  0% {
    opacity: 0;
    transform: translateY(-150px);
  }

  70%{
    opacity: 0;
    transform: translateY(-100px);
  }

  100% {
    opacity: 1;
    transform: translateY(0);
  }
}


}



@media (min-width: 1000px) {


.vers_droite {
  opacity: 0;
  transform: translateX(-300px);
  animation: deplacement 2s cubic-bezier(.97,-0.01,.63,1) forwards;
}

@keyframes deplacement {
  0% {
    opacity: 0;
    transform: translateX(-300px);
  }

  70% {

    opacity: 0.2;
    transform: translateX(-120px);
  }

  100% {
    opacity: 1;
    transform: translateX(0);
  }
}



.parallax-effect13 {
        background-image: url("../../../public/images/motion_violet.webp");
        min-height: 500px;
        background-attachment: fixed;
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
      }

      .parallax-effect13 + div {
        height: 600px;
        background-image: #000;
        font-size: 36px;
        text-align: center;
      }


}





.derriere13 {
  position: relative;
}
.derriere13::before {
  content: "";
  background-image: url(../../../public/images/motion_orange.webp);
  background-size: cover;
  opacity: 0.6;
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
    
    import Header_total from '../../components/Header_total.vue';
    import Footer_total from '../../components/Footer_total.vue';
    
    
    
    export default {
      components :{Header_total, Footer_total}
    
    }
    
    </script>