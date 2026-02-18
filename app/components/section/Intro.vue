<script setup lang="ts">
</script>

<template>
  <section class="section-intro">
    <div class="section-intro__container container">

      <UiHeading custom-class="section-intro__heading heading_size_xl">
        тестовое задание
      </UiHeading>

      <UiButton href="/catalog" custom-class="button_theme_accent">
        В каталог
      </UiButton>

    </div>
  </section>
</template>

<style lang="scss" scoped>
@use "@/assets/styles/vars";

.section-intro {
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: calc(100vh - 60px);

  &__container {
    display: grid;
    gap: 2.5rem;
  }

  &__heading {
    max-width: 220px;
  }

  @media (min-width: vars.$md) {
    min-height: calc(100vh - 80px);
    
    &__heading {
      max-width: 100%;
    }
  }

}
</style>