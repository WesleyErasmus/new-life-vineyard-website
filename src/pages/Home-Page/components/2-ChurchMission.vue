<template>
  <div class="church-mission-component-wrapper">
    <!-- Church Mission Content -->
    <section class="church-mission-content">
      <div class="church-mission-header">
        <div class="mission-caption text-h2">We believe in Mission.</div>
        <h3 class="mission-statement text-medium-emphasis text-overline">{{ MissionStatement }}</h3>
        
        <a href="https://www.vineyardsa.org.za/about" target="_blank" class="text-decoration-none facebook-page-link-btn">
        <v-btn class="card-button"
              theme="dark"
              size="x-large"
              variant="tonal"
              color="#385F73">
             
          Find out more about the Vineyard Churches 
          
          <v-icon icon="mdi-information-outline" class="open-in-new-icon" />
        </v-btn>
        </a>
      </div>
    </section>
  </div>
  <!-- <v-divider></v-divider> -->
</template>

<script>
export default {
  data() {
    return {
      MissionStatement:
        "We believe in equipping the saints for the great commission of discipling the greater church body and beyond. Sharing with other churches what God has given us. Making Disciples of all Nations, sending people out.",
    };
  },
};
</script>

<style scoped>
.church-mission-component-wrapper {
  position: relative;
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: center;
  padding-top: none !important;
  margin: 5rem 0;
}

.church-mission-content {
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: center;
  max-width: 62vw;
  padding: 0 5rem;
}

.church-mission-header {
  color: #000;
}

.mission-caption {
  margin-bottom: 2rem;
  font-weight: bolder;
}

.mission-statement {
  color: #464646;
  color: #000;
  font-size: calc(13px + 0.3rem) !important;
  margin-bottom: 1.15rem;
}

.card-button {
  padding: 0 2rem;
  margin-top: 2.5rem;
  font-size: calc(11px + 0.2rem);
  font-weight: bold;
  border-radius: 7px;
  /* Btn Shadow */
  /* box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px; */
}
.open-in-new-icon {
  font-size: 20px;
  margin-left: 10px;
  color: rgba(0, 0, 0, 0.678);
  /* color: #385F73; */
}
.facebook-page-link-btn {
  color: var(--primary-color);
}
</style>
