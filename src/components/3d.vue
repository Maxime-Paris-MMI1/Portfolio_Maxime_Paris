<template>
    <Renderer ref="renderer" antialias :orbit-ctrl="{ enableDamping: true }" resize>
      <Camera :position="{ x: 10, y: 0, z: 0 }" />
      <Scene background ="#000">
        <AmbientLight></AmbientLight>
        <GltfModel src="/public/models/organic/organic_final.gltf" />
      </Scene>
    </Renderer>
  </template>
  
  <script>
  import {
    AmbientLight,
    Camera,
    GltfModel,
    Renderer,
    Scene,
  } from 'troisjs';
  
  export default {
    components: {
      AmbientLight,
      Camera,
      GltfModel,
      Renderer,
      Scene,
    },
  };
  </script>