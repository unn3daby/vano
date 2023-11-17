<template>
  <div class="flex">
    <div v-for="order in store.orders" >
      <span class="vano">Заказ номер:</span> {{ order.id }}
    </div>
  </div>
</template>

<script setup>
import { useRestaurantsStore } from '../stores/restaurants';
import { onMounted } from 'vue';

const store = useRestaurantsStore();

onMounted(async () => {
  await store.getOrders()
});
</script>

<style lang="scss" scoped>
.flex {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.vano {
  color: rgb(30, 30, 253);
  font-weight: bold;;
}
</style>