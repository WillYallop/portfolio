<template>
  <div class="pageContainer">
    <div class="pageWrapper paddHori paddVert">
      <!-- Header -->
      <div class="pageHeader">
        <div class="pHTextarea">
          <h1 class="pHH1">Contact</h1>
          <p class="pHP">Have a question? Feel free to send me a message!</p>
        </div>
        <div class="pHBtnCon">
          <nuxt-link class="pHBtn" to="/"><fa class="fas" :icon="['fas', 'th-large']" /></nuxt-link>
        </div>
      </div>
      <!-- component flex container -->
      <div class="compContainer" :class="{ 'fadeUpAni' : animateComp }">

        <div class="col2">
          <contactForm/>
        </div>
        <div class="col1">
          <nextSteps/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
//components
import nextSteps from '@/components/ContactComponents.vue/NextSteps'
import contactForm from '@/components/ContactComponents.vue/ContactForm'

export default {
  data() {
    return {
      animateComp: true
    }
  },
  mounted() {
    setTimeout(() => {
      this.animateComp = false
    }, 300)
  },
  components: {
    nextSteps,
    contactForm
  },
  methods: {

  }
}
</script>

<style scoped>
.compContainer {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  transition: 0.3s;
  
}
.fadeUpAni {
  transform: translate(0,50px);
  opacity: 0;
}
.col1 {
  width: 30%;
  min-height: 100%;
}
.col2 {
  width: 70%;
  height: 100%;
}

@media only screen and (max-width: 1350px) {
  .col1 {width: 40%;}
  .col2 {width: 60%;}
}
@media only screen and (max-width: 1150px) {
  .col1 {width: 100%; margin-top: 20px;}
  .col2 {width: 100%;}
}
@media only screen and (max-width: 1024px) {
  .col1 {width: 40%; margin-top: 0;}
  .col2 {width: 60%;}
}
@media only screen and (max-width: 750px) {
  .col1 {width: 100%; margin-top: 20px;}
  .col2 {width: 100%;}
}
</style>
