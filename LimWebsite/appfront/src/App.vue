<template>
  <div id="app">
<!--    <MyCanvas ref="MyCanvas"></MyCanvas>-->
    <IntroCanvas></IntroCanvas>
    <ImageHover></ImageHover>
    <Introduction2></Introduction2>
<!--    <introduction ></introduction>-->
    <MainContent></MainContent>
  </div>
</template>

<script>
import introduction from './components/introduction'
import MainContent from './components/MainContent'
import MyCanvas from './components/MyCanvas'
import ImageHover from './components/ImageHover'
import Introduction2 from './components/Introduction2'
import IntroCanvas from './components/IntroCanvas'

export default {
  name: 'App',
  data () {
    return {

    }
  },
  methods: {

  },
  components: {
    introduction,
    MyCanvas,
    MainContent,
    ImageHover,
    Introduction2,
    IntroCanvas
  }
}
</script>

<style>
  html {
    scroll-behavior: smooth;
  }
  body{
    font-family: "Times New Roman",Times, serif;
  }

  #app{
    background-color: rgb(253, 253, 253);
  }

</style>
