<template>
  <section id="portfolio">
    <h2>Portfolio</h2>
    <div class="portfolio">
      <div
          class="project"
          @touchstart="handleTouchStart($event)"
          @touchmove="handleTouchMove($event)"
          @touchend="handleTouchEnd()"
      >
        <transition name="fade">
          <img :alt="activeProject.name" :src="activeImage" :key="activeImage"/>
        </transition>
        <div class="indicators" v-if="activeProject.images.length > 1">
          <button type="button" v-for="image in activeProject.images" :title="image" @click="setImage(image)">
            <svg-icon size="18" viewbox="0 0 24 24" type="mdi" :path="getIcon(image)"></svg-icon>
          </button>
        </div>
      </div>
      <div class="project-info">
        <h1>{{ activeProject.name }}</h1>
        <span v-for="category in activeProject.categories">{{ category }}</span>
        <p v-for="paragraph in activeProject.description">{{ paragraph }}</p>
        <template v-for="link in activeProject.links">
          <a :title="link.name" class="link" :href="link.link" target="_blank">
            <svg-icon v-if="link.name === 'Website'" type="mdi" :path="mdiWeb"></svg-icon>
            <svg-icon v-if="link.name === 'Github'" type="mdi" :path="mdiGithub"></svg-icon>
          </a>
        </template>
        <div class="arrows">
          <button type="button" @click="previousProject">
            <svg-icon type="mdi" :path="mdiChevronLeft"></svg-icon>
            Previous
          </button>
          <button type="button" @click="nextProject">Next
            <svg-icon type="mdi" :path="mdiChevronRight"></svg-icon>
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import projects from '@/assets/projects.js';
import {ref} from "vue";
import type {Ref} from "vue";
import SvgIcon from '@jamescoyle/vue-icon';
import {mdiChevronLeft, mdiChevronRight, mdiCircle, mdiCircleOutline, mdiGithub, mdiWeb} from '@mdi/js';

type Project = {
  id: number,
  name: string,
  categories: [string],
  images: [string],
  description: [string],
  links: [{
    name: string,
    link: string
  }]
};

const activeProject: Ref<Project> = ref(projects[0]);
let activeImages = projects[0].images;
let activeImageIndex = 1;
const activeImage = ref(activeImages[0]);
let touchStartX = 0;
let touchEndX = 0;

const changeImage = () => {
  setTimeout(() => {
    if (activeImageIndex < activeImages.length) {
      activeImage.value = activeImages[activeImageIndex];
      activeImageIndex++;
    } else {
      activeImage.value = activeImages[0];
      activeImageIndex = 1;
    }

    changeImage()
  }, 5000)
}

changeImage();

const previousProject = () => {
  const projectIndex = projects.findIndex((item: Project) => item.id === activeProject.value.id);
  activeImageIndex = 0;
  if (projectIndex > 0) {
    activeProject.value = projects[projectIndex - 1];
    activeImages = projects[projectIndex - 1].images;
    activeImage.value = activeImages[activeImageIndex]
  } else {
    activeProject.value = projects[projects.length - 1];
    activeImages = projects[projects.length - 1].images;
    activeImage.value = activeImages[activeImageIndex]
  }
}

const nextProject = () => {
  const projectIndex = projects.findIndex((item: Project) => item.id === activeProject.value.id);
  activeImageIndex = 0;
  if (projectIndex < (projects.length - 1)) {
    activeProject.value = projects[projectIndex + 1];
    activeImages = projects[projectIndex + 1].images;
    activeImage.value = activeImages[activeImageIndex]
  } else {
    activeProject.value = projects[0];
    activeImages = projects[0].images;
    activeImage.value = activeImages[activeImageIndex]
  }
}

const previousImage = () => {
  const imageIndex = activeProject.value.images.findIndex((image: string) => image === activeImage.value);
  if (imageIndex > 0) {
    activeImage.value = activeProject.value.images[imageIndex - 1];
  } else {
    activeImage.value = activeProject.value.images[activeProject.value.images.length - 1];
  }
}

const nextImage = () => {
  const imageIndex = activeProject.value.images.findIndex((image: string) => image === activeImage.value);
  if (imageIndex < (activeProject.value.images.length - 1)) {
    activeImage.value = activeProject.value.images[imageIndex + 1];
  } else {
    activeImage.value = activeProject.value.images[0];
  }
}

const getIcon = (image: string) => {
  if (image === activeImage.value) {
    return mdiCircle;
  }
  return mdiCircleOutline;
}

const setImage = (image: string) => {
  activeImageIndex = activeProject.value.images.findIndex(elem => elem === image);
  activeImage.value = activeImages[activeImageIndex];
}

const handleTouchStart = (e: TouchEvent) => {
  touchStartX = e.touches[0].clientX;
}
const handleTouchMove = (e: TouchEvent) => {
  touchEndX = e.touches[0].clientX;
}
const handleTouchEnd = () => {
  if (touchEndX < touchStartX) {
    nextImage();
  } else if (touchEndX > touchStartX) {
    previousImage();
  }
  touchStartX = 0;
  touchEndX = 0;
}
</script>

<style scoped>
h2 {
  margin-bottom: 24px;
}

.portfolio {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: clamp(16px, 5vw, 64px);
}

.project {
  border-radius: 16px;
  background-size: cover;
  background-position: center;
  aspect-ratio: 16/9;
  overflow: hidden;
}

span {
  background: linear-gradient(135deg, rgb(var(--primary-color)) 0%, rgb(var(--secondary-color)) 100%);
  border-radius: 8px;
  padding: 4px 8px;
  font-size: 12px;
  color: var(--white);
  margin-right: 8px;
}

.indicators {
  position: absolute;
  bottom: 4px;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  z-index: 2;
}

.indicators button {
  background: none;
  border: none;
  outline: none;
  color: rgb(var(--primary-color));
  width: 32px;
  height: 32px;
  padding: 0;
  border-radius: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.indicators button:hover {
  background: rgba(var(--primary-color), 0.2);
}

.project img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.project-info {
  padding-bottom: 36px;
}

.project-info p {
  font-size: 0.8em;
  margin-top: 16px;
}

.link {
  color: var(--color-text);
  display: inline-flex;
  justify-content: center;
  align-items: center;
  margin-top: 8px;
  width: 36px;
  height: 36px;
  border-radius: 100%;
}

.link:hover {
  background: var(--color-text-hover);
}

.arrows {
  display: flex;
  justify-content: space-between;
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
}

.arrows button {
  border: 1px solid var(--color-text-hover);
  outline: none;
  height: 32px;
  background: none;
  border-radius: 16px;
  color: var(--color-text);
  display: flex;
  align-items: center;
  justify-content: center;
}

.arrows button:first-child {
  padding: 0 12px 0 0;
}

.arrows button:not(:first-child) {
  padding: 0 0 0 12px;
}

.arrows button:hover {
  background: var(--color-text-hover);
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s;
  z-index: 0;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
  z-index: 1;
}

@media screen and (max-width: 1000px) {
  .portfolio {
    grid-template-columns: 1fr;
  }

  .arrows {
    top: 0;
  }

  .project-info {
    padding-top: 36px;
  }
}
</style>
