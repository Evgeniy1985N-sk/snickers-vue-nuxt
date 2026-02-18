<script setup lang="ts">
import type { Product } from '~/types/Product';
interface Props {
  item: Product
  customClass?: string
}
const props = defineProps<Props>()

</script>

<template>

  <NuxtLink to="#" :class="props.customClass" class="product-card">

    <div class="product-card__image-wrapper">
      <img class="product-card__image" :src="item.image" :alt="item.name">
      <UiButton custom-class="product-card__favorite-button">
        <IconFavorite />
      </UiButton>
    </div>

    <div class="product-card__content-wrapper">

      <div class="product-card__price-wrapper">
        <p class="product-card__price">
          {{ (item.price).toLocaleString('ru-RU') }} ₽
        </p>
        <span class="product-card__discount">
          {{ (Math.ceil(item.price / 2)).toLocaleString('ru-RU') }} ₽ × 2
        </span>
      </div>

      <p class="product-card__title">
        {{ item.name }}
      </p>

    </div>

  </NuxtLink>

</template>

<style lang="scss" scoped>
@use "@/assets/styles/vars";

.product-card {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  color: inherit;
  text-decoration: none;

  &__image-wrapper {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 5.875rem;
  }

  &__image {
    height: 100%;
    object-fit: contain;
  }

  &__favorite-button {
    position: absolute;
    top: 0;
    right: 0;
    width: 1.5rem;
    height: 1.5rem;
  }

  &__content-wrapper {
    display: grid;
    gap: .25rem;
  }

  &__price-wrapper {
    display: grid;
    gap: .5rem;
  }

  &__price {
    font-size: 1.5rem;
    font-weight: 500;
    line-height: 1.4;
  }

  &__discount {
    display: flex;
    width: fit-content;
    padding: .25rem;
    font-size: .875rem;
    line-height: 1;
    font-weight: 500;
    color: vars.$color-1;
    letter-spacing: -5%;
    background: vars.$color-2;
    box-shadow: 0 4px 20px 0 #0000001F;
  }

  &__title {
    font-size: .75rem;
    line-height: 1.4;
  }

  @media (min-width: vars.$md) {

    &__image-wrapper {
      height: 11.25rem;
    }

    &__favorite-button {
      top: .625rem;
      right: .625rem;
    }

    &__price-wrapper {
      display: flex;
      align-items: center;
      gap: .625rem;
    }
  }

  &__title {
    font-size: 1rem;
  }

}
</style>
