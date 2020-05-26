<template>
  <div>
    <canvas ref="myCanvas" id="myCanvas"></canvas>
  </div>
</template>

<script>
  import {InitCanvas} from '../assets/js/BackgroundCanvas'
  import {draw} from '../assets/js/BackgroundCanvas'
  export default {
    name: "MyCanvas",
    data(){
      return{
        coordinate:[],
        scheduledAnimationFrame: false,
      }
    },
    mounted() {
      InitCanvas(this.$refs.myCanvas,window)
      draw()
    },
    methods:{

    },
  }
</script>

<style>
    #myCanvas{
      border: 1px solid black;
      position: absolute;
      z-index: 9999;
      background-color: rgba(255,255,255,0);
      overflow: hidden;
      pointer-events: none;
    }
</style>
