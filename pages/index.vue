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
    head: {
    title: 'William Yallop | Portfolio',
    meta: [
      {
        hid: "description",
        name: 'description',
        content: 'Welcome to my website! View my a brief protfolio of my work and find out more about me.'
      },
      {
        hid: "og:url",
        property: 'og:url',
        content: 'https://williamyallop.com'
      },
      {
        hid: "og:type",
        property: 'og:type',
        content: 'website'
      },
      {
        hid: "og:title",
        property: 'og:title',
        content: 'William Yallop | Portfolio'
      },
      {
        hid: "og:description",
        property: 'og:description',
        content: 'Welcome to my website! View my a brief protfolio of my work and find out more about me.'
      }
    ],
  },
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
