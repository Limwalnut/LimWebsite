<template>
  <div id="about" class="container-about">
    <div class="container-all" ref="containerAll">
      <div class="container-left animate__animated" ref="containerLeft">
        <img src="../assets/img/cartoon2.jpg" alt="" class="cartoon">
      </div>
      <div class="container-right animate__animated" ref="containerRight">
        <div class="type-container">
          <h1 style="width: 20vw">Coding is
            <span class="type-text">{{typeValue}}</span>
            <span class="cursor" :class="{'typing':typeStatus}">&nbsp;</span>
          </h1>
        </div>
        <div class="text-content">
          <p>
            Hi there, I'm Lim Zhang. A front-end developer, an UI designer and an UX designer.
            My passion is providing beautiful user interface and great user experience.
          </p>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'AboutPage2',
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
    window.addEventListener('scroll', this.handleScroll, true)
  },
  methods: {
    handleScroll () {
      var visibleTop = document.documentElement.scrollTop
      var visibleBottom = window.innerHeight + visibleTop
      var child1 = this.$refs.containerRight
      var child2 = this.$refs.containerLeft
      var containerAll = this.$refs.containerAll
      var divBottom = containerAll.offsetTop + containerAll.offsetHeight / 2
      if (divBottom < visibleBottom) {
        child1.classList.add('fadeInRight')
        child2.classList.add('fadeInLeft')
      }
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
@import "../assets/css/AboutPage2.css";
</style>
