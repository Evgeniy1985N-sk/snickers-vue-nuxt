<template>
  <header class="header">

    <div class="container">
      <div class="header__row">

        <HeaderLogo />

        <HeaderMenu class="header__menu" />

        <HeaderBurger class="header__burger" />

      </div>
    </div>
  </header>
</template>

<style lang="scss">
@use "@/assets/styles/vars";

.header {
  padding: .625rem 0;

  &__row {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  &__menu {
    display: none;
  }

  @media (min-width: vars.$md) {
    padding: 1rem 0;

    &__menu {
      display: block;
    }

    &__burger {
      visibility: hidden;
      opacity: 0;
    }

  }

}
</style>