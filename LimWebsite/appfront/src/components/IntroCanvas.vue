<template>
    <div>
      <canvas ref="IntroCanvas" id="IntroCanvas"></canvas>
    </div>
</template>

<script>
import {InitCanvas, draw} from '../assets/js/IntroCanvasJs'
export default {
  name: 'IntroCanvas',
  mounted () {
    // resize the canvas when user change the window size
    window.onresize = () => {
      return (() => {
        InitCanvas(this.$refs.IntroCanvas, window)
      })()
    }
    // initiate the canvas size
    InitCanvas(this.$refs.IntroCanvas, window)
    // draw the mouse interaction
    draw()
  }
}
</script>

<style scoped>
  #IntroCanvas{
    z-index: 0;
    position: absolute;
    background-color: #2c343f;
    overflow: hidden;
    pointer-events: none;
  }
</style>
