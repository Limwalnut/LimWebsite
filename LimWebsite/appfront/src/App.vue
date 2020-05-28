<template>
  <div id="app">
    <MyCanvas ref="MyCanvas"></MyCanvas>
    <introduction ></introduction>
    <MainContent></MainContent>
  </div>
</template>

<script>
import introduction from './components/introduction'
import MainContent from './components/MainContent'
import MyCanvas from './components/MyCanvas'

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
    MainContent
  }
}
</script>

<style>
  h1,h2,p{
    font-family: "Times New Roman",Times, serif;
  }

  #app{
    background-color: rgb(253, 253, 253);
  }

</style>
