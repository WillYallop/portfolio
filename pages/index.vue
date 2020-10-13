<template>
  <div class="pageContainer">
    <div class="pageWrapper paddHori paddVert">
      <!-- Header -->
      <div class="pageHeader">
        <div class="pHTextarea">
          <h1 class="pHH1">Portfolio</h1>
          <p class="pHP">Browse my selection of single page sites and web applications</p>
        </div>
        <div class="pHBtnCon">
          <nuxt-link class="pHBtn" to="/contact"><fa class="fas" :icon="['fas', 'envelope']" /></nuxt-link>
        </div>
      </div>
      <!-- Portfolio -->
      <Portfolio/>
      <!-- More info modal -->
      <moreInfoModal v-if="modalStatus"/>
    </div>
  </div>
</template>

<script>
//components
import Portfolio from '@/components/HomeComponents/Portfolio'
import moreInfoModal from '@/components/HomeComponents/MoreInfoModal'

export default {
  data() {
    return {

    }
  },
  mounted() {

  },
  computed: {
    modalStatus() {
      return this.$store.state.modal.modalStatus
    },
  },
  components: {
    Portfolio,
    moreInfoModal
    
  },
  methods: {

  }
}
</script>

<style scoped>

</style>
