<template>
    <div id="gallery">
      <router-link :to="{ name: 'HomePage' }" id="backToHome">Home</router-link>
      <div class="header">
        <h1>I see the world through my lens</h1>
        <h3>Hope you enjoy the tourist with me</h3>
      </div>
      <div class="img-container">
      <div class="row" id="row">
        <div class="column" @click.prevent="">
          <div class="column-container">
            <h1 class="caption2" @mouseover.stop="">MELBOURNE</h1>
            <img class="small-img" src="../assets/img/Melbourne.jpg" alt="MELBOURNE">
          </div>
          <div class="column-container">
            <h1 class="caption2" @mouseover.stop="">MELBOURNE</h1>
            <img class="small-img" src="../assets/img/Melbourne2.jpg" alt="MELBOURNE">
          </div>
        </div>
        <div class="column" @click.prevent="">
          <div class="column-container">
            <h1 class="caption2">OSAKA</h1>
            <img class="small-img" src="../assets/img/Summer.jpg" alt="OSAKA">
          </div>
          <div class="column-container">
            <h1 class="caption2">NARA</h1>
            <img class="small-img" src="../assets/img/Deer2.jpg" alt="NARA">
          </div>
        </div>
        <div class="column" @click.prevent="">
          <div class="column-container">
            <h1 class="caption2">CHENGDU</h1>
            <img class="small-img" src="../assets/img/Chengdu_JonyJ.jpg" alt="CHENGDU">
          </div>
          <div class="column-container">
            <h1 class="caption2">OSAKA</h1>
            <img class="small-img" src="../assets/img/OSAKA.jpg" alt="OSAKA">
          </div>
        </div>
        <div class="column" @click.prevent="">
          <div class="column-container">
            <h1 class="caption2">SYDNEY</h1>
            <img class="small-img" src="../assets/img/sydney.jpg" alt="SYDNEY">
          </div>
          <div class="column-container">
            <h1 class="caption2">MELBOURNE</h1>
            <img class="small-img" src="../assets/img/Melbourne3.jpg" alt="MELBOURNE">
          </div>
        </div>
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
import {imgClick} from '../assets/js/GalleryPage'
export default {
  name: 'GalleryPage',
  mounted() {
    imgClick()
  }
}
</script>

<style scoped>
@import "../assets/css/GalleryPage.css";
</style>
