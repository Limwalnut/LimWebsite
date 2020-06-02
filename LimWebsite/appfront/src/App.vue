<template>
  <div id="app">
    <MyCanvas ref="MyCanvas"></MyCanvas>
    <ImageHover></ImageHover>
    <introduction ></introduction>
    <MainContent></MainContent>
<!--    <SecondContent></SecondContent>-->
  </div>
</template>

<script>
import introduction from './components/introduction'
import MainContent from './components/MainContent'
import MyCanvas from './components/MyCanvas'
import SecondContent from './components/SecondContent'
import ImageHover from './components/ImageHover'

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
    SecondContent,
    ImageHover
  }
}
</script>

<style>
  html {
    scroll-behavior: smooth;
  }
  h1,h2,p{
    font-family: "Times New Roman",Times, serif;
  }

  #app{
    background-color: rgb(253, 253, 253);
  }

</style>
