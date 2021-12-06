<template>
  <div class="wrapper d-md-flex bg-light text-secondary">
    <navbar/>
    <main class="container">
      <about/>
    </main>
  </div>


</template>

<script>
import Navbar from './components/Navbar/Navbar.vue';
import About from './components/pages/About.vue';


export default {
  name: 'App',
  components: {
    Navbar,
    About
  },
  data() {
    return {
      
    }
  }
}
</script>

<style lang="scss">


</style>
