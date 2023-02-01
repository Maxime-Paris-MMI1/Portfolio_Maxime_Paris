
<template>
  <RouterView />
  <div class='cursor' id="cursor">
    <img src="../public/images/logo_fenetre.webp" alt="jsptrop">
  </div>
</template>

<style>

.cursor {
  position: fixed;
  border-radius: 50%;
  transform: translateX(-50%) translateY(-50%);
  pointer-events: none;
  left: 0px;
  top: 50%;
  mix-blend-mode: normal;
  background-color: white;
  z-index: 10000;
  border: 10px solid white;
  height: 60px;
  width: 60px;
  transition: all 40ms ease-out;
  animation: spin 3s linear infinite;
}

@keyframes spin {
	from { transform: rotate(0deg); }
	to { transform: rotate(360deg); }
}
</style>

<script>

  var cursor = document.getElementById("cursor");
  document.body.addEventListener("mousemove", function(e) {
      cursor.style.left = e.clientX + "px",
      cursor.style.top = e.clientY + "px";
  });

</script>
