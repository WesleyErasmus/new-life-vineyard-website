<template>
  <div class="wrapper">
    <nav id="app-navbar">
      <div class="church-logo-container">
        <img class="nlv-logo" src="./assets/nlv-logo-1.jpg" alt="NLV Logo">
      </div>
      <div class="nav-links">
        <RouterLink class="nav-link-item" :to="{ name: 'home' }">Home</RouterLink>
        <RouterLink class="nav-link-item" :to="{ name: 'home' }">Church mission</RouterLink>
        <RouterLink class="nav-link-item" :to="{ name: 'home' }">Ministries</RouterLink>
        <RouterLink class="nav-link-item" :to="{ name: 'home' }">Sermons</RouterLink>
        <RouterLink class="nav-link-item" :to="{ name: 'home' }">Prayer/Healing Rooms</RouterLink>
        <RouterLink class="nav-link-item dropdown" :to="{ name: 'home' }">

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


        <RouterLink class="nav-link-item" :to="{ name: 'home' }">Who is Vineyard?</RouterLink>
        <RouterLink class="nav-link-item" :to="{ name: 'home' }">Giving</RouterLink>
        <RouterLink class="nav-link-item" :to="{ name: 'home' }">Contact</RouterLink>

      </div>

      <div class="church-member-container">
        <RouterLink class="nav-link-item" :to="{ name: 'home' }"><button>Become a member</button></RouterLink>
      </div>
    </nav>
    <!-- END OF NAVBAR -->

    <!-- Home Page Hero Image -->
    <HeroImage />

    <!-- Church Mission Statement -->
    <ChurchMission />

    <!-- Church Ministries -->
    <ChurchMinistries :ministries="ministries" />

    <!-- Sermons -->
    <Sermons />

    <!-- Follow us -->
    <JoinNewsletter />

    <!-- Footer -->
    <Footer />

  </div> <!-- End of app wrapper -->

  <router-view />
</template>

<script>
import { RouterLink, RouterView } from 'vue-router';

import HeroImage from './views/home_page/components/HeroImage.vue'
import ChurchMission from './views/home_page/components/ChurchMission.vue'
import ChurchMinistries from './views/home_page/components/ChurchMinistries.vue'
import Sermons from './views/home_page/components/Sermons.vue'
import JoinNewsletter from './views/home_page/components/JoinNewsletter.vue'
import Footer from '../src/components/Footer.vue'
export default {
  components: { HeroImage, ChurchMission, ChurchMinistries, Sermons, JoinNewsletter, Footer },
  data() {
    return {

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
#app-navbar {
  z-index: 1;
  position: fixed;
  width: 100vw;
  padding: 0 1.95rem;
  display: flex;
  justify-content: center;
  background: var(--secondary-color);
}

.church-logo-container {
  position: absolute;
  top: 0;
  left: 4%;
  height: 100%;
  display: flex;
  align-items: center;
}

.church-member-container {
  position: absolute;
  top: 0;
  right: 4%;
  height: 100%;
  display: flex;
  align-items: center;
}

.nav-links {
  height: 100%;
  padding: 20px 0 0;
  display: flex;
  align-items: center;
}

.nav-links a {
  height: 100%;
  margin: 10px 0 0 40px;
  font-size: calc(14px + 0.4rem);
  text-decoration: none;
  color: var(--primary-color);
  padding-bottom: 30px;
  border-bottom: 5px transparent solid;
}

.nav-links a:hover {
  color: green;
  border-bottom: 5px green solid;
}

.dropbtn {
  background-color: transparent;
  border: none;
}

.dropdown {
  position: relative;
  display: inline-block;
}

.dropdown-content {
  display: none;
  position: absolute;
  margin-top: 35px;
  background-color: ghostwhite;
  min-width: 500px;
  font-size: 12px;
  z-index: 1;
}

.dropdown-content a {
  color: black;
  padding: 12px 16px;
  margin: 0 10px 10px 10px;
  margin: 0;
  text-decoration: none;
  display: block;
}

.dropdown-content a:hover {
  background-color: #ddd;
}

.dropdown:hover .dropdown-content {
  display: block;
}

.nlv-logo {
  width: 75px;
  border-radius: 50%;
}

.sermons-heading {
  margin: 0 10%;
  padding: 4rem;
  width: 100%;
  margin: 0;
  text-align: center;
}
</style>
