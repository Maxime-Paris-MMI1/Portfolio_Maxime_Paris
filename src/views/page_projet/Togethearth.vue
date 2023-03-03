<template>
    <div class="container mx-auto">
        <div class="flex justify-center mb-8">
            <button class="bg-gray-200 text-gray-800 hover:bg-gray-400 py-2 px-4 rounded-full mr-2"
                :class="{ 'bg-gray-400': selectedCategory === 'all' }" @click="filterCategory('all')">
                All
            </button>
            <button class="bg-gray-200 text-gray-800 hover:bg-gray-400 py-2 px-4 rounded-full mr-2"
                :class="{ 'bg-gray-400': selectedCategory === 'category1' }" @click="filterCategory('category1')">
                Category 1
            </button>
            <button class="bg-gray-200 text-gray-800 hover:bg-gray-400 py-2 px-4 rounded-full"
                :class="{ 'bg-gray-400': selectedCategory === 'category2' }" @click="filterCategory('category2')">
                Category 2
            </button>
        </div>
        <div class="grid grid-cols-3 gap-4">
            <Card_projet v-for="card in filteredCards" :key="card.id" :lien="card.lien" :image="card.image" :titre="card.titre" />
        </div>
    </div>
</template>
 
<script>

import Card_projet from '../../components/Card_projet.vue';


export default {
    components: {
    Card_projet},

    data() {
        return {
            selectedCategory: 'all',
            cards: [
                { id: 1, lien: '', image: '../public/images/e-morphoz_presentation.webp', category: 'category1', titre:'eudibe' },
                { id: 2, lien: '', image: '../public/images/e-morphoz_presentation.webp', category: 'category2' },
                { id: 3, lien: '', image: '../public/images/e-morphoz_presentation.webp', category: 'category1' },
                { id: 4, lien: '', image: '../public/images/e-morphoz_presentation.webp', category: 'category2' },
                { id: 5, lien: '', image: '../public/images/e-morphoz_presentation.webp', category: 'category3' },
                { id: 6, lien: '', image: '../public/images/e-morphoz_presentation.webp', category: 'category1' },
            ],
        };
    },
    computed: {
        filteredCards() {
            if (this.selectedCategory === 'all') {
                return this.cards;
            }
            return this.cards.filter((card) => card.category === this.selectedCategory);
        },
    },
    methods: {
        filterCategory(category) {
            this.selectedCategory = category;
        },
    },
};
</script>