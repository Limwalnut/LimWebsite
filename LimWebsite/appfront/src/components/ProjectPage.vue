<template>
  <div id="project" class="outer-wrap">
    <div class="section-container">
      <section class="project-section photographer">
        <h1>Photographer</h1>
        <router-link :to="{ name: 'GalleryPage' }">
          <button class="photographer-button">Discover</button>
        </router-link>
      </section>
      <section class="project-section developer">
        <h1>Developer</h1>
        <router-link :to="{ name: 'CodePage' }">
          <button class="developer-button">Discover</button>
        </router-link>
      </section>
      <section class="project-section designer">
        <h1>Designer</h1>
        <router-link :to="{ name: 'DesignPage' }">
          <button class="designer-button">Discover</button>
        </router-link>
      </section>
    </div>
    <div class="container-text">
      <p>Recent Projects</p>
    </div>
    <div class="container-project"></div>
  </div>
</template>

<script>
export default {
  name: 'ProjectPage',
}
</script>

<style scoped>
@import "../assets/css/ProjectPage.css";
</style>
