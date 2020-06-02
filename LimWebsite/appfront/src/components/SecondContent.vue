<template>
  <div class="container">
    <div class="first">
      <h2>this is second content</h2>
    </div>
    <div class="second">
      <h2>this is second content</h2>
    </div>
  </div>

</template>

<script>
    export default {
        name: "SecondContent"
    }
</script>

<style scoped>
  .container{
    width: 100%;
  }
  .first{
    background-image: url("../assets/sydney.jpg");
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    height: 1000px;
    width: 100%;
    /*position: absolute;*/
  }
  .second{
    background-image: url("../assets/sydney2.jpg");
    height: 1000px;
    top: 1000px;
    /*position: relative;*/
  }
</style>
