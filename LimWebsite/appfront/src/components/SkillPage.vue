<template>
  <div class="outer-wrap" id="skill">
    <div class="inner-wrap">
      <div class="container-text">
        <h1>As a front-end developer, I have made an evaluation about my skills.</h1>
<!--        <div class="letter-s" @mouseover="swap" ref="letterS">-->
<!--&lt;!&ndash;          <img src="../assets/img/S.png" alt="">&ndash;&gt;-->
<!--        </div>-->
      </div>
      <div class="icon-wrap">
        <!--      HTML skill icon-->
        <section class="container-skill grid-html">
          <figure class="chart" data-percent="80">
            <figcaption>HTML</figcaption>
            <img class="html" src="../assets/img/html5.svg">
            <svg width="200" height="200">
              <circle class="outer" cx="95" cy="95" r="85" transform="rotate(-90, 95, 95)"/>
            </svg>
          </figure>
        </section>
        <section class="container-skill grid-css">
          <figure class="chart" data-percent="75">
            <figcaption>CSS</figcaption>
            <img class="css" src="../assets/img/css.svg">
            <svg width="200" height="200">
              <circle class="outer" cx="95" cy="95" r="85" transform="rotate(-90, 95, 95)"/>
            </svg>
          </figure>
        </section>
        <section class="container-skill grid-js">
          <!-- Javascript Chart -->
          <figure class="chart" data-percent="75">
            <figcaption>Javascript</figcaption>
            <img class="javascript" src="../assets/img/javascript.svg">
            <svg width="200" height="200">
              <circle class="outer" cx="95" cy="95" r="85" transform="rotate(-90, 95, 95)"/>
            </svg>
          </figure>
        </section>
        <section class="container-skill grid-python">
          <figure class="chart" data-percent="60">
            <figcaption>Python</figcaption>
            <img class="python" src="../assets/img/python.svg">
            <svg width="200" height="200">
              <circle class="outer" cx="95" cy="95" r="85" transform="rotate(-90, 95, 95)"/>
            </svg>
          </figure>
        </section>
        <section class="container-skill grid-git">
          <figure class="chart" data-percent="60">
            <figcaption>Git</figcaption>
            <img class="git" src="../assets/img/git.svg">
            <svg width="200" height="200">
              <circle class="outer" cx="95" cy="95" r="85" transform="rotate(-90, 95, 95)"/>
            </svg>
          </figure>
        </section>
        <section class="container-skill grid-sql">
          <figure class="chart" data-percent="80">
            <figcaption>Sql</figcaption>
            <img class="sql" src="../assets/img/sql.svg">
            <svg width="200" height="200">
              <circle class="outer" cx="95" cy="95" r="85" transform="rotate(-90, 95, 95)"/>
            </svg>
          </figure>
        </section>
        <section class="container-skill grid-c">
          <figure class="chart" data-percent="80">
            <figcaption>C</figcaption>
            <img class="C" src="../assets/img/cplusplus-original.svg">
            <svg width="200" height="200">
              <circle class="outer" cx="95" cy="95" r="85" transform="rotate(-90, 95, 95)"/>
            </svg>
          </figure>
        </section>
        <section class="container-skill grid-csharp">
          <figure class="chart" data-percent="50">
            <figcaption>Csharp</figcaption>
            <img class="csharp" src="../assets/img/csharp-icon-active.svg">
            <svg width="200" height="200">
              <circle class="outer" cx="95" cy="95" r="85" transform="rotate(-90, 95, 95)"/>
            </svg>
          </figure>
        </section>
        <section class="container-skill grid-java">
          <figure class="chart" data-percent="50">
            <figcaption>Java</figcaption>
            <img class="java" src="../assets/img/java.svg">
            <svg width="200" height="200">
              <circle class="outer" cx="95" cy="95" r="85" transform="rotate(-90, 95, 95)"/>
            </svg>
          </figure>
        </section>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SkillPage',
  methods: {
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
    }
  },
  created () {
    setTimeout(this.swap, 200)
  }
}
</script>

<style scoped>
  @import "../assets/css/SkillPage.css";
</style>
