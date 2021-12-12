<template>
  <div class="wrapper d-lg-flex bg-light text-secondary">
    <navbar/>
    <main class="container overflow-auto p-4">
      <router-view/>
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
