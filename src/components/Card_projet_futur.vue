<template>
    <div>
      <RouterLink class="curseur" :to="lien" id="cursor3">
        <div class="foo:w-[365px] foo:h-[365px] xxxs:w-[275px] xxxs:h-[275px] relative">
            <!--  -->
            <div class="foo:w-[365px] foo:h-[365px] xxxs:w-[275px] xxxs:h-[275px] absolute left-[-1px] top-[-1px]">
              <div class="image-zoom">
                  <img
                  :src="img_presentation"
                  class="image"
                  />
                  <div class="absolute foo:left-[0px] foo:right-[16px] foo:bottom-[15px]
                                xxxs:left-0 xxxs:right-[0px] xxxs:bottom-0   inset-0 bg-gradient-to-b from-transparent to-black"></div>


                  <div class="border-white border-4 absolute foo:w-[355px] foo:h-[355px] xxxs:w-[275px] xxxs:h-[275px] top-[0px] right-[15px] left-[-1px]"></div>
                  <p class="foo:text-[25px] xxxs:text-[20px] absolute text-black py-3 px-3 font-unbounded font-bold text-2xl xxxs:top-[110px] foo:top-[150px] xxxs:left-[38px] foo:left-[60px] text-center bg-white">
                      Arrive bientôt
                  </p>
                </div>
            </div>

        </div>
          
      </RouterLink>
    </div>
  
  </template>
  
  <style>

  
  .cadre:hover{
    height: 365px; ;
  
  }
  @media screen and (min-width: 950px) {
    .image-zoom{
    width: 350px;
    overflow: hidden;
    }
    
    .image{
      width: 100%;
      transition: transform .2s ease-in-out;
    }
    
    .image:hover{
      -ms-transform: scale(1.15); /* IE 9 */
      -webkit-transform: scale(1.15); /* Safari 3-8 */
      transform: scale(1.15);
    }
  }
  
  
  #cursor2{
    cursor: pointer;
  }
  
  .curseur:hover {
    cursor: default;
  }
  
  #cursor3{
    cursor: pointer;
  }
  
  </style>
  
  <script>
  
  export default {
      props: {
          titre: String,
          lien:{
              type: String,
              default:"/"
          },
          img_presentation: String,
      },  
  }
  
  </script>