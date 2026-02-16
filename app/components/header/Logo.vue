<template>
  <NuxtLink to="/" class="logo">
    <span class="logo__img">
      ...
    </span>
  </NuxtLink>
</template>

<style lang="scss">
@use "@/assets/styles/vars";

.logo {
  display: flex;

  &__img {
    width: 1.75rem;
    height: 1.75rem;
    font-size: 0;
    background: vars.$color-3;
  }

  @media (min-width: vars.$sm) {
    &__img {
      width: 2.5rem;
      height: 2.5rem;
    }
  }

}
</style>
