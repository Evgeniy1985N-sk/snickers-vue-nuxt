<template>
  <footer class="footer">
    <div class="container">
      <FooterMenu />
    </div>
  </footer>
</template>

<style lang="scss">
@use "@/assets/styles/vars";

.footer {
  padding: 3.75rem 0;
  background: vars.$color-2;

  @media (min-width: vars.$md) {
    padding: 6.25rem 0;
  }

}
</style>