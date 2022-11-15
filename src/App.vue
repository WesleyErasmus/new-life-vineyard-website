<template>
  <!-- ========== Webpage Navbar ========== -->
  <Navbar />
  
  <!-- ========== Content of Webpages Display Here ========== -->
  <router-view />

  <!-- ========== Footer Component ========== -->
  <Footer />

</template>

<script>
import { RouterLink, RouterView } from 'vue-router';
// ========== Component Imports ==========

// Navbar
import Navbar from '/src/components/Navbar.vue'
// Footer
import Footer from '/src/components/Footer.vue'

export default {
  components: {
    Navbar, Footer
  }

}
</script>