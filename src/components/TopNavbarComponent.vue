<template>
  <v-app-bar class="nav-contact-info" color="black">
    <v-app-bar-title class="text-center text-overline"
      >Email us: info@nlv.org.za | Call us: 021 2305808</v-app-bar-title
    >
    <v-hover v-slot="{ isHovering, props }" open-delay="200">
      <v-btn
        :color="isHovering ? 'red' : 'white'"
        :variant="isHovering ? 'elevated' : 'outlined'"
        :class="{ 'on-hover': isHovering }"
        v-bind="props"
        class="give-btn text-overline mb-3 mr-5"
        size="small"
        >Give</v-btn
      >
    </v-hover>
  </v-app-bar>
  <v-app-bar class="app-top-navbar">
    <!-- Navbar App Logo -->
    <RouterLink
      class="nav-link-item text-decoration-none text-black"
      :to="{ name: 'home' }"
    >
      <div class="app-top-nav-logo-container">
        <img
          class="app-top-nav-logo"
          src="src\assets\nlv-logo.jpg"
          alt="NLV Top Navigation Logo"
        />

        <v-btn class="text-h5 ml-4">
          New Life Vineyard

          <!-- ==== Tooltip ==== -->
          <v-tooltip activator="parent" location="right">
            <span class="text-white text-caption"> BACK TO HOME PAGE 
              <v-icon icon="mdi-home" class="mb-1" />
            </span>
          </v-tooltip>
          <!-- ==== Tooltip End ==== -->

        </v-btn>
      </div>
    </RouterLink>

    <v-spacer></v-spacer>

    <!-- Navbar Meu Links -->
    <div class="top-nav-menu-tabs">
      <RouterLink class="nav-tab-item" :to="{ name: 'home' }">HOME</RouterLink>
      <RouterLink class="nav-tab-item" :to="{ name: 'ministries' }"
        >MINISTRIES</RouterLink
      >
      <RouterLink class="nav-tab-item" :to="{ name: 'giving' }"
        >GIVING</RouterLink
      >
      <RouterLink class="nav-tab-item" :to="{ name: 'about' }"
        >ABOUT US</RouterLink
      >
      <RouterLink class="nav-tab-item" :to="{ name: 'contact' }"
        >CONTACT</RouterLink
      >
    </div>

    <!-- End of Navbar Meu Links -->
  </v-app-bar>
  <div class="nav-spacing"></div>
</template>

<script>
export default {};
</script>

<style scoped>
.nav-contact-info {
  height: 50px;
  box-shadow: none !important;
}
.nav-contact-info div {
  height: 40px;
}

.app-top-navbar {
  height: 85px;
  position: fixed;
  top: 50px !important;
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
  padding-left: 15rem;
}

.app-top-nav-logo {
  width: 55px;
  border-radius: 50%;
}

/* Navbar Logo image container */
.app-top-nav-logo-container {
  display: flex;
  align-items: center;
}

/* Navbar menu buttons spacing */
.top-nav-menu-tabs {
  padding: 20px 0 0;
  display: flex;
  align-items: center;
  right: 15rem;
}

/* Navbar link/button styling */
.top-nav-menu-tabs a {
  margin: 10px 0 0 40px;
  text-decoration: none;
  color: black;
  margin-bottom: 20px;
  border-bottom: 2px transparent solid;
}

/* Navbar link hover effects */
.top-nav-menu-tabs a:hover {
  color: #444;
  border-bottom: 2px #385f73 solid;
}
.nav-spacing {
  margin-bottom: 84px !important;
}
.give-btn:hover {
  transform: var(--btn-hover-scale);
  box-shadow: rgba(255, 255, 255, 0.56) 0px 22px 70px 10px !important;
}
</style>
