<template>
    <div id="content" ref="MainContent">
        <div class="container">
          <div class="child1 animate__animated">
            <h2>{{this.list[0].title}}</h2>
            <p>{{this.list[0].content}}</p>
          </div>
          <div class="child2 animate__animated">
            <img class="pic_right" :src="this.list[0].src" alt="">
          </div>
        </div>
      <div class="container">
        <div class="child1 animate__animated">
          <img class="pic_right" :src="this.list[1].src" alt="">
        </div>
        <div class="child2 animate__animated">
          <h2>{{this.list[1].title}}</h2>
          <p>{{this.list[1].content}}</p>
        </div>
      </div>
      <div class="container">
        <div class="child1 animate__animated">
          <h2>{{this.list[2].title}}</h2>
          <p>{{this.list[2].content}}</p>
        </div>
        <div class="child2 animate__animated">
          <img class="pic_right" :src="this.list[2].src" alt="">
        </div>
      </div>
      <div class="container">
        <div class="child1 animate__animated">
          <img class="pic_right" :src="this.list[3].src" alt="">
        </div>
        <div class="child2 animate__animated">
          <h2>{{this.list[3].title}}</h2>
          <p>{{this.list[3].content}}</p>
        </div>
      </div>
    </div>
</template>

<script>
// import {inWinodw} from '../assets/js/BackgroundMainContent'
import intro from '../assets/intro_pic.jpg'
import sydney from '../assets/sydney.jpg'
import sydney2 from '../assets/sydney2.jpg'
import shanghai from '../assets/shanghai.jpg'
import chengdu from '../assets/chengdu.jpg'
export default {
  name: 'content',
  data () {
    return {
      list: [
        {id: 1, title: 'My Footprint', content: 'Now Sydney Based', src: sydney},
        {id: 2, title: 'Sydney', content: '2017 - Now', src: sydney2},
        {id: 3, title: 'Shanghai', content: '2013 - 2017', src: shanghai},
        {id: 4, title: 'Chengdu', content: '1994 - 2013', src: chengdu}
      ],
      intro
    }
  },
  mounted () {
    window.addEventListener('scroll', this.handleScroll, true)
    window.addEventListener('scroll', this.update)
  },
  methods: {
    handleScroll () {
      var visibleTop = document.documentElement.scrollTop
      var visibleBottom = window.innerHeight + visibleTop
      var arr = this.$refs.MainContent
      // var container = arr.getElementsByClassName('container')
      var child1 = arr.getElementsByClassName('child1')
      var child2 = arr.getElementsByClassName('child2')
      for (var i = 0; i < child1.length; i++) {
        var divBottom = child1[i].offsetTop + child1[i].offsetHeight
        if (divBottom < visibleBottom) {
          child1[i].classList.add('animate__fadeInLeft')
          child2[i].classList.add('animate__fadeInRight')
        }

        // console.log(container[i].offsetHeight)
      }
    }
  }
}
</script>

<style scoped>
  #content{
    width: 100%;
    background-color: black;
    overflow: hidden;
    padding: 0;
  }
  .container{
    display: flex;
    width: 100%;
    align-items: center;
    padding: 0;
    /*margin: 5% 0;*/
  }
  .child1{
    text-align: center;
    color: white;
    width: 50%;
    /*visibility: hidden;*/
    opacity: 0;
  }
  .child2{
    text-align: center;
    color: white;
    width: 50%;
    /*visibility: hidden;*/
    opacity: 0;
  }
  .pic_right{
    /*height: 200px;*/
    width: 100%;
    /*flex-shrink: 1;*/
  }
  p{
    font-size: 1.5em;
  }
</style>
