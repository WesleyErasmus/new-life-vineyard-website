<template>
  <v-card class="story-container" variant="outline">
    <div>
      <div class="our-story-heading text-h4">
        <img class="church-logo" src="src\assets\nlv-logo.jpg" alt="NLV Church Logo" />
        Our Story
        <v-chip label color="#385F73" class="ml-4 text-overline">
          <!-- <v-card-title> -->
            Where it all began
          <!-- </v-card-title> -->
        </v-chip>
      </div>
      <v-card-text class="our-story-blurb text-medium-emphasis">
        NLV has been around for 50 years... Worship / mission ... Lorem ipsum
        dolor sit amet consectetur adipisicing elit. Iste tempore aliquam ea
        sint cumque numquam optio, natus vel. Ipsam excepturi voluptatum earum
        est impedit laudantium ex, laborum veniam a soluta! Lorem ipsum dolor
        sit amet consectetur adipisicing elit. Sequi atque rem nesciunt
        tempore labore. Laborum, temporibus quos. Quaerat, voluptates dolores
        fugiat tenetur explicabo vel, aperiam, aliquam expedita similique qui
        et?
      </v-card-text>
      <v-card-actions>
        <v-btn variant="outlined" class="our-story-info-btn" color="#385F73">
          
          <!-- Anchor tag directing to Vineyard SA website -->
          <a href="https://www.vineyardsa.org.za/about" target="_blank">Find out more about the Vineyard movement</a>

          <v-icon icon="mdi-information-outline" class="more-info-icon" />

          <!-- ==== Tooltip ==== -->
          <v-tooltip activator="parent" location="bottom">
            <span class="text-white text-caption"> GO TO VINEYARD SA SITE
              <v-icon icon="mdi-home" class="mb-1" />
            </span>
          </v-tooltip>
          <!-- ==== Tooltip End ==== -->

        </v-btn>
      </v-card-actions>

    </div>
  </v-card>

</template>

<script>
export default {};
</script>

<style scoped>
.story-container {
  display: flex;
  flex-direction: column;
  align-content: center;
  align-items: center;
  justify-content: center;
  border-radius: 7px;
  box-shadow: none;
  width: 50vw;
  height: 43vh;
}


.church-logo {
  border-radius: 9999px;
  width: 100px;
  margin-right: 24px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
}

.our-story-heading {
  display: flex;
  align-content: center;
  align-items: center;
}

.our-story-blurb {
  margin-top: -1.5rem;
  margin-left: 7rem;
  font-size: calc(14px + 0.3rem);
  line-height: 1.38;
}

.our-story-info-btn {
  margin-left: 7rem;
}

.our-story-info-btn span {
  text-decoration: underline;
}
.our-story-info-btn a {
  text-decoration: none;
  color: #385f73;
}

.more-info-icon {
  margin-left: 7px;
}
</style>
