<template>
  <v-main id="app-pages-global-styling">
    <div class="giving-page-container">
      <v-img class="giving-page-hero"
        src="https://images.pexels.com/photos/1198171/pexels-photo-1198171.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        aspect-ratio="1" cover>
        <div class="hero-meta-data">
          <div>
            <v-chip class="ma-2 text-overline" label>
              <v-icon start icon="mdi-human-handsup"></v-icon>
              Get Involved
            </v-chip>
            <v-card-title class="hero-title text-h2 mb-1">
              New Life Vineyard's Ministries
            </v-card-title>
            <v-card-text class="hero-text">
              <div class="text-h6 text-overline">
                At New Life Vineyard we aim to provide ways in which everyone can serve God in
                the church and in the community.
              </div>
            </v-card-text>
          </div>
        </div>
      </v-img>
    </div>

    <v-container>
      <div class="ministries-heading-and-blurb-container">
        <v-chip label color="#385F73" class="mb-4 text-overline">
          Find Your Place
        </v-chip>
        <div class="church-ministries-heading text-h4">Find Your Place To Grow
        </div>
        <p class="church-ministries-blurb text-medium-emphasis text-overline">
          NLV ministries is a way where members can serve God. We have ministries for our children, youth, women, and
          men.
          We
          offer weekly prayer and counselling to those in need.
        </p>
      </div>

        <!-- Ministry Cards -->
      <MinistryCards />

    </v-container>


  </v-main>
</template>

<script>
import MinistryCards from "./components/MinistryCards.vue";
export default {
  components: { MinistryCards },
};
</script>

<style scoped>
.giving-page-container {
  margin-bottom: 1.25rem;
}

.giving-page-hero {
  width: 100vw;
  height: 45vh;
  aspect-ratio: 16 / 9;
}

.ministries-heading-and-blurb-container {
  max-width: 1440px;
  display: block;
  margin: 0 auto;
  padding-left: 1.125rem;
}

.church-ministries-heading {
  margin-bottom: 1rem;
}

.church-ministries-blurb {
  width: 60%;
  margin-bottom: 3rem;
  font-size: calc(12px + 0.4rem);
  /* color: #385F73 !important; */
}
</style>
