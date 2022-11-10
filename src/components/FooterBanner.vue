<script lang="ts">
import FooterItem from "@/components/FooterItem.vue";
import logoIPL from "@/assets/logo-ipl.png";
import logoCML from "@/assets/logo-municipio-leiria.svg";
import logoACES from "@/assets/logo-aces.png";
import logoLIDA from "@/assets/logo-lida.png";

export default {
  components: {FooterItem},
  // ...
  data() {
    return {
      parceiros: [
        { id: 1, alt: 'Logo Politécnico de Leiria', src: logoIPL },
        { id: 2, alt: 'Logo Município de Leiria', src: logoCML },
        { id: 3, alt: 'Logo ACES Pinhal Litoral', src: logoACES },
        { id: 4, alt: 'Logo LIDA', src: logoLIDA }
      ]
    }
  }
}
</script>

<template>
  <footer id="mainFooter">
    <div class="container d-flex flex-row justify-content-around align-items-stretch">
      <FooterItem v-for="item in parceiros" :src="item.src" :alt="item.alt" />
    </div>
  </footer>
</template>

<style lang="scss" scoped>
@import "../scss/main.scss";
#mainFooter {
  background-color: $quaternary;
  height: $footer-height;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
}
</style>