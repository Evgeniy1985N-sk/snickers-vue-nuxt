<script setup lang="ts">
import { useFetchData } from '@/composables/useFetchData';
import type { Product } from '~/types/Product';

const data = await useFetchData()
const items = data.products

const products = ref<Product[]>([])
const currentPage = ref(1)
const totalPages = ref(1)
const isLoading = ref(false)
const isError = ref(false)
const limit = 12

const hasMoreProdusts = computed(() => {
  return currentPage.value < totalPages.value
})

const loadProducts = async (page: number) => {
  isError.value = false
  isLoading.value = true

  try {
    const response = await useFetchData(page, limit)

    if (page === 1) {
      products.value = response.products
    } else {
      products.value = [...products.value, ...response.products]
    }

    totalPages.value = response.totalPages
    currentPage.value = response.currentPage

  } catch (error) {
    isError.value = true
    console.error('Ошибка загрузки продуктов', error)
  } finally {
    isLoading.value = false
  }

}

const loadMore = () => {
  if (hasMoreProdusts.value && !isLoading.value) {
    loadProducts(currentPage.value + 1)
  }
}

onMounted(() => {
  loadProducts(1)
})

</script>

<template>

  <section class="section-catalog">
    <div class="section-catalog__container container">

      <UiHeading custom-class="heading_size_l heading_align_center">
        каталог
      </UiHeading>

      <div class="section-catalog__products">
        <ProductCard v-for="item in products" :item="item" :key="item.id" />
      </div>

      <div class="section-catalog__button-wrapper">
        <p v-if="isError">
          Произошла ошибка, попробуйте позже
        </p>
        <UiButton @handle-click="loadMore" custom-class="button_theme_primary button_align_center">
          <span v-if="!isLoading">
            Показать еще
          </span>
          <span v-else>
            Загрузка...
          </span>
          <span v-if="isError">
            Повторить
          </span>
        </UiButton>
      </div>


    </div>
  </section>

</template>

<style lang="scss" scoped>
@use "@/assets/styles/vars";

.section-catalog {
  padding: 1.25rem 0 2.5rem;

  &__container {
    display: grid;
    gap: 2.5rem;
  }

  &__products {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(7.5rem, 1fr));
    gap: 1.25rem;
  }

  &__button-wrapper {
    display: grid;
    justify-content: center;
    gap: 1.875rem;
  }

  @media (min-width: vars.$sm) {
    padding: 6.25rem 0 6.25rem;

    &__container {
      gap: 6.875rem;
    }

    &__products {
      grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
      gap: 2.5rem;
      padding: 0 1.25rem;
    }
  }

}
</style>