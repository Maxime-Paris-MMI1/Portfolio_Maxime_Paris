<template>
    <RouterLink class="curseur" :to="lien">
      <div class="w-[365px] h-[365px] relative">
        <img
          :src="img_presentation"
          class="w-[365px] h-[365px] absolute left-[-1px] top-[-1px] object-cover"
        />
        <div class="w-[365px] h-[111px] hover:h-[450px] mt-[250px] hover:mt-0 absolute left-[-1px] top-[0px] bg-gradient-to-b from-[#9c9c9c]/20 to-white/0">

        </div>

        <div class="w-[229px] h-[50px] absolute left-[67px] top-[294px] bg-black"></div>
        
        <p
          class="w-[365px] h-[70px] absolute left-0 top-[303px] text-[25px] font-bold text-center text-white"
        >
          {{titre}}
        </p>
      </div>
        
    </RouterLink>

</template>

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