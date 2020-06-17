<template>
  <div>
  <div id="app">
    <router-view name="container1"></router-view>
    <keep-alive><router-view name="container2"></router-view></keep-alive>
    <router-view name="container3"></router-view>
    <router-view name="container4"></router-view>
    <router-view name="container5"></router-view>
    <router-view name="container6"></router-view>
  </div>
 </div>
</template>

<script>
import HomePage from './components/HomePage'
import AboutPage2 from './components/AboutPage2'
import SkillPage from './components/SkillPage'
import ProjectPage from './components/ProjectPage'
import FuturePage from './components/FuturePage'
import FooterPage from './components/FooterPage'
import GalleryPage from './components/GalleryPage'
import CodePage from "./components/CodePage";
import DesignPage from "./components/DesignPage";

export default {
  name: 'App',
  components: {
    HomePage,
    AboutPage2,
    SkillPage,
    ProjectPage,
    FuturePage,
    FooterPage,
    GalleryPage,
    CodePage,
    DesignPage
  },
}
</script>

<style>
  @import "assets/font/font.css";
  html {
    scroll-behavior: smooth;
  }
  body{
    font-family: "FR",Times, serif;
    background-color: #f5f5f5;
    position: relative;
  }
</style>
