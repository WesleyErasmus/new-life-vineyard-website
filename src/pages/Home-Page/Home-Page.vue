<template>
  <v-main id="app-pages-global-styling"
  class="app-global-background">
    <!--  Hero Image -->
    <HeroComponent />

    <!-- Mission Statement -->
    <ChurchMission />

    <!-- Facebook Live Feed -->
    <FacebookEmbedComponent />

    <!-- Church Ministries -->
    <ChurchMinistries />

    <!-- Give / Donations -->
    <GiveComponent />

  </v-main>
</template>

<script>
import HeroComponent from "./components/1-HeroComponent.vue";
import ChurchMission from "./components/2-ChurchMission.vue";
import FacebookEmbedComponent from "./components/3-FacebookEmbedComponent.vue";
import ChurchMinistries from "./components/4-ChurchMinistries.vue";
import GiveComponent from "./components/5-GiveComponent.vue";

export default {
  components: {
    HeroComponent,
    ChurchMission,
    FacebookEmbedComponent,
    ChurchMinistries,
    GiveComponent,
  },
};
</script>
<style scoped></style>
