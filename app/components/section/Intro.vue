<script setup lang="ts">
</script>

<template>
  <section class="intro">
    <div class="intro__container container">

      <UiTitle custom-class="intro__title">
        тестовое задание
      </UiTitle>

      <UiButton href="/catalog" custom-class="button_theme_accent">
        В каталог
      </UiButton>

    </div>
  </section>
</template>

<style lang="scss" scoped>
@use "@/assets/styles/vars";

.intro {
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: calc(100vh - 60px);

  &__container {
    display: grid;
    gap: 2.5rem;
  }

  &__title {
    max-width: 220px;
  }

  @media (min-width: vars.$md) {
    min-height: calc(100vh - 80px);
    
    &__title {
      max-width: 100%;
    }
  }

}
</style>