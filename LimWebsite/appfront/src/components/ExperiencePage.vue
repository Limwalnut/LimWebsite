<template>
  <div class="outer-wrap" id="experience">
    <div class="wrap" id="wrap">
      <div id="text">
        <div class="text-content">
          <div class="technology">
            <h1>Technologies</h1>
          </div>
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
      <div class="experience-container">
        <h1>Experience</h1>
      </div>
      <div class="inner-item">
        <div class="inner-text inner-content1">
          <div class="card-class">
          <div class="front front-background-1">
            <p>The University of Sydney</p>
          </div>
          <div class="back">
            <div>
              <p>Consectetur adipisicing elit. Possimus, praesentium?</p>
              <p>Provident consectetur natus voluptatem quis tenetur sed beatae eius sint.</p>
            </div>
          </div>
          </div>
        </div>
      </div>
      <div class="inner-item">
        <div class="inner-text inner-content2">
          <div class="card-class">
            <div class="front front-background-2">
              <p></p>
            </div>
            <div class="back">
              <div>
                <p>Consectetur adipisicing elit. Possimus, praesentium?</p>
                <p>Provident consectetur natus voluptatem quis tenetur sed beatae eius sint.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="inner-item">
        <div class="inner-text inner-content3">
          <div class="card-class">
            <div class="front front-background-3">
              <p></p>
            </div>
            <div class="back">
              <div>
                <p>Consectetur adipisicing elit. Possimus, praesentium?</p>
                <p>Provident consectetur natus voluptatem quis tenetur sed beatae eius sint.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="inner-item">
        <div class="inner-text inner-content4">
          <div class="card-class">
            <div class="front front-background-4">
              <p></p>
            </div>
            <div class="back">
              <div>
                <p>Consectetur adipisicing elit. Possimus, praesentium?</p>
                <p>Provident consectetur natus voluptatem quis tenetur sed beatae eius sint.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {horizontalScroll} from '../assets/js/ExperiencePageJs'
import intro from '../assets/intro_pic.jpg'
export default {
  name: 'ExperiencePage',
  mounted () {
    window.addEventListener('scroll', horizontalScroll, true)
  },
  data () {
    return {
      address: intro
    }
  },
  methods: {

  },
  destroyed () {
    window.removeEventListener('scroll', horizontalScroll)
  }
}
</script>

<style scoped>
  @import "../assets/css/ExperiencePageCss.css";
</style>
