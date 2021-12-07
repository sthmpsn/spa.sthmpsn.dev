<template>
  <div class="collapse navbar-collapse mt-3" id="navbarNav">
    <ul class="navbar-nav d-flex-md flex-column">
      <li class="nav-item">
        <router-link 
          to="/about"
          class="nav-link active">
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
          to="/contact"
          class="nav-link">
          Contact
        </router-link>
      </li>
      <li class="nav-item">
        <router-link 
          to="/skills"
          class="nav-link">
          Skills
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