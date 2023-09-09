<template>
  <!-- <div class="services-container">
  <div>
<img
class="page-image"
src="https://images.unsplash.com/photo-1634334867745-376b3c609ed9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="">
  </div>
  <div class="text-body">
    <h1 class="text-h3 page-heading">Sunday Services</h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis esse quasi deleniti, quisquam molestias porro maxime vero provident expedita asperiores recusandae officiis nulla eaque. Dicta ullam maxime temporibus quo quas molestias vero modi reiciendis, praesentium eius laboriosam? Modi, repellat natus!</p>
    <br>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis esse quasi deleniti, quisquam molestias porro maxime vero provident expedita asperiores recusandae officiis nulla eaque. Dicta ullam maxime temporibus quo quas molestias vero modi reiciendis, praesentium eius laboriosam? Modi, repellat natus!</p>
    <br>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis esse quasi deleniti.</p>
  </div>
</div> -->

  <v-main id="app-pages-global-styling" class="about-us-page-container">
    <div class="mx-auto page-hero" max-width="" variant="">
      <div class="text-align-center">
        <v-img
          src="https://images.unsplash.com/photo-1543702404-38c2035462ad?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          aspect-ratio="1"
          cover
          class="bg-grey-lighten-2 about-us-hero-img"
        >
          <!-- <v-chip class="ma-2 ml-4" color="white" label>
            <v-icon start icon="mdi-church"></v-icon>
            SUNDAY SERVICES
          </v-chip> -->
          <v-card-title class="about-us-subtitle">Join us every Sunday 9:30 am.</v-card-title>
          <v-card-title class="about-us-card-title text-h2 mb-1">
            Sunday Morning Services
          </v-card-title>
          <v-card-text class="about-us-card-text">
            Visit us for our Sunday services start at 9:30 am where someone will welcome at the door. Our services consists of a time of worship followed by a time of sharing God's Word. We serve coffee and tea after the service.
          </v-card-text>
        </v-img>
      </div>
    </div>
  </v-main>
</template>

<script>
export default {};
</script>

<style scoped>
.about-us-page-container {
  margin-bottom: 1rem;
}

.page-hero {
}

.about-us-hero-img {
  height: 450px;
  padding: 5rem 5rem 0 5rem;
  background: rgba(0, 0, 0, 0.127);
  display: flex;
  align-items: flex-end;
  text-align: center;
}

.about-us-subtitle {
  color: #fff;
  margin-bottom: 0;
  padding-bottom: 0;
  font-weight: var(--bold-font);
}
.about-us-card-title {
  font-weight: var(--bold-font);
  color: #fff;
}

.about-us-card-text {
  width: 900px;
  color: #fff;
  display: block;
  margin: 0 auto;
}


/* .services-container {
    display: flex;
    margin: 0 auto;
    margin-top: 100px;
    margin-bottom: 2rem;
}
.page-heading {
    margin-bottom: 1rem;
}
.page-image {
    width: 35vw;
}
.text-body {
    padding: 0rem 3rem;
    width: 35vw;
} */
</style>
