import { defineStore } from 'pinia';
import axios from 'axios';
import useAuthStore from './auth';

export const useRestaurantsStore = defineStore('restaurants', {
  state: () => ({ 
    restaurants: [], 
    loading: { restaurants: false, menu: false, cart: false, order: false },
    filteredRestaurants: [],
    currentMenu: {},
    cart: [],
    orders: []
  }),
  getters: {
    doubleCount: (state) => state.count * 2,
  },
  actions: {
    async getRestaurants() {
      this.loading.restaurants = true;
      try {
        const { data } = await axios.get(`http://${import.meta.env.VITE_API}/restaurants/get`)
        this.restaurants = data;
        this.filteredRestaurants = data;
      } catch(error) {
        throw new Error(error)
      } finally {
        this.loading.restaurants = false;
      }
    },
    filterRestaurants(filter) {
      if (filter === 'all') {
        this.filteredRestaurants = this.restaurants;
        return
      }
      this.filteredRestaurants = this.restaurants.filter((item) => {
        return item.type.includes(filter);
      })
    },
    async getMenuById(id) {
      this.loading.restaurants = true;
      try {
        const { data } = await axios.get(`http://${import.meta.env.VITE_API}/menu/${id}`);
        this.currentMenu = data;
        console.log(this.currentMenu);
      } catch (error) {
        throw new Error(error)
      } finally {
        this.loading.restaurants = false;
      }
    },
    async getCartByUserId(id) {
      this.loading.cart = true;
      try {
        const { data } = await axios.get(`http://${import.meta.env.VITE_API}/cart/${id}`);
        this.cart = data;
      } catch (error) {
        throw new Error(error)
      } finally {
        this.loading.cart = false;
      }
    },
    async addToCart(id) {
      this.loading.cart = true;
      const auth = useAuthStore();
      try {
        console.log(auth);
        const { data } = await axios.post(`http://${import.meta.env.VITE_API}/cart`, {
          cartId: auth.cartId,
          menuId: id,
          quantity: 1
        });
        this.cart = data;
      } catch (error) {
        throw new Error(error)
      } finally {
        this.loading.cart = false;
      }
    },
    async removeFromCart(itemId) {
      const auth = useAuthStore();
      this.loading.cart = true;
      try {
        await axios.post(`http://${import.meta.env.VITE_API}/cart/delete`, {
          itemId,
          cartId: auth.cartId,
        });
      } catch (error) {
        throw new Error(error)
      } finally {
        this.loading.cart = false;
      }
    },
    async makeOrder() {
      const auth = useAuthStore();
      this.loading.order = true;
      try {
        await axios.post(`http://${import.meta.env.VITE_API}/order/place`, {
          userId: auth.userId,
          cartId: auth.cartId
        });
        await this.getCartByUserId(auth.userId);
      } catch (error) {
        throw new Error(error)
      } finally {
        this.loading.order = false;
      }
    },
    async getOrders() {
      const auth = useAuthStore();
      this.loading.order = true;
      try {
       const {data} =  await axios.get(`http://${import.meta.env.VITE_API}/orders/${auth.userId}`);
       this.orders = data;
      } catch (error) {
        throw new Error(error)
      } finally {
        this.loading.order = false;
      }
    }
  },
})
