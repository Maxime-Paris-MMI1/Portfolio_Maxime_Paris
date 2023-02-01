
<template>
  <RouterView />
  <div class='cursor' id="cursor">
  </div>

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

