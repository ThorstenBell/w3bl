<template>
  <section id="about">
    <div>
      <h2>About Me</h2>
      <p>I'm a front end developer with a passion for crafting websites and software that are not only visually
        appealing but also highly functional and accessible. I thrive on leveraging the latest technologies to bring
        innovative ideas to life, ensuring every project is responsive and user-friendly across all devices.
      </p>
      <p>With a keen eye for design and a strong foundation in modern development practices, I specialize in creating
        seamless digital experiences that meet the highest standards of performance and accessibility. My commitment to
        continuous learning and staying updated with industry trends allows me to deliver cutting-edge solutions that
        exceed expectations.
      </p>
    </div>
    <div>
      <h2>Software Skills</h2>
      <h3>
        <svg-icon type="mdi" :path="mdiCodeTags"></svg-icon>
        Development
      </h3>
      <p>HTML, CSS (Sass), JavaScript (Vue, jQuery), PHP (Laravel), SQL</p>
      <h3>
        <svg-icon type="mdi" :path="mdiPalette "></svg-icon>
        Design
      </h3>
      <p>Adobe CC: InDesign, Illustrator, Photoshop, XD</p>
      <h3>
        <svg-icon type="mdi" :path="mdiChartArc "></svg-icon>
        Data Analytics
      </h3>
      <p>Python, R, SQL</p>
    </div>
  </section>
</template>

<script setup lang="ts">
import SvgIcon from '@jamescoyle/vue-icon';

import {mdiCodeTags, mdiPalette, mdiChartArc} from '@mdi/js';

</script>

<style scoped>
section {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: clamp(16px, 5vw, 64px);
}

h2, p {
  margin-bottom: 24px;
}

h3 {
  display: flex;
  align-items: center;
}

h3 svg {
  margin-right: 8px;
}

@media screen and (max-width: 1000px) {
  section {
    grid-template-columns: 1fr;
  }
}
</style>
