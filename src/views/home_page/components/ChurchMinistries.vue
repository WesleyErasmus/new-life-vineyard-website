<template>
  <div class="church-ministries-component">

    <div class="card mb-3"  v-for="ministry in ministries" :key="ministry.id">
      <!-- <h2 class="card-title heading">{{ ministry.name }}</h2> -->
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
  padding: 2% 10%;
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
}

.card-text {
  font-size: calc(12px + 0.4rem);
  margin-bottom: 3rem !important;
  text-shadow: var(--shadows);
}

.card-button {
  display: block;
  margin: 0 auto;
  border: none;
  padding: 1rem 2.5rem;
  background: #000;
  color: #fff;
  font-size: calc(14px + 0.4rem);
  font-weight: bold;
  box-shadow: var(--shadows);
}

.img-fluid {
  /* box-shadow: var(--shadows); */
}

</style>