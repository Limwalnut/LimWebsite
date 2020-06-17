<template>
    <div id="design">
      <router-link :to="{ name: 'HomePage' }" id="backToHome">Home</router-link>
      <div class="header">
        <h1>My Design</h1>
        <h3>Brilliant ideas will change the world</h3>
      </div>
      <div class="img-container">
        <div class="row" id="row">
          <div class="column" @click.prevent="">
            <div class="column-container">
              <h1 class="caption2" @mouseover.stop="">MELBOURNE</h1>
              <img class="small-img" src="../assets/img/mygif2.gif" alt="MELBOURNE">
            </div>
          </div>
          <div class="column" @click.prevent="">
            <div class="column-container">
              <h1 class="caption2" @mouseover.stop="">MELBOURNE</h1>
              <svg version="1.1" id="logo" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                   viewBox="0 0 307 347" style="enable-background:new 0 0 307 347;" xml:space="preserve">
            <g>
            <path class="st0" d="M153,8.6l143.3,82.7v165.4L153,339.4L9.7,256.7V91.3L153,8.6 M153,5.1L6.7,89.5v168.9L153,342.9l146.3-84.5
            V89.5L153,5.1L153,5.1z"/>
            </g>
                <g>
            <path class="st1" d="M105.6,198.6c-1,5-4.3,16.8-5.4,23.4H35v-2.1c12.8-0.6,13.8-3.1,13.8-15.8v-59c0-11.7-1-14.3-14.4-15v-2.1
            h37.2v2.1c-13.7,0.8-15,3.3-15,15V202c0,15.9,3.6,16.4,18.9,16.4c9,0,16.2-1.8,19.7-5.4c2-2.7,5.4-7.8,7.8-14.4H105.6z"/>
            </g>
                <g>
            <path class="st1" d="M207.9,124.5c0.8,1.6,1.5,2.5,2.8,3.1c1.2,0.5,2.8,0.5,5.1,0.5h61l1,1.8c-23,28.8-46.2,57.8-68.7,87.6
            c5.4,0.6,18.9,0.9,29.5,0.9c27.8,0,32.8-3.8,40.3-20.7l2.5,0.5c-1,3.9-3.8,16.6-5.5,23.9h-78.9l-0.6-1.6
            c22.7-29.4,46-58.4,69.2-88.6l-29.5,0.1c-22.5-0.1-24.6,3.6-29.5,19.2H204c0.8-7.6,1.7-17.7,1.8-26.5L207.9,124.5L207.9,124.5z"/>
            </g>
                <path class="st1" d="M153.5,101.5"/>
                <g>
            <g>
            <path class="st0" d="M175.2,81.2c-5.8-0.7-11.4,2-15.4,6c-4.4,4.4-6.7,10.3-7.8,16.4c-1.2,6.6-1.4,13.4-1.9,20.1
            c-0.5,7-1.2,14.1-1.8,21.1c-2.6,28-6.2,55.9-10.7,83.6c-1.1,6.7-2.1,13.8-5.7,19.7c-2.9,4.7-7.8,8.5-13.2,8.5c-3.9,0-3.9,6,0,6
            c5.8,0,11.2-2.9,15.1-7.1c4.3-4.6,6.6-10.5,8-16.6c1.5-6.5,2.4-13.3,3.4-19.9c1.1-7,2.1-14,3-21c3.8-28,6.6-56.1,8.7-84.2
            c0.5-6.6,1.1-13.6,4.8-19.3c3-4.7,8.1-8,13.6-7.3c1.6,0.2,3-1.5,3-3C178.2,82.4,176.8,81.4,175.2,81.2L175.2,81.2z"/>
            </g>
            </g>
            </svg>
            </div>
          </div>
          <div class="column" @click.prevent=""></div>
          <div class="column" @click.prevent=""></div>
        </div>
        <div id="myModal" class="modal">
          <span class="close">&times;</span>
          <img class="modal-content" id="img-big" src="" alt="">
          <div id="caption"></div>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "DesignPage"
    }
</script>

<style scoped>
@import "../assets/css/DesignPage.css";
</style>
