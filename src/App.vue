<script setup lang="ts">
import ToolbarComponent from "@/components/ToolbarComponent.vue";
import HeaderComponent from "@/components/HeaderComponent.vue";
import AboutComponent from "@/components/AboutComponent.vue";
import FooterComponent from "@/components/FooterComponent.vue";
import PortfolioComponent from "@/components/PortfolioComponent.vue";
</script>

<template>
  <toolbar-component></toolbar-component>
  <header-component></header-component>
  <about-component></about-component>
  <portfolio-component></portfolio-component>
  <footer-component></footer-component>
</template>

<style>
section {
  padding: clamp(16px, 5vw, 50px);
  max-width: 1200px;
  width: 100%;
  margin: auto;
}
</style>
