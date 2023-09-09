<template>
  <v-card id="give-component" variant="" theme="">
    <div class="heading-container">
      <!-- color="#385F73" -->

      <v-chip class="giving-page-chip mx-2 mt-8 text-caption text-white" label>
        <v-icon start icon="mdi-hand-heart"></v-icon>
        A HEART OF GIVING
      </v-chip>

      <div class="give-component-heading text-h4 pt-5">
        Giving to make a difference
      </div>
      <div class="give-component-subheading text-h6 my-2 text-overline">
        Your gift could help feed a family in need
      </div>
      <div class="give-component-description text-medium-emphasis">
        We believe that being a member of the community gives us the opportunity
        spread the love of Jesus through impact.
      </div>
    </div>

    <div class="give-container">
      <div class="data-container">
        <div>
          <div class="container-heading text-h4">Ways to Give</div>
          <p class="how-to-give-description text-medium-emphasis">
            New Life Vineyard is involved in serving communities through food
            and clothes donations. We provide warm blankets to those in need.
            You can also give by donating a money to the church. You can find
            our banking details by clicking on the Give button below.
          </p>
          <!-- find out more button -->
          <div class="give-buttons-container">
            <RouterLink class="text-decoration-none" :to="{ name: 'giving' }">
              <v-btn
                class="more-info-btn global-button"
                size="x-large"
                variant="outlined"
                color="#385F73"
                >Find out more
                <v-icon
                  icon="mdi-information-outline"
                  class="open-in-new-icon"
                />

                <!-- ==== Tooltip ==== -->
                <v-tooltip activator="parent" location="top" theme="light">
                  <span class="text-caption text-decoration-none">
                    GO TO OUR GIVING PAGE
                    <v-icon icon="mdi-page-next-outline" class="mb-1 ml-1" />
                  </span>
                </v-tooltip>
                <!-- ==== Tooltip End ==== -->
              </v-btn>
            </RouterLink>

            <!-- Give btn -->
            <v-btn
              class="give-btn"
              size="x-large"
              variant="elevated"
              color="success"
            >
              <v-title class="font-weight-bold">Give</v-title>

              <!-- Banking Details Modal -->

              <v-dialog
                width="100%"
                v-model="dialog"
                activator="parent"
                class="mx-auto"
                theme="light"
              >
                <v-card
                  variant="flat"
                  color="white"
                  theme=""
                  class="mx-auto text-center rounded-xl"
                >
                  <BankingDetails />
                  

                  <v-card-actions>
                    <v-btn color="#385F73" block @click="dialog = false"
                      >Close Dialog</v-btn
                    >
                  </v-card-actions>
                </v-card>
              </v-dialog>
              <!-- End of Modal -->
            </v-btn>
          </div>
        </div>
      </div>

      <div class="images-container">
        <div class="image-1">
          <img
            src="https://images.unsplash.com/photo-1611598623623-19ed06cf27fd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1175&q=80"
            alt="Giving Hands"
          />
        </div>
        <div class="image-2">
          <img
            src="https://images.unsplash.com/photo-1643321611132-15f7b8a63347?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            alt=""
          />
        </div>
      </div>

      <!-- End of give container -->
    </div>
  </v-card>
</template>

<script>
import BankingDetails from "./BankDetails.vue";
export default {
  components: {
    BankingDetails,
  },
  data() {
    return {
      dialog: false,
    };
  },
};
</script>

<style scoped>
#give-component {
  padding: 0 0 4rem 0;
}

.heading-container {
  margin: 0 auto;
  max-width: 600px;
}
.giving-page-chip {
  background: rgba(228, 58, 58, 0.856);
  z-index: 2;
}
.give-component-heading {
  text-align: center;
}

.give-component-subheading {
  margin: 0 auto;
  text-align: center;
  font-weight: bold;
  color: #385f73;
}

.give-component-description {
  text-align: center;
  margin: 0 auto;
  max-width: 620px;
  margin-bottom: 3.75rem;
  font-size: calc(12px + 0.4rem);
}

.give-container {
  max-width: 1440px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: flex-start;
}

.data-container {
  max-width: 41%;
  display: flex;
  flex-direction: column;
  /* background: coral; */
}

.container-heading {
  margin-bottom: 1rem;
}

.how-to-give-description {
  margin-bottom: 3rem;
  font-size: calc(12px + 0.4rem);
}

.give-buttons-container {
}

.more-info-btn {
  margin-right: 1rem;
  /* box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px; */
}
.open-in-new-icon {
  /* font-size: 20px; */
  margin-left: 10px;
  top: -1px;
  color: rgba(0, 0, 0, 0.678);
  /* color: rgba(0, 175, 0, 0.856); */
}

.give-btn {
  background: rgba(228, 58, 58, 0.856) !important;
  color: #fff !important;
  width: 225px;
  /* box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px; */
}

.images-container {
  height: 500px;
  width: 700px;
}

.image-1 img,
.image-2 img {
  position: relative;
  border-radius: 5px;
  /* box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
    rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
    rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px; */
}
/* Hands Image */
.image-1 img {
  right: -220px;
  width: 75%;
}
/* Fist bump image */
.image-2 img {
  top: -170px;
  right: -50px;
  width: 60%;
}
</style>
