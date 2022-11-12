<script setup lang="ts">
import {RouterLink} from "vue-router";
</script>

<template>
  <main>
    <h1>Página não encontrada</h1>
    <div>Oops! A página que procura não foi encontrada ou já não se encontra disponível.
      Clique <RouterLink :to="{name: 'home'}">aqui</RouterLink> para voltar à página inicial.</div>
  </main>
</template>

<style lang="scss" scoped>

</style>