<template>
  <div class="title">
    Корзина
  </div>
  <div class="button-wrapper">
    <button class="js-modal-trigger button is-link" data-target="modal-js-example" @click="store.makeOrder">
      Сделать заказ
    </button>
  </div>
  <div style="display: flex; justify-content: center; margin: 0 auto;">
      <Spinner v-if="store.loading.cart" style="margin: 20px;"/>
  </div>
  <div  v-if="!store.loading.cart" class="products__list">
    <item-card 
      v-for="item in store.cart"
      :key="item.id"
      :src="item.menu_item_images"
      :title="item.menu_item_name"
      :price="item.menu_item_price"
      :id="item.id"
    />
  </div>
  <div  v-if="store.cart.length <= 0" class="empty">
    Корзина пуста :(
  </div>
</template>

<script setup>
import { onMounted } from 'vue';
import Spinner from '../components/Spinner.vue';
import ItemCard from "../components/Cards/ItemCard.vue";
import { useRestaurantsStore } from '../stores/restaurants';
import useAuthStore from '../stores/auth';

const store = useRestaurantsStore();
const auth = useAuthStore();

onMounted(async () => {
  await store.getCartByUserId(auth.userId);
})
</script>

<style lang="scss" scoped>
.button-wrapper {
  text-align: center;
}
.title{
  text-align: center;
}
.empty {
  text-align: center;
  font-size: 20px;
}
.products__list {
  margin: 20px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 30px;
  place-items: center;
}
</style>