<template>
  <header id="home">
    <div class="page-title">
      <h1>Design & Development of<br>User Centric Digital Products</h1>
      <p>Thorsten Bell's portfolio</p>
    </div>
  </header>
</template>

<script setup lang="ts">
</script>

<style scoped>
header {
  width: 100%;
  height: 50vh;
  min-height: 320px;
  justify-content: center;
  align-items: center;
  display: flex;
  background: linear-gradient(135deg, rgb(var(--primary-color)) 0%, rgb(var(--secondary-color)) 100%);
  color: white;
}

.page-title {
  padding: clamp(16px, 5vw, 50px);
  max-width: 1200px;
  width: 100%;
  margin: auto;
}

h1 {
  font-size: clamp(1.5em, 5vw, 3em);
  font-weight: 300;
  margin-bottom: 24px;
}

</style>
