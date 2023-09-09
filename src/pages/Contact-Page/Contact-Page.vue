<template>
  <v-main id="app-pages-global-styling">
    <!-- Page Hero Image -->
    <div class="giving-page-container">
      <!-- <v-img class="giving-page-hero"
        src="https://images.unsplash.com/photo-1563656157432-67560011e209?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80"
        aspect-ratio="1" cover> -->
      <v-img class="giving-page-hero"
        src="https://images.pexels.com/photos/4873260/pexels-photo-4873260.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        aspect-ratio="1" cover>
        <div class="hero-meta-data">
          <div>
            <v-chip class="ma-2" color="" label>
              <v-icon start icon="mdi-map-marker"></v-icon>
              GET IN TOUCH
            </v-chip>
            <v-card-title class="hero-title text-h2 mb-1">
              Contact Us
            </v-card-title>
            <v-card-text class="about-us-card-text">
              <div class="text-h6 text-overline hero-text">
                New life vineyard church contact information.
              </div>
            </v-card-text>
          </div>
        </div>
      </v-img>
    </div>

    <!-- Back to home button -->
    <div class="home-btn-container mt-1">
    <v-card-actions>
      <v-btn color="#385F73">Go back to home page</v-btn>
    </v-card-actions>
    </div>


    <!-- Page Content Container -->
    <div class="contact-page-flex-container">
      <!-- Contact Form Component -->
      <div class="contact-form-container">
        <ContactForm />
      </div>

      <!-- Contact Details Cards  -->
      <!-- USE ONE CARD TEMPLATE FROM DATA IN SCRIPT -->
      <div class="info-cards-container">
        <v-card width="385" variant="" color="" class="contact-info-card">
          <v-card-item>
            <v-card-title class="text-overline text-medium-emphasis">Office Contact Number</v-card-title>
            <v-chip class="ma-1" color="#385F73" label>
            <v-card-subtitle> Call us</v-card-subtitle>
            </v-chip>
          </v-card-item>

          <v-card-text class="text-black text-overline"> <v-icon start icon="mdi-phone"></v-icon> (021) 384 5987 </v-card-text>
        </v-card>

        <v-card width="" variant="" color="" class="contact-info-card">
          <v-card-item>
            <v-card-title class="text-overline text-medium-emphasis">Email Address</v-card-title>

            <v-chip class="ma-1" color="#385F73" label>
            <v-card-subtitle>send us an email</v-card-subtitle>
            </v-chip>
          </v-card-item>

          <v-card-text class="text-black text-overline"><v-icon start icon="mdi-email-outline"></v-icon> info@newlife.co.za </v-card-text>
        </v-card>

        <v-card width="" variant="" color="" class="contact-info-card">
          <v-card-item>
            <v-card-title class="text-overline text-medium-emphasis">Church Physical Address</v-card-title>
            <v-chip class="ma-1" color="#385F73" label>
            <v-card-subtitle>Find us</v-card-subtitle>
            </v-chip>
          </v-card-item>

          <v-card-text class="text-black text-overline"><v-icon start icon="mdi-map-marker-radius"></v-icon> 50 Old Mill Rd, Ndabeni, Cape Town, 7405
          </v-card-text>
        </v-card>
      </div>
    </div>
    <!-- Google Maps Component -->
    <div class="google-maps-container">
      <GoogleMapsEmbed />
    </div>
  </v-main>
</template>

<script>
import GoogleMapsEmbed from "./Components/GoogleMapsEmbed.vue";
import ContactForm from "./Components/ContactForm.vue";
export default {
  components: { GoogleMapsEmbed, ContactForm },
};
</script>

<style scoped>
.home-btn-container {
  max-width: 1440px;
  margin: auto;
}
.contact-page-flex-container {
  max-width: 1440px;
  display: flex;
  align-items: flex-end;
  margin: 0 auto;
  margin-top: 2rem;
  position: relative;
}

.info-cards-container {

}

.contact-info-card {
  margin-bottom: 2rem;
  margin-left: 1.5rem;
  /* border: 1px rgb(221, 221, 221) solid; */
}

.giving-page-hero {
  width: 100vw;
  height: 45vh;
  aspect-ratio: 16 / 9;
}
</style>
