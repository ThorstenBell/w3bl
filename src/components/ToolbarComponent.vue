<template>
  <div class="nav-bar">
    <img @click="scroll('home')" alt="Thorsten" class="logo" src="@/assets/logo.svg"/>

    <nav class="primary-nav">
      <ul>
        <li><a class="nav-btn" data-destination="about" @click="scroll('about')">About</a></li>
        <li><a class="nav-btn" data-destination="portfolio" @click="scroll('portfolio')">Portfolio</a></li>
        <li><a class="email-btn" title="thorst@gmail.com" href="mailto:thorst@gmail.com">
          <svg-icon type="mdi" :path="mdiEmailFastOutline"></svg-icon>
        </a></li>
      </ul>
    </nav>
  </div>
</template>

<script setup lang="ts">
import SvgIcon from '@jamescoyle/vue-icon';
import {mdiEmailFastOutline} from '@mdi/js';

const scroll = (id: string) => {
  const section: HTMLElement | null = document.getElementById(id);
  if (section) {
    window.scrollTo({top: section.offsetTop - 64, behavior: 'smooth'});
  }
}

window.onscroll = () => {
  const sections: NodeListOf<HTMLElementTagNameMap["section"]> = document.querySelectorAll("section");
  const navButtons: NodeListOf<HTMLElementTagNameMap["a"]> = document.querySelectorAll(".nav-btn");

  let scrolled = window.scrollY / ((window.innerHeight - 128) / 2);
  const navbar: HTMLDivElement | null = document.querySelector(".nav-bar");
  if (navbar) {
    navbar.style.background = `linear-gradient(135deg, rgba(var(--primary-color), ${scrolled}) 0%, rgba(var(--secondary-color), ${scrolled}) 100%)`;
  }

  let current: string | null = null;

  sections.forEach((section: HTMLElement) => {
    if (window.scrollY >= section.offsetTop - 64) {
      current = section.getAttribute("id");
    }
  });

  navButtons.forEach((button: HTMLAnchorElement) => {
    button.classList.remove("active");
    if (current && button.getAttribute("data-destination") === current) {
      button.classList.add("active");
    }
  })

}
</script>

<style scoped>
.nav-bar {
  position: fixed;
  height: 64px;
  width: 100%;
  top: 0;
  display: flex;
  left: 0;
  z-index: 1;
  justify-content: space-between;
  align-items: center;
  padding: 8px 16px;
  background: linear-gradient(135deg, rgb(var(--primary-color)) 0%, rgb(var(--secondary-color)) 100%);
}

.logo {
  cursor: pointer;
  width: clamp(60px, 20vw, 120px);
}

nav a {
  cursor: pointer;
}

.nav-btn {
  display: flex;
  padding: 8px 16px;
  margin: 0 4px;
  border-radius: 20px;
  color: var(--white);
  font-weight: 300;
}

.nav-btn.active {
  background: #FFFFFF10;
}

.email-btn {
  display: flex;
  padding: 8px 16px;
  color: var(--white);
}

.nav-btn:hover {
  background: #FFFFFF20;
}

.primary-nav ul {
  display: flex;
  align-items: center;
}

@media screen and (max-width: 600px) {
  .nav-btn, .email-btn {
    margin: 0;
    padding: 4px 8px;
  }
}
</style>