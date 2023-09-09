<template>
  <v-main id="app-pages-global-styling" class="giving-page-container">
      <!-- <v-img
        class="giving-page-hero"
        src="https://images.pexels.com/photos/401213/pexels-photo-401213.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        aspect-ratio="1"
        cover
      > -->
      <v-img
        class="giving-page-hero"
        src="https://images.unsplash.com/photo-1629263560199-7ccdb9dc6013?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
        aspect-ratio="1"
        cover
      >
        <div class="hero-meta-data">
          <div>
            <v-chip class="giving-page-chip ma-2 text-caption text-white" label>
              <v-icon start icon="mdi-hand-heart"></v-icon>
              A HEART FOR GIVING
            </v-chip>
            <v-card-title class="hero-title text-h2 mb-1">
              Give to New Life Vineyard
            </v-card-title>
            <v-card-text class="hero-text">
              <div class="text-h6 text-overline">
              How you can give
              </div>
            </v-card-text>
          </div>
        </div>
      </v-img>
      <!-- End of Hero Image -->

<!-- Ways to give component -->
<WaysToGive />

  </v-main>
  
</template>

<script>
import WaysToGive from './components/WaysToGive.vue';
export default {
  components: {
    WaysToGive,
  },

};
</script>

<style scoped>
.giving-page-container {
}
.giving-page-hero {
  width: 100vw;
  height: 45vh;
  aspect-ratio: 16 / 9;
}

.giving-page-chip {
  background: rgba(228, 58, 58, 0.856);
  z-index: 2;
}
.hero-meta-data {
  max-width: 1440px;
  position: relative;
    display: flex;
    margin: 0 auto;
    flex-direction: column;
    align-items: flex-start;
    justify-content: end;
    max-width: 1440px;
    height: 45vh;
    color: #fff;
    padding-bottom: 3rem;
}

.hero-meta-data::after {
  content: "";
  position: absolute;
  background: linear-gradient(77deg, rgba(77, 22, 22, 0.274), transparent 85%);
  top: 0;
  left: -20rem;
  height: 45vh;
  opacity: 1;
  right: 10%;
  z-index: 1;
}

/* Card 👇 */
.ways-to-give {
  max-width: 1440px;
  display: block;
  margin: 0 auto;
  box-shadow: none;
}
.giving-details-heading {
  margin: 2rem 0;
}
.giving-details {

}
.items-to-give {
  width: 800px;
  margin: 2rem 0;
}
.table-details {
  width: 300px;
}
td {
  border: none !important;
}
</style>
