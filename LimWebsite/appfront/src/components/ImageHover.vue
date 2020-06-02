<template>
  <div class="container">
    <div class="type-container">
      <h1>Coding is
        <span class="type-text">{{typeValue}}</span>
        <span class="cursor" :class="{'typing':typeStatus}">&nbsp;</span>
      </h1>
    </div>
    <div class="all">
      <div class="lefter" @click="scrollToIntroduction">
        <div class="text">Who Am I</div>
      </div>
      <div class="left">
        <div class="text">What Can I Do</div>
      </div>
      <div class="center">
        <div class="explainer"><span>Hover me</span></div>
        <div class="text">What Do I Like</div>
      </div>
      <div class="right">
        <div class="text">What Do I Want</div>
      </div>
      <div class="righter">
        <div class="text">Contact Me</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ImageHover',
  data () {
    return {
      typeValue: '',
      typeStatus: false,
      typeArray: ['fun', 'awesome', 'a journey', 'life'],
      typingSpeed: 200,
      erasingSpeed: 100,
      newTextDelay: 2000,
      typeArrayIndex: 0,
      charIndex: 0
    }
  },
  methods: {
    scrollToIntroduction () {
      document.getElementById('intro').scrollIntoView()
    },
    typeText () {
      if (this.charIndex < this.typeArray[this.typeArrayIndex].length) {
        if (!this.typeStatus) this.typeStatus = true
        this.typeValue += this.typeArray[this.typeArrayIndex].charAt(this.charIndex)
        this.charIndex += 1
        setTimeout(this.typeText, this.typingSpeed)
      } else {
        this.typeStatus = false
        setTimeout(this.eraseText, this.newTextDelay)
      }
    },
    eraseText () {
      if (this.charIndex > 0) {
        if (!this.typeStatus) this.typeStatus = true
        this.typeValue = this.typeArray[this.typeArrayIndex].substring(0, this.charIndex-1)
        this.charIndex -= 1
        setTimeout(this.eraseText, this.erasingSpeed)
      } else {
        this.typeStatus = false
        this.typeArrayIndex += 1
        if (this.typeArrayIndex >= this.typeArray.length) {
          this.typeArrayIndex = 0
        }
        setTimeout(this.typeText, this.typingSpeed + 1000)
      }
    }
  },
  created () {
    setTimeout(this.typeText, this.newTextDelay + 200)
  }
}
</script>

<style scoped>
  .container{
    padding: 0;
    margin: 0;
    width: 100vw;
    /*height: 20vh;*/
    font-family: 'Raleway', sans-serif;
    background-image: radial-gradient(circle at center, #899Dc4, #495D84);
    background-size: cover;
    background-repeat: no-repeat;
    height: 100vh;
    overflow: hidden;
    display: flex;
    justify-content: space-around;
    align-items: center;
    background: radial-gradient(ellipse at bottom, #1b2735, #090a0f);
    font-weight: 300;
    flex-direction:column;
    color: white;
  }
  .type-container{
    width: 100%;
    height: 20vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  h1{
    font-size: 4rem;
    font-weight: normal;
  }
  span.type-text{
    color: #D2B94B;
  }
  span.cursor{
    display: inline-block;
    margin-left: 3px;
    width: 4px;
    background-color: #fff;
    animation: cursorBlink 1s infinite;
  }
  @keyframes  cursorBlink{
    49%{background-color: #fff;}
    50%{background-color: transparent;}
    99%{background-color: transparent;}
  }
  span.cursor.typing{
    animation: none;
  }
  .all{
    display: flex;
    perspective: 10px;
    transform: perspective(300px) rotateX(20deg);
    will-change: perspective;
    perspective-origin: center center;
    transition: all 1.3s ease-out;
    justify-content: center;
    transform-style: preserve-3d;
  }
  .all:hover{
    perspective: 1000px;
    transition: all 1.3s ease-in;
    transform: perspective(10000px) rotateX(0deg);

  }
  .all:hover .text{
    opacity: 1;
  }
  .all:hover div{
    opacity: 1;
    transition-delay: 0s;
  }
  .all:hover .explainer{
    opacity: 0;
  }

  .left, .center, .right, .lefter, .righter {
    width: 200px;
    height: 150px;
    transform-style: preserve-3d;
    border-radius: 10px;
    border: 1px solid #fff;
    box-shadow: 0 0 20px 5px rgba(100, 100, 255, .4);
    opacity: 0;
    transition: all .3s ease;
    transition-delay: 1s;
    position: relative;
    background-position: center center;
    background-size: contain;
    background-repeat: no-repeat;
    background-color: #23527c;
    cursor: pointer;
    background-blend-mode: color-burn;
  }
  .left:hover, .center:hover, .right:hover, .lefter:hover, .righter:hover {
     box-shadow: 0 0 30px 10px rgba(100, 100, 255, .6);
     background-color: #afd9ee;
   }
  .text {
    transform: translateY(30px);
    opacity: 0;
    transition: all .3s ease;
    bottom: 0;
    left: 5px;
    position: absolute;
    will-change: transform;
    color: #fff;
    text-shadow: 0 0 5px rgba(100, 100, 255, .6)
  }
  .lefter {
    transform: translateX(-60px) translateZ(-50px) rotateY(-10deg);
    background-image: url('../assets/img/icon1.png');
  }
  .left {
    transform: translateX(-30px) translateZ(-25px) rotateY(-5deg);
    background-image: url('../assets/img/icon2.png');
  }
  .center {
    opacity: 1;
    background-image: url('../assets/img/icon3.png');
  }
  .right {
    transform: translateX(30px) translateZ(-25px) rotateY(5deg);
    background-image: url('../assets/img/icon4.png');
  }
  .righter {
    transform: translateX(60px) translateZ(-50px) rotateY(10deg);
    background-image: url('../assets/img/icon5.png');
  }
  .explainer {
    font-weight: 300;
    font-size: 2rem;
    color: #fff;
    transition: all .6s ease;
    width: 100%;
    height: 100%;
    background-color: #303050;
    background-image: radial-gradient(circle at center top, #cce, #33a);
    border-radius: 10px;
    text-shadow: 0 0 10px rgba(255, 255, 255, .8);

    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>
