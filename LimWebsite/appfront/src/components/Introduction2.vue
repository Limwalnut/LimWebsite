<template>
  <div id="intro" class="container" ref="container">
    <div class="star"></div>
    <div class="left_side" ref="moon"></div>
    <div class="main_intro" ref="main_intro">
      <h1 id="intro_heading" ref="intro_heading">
        Hello,
        <br>
        I'm Lim Zhang,
        <br>
        An web developer.
      </h1>
    </div>
    <div class="right_side" ref="earth"></div>
  </div>
</template>

<script>
export default {
  name: 'Introduction2',
  mounted () {
    window.addEventListener('scroll', this.handleScroll, true)
  },
  methods: {
    handleScroll () {
      var scrollTop = document.documentElement.scrollTop
      var scrollObj = this.$refs.container

      var moon = this.$refs.moon
      var earth = this.$refs.earth
      var mainIntro = this.$refs.main_intro

      // moon.style.transform = 'translate(0,-' + ((scrollTop - window.innerHeight) / scrollObj.offsetHeight) * 30 + '%)'
      moon.style.opacity = (1 - ((scrollTop - window.innerHeight) / scrollObj.offsetHeight))
      // earth.style.transform = 'translate(0,-' + ((scrollTop - window.innerHeight) / scrollObj.offsetHeight) * 20 + '%)'
      earth.style.opacity = (1 - ((scrollTop - window.innerHeight) / scrollObj.offsetHeight))
      mainIntro.style.transform = 'translate(0,-' + ((scrollTop - window.innerHeight) / scrollObj.offsetHeight) * 20 + '%)'
      mainIntro.style.opacity = (1 - ((scrollTop - window.innerHeight) / scrollObj.offsetHeight))
    }
  },
  destroyed () {
    window.removeEventListener('scroll', this.handleScroll)
  }
}
</script>

<style scoped>
  @import "../assets/css/IntroCSS.css";
</style>
