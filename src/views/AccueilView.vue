<template>
  <header>
    <div class='cursor' id="cursor">
    </div>
    <div class="flex justify-between">
      <img src="../../public/images/logo_blanc.webp" class=" ml-[100px] mt-[50px] object-contain" alt="logo blanc de mon portfolio">
      <div class="mt-[90px]">
        <ul class="text-white text-right font-unbounded text-xl">
          <li class="mb-[50px] mr-[11px]">Mes projets</li>
          <li class="mb-[50px] mr-[11px]">Contact</li>
          <li class="mr-[11px]">À propos</li>
        </ul>
      </div>
    </div>
  </header>
  <h1 class="text-white mt-80">test pour curseur</h1>
  <img src="../../public/images/photo_perso.png" class="absolute z-20" alt="">
  
</template>

<style>

.cursor {
  position: fixed;
  border-radius: 50%;
  transform: translateX(-50%) translateY(-50%);
  pointer-events: none;
  left: -100px;
  top: 50%;
  mix-blend-mode: normal;
  background-color: white;
  z-index: 10000;
  border: 10px solid white;
  height: 60px;
  width: 60px;
  transition: all 40ms ease-out;
}
</style>

<script>

  var cursor = document.getElementById("cursor");
  document.body.addEventListener("mousemove", function(e) {
      cursor.style.left = e.clientX + "px",
      cursor.style.top = e.clientY + "px";
  });

</script>
