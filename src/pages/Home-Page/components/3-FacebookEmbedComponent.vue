<template>
  <!-- <v-card id="facebook-live-component" variant="tonal" theme="" color="#385F73"> -->
  <v-card id="facebook-live-component" variant="" theme="" color="">
    <div class="facebook-embed-container">
      <div class="fb-iframe-container">
        <!-- Facebook iFrame HTML code -->

        <img class="tv-frame rounded-xl" src="./monitor_c.png" alt="TV_Frame" />

        <iframe
          class="facebook-iframe-element rounded-sm"
          src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fnlvcapetown%2F&tabs=timeline&width=500&height=500&small_header=true&adapt_container_width=true&hide_cover=true&show_facepile=true&appId"
          width="500"
          height="330"
          style="border: none; overflow: hidden"
          scrolling="no"
          frameborder="0"
          allowfullscreen="true"
          allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
        ></iframe>
      </div>

      <div class="text-h5 facebook-component-meta-data">
        <span
          ><v-chip
            class="giving-page-chip mb-5 text-overline"
            color="#385F73"
            label
          >
            <v-icon start icon="mdi-video"></v-icon>
            Live Stream Every Sunday
          </v-chip></span
        >
        <div class="facebook-component-header text-h4 text-black">
          Sunday Morning's On
          <a
            class="facebook-page-link text-h4"
            href="https://www.facebook.com/nlvcapetown/"
            target="_blank"
            >Facebook Live</a
          >.
        </div>

        <p
          class="facebook-blurb text-caption-2 text-medium-emphasis font-weight-thin"
        >
          Join our Sunday services online. We record a new live service every
          Sunday morning from 9h30 to 11h00. Like our facebook page to get
          notifications whenever we go live, and keep up to date with all our
          events.
        </p>
        <!-- Button to take users to NLV Facebook page -->
        <v-btn
          class="global-button visit-fb-page-btn"
          size="large"
          variant="elevated"
        >
        <a href="https://www.facebook.com/nlvcapetown/" target="_blank" class="text-white text-decoration-none" >
          Visit our Facebook page
          </a>
          <v-icon icon="mdi-open-in-new" class="open-in-new-icon" />
        </v-btn>
        <v-card-subtitle class="like-btn-text"
          >Like and share our facebook page</v-card-subtitle
        >
        <iframe
          class="facebook-like-btn"
          src="https://www.facebook.com/plugins/like.php?href=https%3A%2F%2Fwww.facebook.com%2Fnlvcapetown%2F&width=138&layout=button&action=like&size=large&share=true&height=65&appId"
          width="138"
          height="35"
          style="border: none; overflow: hidden"
          scrolling="no"
          frameborder="0"
          allowfullscreen="true"
          allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
        ></iframe>
      </div>
    </div>
  </v-card>
</template>

<script>
export default {};
</script>

<style scoped>
#facebook-live-component {
  padding: 4rem 0;
  display: block;
  margin: 0 auto;
}

.facebook-embed-container {
  display: flex;
  justify-content: center;
  margin: 0 auto;
  max-width: 1440px;
}

.tv-frame {
  background-color: #416e850a;
  width: 536px;
  height: 439px;
  /* box-shadow: rgba(0, 0, 0, 0.25) 0px 39px 40px,
    rgba(37, 37, 37, 0.12) 0px -12px 30px, rgba(83, 82, 82, 0.12) 0px 4px 6px,
    rgba(54, 54, 54, 0.17) 0px 12px 13px, rgba(58, 57, 57, 0.09) 0px -3px 5px; */
}

/* Positioning of the facebook embed component */
.facebook-iframe-element {
  position: absolute;
  left: 17px;
  top: 24px;
}

.fb-iframe-container {
  position: relative;
}

.facebook-component-meta-data {
  display: flex;
  flex-direction: column;
  margin-left: 4rem;
  margin-top: 1rem;
}

.facebook-component-header {
  padding-bottom: 0.5rem;
}

.facebook-blurb {
  font-size: calc(12px + 0.5rem);
  margin-bottom: 3rem;
  width: 85%;
}

.visit-fb-page-btn {
  width: 50%;
  padding: 0 3.5rem;
  background: #000;
  color: #fff;
  background: #4267b2;
  border-radius: 7px;
  /* box-shadow: rgba(0, 0, 0, 0.15) 0px 12px 25px, rgba(0, 0, 0, 0.05) 0px 5px 10px; */
}

.open-in-new-icon {
  font-size: 28px;
  margin-left: 15px;
  color: #ddd;
}

.like-btn-text {
  margin: 25px 0 0 0;
}

.facebook-like-btn {
  border-radius: 3px;
  margin: 0 1rem;
  /* margin: 25px 0px; */
}

.facebook-page-link {
  text-decoration: none;
  font-weight: bolder;
  color: #4267b2;
  color: #1877f2;
}

.facebook-page-link:hover {
  opacity: 0.75;
}
</style>
