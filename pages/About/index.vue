<template>
  <div class="pageContainer">
    <div class="pageWrapper paddHori paddVert">
      <!-- Header -->
      <div class="pageHeader">
        <div class="pHTextarea">
          <h1 class="pHH1">About Me</h1>
          <p class="pHP">Find out more about me as a developer and a person.</p>
        </div>
        <div class="pHBtnCon">
          <nuxt-link class="pHBtn" to="/contact"><fa class="fas" :icon="['fas', 'envelope']" /></nuxt-link>
        </div>
      </div>
      <!-- Component Container -->
      <div class="compCon">
        <!-- As developer -->
        <asDeveloper 
        v-if="currentComponent == 1"
        @change-component="changeComponent"/>
        <!-- As person -->
        <asPerson  
        v-if="currentComponent == 2"
        @change-component="changeComponent"/>
      </div>
    </div>
  </div>
</template>

<script>
import asDeveloper from '@/components/AboutComponents/AsDeveloper'
import asPerson from '@/components/AboutComponents/AsPerson'

export default {
  data() {
    return {
      currentComponent: 1,

    }
  },
  mounted() {

  },
  components: {
    asDeveloper,
    asPerson
  },
  methods: {
    changeComponent() {
      if(this.currentComponent == 1) {
        this.currentComponent = 2
      } else if (this.currentComponent == 2) {
        this.currentComponent =1
      }
    },

  }
}
</script>

<style scoped>

</style>
