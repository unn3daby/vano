<template>
    <div class="restaurants">
        <div class="category__inner">
            <CategoryCard
                v-for="category in categories"
                :key="category.to.query.filter"
                :to="category.to"
                :src="category.src"
                :name="category.name"
            />
        </div>
        <h2 class="restaurants-title">
            Список ресторанов
        </h2>
        <section class="products__list"> 
            <RestaurantCard/>
        </section>
    </div>
</template>

<script setup>
import RestaurantCard from '@/components/Restaurants/RestaurantCard.vue';
import CategoryCard from '@/components/Category/CategoryCard.vue';
import categories from './categories';
import { useRestaurantsStore }  from '@/stores/restaurants'

const vano = useRestaurantsStore();

console.log(vano.getRestaurants());
</script>

<style lang="scss" scoped>
.restaurants-title {
    font-size: 30px;
    font-weight: bold;
    margin: 0 auto;
    text-align: center;
}
.products__list {
    margin: 20px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 30px;
}
.category__inner {
    margin: 20px;
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    grid-gap: 15px;
}
@media screen and (max-width: 768px) {
    .container {
        padding: 0;
    } 

    .category__inner {
        grid-template-columns: repeat(3, 1fr);
        padding: 0 15px;
    }
}
</style>