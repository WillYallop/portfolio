<template>
  <div class="pageContainer">
    <!-- Header -->
    <div class="pageHeader">
      <h1 class="pHH1">About Me</h1>
      <p class="pHP">Find out more about me as a developer and a person.</p>
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
.compCon {
  padding: 0 50px 50px;
}

@media only screen and (max-width: 1024px) {
  .compCon {padding: 0 20px 20px;}
}

</style>
