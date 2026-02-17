<script setup lang="ts">
interface Props {
  customClass?: string
}
const props = defineProps<Props>()

const items = ref([
  {
    title: 'Каталог',
    src: "#",
    subItems: [
      {
        label: 'Все бренды',
        src: "#",
      },
      {
        label: 'Nike',
        src: "#",
      },
      {
        label: 'Adidas',
        src: "#",
      },
      {
        label: 'Puma',
        src: "#",
      },
      {
        label: 'New Balance',
        src: "#",
      },
    ]
  },
  {
    title: 'Помощь',
    src: "#",
    subItems: [
      {
        label: 'Доставка',
        src: "#",
      },
      {
        label: 'Заказ и оплата',
        src: "#",
      },
      {
        label: 'Обмен и Возврат',
        src: "#",
      },
      {
        label: 'F. A. Q.',
        src: "#",
      },
    ]
  },
  {
    title: 'Информация',
    src: "#",
    subItems: [
      {
        label: 'Преимущества',
        src: "#",
      },
      {
        label: 'Гарантия и безопасность',
        src: "#",
      },
      {
        label: 'Индивидуальный заказ',
        src: "#",
      },
      {
        label: 'Акции',
        src: "#",
      },
    ]
  },
  {
    title: 'Компания',
    src: "#",
    subItems: [
      {
        label: 'О нас',
        src: "#",
      },
      {
        label: 'Блог',
        src: "#",
      },
      {
        label: 'Отзывы',
        src: "#",
      },
      {
        label: 'Контакты',
        src: "#",
      },
    ]
  },

])
</script>

<template>
  <div :class="props.customClass" class="menu">

    <ul class="list menu__list">
      <li v-for="(item, i) in items" class="list__item menu__list-item" :key="i">

        <NuxtLink :to="item.src" class="list__link menu__list-link">
          {{ item.title }}
        </NuxtLink>

        <ul class="list menu__sublist">
          <li v-for="(subItem, i) in item.subItems" class="menu__sublist-item" :key="i">
            <NuxtLink :to="subItem.src" class="list__link menu__sublist-link">
              {{ subItem.label }}
            </NuxtLink>
          </li>
        </ul>

      </li>
    </ul>

  </div>
</template>

<style lang="scss" scoped>
@use "@/assets/styles/vars";

.menu {

  &__list {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
    align-items: flex-start;
    gap: 3.25em;

    &-item {
      display: grid;
      gap: .875rem;
    }

    &-link {
      color: vars.$color-5;
    }

  }
  
  &__sublist {
    display: grid;
    gap: .875em;

    &-link {
      color: vars.$color-1
    }
  }

  @media (min-width: vars.$md) {
    &__list {
      gap: 1.25rem;
    }
  }

}

.list {
  margin: 0;
  padding: 0;
  list-style: none;

  &__link {
    font-size: .875rem;
    line-height: 1.4;
    text-decoration: none;
  }
}
</style>