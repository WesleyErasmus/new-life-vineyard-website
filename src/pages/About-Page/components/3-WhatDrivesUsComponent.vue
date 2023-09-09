<template>
  <div class="what-drives-us-page-container">
    <!-- Presence | Worship | Community Cards -->
    <v-row>
      <v-col>
        <v-card variant="" color="" class="what-drives-us-card">

          <v-card-item>
            <v-card-title class="card-title text-medium-emphasis ma-4 text-h6">
              <v-icon icon="mdi-crown-outline" class="" />
              Presence
            </v-card-title>
            <v-chip label color="#385F73" class=" text-overline">
              Drawing Near To God
            </v-chip>
            <v-card-text class="card-text text-medium-emphasis">Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Provident accusantium impedit delectus consequatur commodi sunt qui deleniti fuga doloremque
              obcaecati.</v-card-text>
          </v-card-item>
        </v-card>
      </v-col>

      <v-col>
        <v-card variant="" color="" class="what-drives-us-card">

          <v-card-item>
            <v-card-title class="card-title ma-4 text-medium-emphasis">
              <v-icon icon="mdi-hands-pray" class="" />
              Worship
            </v-card-title>
            <v-chip label color="#385F73" class=" text-overline">
              Praising Jesus
            </v-chip>
            <v-card-text class="card-text text-medium-emphasis">Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Provident accusantium impedit delectus consequatur commodi sunt
              qui deleniti fuga doloremque obcaecati.</v-card-text>
          </v-card-item>

        </v-card>
      </v-col>

      <v-col>
        <v-card variant="" color="" class="what-drives-us-card">

          <v-card-item>
            <v-card-title class="card-title text-medium-emphasis ma-4">
              <v-icon icon="mdi-account-group" class="" />
              Fellowship
            </v-card-title>
            <v-chip label color="#385F73" class=" text-overline">
              Authentic Relationships
            </v-chip>
            <v-card-text class="card-text text-medium-emphasis">Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Provident accusantium impedit delectus consequatur commodi sunt
              qui deleniti fuga doloremque obcaecati.</v-card-text>
          </v-card-item>


        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.what-drives-us-page-container {
  /* padding: 4rem 0 7rem 0; */
  padding: 3rem 0;
}

.what-drives-us-card {
  text-align: center;
  /* box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px; */
  /* box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset; */
}

.card-title {
  font-weight: var(--bold-font);
}

.card-text {
  font-size: calc(10px + 0.3rem);
}
</style>
