<template>
  <Hero/>
  <Result/>
  <Lab/>
  <Footer/>
</template>

<script>
import Hero from './components/Hero.vue'
import Result from './components/Result.vue'
import Lab from './components/Lab.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'App',
  components: {
    Hero,
    Result,
    Lab,
    Footer,
  }
}
</script>
<style>
  * {
    margin: 0;
    box-sizing: border-box;
  }
</style>