<template>
<div class="product__card" @click="$router.push(props.to)">
        <div class="card__preview" :style="{ 'background-image': `url(${props.src})` }">
        </div>
        <div class="card__content">
          <div class="card__content-left">
            <div class="card__content--title">{{ props.name }}</div>
            <div class="card__content--info">
            </div>
            <div class="card__content--hashtags">
              <Hashtag v-if="props.label" :text="props.label"/>
            </div>
          </div>
          <div class="card__content-right">
            <div class="card__content--bag">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 1.66669L2.5 5.00002V16.6667C2.5 17.1087 2.67559 17.5326 2.98816 17.8452C3.30072 18.1578 3.72464 18.3334 4.16667 18.3334H15.8333C16.2754 18.3334 16.6993 18.1578 17.0118 17.8452C17.3244 17.5326 17.5 17.1087 17.5 16.6667V5.00002L15 1.66669H5Z" stroke="#C7C8D2" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M2.5 5H17.5" stroke="#C7C8D2" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M13.3333 8.33331C13.3333 9.21737 12.9821 10.0652 12.357 10.6903C11.7319 11.3155 10.8841 11.6666 10 11.6666C9.11595 11.6666 8.2681 11.3155 7.64298 10.6903C7.01786 10.0652 6.66667 9.21737 6.66667 8.33331" stroke="#C7C8D2" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>
          </div>
        </div>
      </div>
</template>

<script setup>
import Hashtag from '../Hashtags/Hashtag.vue';

const props = defineProps({
  to: {
    type: Object,
    required: true,
  },
  src: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  label: {
    type: String
  }
})

console.log(props);
</script>

<style lang="scss" scoped>
.products__list {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 30px;
}

.product__card {
    cursor: pointer;
    border: 1px solid var(--grey-lightest);
    border-radius: 16px;
}

.card__preview {
    position: relative;
    height: 160px;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    z-index: -1;
    border-radius: 16px;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
}

.card__preview--badge {
    position: absolute;
    top: 0;
    right: 0;
    display: inline-block;
    padding: 8px 16px;
    font-family: 'Nunito', sans-serif;
    font-weight: bold;
    font-size: 11px;
    color: var(--white);
    text-transform: uppercase;
    border-radius: 0 16px;
    background-color: var(--primary);
}

.card__content {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    padding: 16px;
}

.card__content--title {
    font-family: 'Nunito', sans-serif;
    font-size: 18px;
    line-height: 24px;
    color: var(--dark);
    margin-bottom: 6px;
}

.card__content--info {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin-bottom: 14px;
}

.card__content--cook-time, .card__content--price {
    display: inline-block;
    margin-right: 8px;
    font-size: 12px;
    font-family: 'Nunito', sans-serif;
    line-height: 16px;
    color: var(--grey);
}

.card__content--tag-dot {
    display: inline-block;
    width: 3px;
    height: 3px;
    background-color: var(--primary);
    border-radius: 50%;
    margin-right: 8px;
}

.card__content--hashtags {
    display: flex;
    align-items: center;
    justify-content: flex-start;
}

.card__content--hashtag img {
    width: 12px;
    height: 12px;
    margin-right: 8px;
}

.card__content--bag {
    position: relative;
}

.card__content--bag svg {
    width: 20px;
    height: 20px;
}

.card__content--bag-count {
    position: absolute;
    top: -12px;
    right: 0;
    font-family: 'Nunito', sans-serif;
    font-size: 10px;
    line-height: 1;
    font-weight: bold;
    color: var(--white);
    background-color: var(--primary);
    padding: 2px;
    min-width: 14px;
    text-align: center;
    border-radius: 5px;
}

/* Here you can define styles how to change on mobile  */
@media screen and (max-width: 768px) {

    .products__list {
        grid-template-columns: 1fr;
    }
}
</style>