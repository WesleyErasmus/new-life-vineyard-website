<template>
  <div class="home-page-wrapper">

    <!-- ========== Webpage Navbar ========== -->
    <Navbar />

    <!-- ========== End of Navbar ========== -->


    <!-- ========== Home Page Hero Image Component ========== -->
    <HeroImage />


    <!-- ========== Church Mission Statement Component ========== -->
    <ChurchMission />


    <!-- ========== Church Facebook Embed ========== -->
    <FacebookEmbed />


    <!-- ========== Church Ministries Component ========== -->
    <HealingRooms :ministries="ministries" />


    <!-- ========== Church Ministries Component ========== -->
    <Ministries />


    <!-- ========== Church Ministries Component ========== -->
    <HealingRooms :ministries="ministries" />


    <!-- ========== Christian Resources Component ========== -->
    <Resources />

    <!-- ========== Give Component ========== -->
    <Give />


    <!-- ========== Newsletter Component ========== -->
    <JoinNewsletter />


    <!-- ========== Footer Component ========== -->
    <Footer />


  </div> <!-- End of app wrapper -->

</template>

<script>
// ========== Component Imports ==========

// Hero Image
import HeroImage from './components/HeroImage.vue'

// Church Mission
import ChurchMission from './components/ChurchMission.vue'

// Facebook Embed
import FacebookEmbed from './components/FacebookEmbed.vue'

// Church Ministries
import HealingRooms from './components/HealingRooms.vue'

// Church Ministries
import Ministries from './components/Ministries.vue'

// Christian Resources
import Resources from './components/Resources.vue'

// Give
import Give from './components/Give.vue'

// Newsletter
import JoinNewsletter from './components/JoinNewsletter.vue'

export default {
  components: { HeroImage, ChurchMission, FacebookEmbed, HealingRooms, Ministries, Resources, Give, JoinNewsletter },
  data() {
    return {
      // Imported from a local data file
      ministries: []
    }
  },
  mounted() {
    // Fetch ministries data from local json data file
    fetch("../src/data/ministries.json")
      .then((res) => res.json())
      .then((data) => (this.ministries = data.ministries))
      .catch((err) => console.log(err.message));
  },
}
</script>

<style scoped>

</style>
