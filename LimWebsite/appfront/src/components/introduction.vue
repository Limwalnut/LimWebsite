<template>
    <div>
      <section ref="intro_ref" id="intro" >
        <header ref="heading">
          <h1 id="intro_heading" ref="intro_heading">
            Hello,
            <br>
            I'm Lim Zhang,
            <br>
            An web developer.
          </h1>
          <h2 id="intro_heading_2" ref="intro_heading_2">
            And I love photography, traveling and games.
          </h2>
          <div id="slice_left" class="slice_left" ref="slice_left" :style="{transform: 'translate(0,0)'}"></div>
          <div id="slice_right" class="slice_right" ref="slice_right"></div>

        </header>
      </section>

    </div>
</template>

<script>
export default {
  name: 'introduction',
  data () {
    return {
      msg: 'this is header part'
    }
  },
  mounted () {
    window.addEventListener('scroll', this.handleScroll, true)
  },
  methods: {
    handleScroll () {
      // var clientHeight = document.documentElement.clientHeight || document.body.clientHeight
      var scrollTop = document.documentElement.scrollTop
      var scrollObj = this.$refs.intro_ref
      // scrollObj.style.opacity = (1 - (scrollTop / scrollObj.offsetHeight))
      var rightPic = this.$refs.slice_right
      var leftPic = this.$refs.slice_left
      var header1 = this.$refs.intro_heading
      var header2 = this.$refs.intro_heading_2
      // var leftPic = this.$refs.slice_left.style.transform
      leftPic.style.transform = 'translate(0,-' + ((scrollTop - window.innerHeight) / scrollObj.offsetHeight) * 50 + '%)'
      leftPic.style.opacity = (1 - ((scrollTop - window.innerHeight) / scrollObj.offsetHeight))
      rightPic.style.transform = 'translate(0,-' + ((scrollTop - window.innerHeight) / scrollObj.offsetHeight) * 50 + '%)'
      rightPic.style.opacity = (1 - ((scrollTop - window.innerHeight) / scrollObj.offsetHeight))
      header1.style.transform = 'translate(0,-' + ((scrollTop - window.innerHeight) / scrollObj.offsetHeight) * 30 + '%)'
      header1.style.opacity = (1 - ((scrollTop - window.innerHeight) / scrollObj.offsetHeight))
      header2.style.transform = 'translate(0,-' + ((scrollTop - window.innerHeight) / scrollObj.offsetHeight) * 30 + '%)'
      header2.style.opacity = (1 - ((scrollTop - window.innerHeight) / scrollObj.offsetHeight))
      // console.log(scrollTop)
    },
    destroyed () {
      window.removeEventListener('scroll', this.handleScroll)
    }
  }
}
</script>

<style>
  #intro{
    height: 100vh;
    display: flex;
    width: 100vw;
    justify-content: center;
    align-items: center;
    background-color: black;
    color: white;
  }

  header{
    display: grid;
    grid-template-columns: minmax(20%, 250px) 75px minmax(max-content, 1fr) 75px minmax(20%, 250px);
    grid-template-rows: 176px 55px minmax(max-content, 1fr) 35px 175px;
    grid-template-areas:
      ". . . . rs"
      "ls . . . rs"
      "ls . h1 . rs"
      "ls . h2 . rs"
      "ls . h2 . .";
    /*transform: translateY(-88px);*/
  }

  #intro_heading{
    grid-area: h1;
    font-size: 3vw;
  }

  #intro_heading_2{
    grid-area: h2;
    font-size: 2vw;
  }

  .slice_right{
    grid-area: rs;
    background-image: url("../assets/img/intro.jpg");
    background-size: cover;
    background-position: right;
    transform: translate(0, 0);
  }

  .slice_left{
    grid-area: ls;
    background-image: url("../assets/img/intro.jpg");
    background-size: cover;
    background-position: left;
  }

</style>
