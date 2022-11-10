<script lang="ts">
export default {
  props: ['alt', 'src']
}
</script>

<template>
  <div class="logo-item">
    <img :src="src" :alt="alt">
  </div>
</template>

<style lang="scss" scoped>
@import "../scss/main.scss";

.logo-item {
  line-height: $footer-height;
}

.logo-item img {
  height: 24px;
}

@include media-breakpoint-up(md) {
  .logo-item img {
    height: 48px;
  }
}


</style>