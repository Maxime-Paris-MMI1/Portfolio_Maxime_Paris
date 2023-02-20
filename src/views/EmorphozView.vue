<template>
    <div class="my-[100px] text-white">
        <RouterLink to="/">
            <button>Accueil</button>
        </RouterLink>
        <h1>Voici la page E-morphoz</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque facilis, fugit veniam modi doloremque ut ea minus consectetur aut voluptate possimus nam error mollitia? Possimus iure quidem nisi voluptatum numquam.</p>
        <hr>
    </div>
    <div class="flex justify-center">
        <div class="w-[300px] h-[300px] border-2">
            <Cube />
        </div>
    </div>
</template>

<script>
import Cube from '../components/3d.vue';
import organic from '../components/3d.vue';

export default {
  components: { Cube, organic},
};

</script>