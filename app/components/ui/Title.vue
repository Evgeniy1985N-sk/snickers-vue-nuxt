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
  <component :is="props.tag" :class="props.customClass" class="title">
    <slot />
  </component>
</template>

<style lang="scss" scoped>
@use "@/assets/styles/vars";


.title {
  font-size: 26px;
  font-weight: medium;
  line-height: 1.1;
  text-transform: uppercase;

  @media (min-width: vars.$md) {
    font-size: 4rem;
  }
}
</style>