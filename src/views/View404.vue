<template>
    <div class="flex flex-col justify-center items-center h-screen w-full">


        <h1 class="justify-center items-center text-white lg:text-[200px] 
              md:text-[150px]
              sm:text-[120px] 
              xs:text-[100px]
              xxs:text-[80px]
              xxxs:text-[70px] font-unbounded">404
        </h1>


        <p class="text-white font-unbounded lg:text-[50px] 
              md:text-[40px]
              sm:text-[30px] 
              xs:text-[30px]
              xxs:text-[25px]
              xxxs:text-[23px]">
              Page non trouvée
        </p>

        <div class="flex justify-center mb-[50px] mt-16">
            <RouterLink to="/">
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
                     py-3 animation_texte">Retour à l'accueil
                </button>
            </RouterLink>
        </div>
    </div>
</template>