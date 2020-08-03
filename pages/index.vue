<template>
  <div class="pageContainer">
    <!-- Header -->
    <div class="pageHeader">
      <h1 class="pHH1">Portfolio</h1>
      <p class="pHP">Browse my selection of single page sites and web applications</p>
    </div>
    <!-- Portfolio -->
    <portfolio/>
    <!-- More info modal -->
    <moreInfoModal v-if="modalStatus"/>
  </div>
</template>

<script>
//components
import portfolio from '@/components/HomeComponents/Portfolio'
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
    portfolio,
    moreInfoModal
  },
  methods: {

  }
}
</script>

<style scoped>

</style>
