<template>
  <div class="collapse navbar-collapse mt-3 w-100 justify-content-center" id="navbarNav">
    <ul class="navbar-nav d-flex-lg flex-column w-100 align-items-center">
      <li class="nav-item">
        <router-link 
          to="/about"
          class="nav-link">
          About
        </router-link>
      </li>
      <li class="nav-item">
        <router-link 
          to="/portfolio"
          class="nav-link">
          Portfolio
        </router-link>
      </li>
      <li class="nav-item">
        <router-link 
          to="/skills"
          class="nav-link">
          Skills
        </router-link>
      </li>
      <li class="nav-item">
        <router-link 
          to="/contact"
          class="nav-link">
          Contact
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'navlinks'
    
}
</script>