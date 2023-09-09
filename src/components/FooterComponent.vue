<template>
  <SubscribeComponent />

  <div class="footer-component">
    <main class="footer-content">
      <v-row>
        <v-col>
          <ul class="footer-links">
            <li>
              <div class="text-h6">Our Address</div>
            </li>
            <li>123 Old Mill Road</li>
            <li>Ndabeni Park,</li>
            <li>Pinelands,</li>
            <li>Cape Town</li>
            <li>South Africa</li>
            <li>7440</li>
            <li>
              <v-btn variant="tonal" block class="directions-btn mt-5">
                <v-icon icon="mdi-map-marker" class="get-directions-btn-icon" />
                Get Directions

                <!-- Google Maps Modal -->

                <v-dialog
                  
                  v-model="dialog"
                  activator="parent"
                  theme="light"
                >
                  <v-card
                    width="50%"
                    height="500px"
                    variant="flat"
                    color="white"
                    theme=""
                    class="mx-auto text-center pa-5"
                  >
                    <GoogleMapsEmbed style="width: 100%" />

                    <v-card-actions>
                      <v-btn color="#385F73" block @click="dialog = false"
                        >Close Maps</v-btn
                      >
                    </v-card-actions>
                  </v-card>
                </v-dialog>
                <!-- End of Modal -->
              </v-btn>
            </li>
          </ul>
        </v-col>
        <v-col>
          <ul class="footer-links">
            <li>
              <div class="text-h6">Get in Touch</div>
            </li>
            <li>Phone (021) 1234567</li>
            <li>WhatsApp 083 4567890</li>
            <li>Email info@nlv.org</li>
            <li>Facebook</li>
            <li>Newsletter</li>
            <li>Become a Member</li>
          </ul>
        </v-col>
        <v-col>
          <ul class="footer-links">
            <li>
              <div class="text-h6">Church Ministries</div>
            </li>
            <li>Prayer and Christian Counselling</li>
            <li>Children's Church</li>
            <li>Youth Evenings</li>
            <li>Farming God's Way</li>
            <li>Men's Ministry</li>
            <li>Women's Ministry</li>
            <li>Worship Ministry</li>
            <li>Outreach Ministry</li>
          </ul>
        </v-col>
        <v-col>
          <ul class="footer-links">
            <li>
              <div class="text-h6">Resources</div>
            </li>
            <li>Sermons</li>
            <li>Christian Resources</li>
            <li>Counselling</li>
            <li>Dealing with Grief</li>
            <li>Becoming a New Christian</li>
          </ul>
        </v-col>
      </v-row>
    </main>

    <div class="copyright-container">
      © 2022 nlv.co.za. All rights reserved.
    </div>
  </div>
</template>

<script>
import SubscribeComponent from "./SubscribeComponent.vue";
import GoogleMapsEmbed from "./GoogleMapsEmbed.vue";
export default {
  components: { 
    SubscribeComponent,
    GoogleMapsEmbed,
  },
  data() {
    return {
      dialog: false,
    };
  },
};
</script>

<style scoped>
.footer-component {
  padding: 4rem 7rem;
  background: rgba(211, 211, 211, 0.37);
}
.footer-content {
  max-width: 1440px !important;
  display: block;
  margin: 0 auto;
}

li {
  font-size: small;
}
/* Footer Column Headings */
.text-h6 {
  color: #385f73;
}
.footer-links li {
  list-style-type: none;
  padding: 0.25rem 3vw;
}

.copyright-container {
  text-align: center;
  padding: 8rem 4rem 4rem 4rem;
}
.directions-btn {
  background: #000;
  color: #fff;
}
.get-directions-btn-icon {
  margin-right: 7px;
}
</style>
