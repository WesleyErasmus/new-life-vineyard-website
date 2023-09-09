<template>
  <div class="home-pg-hero-img">
  </div>

  <!-- Hero Image meta-data -->
  <div class="hero-img-meta-data text-end">
    
    <!-- Church Name Heading -->
    <h1 class="meta-data-header text-h1">New Life Vineyard Church</h1>
    <!-- <div> -->
    <v-chip class="ma-5 ml-4" color="white" label>
      <div class="hero-chip text-overline">COMMUNITY <span>|</span> WORSHIP <span>|</span> MISSION</div>
    </v-chip>
    <!-- </div> -->
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
/* Hero image styling */
.home-pg-hero-img {
  background: grey;
  background-image: url("https://images.unsplash.com/photo-1547656834-630c4efa3c19?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80");
  background-position: center;
  background-repeat: no-repeat;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;

  width: 100vw;
  height: 60vh;
  aspect-ratio: 16 / 9;
}

.home-pg-hero-img::after {
  content: "";
    position: absolute;
    background: linear-gradient(77deg, rgba(43, 43, 43, 0.274), transparent 85%);
    top: 0;
    left: -20rem;
    height: 60vh;
    opacity: 1;
    right: 10%;
    z-index: 1;
}

.hero-chip {
  font-size: medium !important;
   z-index: 2;
}
/* Hero image styling */

/* Hero image meta data */
.hero-img-meta-data {
  position: absolute;
  top: 20rem;
  left: 15rem;
  color: #fff;
 
}

.meta-data-header {
  z-index: 2;
/* Glowing text shadow */
      /* text-shadow: 0px 0px 6px rgba(255, 255, 255, 0.7); */
}
</style>
