<template>
    <RouterLink to="/">
        <button class="flex justify-center text-white">HOME</button>
    </RouterLink>


    <section class="mt-10 parallax" style="background-image: url(../../public/images/geometry_node.png); background-position:center 50%; background-size: 180%;" data-speed="0.5">
      <div class="parallax-content">
        <div class="contenair mb-96 mt-10 py-44">
            <h1 class=" justify-center flex text-xs text-white font-unbounded mt-16 mb-16 carret">
                <span class="bg-black py-10 px-10">
                    À-propos-
                </span>
            </h1>
      </div>
        <!-- contenu de la section -->
      </div>
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
    var parallaxPosition = -(scrollPosition * parallaxSpeed) + "px";
    parallaxElement.style.backgroundPosition = "center " + parallaxPosition;
  }
});




export default {

}

</script>

<style>

.parallax{
  height: 100vh;
  position: relative;
  background-repeat: no-repeat;
  background-size: cover;
}


</style>