<template>
  <!-- <div class="church-ministries-component">

    <div class="card mb-3"  v-for="ministry in ministries" :key="ministry.id">
      <div class="row g-0">
        <div class=" card-content col-md-5">
          <div class="card-body" style="max-width: 75vw;">
            <h2 class="card-title">{{ ministry.name }}</h2>
            <p class="card-text">{{ ministry.description }}</p>
            <button class="card-button">see more -></button>
          </div>
        </div>

        <div class="col-md-7">
          <img
            :src="ministry.image"
            class="img-fluid" alt="Church Ministry Image">
        </div>
      
      </div>
    </div>

  </div> -->

  <div class="church-ministries-component">

    <div class="card mb-3">
      <!-- <h2 class="card-title heading">{{ ministry.name }}</h2> -->
      <div class="row g-0">
        <div class=" card-content col-md-5">
          <div class="card-body" style="max-width: 75vw;">
            <h1 class="card-title">Visit our Healing Rooms</h1>
            <p class="card-text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit, consectetur
              officiis? Perspiciatis delectus consequatur ex perferendis facilis quam eius dolore.</p>
            <button class="card-button">see more -></button>
          </div>
        </div>

        <div class="col-md-7">


          <!-- Carousel -->

          <div id="carouselExampleFade" class="carousel slide carousel-fade" data-bs-ride="carousel">
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img
                  src="https://images.unsplash.com/photo-1520857014576-2c4f4c972b57?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                  class="d-block w-100" alt="Healing Rooms Image">
              </div>
              <div class="carousel-item">
                <img
                  src="https://images.unsplash.com/photo-1626955863358-d2f9e3f37d33?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                  class="d-block w-100" alt="Healing Rooms Image">
              </div>
              <div class="carousel-item">
                <img
                  src="https://images.unsplash.com/photo-1526746323784-6bc814d79273?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                  class="d-block w-100" alt="Healing Rooms Image">
              </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade"
              data-bs-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade"
              data-bs-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>

          <!-- Carousel -->


        </div>

      </div>
    </div>

  </div>
</template>

<script>

export default {
  name: "ChurchMinistries",
  props: ['ministries'],
}
</script>

<style scoped>
.church-ministries-component {
  margin: var(--margin-max-width);
  padding: 4rem;
  position: relative;
}

.church-ministries-component {
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* background: lightgray;
  background: #5a5a5a; */
  background: rgb(225, 225, 225);
  width: 100%;
  margin: 0;
  padding: 10rem;
}

.heading {
  width: 100%;
  text-align: center;
  padding: 2rem 0;
  margin: 0;
  background: rgb(188, 187, 187);
  margin-left: 0;
  padding-left: 0;
  margin-bottom: 2rem;
}

.card {
  border: none;
  background: transparent;
  padding-bottom: 2rem;
  margin-bottom: 4rem !important;
  background: rgb(225, 225, 225);
}

.card-content {
  display: flex;
  flex-direction: row-reverse;
  align-content: center;
  align-items: center;
}

.card-title {
  font-weight: bolder;
  margin-bottom: 4rem;
}

.card-text {
  font-size: calc(12px + 0.4rem);
  margin-bottom: 4rem !important;
  text-shadow: var(--shadows);
  width: 92%;
}

.card-button {
  /* display: block;
  margin: 0 auto; */
  border: none;
  padding: 1rem 2.5rem;
  background: #000;
  color: #fff;
  font-size: calc(14px + 0.4rem);
  font-weight: bold;
  box-shadow: var(--shadows);
}

.d-block {
  border-radius: 3px;
}

.carousel {
  max-width: 750px;
  z-index: 0;
}
</style>