<template>
  <div class="diversity-container">
    <!-- #385F73 -->
    <v-card
      class="diversity-card"
      color="#385F73"
      height=""
      theme="dark"
      variant="tonal"
    >
      <div class="overlay-parent-container">
        <!-- <v-img 
      class="diversity-card-img-body" height="325" cover src="https://images.unsplash.com/photo-1491295314828-fb03946d9b52?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"> -->

        <div class="diversity-card-img-body" height="325">
          <div class="text-overline mb-1">
            <v-chip class="diversity-card-chip ma-1" color="white" label>
              People Uniting
            </v-chip>
          </div>

          <v-card-title class="diversity-card-title text-h4 text-white mb-4">
            Multi-Cultural Diverse Church
          </v-card-title>

          <div class="diversity-card-blurb text-white text-body-1">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint
            impedit iste doloribus. Lorem ipsum dolor, sit amet consectetur
            adipisicing elit. Sint impedit iste doloribus. Tenetur cum alias
            provident esse voluptatum voluptatibus libero at vitae repellendus,
            ad praesentium, dolor rem iusto minima? Laudantium dignissimos
            officiis ullam tenetur, rerum eaque.
          </div>
        </div>
        <div class="card-overlay"></div>
      </div>
    </v-card>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.diversity-container {
  border-radius: 7px;
  margin-top: 5rem;
  margin-bottom: 5rem;
  text-align: center;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
}

.diversity-card {
  border-radius: 7px;
}

.overlay-parent-container {
  position: relative;
  max-width: 1440px;
}

.card-overlay {
  position: absolute;
  top: 0;
  bottom: 0;
  /* Black see-through */
  background: rgb(0, 0, 0);
  background: rgba(0, 0, 0, 0.5);
  width: 100%;
  opacity: 0.7;
  z-index: 1;
}

.diversity-card-img-body {
  padding: 2.5rem 5rem;
  background: grey;
  background-image: url("https://images.unsplash.com/photo-1610055885401-dba0225da39b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80");
  background-position: center;
  background-repeat: no-repeat;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  width: 100%;
  height: 325px;
}

.diversity-card-title,
.diversity-card-chip {
  z-index: 2;
}

.diversity-card-blurb {
  /* font-size: calc(14px + 0.3rem) !important; */
  display: block;
  margin: 0 auto;
  z-index: 2;
}
</style>
