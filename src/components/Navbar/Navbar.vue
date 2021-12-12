<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
    <div class="container-fluid d-lg-flex flex-lg-column m-4 mb-auto">
      <navbrand />
      <navbar-toggler/>
      <navlinks/>
    </div>
  </nav>
</template>

<script>
import Navlinks from './Navlinks.vue';
import Navbrand from './Navbrand.vue';
import NavbarToggler from './NavbarToggler.vue';

export default {
    name: 'navbar',
    components: {
      Navlinks,
      Navbrand,
      NavbarToggler
    }
}
</script>