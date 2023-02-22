<template>
    <RouterLink class="curseur" :to="lien">
      <div class="w-[365px] h-[365px] relative">
        <!--  -->
        <div class="w-[365px] h-[365px] absolute left-[-1px] top-[-1px]">
          <div class="image-zoom">
            <img
              :src="img_presentation"
              class="image"
            />
          </div>
        </div>
        <div class="w-[350px] h-[111px] mt-[250px]  absolute left-[-1px] top-[0px] bg-gradient-to-b from-[#9c9c9c]/20 to-white/0">

        </div>

        <div>
                  <!-- <div class="w-[229px] h-[50px] absolute left-[60px] top-[280px] bg-black cadre"></div>  -->
        </div>
        <div class="flex justify-center w-[365px] ">
          <p
            class="absolute top-[280px] text-[25px] font-bold text-center text-white bg-black px-5 py-2 back" id="cursor2"
          >
            {{titre}}
          </p>
        </div>
      </div>
        
    </RouterLink>

</template>

<style>

.back:hover{
  background-color: white;
  transition: ease-out 0.5s;
  color: black;
}

.cadre:hover{
  height: 365px; ;

}
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

#cursor2{
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