<template>
  <div class="container" id="Home">
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
    <div class="flex" ref="nav">
      <a href="#Home"><div class="navContent">HOME</div></a>
      <a href="#intro"><div class="navContent">ABOUT</div></a>
      <a href=""><div class="navContent">EXPERIENCE</div></a>
      <a href=""><div class="navContent">FUTURE</div></a>
      <a href=""><div class="navContent">CONTACT</div></a>
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
  mounted () {
    window.addEventListener('scroll', this.FixNav, true)
  },
  methods: {
    FixNav () {
      var scrollTop = document.documentElement.scrollTop
      var scrollObj = this.$refs.nav
      if (scrollTop >= window.innerHeight) {
        scrollObj.style.left = '0'
        scrollObj.style.position = 'fixed'
        scrollObj.style.top = '0'
      } else {
        scrollObj.style.position = 'absolute'
        scrollObj.style.top = '100vh'
      }
    },
    ClickNav () {

    },
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
        this.typeValue = this.typeArray[this.typeArrayIndex].substring(0, this.charIndex - 1)
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
  @import "../assets/css/ImageHoverCss.css";
</style>
