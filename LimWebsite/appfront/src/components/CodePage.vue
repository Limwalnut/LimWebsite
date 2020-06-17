<template>
    <div id="code">
      <router-link :to="{ name: 'HomePage' }" id="backToHome">Home</router-link>
      <div class="header">
        <h1>Projects and Careers</h1>
        <h3>Here are some recent projects</h3>
      </div>
      <div class="project-container">
        <h1>Projects</h1>
        <div class="inner-wrapper">
          <div class="project-name">
            <h2>Amazon Extension</h2>
            <h4>2019.7 - 2019.11</h4>
          </div>
          <div class="project-content">
            <p>Build a chrome extension for Freelancer during Aug 2019 to Nov 2019.</p>
            <p>This plugin is designed for Amazon which included several functionalities: price comparing, review summarizing, price history and advertisement blocking.</p>
          </div>
          <div class="project-jump">
            <button>View Source Code</button>
          </div>
        </div>
        <div class="inner-wrapper">
          <div class="project-name">
            <h2>Re-reddit</h2>
            <h4>2018.7 - 2018.11</h4>
          </div>
          <div class="project-content">
            <p>This project is to build a website. Our team is going to rebuild the Reddit.</p>
            <p>We implement Python and Django frame to build this website and render the site with Materialize. The website can let users to create threads, add comments and upload files and so on. </p>
          </div>
          <div class="project-jump">
            <button>View Source Code</button>
          </div>
        </div>
        <div class="inner-wrapper">
          <div class="project-name">
            <h2>Pool Game</h2>
            <h4>2018.3 - 2018.7</h4>
          </div>
          <div class="project-content">
            <p>A pool game developed in C++ (QT Creator) with several Design Patterns like Abstract Factory, Memento and so on. This game includes many special functions such as: big balls include small-children balls and big balls can be broken to release inner balls. This game can also roll back to previous steps.</p>
          </div>
          <div class="project-jump">
            <button>View Source Code</button>
          </div>
        </div>
        </div>
      <div class="project-container">
        <h1>Careers</h1>
        <div class="inner-wrapper">
          <div class="project-name">
            <h2>Neusoft Corporation</h2>
            <h4>Dec 2018 – Mar 2019</h4>
          </div>
          <div class="project-content">
            <p>Work in a project team at Sichuan provincial people's hospital
              Write three application interfaces for the hospital’s information system, manage the intranet database and become the intermediary between the hospital and Neusoft
            </p>
            </div>
          <div class="project-jump" style="visibility: hidden">
            <button>View Source Code</button>
          </div>
        </div>
        <div class="inner-wrapper">
          <div class="project-name">
            <h2>China Telecom</h2>
            <h4>June 2016 – Sept 2016</h4>
          </div>
          <div class="project-content">
            <p>Work as a team member to maintain the database
              Collect date for an online application, promote and popularize new application
              </p>
            </div>
          <div class="project-jump" style="visibility: hidden">
            <button>View Source Code</button>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "CodePage",
    }
</script>

<style scoped>
  @import "../assets/css/CodePage.css";
</style>
