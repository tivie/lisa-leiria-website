<script setup lang="ts">
import { VueShowdown } from 'vue-showdown';
import HomeText from '@/textos/home.md?raw';
import LisaLogoGrande from '@/assets/lisa-logo-big.svg';
</script>

<template>
  <main>
    <img src="@/assets/lisa-logo-big.svg" alt="LISA - Estudo Longitudinal de Literacia em Saúde no Concelho de Leiria">
    <VueShowdown
        :markdown="HomeText"
        flavor="github"
        :options="{ emoji: true }"
    />
  </main>
</template>

<style lang="scss" scoped>

</style>