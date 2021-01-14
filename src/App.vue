<template>
  <Hero/>
  <Result/>
  <Lab/>
</template>

<script>
import Hero from './components/Hero.vue'
import Result from './components/Result.vue'
import Lab from './components/Lab.vue'

export default {
  name: 'App',
  components: {
    Hero,
    Result,
    Lab
  }
}
</script>
<style>
  * {
    margin: 0;
    box-sizing: border-box;
  }
</style>