<script setup lang="ts">

const props = defineProps({
  customClass: {
    type: String
  },
  tag: {
    type: String,
    default: 'h1'
  }
})
</script>

<template>
  <component :is="props.tag" class="heading" :class="props.customClass">
    <slot />
  </component>
</template>

<style lang="scss" scoped>
@use "@/assets/styles/vars";


.heading {
  font-weight: 500;
  line-height: 1.1;
  text-transform: uppercase;

  &_align_center {
    text-align: center;
  }

  &_size_xl {
    font-size: 1.625rem;
  }

  &_size_l {
    font-size: 1.5rem;
  }

  @media (min-width: vars.$md) {

    &_size_xl {
      font-size: 4rem;
    }

    &_size_l {
      font-size: 2.625rem;
    }

  }

}
</style>