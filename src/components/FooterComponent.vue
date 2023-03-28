<template>
  <footer>
    <div class="footer">
      <div>
        <h3>Get in touch!</h3>
        <a href="mailto:thorst@gmail.com" class="primary-button">thorst@gmail.com</a>
      </div>
      <div>
        <h3>Social media</h3>
        <a href="https://www.linkedin.com/in/thorstenbell/" target="_blank" rel="noreferrer"
           class="primary-button">LinkedIn</a>
        <a href="https://github.com/ThorstenBell/w3bl" target="_blank" rel="noreferrer"
           class="primary-button">GitHub</a>
      </div>
    </div>
    <p id="copyright">&copy; Thorsten Bell {{ date }}</p>
  </footer>
</template>

<script setup lang="ts">
const date: number = new Date().getFullYear();
</script>

<style scoped>
footer {
  margin-top: 72px;
  background: linear-gradient(135deg, rgb(var(--primary-color)) 0%, rgb(var(--secondary-color)) 100%);
  color: #FFF;
  text-align: center;
}

.footer {
  padding: 48px 0;
  display: flex;
  justify-content: space-around;
}

#copyright {
  margin: 0;
  padding-bottom: 20px;
}

@media screen and (max-width: 600px) {
  .footer {
    display: block;
  }

  .footer div {
    margin-bottom: 24px;
  }
}
</style>