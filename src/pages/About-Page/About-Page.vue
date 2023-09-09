<template>
  <v-main id="app-pages-global-styling">

    <div class="mx-auto page-hero" max-width="" variant="">
      <div>
        <v-img
          src="https://images.unsplash.com/photo-1478147427282-58a87a120781?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          aspect-ratio="1" cover class="bg-grey-lighten-2 about-us-hero-img">
          <div class="hero-meta-data">
            <div>
              <v-chip class="ma-2" color="" label>
                <v-icon start icon="mdi-church"></v-icon>
                OUR STORY
              </v-chip>
              <v-card-title class="hero-title text-h2 mb-1">
                About New Life Vineyard
              </v-card-title>
              <v-card-text>
                <div class="text-h6 text-overline hero-text">
                  NLV has been around for 50 years. Worship / mission.
                  Multi cultural.
                </div>
              </v-card-text>
            </div>
          </div>
        </v-img>
      </div>

    </div>
    <div class="about-us-page-container">
      
      <OurStoryComponent />
      <v-divider></v-divider>
      
      <WhatDrivesUs />
      <v-divider></v-divider>

      <DiversityComponent />

      
    </div>

  </v-main>
</template>

<script>
import OurStoryComponent from "./components/1-OurStoryComponent.vue";
import DiversityComponent from "./components/2-DiversityComponent.vue";
import WhatDrivesUs from "./components/3-WhatDrivesUsComponent.vue";
export default {
  components: {
    OurStoryComponent,
    DiversityComponent,
    WhatDrivesUs,
  },
};
</script>

<style scoped>
.about-us-page-container {
  max-width: 1440px;
  display: block;
  margin: 0 auto;
}

.page-hero {
  
}

.about-us-hero-img {
  width: 100vw;
  height: 45vh;
  aspect-ratio: 16 / 9;
  background: rgba(0, 0, 0, 0.127);
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
}

</style>
