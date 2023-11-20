<template>
    <div class="page-loader fixed inset-0 flex items-center justify-center" v-if="!isloaded">
      <div class="w-full h-full bg-gray-200 p-8 rounded-lg flex flex-col items-center justify-center">
        <img src="../../public/images/animation_capture.webp" class="w-full h-full inset-0" alt="">
        <span class="text-2xl text-white font-semibold">Portfolio - MAXIME PARIS</span>
        <span class="text-xl text-white font-semibold">Chargement en cours...</span>
        <div class="border-t-4 border-blue-500 border-solid rounded-full w-12 h-12 animate-spin"></div>
      </div>
    </div>
  </template>
    
    <script>
      export default {
        data: () => {
          return {
            isloaded: false
          }
        },
        mounted() {
    if (document.readyState === 'complete') {
      this.isloaded = true;
    } else {
      window.addEventListener('load', () => {
        this.isloaded = true;
      });
    }
  },
  
      }
    </script>
    
    <style scoped>
  
    </style>