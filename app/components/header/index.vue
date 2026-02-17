<template>
  <header class="header">

    <div class="container">
      <div class="header__row">

        <HeaderLogo />

        <HeaderMenu customClass="header__menu" />

        <HeaderBurger customClass="header__burger" />

      </div>
    </div>
    
  </header>
</template>

<style lang="scss" scoped>
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
    padding: 1.25rem 0;

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