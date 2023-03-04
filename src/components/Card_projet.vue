<template>
  <div>
    <RouterLink class="curseur" :to="lien" id="cursor">
      <div class="foo:w-[365px] foo:h-[365px] xxxs:w-[275px] xxxs:h-[275px] relative">
        <!--  -->
        <div class="foo:w-[365px] foo:h-[365px] xxxs:w-[275px] xxxs:h-[275px] absolute left-[-1px] top-[-1px]">
          <div class="image-zoom">
            <img
              :src="img_presentation"
              class="image"
            />
          </div>
        </div>
        <div class="foo:w-[350px] foo:h-[111px] xxxs:w-[275px] xxxs:h-[80px] foo:mt-[250px] xxxs:mt-[195px]  absolute left-[-1px] top-[0px] bg-gradient-to-b from-[#9c9c9c]/20 to-white/0">

        </div>

        <div class="flex justify-center foo:w-[365px] xxxs:w-[275px] ">
          <p
            class="absolute foo:top-[280px] xxxs:top-[213px] foo:text-[25px] xxxs:text-[20px] font-bold text-center text-white bg-black px-5 py-2 back" id="cursor2"
          >
            {{titre}}
          </p>
        </div>
      </div>
        
    </RouterLink>
  </div>

</template>

<style>

.back{
  transition: all 0.5s;
}

.back:hover{
  background-color: white;
  color: black;
  transform: scale(1.1);
}

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
    -ms-transform: scale(1.3); /* IE 9 */
    -webkit-transform: scale(1.3); /* Safari 3-8 */
    transform: scale(1.3);
  }
}


#cursor2{
  cursor: pointer;
}

.curseur:hover {
  cursor: default;
}

#cursor{
  cursor: url('../../public/images/curseur_projet.png')  54 57, auto;
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