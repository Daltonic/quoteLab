<template>
  <div>
    <Hero/>
    <Result/>
    <Lab/>
    <Imager v-if="captured"/>
    <Footer/>
  </div>
</template>

<script>
import Hero from './components/Hero.vue'
import Result from './components/Result.vue'
import Lab from './components/Lab.vue'
import Imager from './components/Imager.vue'
import Footer from './components/Footer.vue'
import { mapGetters } from 'vuex'

export default {
  name: 'App',
  data() {
    return {
      captured: false
    }
  },
  components: {
    Hero,
    Result,
    Lab,
    Imager,
    Footer,
  },
  computed: {
    ...mapGetters([
      'image'
    ])
  },
  watch: {
    image() {
      this.captured = !!this.image 
    }
  }
}
</script>
<style>
  * {
    margin: 0;
    box-sizing: border-box;
  }
</style>