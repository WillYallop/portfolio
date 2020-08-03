<template>
  <div class="siteContainer" :class="{ 'hideOverflow' : navOpen }">
    <navbar :navOpen="navOpen" @close-nav="navOpen = false"/>
    <mobileHeader :navOpen="navOpen" @nav-toggle="navOpen = !navOpen"/>
    <Nuxt :class="{ 'pageSlide' : navOpen }"/>
  </div>
</template>

<script>
//components
import mobileHeader from '@/components/GlobalComponents/MobileHeader'
import navbar from '@/components/GlobalComponents/Navbar'

export default {
  data() {
    return {
      navOpen: false,
    }
  },
  components: {
    mobileHeader,
    navbar
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;700&display=swap');

html {
  -webkit-tap-highlight-color: rgba(0,0,0,0) !important;
  -webkit-tap-highlight-color: transparent !important;
  font-family: 'Open Sans', sans-serif;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  background-color: #222222;
  height: 100%;
  color: #FFF;
}
body {
  min-height: 100%;
}

button {font-family: 'Open Sans', sans-serif;}
input {font-family: 'Open Sans', sans-serif;}
textarea {font-family: 'Open Sans', sans-serif;}
select {font-family: 'Open Sans', sans-serif;}
button:focus {outline: none;}
input:focus {outline: none;}
textarea:focus {outline: none;}
select:focus {outline: none;}
::selection {background-color: #2F9FFF; color: #FFF;}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
  outline: none;
}

.siteContainer {
  min-height: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
}
.hideOverflow {
  overflow: hidden;
}

.pageContainer {
  padding-left: 350px;
  width: 100%;
  min-height: 100%;
}
.pageHeader {
  padding: 50px;
}
.pHH1 {font-size: 24px;}
.pHP {margin-top: 10px;}

/* font sizes */
p {color: #A7A7A7;}
.p14 {font-size: 14px;}



@media only screen and (max-width: 1024px) {
  .pageContainer {padding: 0; position: absolute; top: 0; left: 0; right: 0; transition:  0.3s; transition-timing-function: ease-in-out; padding-top: 60px;}
  .pageSlide {left: -100%; right: -100%;}
  .pageHeader {padding: 40px 20px 30px;}
}

</style>
