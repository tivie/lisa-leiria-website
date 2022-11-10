<script setup lang="ts">
import {onMounted, onBeforeUnmount, ref, toRefs} from 'vue';
import { RouterView } from 'vue-router'
import Navigation from '@/components/Navigation.vue';
import FooterBanner from "@/components/FooterBanner.vue";


const padraoHeight = ref('0');

const onResize = function () {
  let ele = document.getElementById('mainContent');
  let height = '100vh';
  if (ele) {
    height = ele.clientHeight + 'px';
  }
  padraoHeight.value = height;
}

const resizeObserver = new ResizeObserver(onResize);

onMounted(() => {
  resizeObserver.observe(document.documentElement);
  onResize();
});

onBeforeUnmount(() => {
  resizeObserver.unobserve(document.body);
});
</script>


<template>
  <Navigation />
  <div id="padrao" :style="{height: padraoHeight}"></div><!-- padrao lisa -->
  <div ref="mainContent" id="mainContent" class="container">
    <RouterView id="content"></RouterView><!-- pagina -->
  </div>
  <FooterBanner />
</template>

<style lang="scss" scoped>
@import "scss/main.scss";
  #mainContent {
    padding-top: 1rem;
    padding-bottom: $footer-height;
  }

  #wrapper {
    background-color: green;
  }

  #padrao {
    display: none;
  }

  @include media-breakpoint-up(lg) {
    #padrao {
      display: block;
      position: absolute;
      width: 50%;
      min-height: 100vh;
      background-image: linear-gradient(to right, transparent, white 75%), url("assets/padrao-lisa-04.svg");
      background-repeat: repeat-y;
      background-position: left top;
      background-size: 2000px;
      top: 100px;
      right: 0;
      bottom: 0;
      z-index: -1;
    }
    #mainContent {
      padding-right: 45rem;
    }
  }
</style>
