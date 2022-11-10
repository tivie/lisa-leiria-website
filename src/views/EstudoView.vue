<script setup lang="ts">
import mdText from '@/textos/estudo.md?raw';
</script>

<template>
  <main>
    <VueShowdown
        :markdown="mdText"
        :options="{ emoji: true, tables: true }"
    />
  </main>
</template>

<style lang="scss" scoped>

</style>