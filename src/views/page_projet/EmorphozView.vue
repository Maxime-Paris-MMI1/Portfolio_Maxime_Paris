<template>

<header>
  <Header_total/>
</header>


    <div class="contenair">
            <h1 class=" justify-center flex text-5xl text-white font-unbounded mt-16 mb-16 carret lg:-mt-[100px]">
                <span>
                    E-morphoz
                </span>
            </h1>
    </div>

    <div class="flex justify-center mb-48">
        <img class="w-[1000px]" src="../../../public/images/gif_rendu_final.gif" alt="vidéo de présentation de mon projet">
    </div>



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

                <img src="../../../public/images/gif_rendu_final.gif" alt="vidéo de présentation de mon projet">
                <img src="../../../public/images/photo-perso.webp" alt="">

            </div>

        </div>
        <div class="row">
            <div class="heading-content text-black">
                <h4 class="bg-white text-center font-unbounded">Logo</h4>
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
    </div> 

    <div>
        <div class="parallax-effect"></div>
            <div>
                <p class="text-white font-unbounded flex justify-center text-2xl">bonjour</p>
            </div>
        <div class="parallax-effect">
        </div>
    </div>

    <div>
        <h3 class="text-white py-96 flex justify-center">Voir le résultat</h3>
    </div>

    <footer>
        <Footer_total/>
    </footer>

</template>

<style>

.parallax-effect {
        background-image: url("../../../public/images/fond_emorphoz.png");
        min-height: 600px;
        background-attachment: fixed;
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
      }

      .parallax-effect + div {
        height: 1000px;
        background-image: #000;
        font-size: 36px;
        text-align: center;
      }


.carret {
    text-transform: uppercase;
    color: #000;
    font-weight: 900;
    color: transparent;
    font-size: 0px;
}

.carret span {
    display: inline-block;
    position: relative;
    overflow: hidden;
    font-size: clamp(20px, 8vw, 120px);
}


.carret span::after {
    content: "";
    display: block;
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    transform: translateX(-100%);
}
.carret:nth-child(1) {
    font-weight: 600;
    animation: txt-appearance 0s 1s forwards,  /* Ajouter une animation de fondu enchaîné */
    
}

.carret:nth-child(1) span::after {
    background:#fff;
    animation: slide-in 0.75s ease-out forwards,
    slide-out 0.75s 1s ease-out forwards;
}

@keyframes slide-in {
    100% {
        transform: translateX(0%);
    }
}
@keyframes slide-out {
    90%{
        opacity: 1;
    }
    100% {
        transform: translateX(100%);
        opacity: 0;
    }
}
@keyframes txt-appearance {
    100% {
        color: #fff;
    }
}





.contenair {
    max-width: 1600px;
}

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

import Header_total from '../../components/Header_total.vue';
import Footer_total from '../../components/Footer_total.vue';



export default {
  components :{Header_total, Footer_total}

}

</script>