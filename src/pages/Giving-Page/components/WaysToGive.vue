<template>
  <div class="ways-to-give-container">
    <!-- Ways to give Header -->
    
    <div class="text-h4">

        Ways To Give
    
        <v-chip class="giving-page-chip text-caption" color="#9e9497" label>
            <v-icon start icon="mdi-hand-heart"></v-icon>
        </v-chip>
    </div>

    <!-- Ways to give TABS -->
    <v-card class="ways-to-give-card" color="#385F73" theme="" variant="">
      <!-- color="#385F73" -->
      <v-tabs
        v-model="tab"
        color="#385F73"
        align-tabs=""
        class="tab-text"
        bg-color=""
      >
        <v-tab value="one"
          ><span class="text-overline font-weight-black"
            >BANK ACCOUNT (EFT)</span
          ></v-tab
        >
        <v-tab value="two"
          ><span class="text-overline font-weight-black"
            >FOOD PANTRY</span
          ></v-tab
        >
        <v-tab value="three"
          ><span class="text-overline font-weight-black"
            >CLOTHING & BLANKETS</span
          ></v-tab
        >
      </v-tabs>

      <v-card-text class="ways-to-give-card-body">
        <v-window v-model="tab">
          <!-- <div class="tab-window-container"> -->
          <v-window-item value="one">
            <div class="banking-details-container">
              <!-- Church bank details -->
              <div>
              <BankDetails />
            </div>
            <div>
              <ThankYou />
            </div>
              
            </div>
          </v-window-item>

          <v-window-item value="two">
            <div class="banking-details-container">
              
              <div>
                <BankDetails />
              </div>
              <div>
                <ThankYou />
              </div>
            
            </div>
          </v-window-item>

          <v-window-item value="three">
          <div class="banking-details-container">
            
            <div>
              <BankDetails />
            </div>
            <div>
              <ThankYou />
            </div>
          
          </div>
          </v-window-item>
          <!-- </div> -->
        </v-window>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
import BankDetails from "./BankDetails.vue";
import ThankYou from "./ThankYou.vue";
export default {
  components: {
    BankDetails,
    ThankYou,
  },
  data: () => ({
    tab: null,
  }),
};
</script>

<style scoped>
.ways-to-give-container {
  max-width: 1440px;
  display: block;
  margin: 0 auto;
  margin-top: 3rem;
}

.ways-to-give-card {
  margin-top: 3rem;

  /* padding: 0 5rem; */
}

.ways-to-give-card-body {
    /* background: #f0eced; */
    padding: 3rem;
}
.banking-details-container {
  display: flex;
  margin: 0 auto;
    align-items: center;
  justify-content: space-evenly;
}
/* .window-container {
} */

.tab-text span {
  font-size: 15px !important;
}
</style>
