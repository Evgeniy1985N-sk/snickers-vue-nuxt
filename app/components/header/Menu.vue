<script setup lang="ts">
interface Props {
  class?: string
}
const props = defineProps<Props>()

const items = ref([
  {
    label: 'Мужчинам',
    src: "#"
  },
  {
    label: 'Женщинам',
    src: "#"
  },
  {
    label: 'Каталог',
    src: "#"
  },
  {
    label: 'Доставка',
    src: "#"
  },
  {
    label: 'Блог',
    src: "#"
  },
  {
    label: 'О нас',
    src: "#"
  },
])
</script>

<template>
  <div :class="props.class" class="menu">
    <ul class="menu__list">
      <li v-for="(item, i) in items"  class="menu__list-item" :key="i">
        <NuxtLink :to="item.src"  class="menu__list-link">
          {{ item.label }}
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>

<style lang="scss">
@use "@/assets/styles/vars";

.menu {
  padding: .625rem 1.5rem;
  background: vars.$color-4;

  &__list {
    display: flex;
    gap: 2.5rem;
    margin: 0;
    padding: 0;
    list-style-type: none;

    &-item {
      font-size: .875rem;
      line-height: 20px;
    }

    &-link {
      color: vars.$color-2;
      text-decoration: none;
    }
  }
}
</style>