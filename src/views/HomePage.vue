<template>
  <div class="home-page-wrapper">

    <!-- Home page Hero Image -->
    <div class="home-pg-hero-img">
      <img class="hero-img"
        src="https://images.unsplash.com/photo-1547656834-630c4efa3c19?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80">
    </div>

    <!-- Hero Image meta-data -->
    <div class="hero-img-meta-data">
      <h1 class="meta-data-header">New Life Vineyard Church</h1>
      <p class="meta-data-description">{{ welcomeMessage }}</p>
      <div class="meta-btns">
        <button class="meta-contact-btn">Get in touch</button>
        <button class="meta-get-prayer-btn">Receive Prayer</button>
      </div>
    </div>



  </div> <!-- End of app wrapper -->
</template>

<script>
export default {
  data() {
    return {
      welcomeMessage: "Welcome, come and join us every Sunday at 9:30am for the Church Service.",
    }
  },

}
</script>

<style scoped>
/* Hero image styling */
.hero-img {
  z-index: -1;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100vw;
  height: 100vh;
}

/* Hero image meta data */
.hero-img-meta-data {
  position: absolute;
  /* width: 500px; */
  top: 12vw;
  left: 4%;
  padding: 0;
  margin: 0;
  color: #fff;
}

.meta-data-header {
  font-size: 5.1rem;
  text-shadow: var(--shadows);
}

.meta-data-description {
  font-size: 1.25rem;
  text-shadow: var(--shadows);
}
.meta-btns button {
  margin-top: 34px;
  border-radius: 4px;
  margin-right: 1.05vw;
  padding: 0.85rem 2.35rem;
  border: none;
  font-size: calc(12px + 0.45rem);
  background: var(--secondary-color);
  box-shadow: rgba(0, 0, 0, 0.2) 0px 7px 29px 0px;
}

.meta-btns button:hover {
  background: rgb(129, 129, 129);
  color: #fff;
}
</style>
