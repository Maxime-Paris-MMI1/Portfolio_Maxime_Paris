<template>
    <RouterLink to="/">
        <button class="flex justify-center text-white">HOME</button>
    </RouterLink>
    <h1 class="text-white flex justify-center text-9xl">TEST apropos</h1>   


    <section class="mt-10 parallax" style="background-image: url(../../public/images/geometry_node.png); background-position: center; background-size: 180%;" data-speed="0.5">
      <div class="parallax-content">
        <p class="text-white py-96 font font-unbounded justify-center flex text-2xl"> TEST</p>
        <!-- contenu de la section -->
      </div>
        <!-- <img class="h-[400px] w-full object-cover" src="../../public/images/fond_emorphoz.png" alt="photo projet e-morphoz"> -->
    </section>

    <div class="mb-[500px]">

    </div>
</template>

<script>

window.addEventListener("scroll", function() {
  var scrollPosition = window.pageYOffset;
  var parallaxElements = document.getElementsByClassName("parallax");
  for (var i = 0; i < parallaxElements.length; i++) {
    var parallaxElement = parallaxElements[i];
    var parallaxSpeed = parallaxElement.getAttribute("data-speed");
    var parallaxPosition = -(scrollPosition * parallaxSpeed);
    parallaxElement.style.backgroundPositionY = parallaxPosition + "px";
  }
});




export default {

}

</script>

<style>

.parallax{
  background-position-y: center;
}


</style>