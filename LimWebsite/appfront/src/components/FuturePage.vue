<template>
    <div id="future" class="outer-wrap">
      <div class="content-container">
        <div class="header">
          <h1>Imaging the Future</h1>
        </div>
        <div class="future-content">
          <p>As we live in an age of information explosion, new technologies change with each passing day.</p>
          <p>So, I always tell myself a sentence in "Prison Breaker": Sometimes, we don't need tot understand everything. We just need to have a little Faith</p>
          <p>All I need to do is stick to my path.</p>
        </div>
      </div>
      <div class="content-container2">
        <div id="full-stack">
          <p>Become a full stack developer.</p>
        </div>
        <div id="Node">
          <p>Improve the Node.js skill</p>
        </div>
        <div id="AI">
          <p>Learn more about Machine Learning</p>
        </div>
        <div id="React">
          <p>Become a React expert</p>
        </div>
        <div id="Angular">
          <p>Become a Angular expert</p>
        </div>
        <div id="Test">
          <p>To be a qualified test engineer</p>
        </div>
        <div id="Preprocessor">
          <p>CSS preprocessor: Sass, LESS, Stylus and PostCSS</p>
        </div>
        <p></p>
      </div>
      <img src="../assets/img/moon.png" alt="" id="moon">
      <div class="rocket-container">
        <img src="../assets/img/rocket.png" alt="" id="rocket">
      </div>

    </div>
</template>

<script>
import {pictureMove} from "../assets/js/FuturePage";
export default {
  name: 'Future',
  mounted() {
    pictureMove()
  }
}
</script>

<style scoped>
@import "../assets/css/FuturePage.css";
</style>
