<template>
  <div>
    <canvas ref="myCanvas" id="myCanvas"></canvas>
  </div>
</template>

<script>
import {InitCanvas, draw} from '../assets/js/BackgroundCanvas'

export default {
  name: 'MyCanvas',
  data () {
    return {

    }
  },
  mounted () {
    // resize the canvas when user change the window size
    window.onresize = () => {
      return (() => {
        InitCanvas(this.$refs.myCanvas, window)
      })()
    }
    // initiate the canvas size
    InitCanvas(this.$refs.myCanvas, window)
    // draw the mouse interaction
    draw()
  },
  methods: {

  }
}
</script>

<style>
    #myCanvas{
      /*border: 1px solid black;*/
      position: fixed;
      z-index: 9999;
      background-color: rgba(255,255,255,0);
      overflow: hidden;
      pointer-events: none;
    }
</style>
