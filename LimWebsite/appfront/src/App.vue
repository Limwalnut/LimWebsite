<template>
  <div id="app">
    <IntroCanvas></IntroCanvas>
    <HomePage></HomePage>
    <AboutPage2></AboutPage2>
    <SkillPage></SkillPage>
<!--    <AboutPage></AboutPage>-->
    <ExperiencePage></ExperiencePage>
<!--    <MainContent></MainContent>-->
  </div>
</template>

<script>
import IntroCanvas from './components/IntroCanvas'
import HomePage from './components/HomePage'
import AboutPage from './components/AboutPage'
import ExperiencePage from './components/ExperiencePage'
import MainContent from './components/MainContent'
import AboutPage2 from './components/AboutPage2'
import SkillPage from './components/SkillPage'

export default {
  name: 'App',
  components: {
    MainContent,
    HomePage,
    AboutPage,
    IntroCanvas,
    ExperiencePage,
    AboutPage2,
    SkillPage
  }
}
</script>

<style>
  html {
    scroll-behavior: smooth;
  }
  body{
    font-family: "Times New Roman",Times, serif;
    background-color: #f5f5f5;
  }
</style>
