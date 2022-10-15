<template>
  <div id="facebook-live-component">

    <!-- <h1 class="facebook-embed-header">Watch our morning services live on Facebook every Sunday</h1> -->

    <div class="facebook-embed-container">

      <!-- Facebook iFrame HTML code -->
      <iframe class="facebook-iframe-element"
        src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fnlvcapetown%2F&tabs=timeline&width=500&height=500&small_header=true&adapt_container_width=true&hide_cover=true&show_facepile=true&appId"
        width="500" height="500" style="border:none;overflow:hidden" scrolling="no" frameborder="0"
        allowfullscreen="true"
        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>


      <div class="facebook-component-meta-data">
        <h1 class="">Watch our morning services live on Facebook every Sunday</h1>
        <p class="facebook-blurb">We record a new live service every Sunday morning from 9:30 am. Like our facebook page to get
          notifications whenever we go live, and keep up to date with all our events.</p>



        <!-- Button to take users to NLV Facebook page -->
        <a class="facebook-page-link" href="https://www.facebook.com/nlvcapetown/" target="_blank">Click here to go
          directly to our Facebook Page -></a>
      </div>

    </div>

    <!-- Facebook like button -->

    <!-- make this professional using the following link: https://developers.facebook.com/docs/plugins/like-button -->
    <button class="facebook-like-btn"><i class="fa-solid fa-thumbs-up"></i> Like our Facebook Page</button>

  </div>

</template>

<script>
export default {

}
</script>

<style scoped>
#facebook-live-component {
  background: rgba(198, 185, 185, 0.662);
}

.facebook-embed-container {
  padding: 10rem 10rem 0 10rem;
  display: flex;
}

.facebook-embed-header {
  margin: 0 0 10rem 0;
  background: #4267B2;
  color: #fff;
  text-align: center;
  padding: 1.5rem;
  box-shadow: var(--shadows);
}

.facebook-iframe-element {
  min-width: 500px;
  box-shadow: var(--shadows);
  border: none;
}

.facebook-component-meta-data {
  display: flex;
  flex-direction: column;
  padding: 5rem;
  align-content: center;
  justify-content: center;
  /* width: 100%; */
}

.facebook-blurb {
  display: block;
  margin: 0 auto;
  font-size: calc(14px + 0.6rem);
  text-align: center;
  margin-bottom: 3.5rem;
  width: 85%;
}

.facebook-page-link,
.facebook-like-btn {
  background: #4267B2;
  color: #fff;
  border: none;
  border-radius: 3px;
  font-weight: bold;
  box-shadow: var(--shadows);
}

.facebook-like-btn {
  border-radius: 3px;
  margin: 25px 0px;
  padding: 0.4rem 0.8rem;
  font-weight: normal;
  margin-left: 10.15rem;
  margin-bottom: 10rem;
}

.facebook-page-link {
  padding: 1.25rem 2.5rem;
  text-align: center;
  text-decoration: none;
  display: block;
  margin: 0 auto;
  font-size: calc(16px + 0.5rem);
}

/* Font awesome like icon */
.fa-thumbs-up {
  color: #fff;
}
</style>