<template>
  <div id="app" @mousemove="move">
    <MyCanvas ref="MyCanvas"></MyCanvas>
    <introduction ></introduction>

<!--    <MainContent></MainContent>-->
  </div>
</template>

<script>
  import introduction from './components/introduction'
  import MainContent from './components/MainContent'
  import MyCanvas from './components/MyCanvas'
  import {draw} from './assets/js/BackgroundCanvas'
  export default {
    name: 'App',
    data(){
      return {
        mouseposition:[this.mouseX, this.mouseY],
        mouseX:'',
        mouseY:''
      }
    },
    methods:{
      move(event){
        this.mouseX = event.clientX
        this.mouseY = event.clientY
        // console.log(event.clientX + ", " +event.clientY)
        this.$refs.MyCanvas.getPosition([this.mouseX,this.mouseY])
        // console.log(this.mouseX + ", " +this.mouseY)
      }
    },
    components:{
      introduction,
      MyCanvas
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
