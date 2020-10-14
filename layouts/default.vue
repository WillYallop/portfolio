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
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;700;900&display=swap');

html {
  -webkit-tap-highlight-color: rgba(0,0,0,0) !important;
  -webkit-tap-highlight-color: transparent !important;
  font-family: 'Open Sans', sans-serif;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  background-color: var(--bg-color);
  height: 100%;
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

/* Color Vars */
:root {
  --bg-color: #FFF;
  --secondary-bg-color: #F8F8F8;
  --title-text: #000000;
  --body-text: #1F1F1F;
}

/* Page */
.pageContainer {
  padding-left: 350px;
  width: 100%;
  min-height: 100%;
}
/* Page Header */
.pageHeader {
  border-bottom: 1px solid #EAEAEA;
  padding-bottom: 20px;
  margin-bottom: 20px;
  display: flex;
  justify-content: space-between;
}
.pHTextarea {
  padding-right: 40px;
}
.pHH1 {
  font-size: 24px; 
  font-weight: 900;
  color: var(--title-text);
}
.pHP {
  margin-top: 10px;
  color: var(--body-text);
}
.pHBtn {
  display: block;
  height: 40px;
  width: 40px;
  background-color: #000000;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.3s;
  padding: 0;
}
.pHBtn .fas {
  color: #FFF;
  transition: 0.3s;
}
.pHBtn:hover .fas {
  color: #1359FB;
}

/* font sizes */
p {color: var(--body-text);}
.p14 {font-size: 14px;}

/* Global Padding */
.paddHori {
  padding-left: 40px;
  padding-right: 40px;
}
.paddVert {
  padding-top: 40px;
  padding-bottom: 40px;
}

@media only screen and (max-width: 1024px) {
  .pageContainer {padding: 0; position: absolute; top: 0; left: 0; right: 0; transition:  0.3s; transition-timing-function: ease-in-out; padding-top: 60px;}
  .pageSlide {left: -100%; right: -100%;}
  /* Global Padding */
  .paddHori {padding-left: 20px;padding-right: 20px;}
  .paddVert {padding-top: 40px;padding-bottom: 40px;}
}
</style>
