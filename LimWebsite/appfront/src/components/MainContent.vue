<template>
    <div id="content" ref="MainContent">
      <ul ref="contentUl" id="contentUl">
        <li class="list animate__animated text-left"  v-for="(item) in list" :key="item.id">
          <div>
            <div>
              <span class="footTitle">{{item.title}}</span>
              <span class="icon glyphicon glyphicon-send"></span>
              <span class="pInLi">{{item.content}}</span>
            </div>
            <img class="list_pic" :src= "item.src" alt="">
          </div>
        </li>
      </ul>
    </div>
</template>

<script>
// import {inWinodw} from '../assets/js/BackgroundMainContent'
import intro from '../assets/intro_pic.jpg'
export default {
  name: 'content',
  data () {
    return {
      list: [
        {id: 1, title: 'My Footprint', content: 'Now Sydney Based', src: intro},
        {id: 2, title: 'Sydney', content: '2017 - Now', src: '../assets/intro.jpg'},
        {id: 3, title: 'Shanghai', content: '2013 - 2017', src: '../assets/intro_pic.jpg'},
        {id: 4, title: 'Chengdu', content: '1994 - 2013', src: '../assets/intro_pic.jpg'}
      ],
      intro
    }
  },
  mounted () {
    window.addEventListener('scroll', this.handleScroll, true)
  },
  methods: {
    handleScroll () {
      var scrollTop = document.documentElement.scrollTop
      var visibleBottom = window.innerHeight + scrollTop
      var visibleTop = scrollTop
      var ul = this.$refs.contentUl
      var li = ul.getElementsByClassName('list')
      if (li) {
        for (var i = 0; i < li.length; i++) {
          if (li[i].offsetTop > visibleTop && li[i].offsetTop + 200 < visibleBottom) {
            li[i].classList.add('animate__fadeInUp')
          } else if (li[i].offsetTop >= visibleBottom) {
            li[i].classList.remove('animate__fadeInUp')
          }
        }
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
  }
  #contentUl{
    padding: 0;
  }
  .icon{
    margin-left: 20px;
  }
  .list_pic{
    width: 400px;
    height: 300px;
    float: right;
    transform: translateY(-100px);
    margin: 50px 50px;
    /*margin-right: 50%;*/
  }
  .list{
    width: 100%;
    margin-top: 15%;
    opacity: 0;
    color: white;
    list-style: none;
    margin-bottom: 25%;
    /*background-color: chartreuse;*/
  }
  .list:first-child>div>div{
    margin-left: 15%;
  }
  .list:first-child>div>img{
    margin-right: 25%;
  }
  .list:nth-child(2n)>div>div{
    padding-left: 40%;
  }
  .list:nth-child(2n)>div>img{
    margin-right: 10%;
  }
  .list:nth-child(3n)>div>div{
    padding-left: 65%;
  }
  .list:nth-child(3n)>div>img{
    float: left;
    margin-left: 20%;
  }
  .list:nth-child(4n)>div>div{
    padding-left: 25%;
  }
  .list:nth-child(4n)>div>img{
    margin-left: 5%;
  }
  .pInLi{
    font-size: 2em;
    display: block;
  }
  .footTitle{
    font-size: 3em;
  }
</style>
