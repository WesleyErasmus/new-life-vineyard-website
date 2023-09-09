<template>
  <div class="card-container">

    <v-container class="pa-4 text-center card-child-container">
      <v-row class="fill-height" align="center" justify="center">
        <template v-for="(item, i) in items" :key="i">
          <v-col cols="12" md="6">
            <v-hover v-slot="{ isHovering, props }">
              <v-card :elevation="isHovering ? 12 : 2" :class="{ 'on-hover': isHovering }" v-bind="props">
             

                <!-- OVERLAY PARENT CONTAINER -->
                <div class="overlay-parent-container">
                  <!-- V-IMAGE -->
                <v-img :src="item.img" height="285px" cover></v-img>
                  
               
                <!-- CARD BODY -->
                <div class="card-body">
                  <v-card-title class="text-h6 text-white d-flex flex-column">
                    <p class="mt-4 text-h4 card-title">
                      {{ item.title }}
                    </p>
                    </v-card-title>
                    <v-card-text class="text-white">
                      <p class="ma-0 text-overline font-weight-bold card-subtitle">
                        {{ item.text }}
                      </p>
                      <v-card-text class="text-h6 font-weight-medium card-text px-10">
                        {{ item.subtext }}
                      </v-card-text>
                    </v-card-text>

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
    overlay: 'true',
    items: [
      {
        title: 'Children\'s Church',
        text: `Sunday School Ministry.`,
        subtext: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis incidunt accusamus vero officiis, tempore doloribus. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis incidunt accusamus vero officiis, tempore doloribus.',
        img: 'https://images.unsplash.com/photo-1588072432904-843af37f03ed?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80',
      },
      {
        title: 'Youth Minisrty',
        text: 'Friday Night Youth',
        subtext: 'Youth ministry is aimed at teens ages 13 - 19 years. We host a our Youth Night\'s every Friday. Our nights are packed games, food, worship, and discipling. We have seen exciting grouth in our teens as we aim to invest in their lives for the ling haul.',
        img: 'https://images.unsplash.com/photo-1594913543505-e4fdd1d021e4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
      },
      {
        title: 'Women\'s Minisrty',
        text: 'Women\'s Events and Fellowship',
        subtext: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis incidunt accusamus vero officiis, tempore doloribus. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis incidunt accusamus vero officiis, tempore doloribus.',
        img: 'https://images.unsplash.com/photo-1474367658825-e5858839e99d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80',
      },
      {
        title: 'Men\'s Ministry',
        text: 'Men\'s Events and Fellowship',
        subtext: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis incidunt accusamus vero officiis, tempore doloribus. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis incidunt accusamus vero officiis, tempore doloribus.',
        img: 'https://images.unsplash.com/photo-1478872198468-efc263df6a43?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2069&q=80',
      },
      {
        title: 'Healing Rooms',
        text: 'Christian Prayer and Counselling',
        subtext: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis incidunt accusamus vero officiis, tempore doloribus. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis incidunt accusamus vero officiis, tempore doloribus.',
        img: 'https://images.unsplash.com/photo-1604881991720-f91add269bed?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
      },
      {
        title: 'Worship Ministry',
        text: `Join the Worship Band`,
        subtext: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis incidunt accusamus vero officiis, tempore doloribus. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis incidunt accusamus vero officiis, tempore doloribus.',
        img: 'https://images.pexels.com/photos/995301/pexels-photo-995301.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      },
      {
        title: 'Outreach Ministry',
        text: 'Evangelizing and Praying for People',
        subtext: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis incidunt accusamus vero officiis, tempore doloribus. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis incidunt accusamus vero officiis, tempore doloribus.',
        img: 'https://images.unsplash.com/photo-1620495137036-fccf4af581bf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=673&q=80',
      },
      {
        title: 'Welcome Ministry',
        text: 'Welcoming and Greeting People at the Door',
        subtext: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis incidunt accusamus vero officiis, tempore doloribus. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis incidunt accusamus vero officiis, tempore doloribus.',
        img: 'https://images.unsplash.com/photo-1600984980953-ae1d8a831741?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80',
      },
    ],
    transparent: 'rgba(255, 255, 255, 0)',
  }),
}
</script>

<style scoped>
.card-container {
  width: 1440px;
  margin: 0 auto;
  
}

.card-child-container {
  max-width: 1336px;
  float: left;
}

.v-card {
  transition: opacity .4s ease-in-out;
      
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

.card-title, .card-subtitle, .card-text {
  z-index: 5;
}

.v-card:not(.on-hover) {
  opacity: 0.9;
}

.show-btns {
  color: rgba(255, 255, 255, 1) !important;
}
.card-title {

}
.card-subtitle {
  
}
.card-text {
    font-size: calc(12px + 0.3rem) !important;
}
</style>
