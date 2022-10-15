<template>
  <div class="wrapper">
    <!-- ========== Webpage Navbar ========== -->
    <nav id="app-navbar">

      <!-- Navbar Church Logo -->
      <div class="church-logo-container">
        <img class="nlv-logo" src="./assets/nlv-logo-1.jpg" alt="NLV Logo">
      </div>

      <!-- Navbar Meu Links -->
      <div class="nav-links">
        <RouterLink class="nav-link-item" :to="{ name: 'home' }">Home</RouterLink>
        <RouterLink class="nav-link-item" :to="{ name: 'home' }">Church mission</RouterLink>
        <RouterLink class="nav-link-item" :to="{ name: 'home' }">Ministries</RouterLink>
        <RouterLink class="nav-link-item" :to="{ name: 'home' }">Sermons</RouterLink>
        <RouterLink class="nav-link-item" :to="{ name: 'home' }">Prayer/Healing Rooms</RouterLink>
        <RouterLink class="nav-link-item dropdown" :to="{ name: 'home' }">

          <!-- Resources dropdown -->
          <button class="dropbtn dropdown-toggle">Resources</button>
          <div class="dropdown-content">
            <a href="#">What does it mean to be a Christian</a>
            <a href="#">Ready to give your life to Jesus</a>
            <a href="#">How to pray</a>
            <a href="#">The role of the church</a>
            <a href="#">What is the Bible</a>
            <a href="#">Dealing with grief</a>
          </div>
        </RouterLink>
        <!-- End of Resources dropdown -->

        <RouterLink class="nav-link-item" :to="{ name: 'home' }">Who is Vineyard?</RouterLink>
        <RouterLink class="nav-link-item" :to="{ name: 'home' }">Giving</RouterLink>
        <RouterLink class="nav-link-item" :to="{ name: 'home' }">Contact</RouterLink>
      </div>
      <!-- End of Navbar Meu Links -->

      <!-- Become a member button -->
      <div class="church-member-container">
        <RouterLink class="nav-link-item" :to="{ name: 'home' }"><button class="">Become a member</button></RouterLink>
      </div>
    </nav>
    <!-- ========== End of Navbar ========== -->


    <!-- ========== Home Page Hero Image Component ========== -->
    <HeroImage />


    <!-- ========== Church Mission Statement Component ========== -->
    <ChurchMission />


    <!-- ========== Church Facebook Embed ========== -->
    <FacebookEmbed />


    <!-- ========== Church Ministries Component ========== -->
    <HealingRooms :ministries="ministries" />


    <!-- ========== Church Ministries Component ========== -->
    <Ministries />


    <!-- ========== Church Ministries Component ========== -->
    <HealingRooms :ministries="ministries" />


    <!-- ========== Christian Resources Component ========== -->
    <Resources />

    <!-- ========== Give Component ========== -->
    <Give />


    <!-- ========== Newsletter Component ========== -->
    <JoinNewsletter />


    <!-- ========== Footer Component ========== -->
    <Footer />

  </div>
  <!-- End of app wrapper -->

  <router-view />

</template>

<script>
import { RouterLink, RouterView } from 'vue-router';

// ========== Component Imports ==========

// Hero Image
import HeroImage from './views/home_page/components/HeroImage.vue'
// Church Mission
import ChurchMission from './views/home_page/components/ChurchMission.vue'
// Facebook Embed
import FacebookEmbed from './views/home_page/components/FacebookEmbed.vue'
// Church Ministries
import HealingRooms from './views/home_page/components/HealingRooms.vue'
// Church Ministries
import Ministries from './views/home_page/components/Ministries.vue'
// Christian Resources
import Resources from './views/home_page/components/Resources.vue'
// Give
import Give from '../src/components/Give.vue'
// Newsletter
import JoinNewsletter from './views/home_page/components/JoinNewsletter.vue'
// Footer
import Footer from '../src/components/Footer.vue'

export default {
  components: { HeroImage, ChurchMission, FacebookEmbed, HealingRooms, Ministries, Resources, Give, JoinNewsletter, Footer },
  data() {
    return {
      // Imported from a local data file
      ministries: []
    }
  },
  mounted() {
    // Fetch team members data from local json data file
    fetch("../src/data/ministries.json")
      .then((res) => res.json())
      .then((data) => (this.ministries = data.ministries))
      .catch((err) => console.log(err.message));
  },
}
</script>

<style scoped>
/* ========== App Navbar ========== */
#app-navbar {
  z-index: 1;
  position: fixed;
  width: 100vw;
  padding: 0 1.95rem;
  display: flex;
  justify-content: center;
  background: var(--secondary-color);
}

/* Navbar Logo image container */
.church-logo-container {
  position: absolute;
  top: 0;
  left: 4%;
  height: 100%;
  display: flex;
  align-items: center;
}

/* Navbar logo img sizing and border */
.nlv-logo {
  width: 75px;
  border-radius: 50%;
}

/* Navbar become a member button */
.church-member-container {
  position: absolute;
  top: 0;
  right: 4%;
  height: 100%;
  display: flex;
  align-items: center;
}

/* Navbar menu buttons spacing */
.nav-links {
  height: 100%;
  padding: 20px 0 0;
  display: flex;
  align-items: center;
}

/* Navbar link/button styling */
.nav-links a {
  height: 100%;
  margin: 10px 0 0 40px;
  font-size: calc(14px + 0.4rem);
  text-decoration: none;
  color: var(--primary-color);
  padding-bottom: 30px;
  border-bottom: 5px transparent solid;
}

/* Navbar link hover effects */
.nav-links a:hover {
  color: green;
  border-bottom: 5px green solid;
}

/* ========== Resources dropdown ========== */
/* Resources nav button */
.dropbtn {
  background-color: transparent;
  border: none;
}

/* Dropdown router-link container */
.dropdown {
  position: relative;
  display: inline-block;
}

/* Resources dropdown menu items */
.dropdown-content {
  display: none;
  position: absolute;
  margin-top: 35px;
  background-color: ghostwhite;
  min-width: 500px;
  font-size: 12px;
  z-index: 1;
}

/* Dropdown menu link styling */
.dropdown-content a {
  color: black;
  padding: 12px 16px;
  margin: 0 10px 10px 10px;
  margin: 0;
  text-decoration: none;
  display: block;
}

/* Dropdown menu link hover effects */
.dropdown-content a:hover {
  background-color: #ddd;
}

/* Display Resources dropdown content on hover */
.dropdown:hover .dropdown-content {
  display: block;
}
</style>
