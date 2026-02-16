<script setup lang="ts">
interface Props {
  class?: string
}
const props = defineProps<Props>()
</script>


<template>
  <button :class="props.class" class="burger">
    <i class="burger__line">...</i>
  </button>
</template>

<style lang="scss">
@use "@/assets/styles/vars";

.burger {
  position: relative;
  width: 2.5rem;
  height: 2.5rem;
  font-size: 0;
  background: vars.$color-4;
  border: 0;
  cursor: pointer;

  &__line {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%);
    width: 17px;
    height: 2px;
    background: vars.$color-2;

    &:before,
    &:after {
      content: "";
      position: absolute;
      left: 0;
      width: inherit;
      height: inherit;
      background: inherit;
      border-radius: inherit;
      transition: vars.$transition;
    }

    &:before {
      top: -5px;
    }

    &:after {
      bottom: -5px;
    }
  }

  &.active {
    .burger__line {
      background: transparent;

      &:before {
        top: 0;
        transform: rotate(45deg);
      }

      &:after {
        bottom: 0;
        transform: rotate(-45deg);
      }
    }
  }
}
</style>