<template>
  <nav>
    <img alt="Thorsten" class="logo" src="@/assets/logo.svg" width="125" height="125" />
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/about">About</RouterLink>
  </nav>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'

</script>

<style scoped>
nav {
  position: fixed;
  height: 200px;
  width: 100%;
  top: 0;
  left: 0;
  background: var(--vt-c-white);
}
</style>