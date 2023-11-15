import { defineStore } from 'pinia';
import axios from 'axios';

export const useRestaurantsStore = defineStore('restaurants', {
  state: () => ({ restaurants: [], loading: {restaurants: false}}),
  getters: {
    doubleCount: (state) => state.count * 2,
  },
  actions: {
    async getRestaurants() {
      this.loading.restaurants = true;
      try {
        this.restaurants = await axios.get(`https://${import.meta.env.VITE_API}/restaurants/get`)
      } catch(error) {
        throw new Error(error)
      } finally {
        this.loading.restaurants = false;
      }
    },
  },
})
