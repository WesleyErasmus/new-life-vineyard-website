<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <v-app id="app-container">
    <TopNavbarComponent />

    <RouterView />

    <FooterComponent />


  </v-app>
</template>
<script>
import TopNavbarComponent from "../src/components/TopNavbarComponent.vue";
import FooterComponent from "./components/FooterComponent.vue";
export default {
  components: { TopNavbarComponent, FooterComponent },
};

</script>

<style scoped>
#app-container {
  background-color: #416e850a;
}
</style>
