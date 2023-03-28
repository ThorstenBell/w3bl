
<template>
  <section id="about">
    <div>
      <h2>About Me</h2>
      <p>As a developer, I specialise in creating intuitive and engaging user experiences for web and
        mobile applications. With a strong background in HTML, CSS, and JavaScript, I am adept at developing
        responsive, cross-browser compatible frontend interfaces. I also have experience with Python, R,
        PHP, and SQL. I currently work as a developer and UX Designer in a software development team that
        produces SaaS products for marketing professionals, as well as undertaking a masters in Computer Science
        with Data analytics in my spare time.
      </p>
      <p>I am highly organised and detail-oriented, with a strong emphasis on delivering high-quality,
        bug-free code. I am also a team player and enjoy collaborating with other developers, designers and
        project managers to bring projects to completion. As well as, understanding and empathising with
        users to develop highly functional digital products.
      </p>
    </div>
    <div>
      <h2>Software Skills</h2>
      <h3><svg-icon type="mdi" :path="mdiCodeTags"></svg-icon> Development</h3>
      <p>HTML, CSS (Sass), JavaScript (Vue, jQuery), PHP (Laravel), SQL</p>
      <h3><svg-icon type="mdi" :path="mdiPalette "></svg-icon> Design</h3>
      <p>Adobe CC: InDesign, Illustrator, Photoshop, XD</p>
      <h3><svg-icon type="mdi" :path="mdiChartArc "></svg-icon> Data Analytics</h3>
      <p>Python, R, SQL</p>
    </div>
  </section>
</template>

<script setup lang="ts">
import SvgIcon from '@jamescoyle/vue-icon';

import { mdiCodeTags, mdiPalette, mdiChartArc  } from '@mdi/js';

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
