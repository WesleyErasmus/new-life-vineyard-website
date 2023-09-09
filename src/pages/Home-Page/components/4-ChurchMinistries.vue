<template>
  <div class="church-ministries-component image-background">
    <div class="ministries-heading-and-blurb-container">
      
      <div class="church-ministries-heading text-h4">Church Ministries

        <!-- color="#385F73" -->
        <v-chip class="text-overline ml-2" label color="#385F73">
          <v-icon start icon="mdi-human-handsup"></v-icon>
          Get Involved
        </v-chip>

      </div>
      <p class="church-ministries-blurb text-medium-emphasis">
        At new life we believe that there are many ways to serve God in the
        church and in the community. We are passionate about the growth of God's
        body and impacting our communities.
      </p>
     
      <v-card-actions class="pa-0 ma-0">
        <RouterLink :to="{ name: 'ministries' }">
        <v-btn color="#385F73" class="px-0 ma-0 text-decoration-underline"> Go to ministries page 

          <!-- ==== Tooltip ==== -->
          <v-tooltip activator="parent" location="right">
            <span class="text-white text-caption"> FIND OUT MORE ABOUT OUR MINISTRIES
              <v-icon icon="mdi-page-next-outline" class="mb-1 ml-1" />
            </span>
          </v-tooltip>
          <!-- ==== Tooltip End ==== -->

        </v-btn>
        </RouterLink>
        <v-icon color="#385F73" icon="mdi-arrow-right" class="ml-1 mb-1" />
        
        
      </v-card-actions>
      
    </div>
    

    <v-container class="pa-4 text-center">
      <v-row class="fill-height" align="center" justify="center">
        <template v-for="(item, i) in items" :key="i">
          <v-col cols="12" md="4">
            <v-hover v-slot="{ isHovering, props }">
              <v-card
                :elevation="isHovering ? 12 : 2"
                :class="{ 'on-hover': isHovering }"
                v-bind="props"
              >
              <!-- OVERLAY PARENT CONTAINER -->
                <div class="overlay-parent-container">
                  <!-- V-IMAGE -->
                  <v-img :src="item.img" height="245px" cover>
                  </v-img>
                  <!-- CARD BODY -->
                  <div class="card-body">
                    <v-card-title class="text-h6 text-white d-flex flex-column">
                      <p class="mt-4 text-h4 card-title">
                        {{ item.title }}
                      </p>

                      <div>
                        <p
                          class="ma-0 text-overline font-weight-bold card-subtitle"
                        >
                          {{ item.text }}
                        </p>
                        <p class="text-caption font-weight-medium card-text">
                          {{ item.subtext }}
                        </p>
                      </div>
                    </v-card-title>
                    <div class="align-self-center">
                      <v-btn
                        variant="tonal"
                        :class="{ 'show-btns': isHovering }"
                        :color="transparent"
                        :icon="icon"
                        class="card-hover-btn"
                        >Got to Ministry</v-btn
                      >
                    </div>
                    <!-- CARD OVERLAY -->
                    <div class="card-overlay"></div>
                  </div>
                </div>
              </v-card>
            </v-hover>
          </v-col>
        </template>
      </v-row>
    </v-container>
  </div>

</template>

<script>
export default {
  data: () => ({
    icons: ["mdi-rewind", "mdi-play", "mdi-fast-forward"],
    items: [
      {
        title: "Children's Church",
        text: `Sunday School Ministry.`,
        subtext: "Lorem ipsum dolor sit, amet consectetur adipisicing.",
        img: "https://images.unsplash.com/photo-1588072432904-843af37f03ed?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80",
      },
      {
        title: "Youth Minisrty",
        text: "Friday Night Youth",
        subtext: "Lorem ipsum dolor sit, amet consectetur adipisicing.",
        img: "https://images.unsplash.com/photo-1594913543505-e4fdd1d021e4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
      },
      {
        title: "Women's Minisrty",
        text: "Women's Events and Fellowship",
        subtext: "Lorem ipsum dolor sit, amet consectetur adipisicing.",
        img: "https://images.unsplash.com/photo-1474367658825-e5858839e99d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80",
      },
      {
        title: "Men's Ministry",
        text: "Men's Events and Fellowship",
        subtext: "Lorem ipsum dolor sit, amet consectetur adipisicing.",
        img: "https://images.unsplash.com/photo-1478872198468-efc263df6a43?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2069&q=80",
      },
      {
        title: "Healing Rooms",
        text: "Christian Prayer and Counselling",
        subtext: "Lorem ipsum dolor sit, amet consectetur adipisicing.",
        img: "https://images.unsplash.com/photo-1604881991720-f91add269bed?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
      },
      {
        title: "Worship Ministry",
        text: `Join the Worship Band`,
        subtext: "Lorem ipsum dolor sit, amet consectetur adipisicing.",
        img: "https://images.pexels.com/photos/995301/pexels-photo-995301.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      },
      {
        title: "Outreach Ministry",
        text: "Evangelizing and Praying for People",
        subtext: "Lorem ipsum dolor sit, amet consectetur adipisicing.",
        img: "https://images.unsplash.com/photo-1620495137036-fccf4af581bf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=673&q=80",
      },
      {
        title: "Welcome Ministry",
        text: "Welcoming and Greeting People at the Door",
        subtext: "Lorem ipsum dolor sit, amet consectetur adipisicing.",
        img: "https://images.unsplash.com/photo-1600984980953-ae1d8a831741?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
      },
    ],
    transparent: "rgba(255, 255, 255, 0)",
  }),
};
</script>

<style scoped>
.church-ministries-component {
  display: block;
  margin: 0 auto;
  margin-top: 4rem;
  margin-bottom: 4rem;
  max-width: 1440px;
}

.ministries-heading-and-blurb-container {
  width: 57%;
  margin-left: 2.125rem;
  margin-bottom: 1rem;
}

.church-ministries-heading {
  margin-bottom: 1rem;
}

.church-ministries-blurb {
  font-size: calc(12px + 0.4rem);
}

/* Card container */
.v-container {
  max-width: 1440px;
}

.v-card {
  transition: opacity 0.4s ease-in-out;
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

.card-body {
  position: absolute;
  top: 0;
  bottom: 0;
  width: 100%;  
  z-index: 1;
}
.card-title, .card-subtitle, .card-text, .card-hover-btn {
  z-index: 5;
}
.v-card:not(.on-hover) {
  /* Removes opacity from cards before hover  */
  opacity: 0.9;
}

.show-btns {
  color: rgba(255, 255, 255, 1) !important;
}
</style>
