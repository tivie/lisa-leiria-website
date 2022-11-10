<script setup lang="ts">
import { VueShowdown } from 'vue-showdown';
import mdText from '@/textos/faq.md?raw';
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