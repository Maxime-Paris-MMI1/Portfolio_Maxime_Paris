<template>
    <RouterLink to="/" class="text-white">Home</RouterLink>
    <h1 class=" justify-center flex text-5xl text-white font-unbounded mt-16 mb-16">E-morphoz</h1>



    <div class="column">
        <div class="row">
            
            <div class="heading-content text-black">
                <h4 class="bg-white text-center font-unbounded">Présentation</h4>
                <div class="text-white text-lg">
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim nihil delectus sed asperiores id harum iste. Quidem assumenda, optio iusto commodi dolor, magni deserunt corporis expedita corrupti, molestiae ducimus exercitationem!
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto odio facilis corrupti possimus similique, iste eaque, natus doloribus, eius consequuntur dolor tempore pariatur eveniet neque? Perspiciatis officia doloribus omnis optio.
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta saepe in iusto eius vero quae, laudantium fuga eaque ipsum. Quia nostrum accusantium omnis, alias fuga illo ratione porro. Repudiandae, maiores
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere ipsa aperiam praesentium temporibus dicta aspernatur architecto! Optio similique autem error deserunt fuga commodi repellat quisquam accusamus laboriosam, voluptatibus quidem sit!
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem, qui? Dolorem recusandae animi debitis, saepe optio mollitia repudiandae tempore laudantium officia aliquam ipsam minima eaque vitae molestiae ipsum dolor harum.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium est laboriosam commodi sed libero eveniet quam obcaecati totam illo? Rerum magnam esse, aliquid autem explicabo aspernatur maiores ullam quod quis.
                    </p>
                </div>
            </div>

            <div class="pictures-container">

                <img src="../../../public/images/gif rendu final.gif" alt="vidéo de présentation de mon projet">
                <img src="../../../public/images/photo-perso.webp" alt="">

            </div>

        </div>
        <div class="row">
            <div class="heading-content text-black">
                <h4 class="bg-white text-center font-unbounded">logo</h4>
            </div>
            
            <div class="pictures-container">

                <img src="../../../public/images/e-morphoz_presentation.webp" alt="">

            </div>
        </div>

        <div class="row">
            <div class="heading-content text-black">
                <h4 class="bg-white text-center font-unbounded">Harmonie colorée</h4>
            </div>
            
            <div class="pictures-container">

                <img src="../../../public/images/e-morphoz_presentation.webp" alt="">

            </div>
        </div>
        <div class="mt-[500px]">

        </div>
    </div> 

</template>

<style>

.column{
    margin: 0 auto;
}

.row{
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 10px;
    padding: 10px;
}

.heading-content, h4 {
    font-size: 35px;
    padding: 0 15px;
    position: sticky;
    top: 0;
}

</style>

<script>

export default {
  components: {},
};

</script>