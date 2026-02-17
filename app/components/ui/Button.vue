<script setup lang="ts">
const props = defineProps({
  customClass: {
    type: String
  },
  tag: {
    type: String,
    default: 'button'
  },
  href: {
    type: String
  },
})
</script>

<template>
  <component v-if="!props.href" :is="props.tag" :class="props.customClass" class="button">
    <slot />
  </component>
  <NuxtLink v-else :to="props.href" :class="props.customClass" class="button">
    <slot />
  </NuxtLink>
</template>

<style lang="scss" scoped>
@use "@/assets/styles/vars";

.button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: fit-content;
  padding: 0;
  font-size: 14px;
  line-height: 20px;
  text-decoration: none;
  color: inherit;
  background: transparent;
  cursor: pointer;

  &_theme {

    &_accent {
      padding: .625rem 1.781rem;
      color: vars.$color-1;
      background: vars.$color-3;
    }

    &_primary {
      padding: .625rem 1.781rem;
      border: 1px solid vars.$color-2;
    }

  }

}
</style>