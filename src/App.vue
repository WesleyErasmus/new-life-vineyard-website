<template>
  <div class="wrapper">
    <nav id="app-navbar">
      <div class="church-logo-container">
        <img class="nlv-logo" src="./assets/nlv-logo-1.jpg" alt="NLV Logo">
      </div>
      <div class="nav-links">
        <RouterLink :to="{ name: 'home' }">Home</RouterLink>
        <RouterLink :to="{ name: 'home' }">Our mission</RouterLink>
        <RouterLink :to="{ name: 'home' }">Prayer</RouterLink>
        <RouterLink :to="{ name: 'home' }">Giving</RouterLink>
        <RouterLink :to="{ name: 'home' }">Become a member</RouterLink>
        <RouterLink :to="{ name: 'home' }">Contact</RouterLink>
      </div>
    </nav>


  </div> <!-- End of app wrapper -->
  <RouterView />
</template>

<script>
import { RouterLink, RouterView } from 'vue-router';

export default {

}
</script>

<style scoped>
#app-navbar {
  padding: 1.65rem;
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

.nav-links {
  height: 100%;
  padding: 0 20px;
  display: flex;
  align-items: center;
}

.nav-links a {
  height: 100%;
  margin: 10px 0 10px 20px;

}

.nlv-logo {
  width: 75px;
  border-radius: 50%;
}

.nav-links {
  font-size: 20px;
}

a,
.green {
  text-decoration: none;
  color: var(--primary-color);
  transition: 0.4s;
}


@media (hover: hover) {
  a:hover {
    color: #ddd;
    text-decoration: underline 3px solid var(--primary-color);
  }
}
</style>
