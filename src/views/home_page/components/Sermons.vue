<template>
  <div class="sermon-component">
    
    <div class="row row-cols-1 row-cols-md-4 g-4">
      <div class="col">
        <div class="card h-100">
          <!-- <img src="..." class="card-img-top" alt="..."> -->
          <div class="card-body">
            <h5 class="card-title">Series on Purpose</h5>
            <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content.
              This content is a little bit longer.</p>
          </div>
          <div class="card-footer">
            <small class="text-muted"><button class="sermon-play-button">Listen to sermon</button></small>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card h-100">
          <!-- <img src="..." class="card-img-top" alt="..."> -->
          <div class="card-body">
            <h5 class="card-title">God's Grace</h5>
            <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
          </div>
          <div class="card-footer">
            <small class="text-muted"><button class="sermon-play-button">Listen to sermon</button></small>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card h-100">
          <!-- <img src="..." class="card-img-top" alt="..."> -->
          <div class="card-body">
            <h5 class="card-title">Love Thy Neighbor</h5>
            <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content.
              This card has even longer content than the first to show that equal height action.</p>
          </div>
          <div class="card-footer">
            <small class="text-muted"><button class="sermon-play-button">Listen to sermon</button></small>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card h-100">
          <!-- <img src="..." class="card-img-top" alt="..."> -->
          <div class="card-body">
            <h5 class="card-title">Fasting</h5>
            <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content.
              This card has even longer content than the first to show that equal height action.</p>
          </div>
          <div class="card-footer">
            <small class="text-muted"><button class="sermon-play-button">Listen to sermon</button></small>
          </div>
        </div>
      </div>
    </div>
    <span class="archive-sermons">View More Sermons</span>

  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.sermon-component {
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: ghostwhite;
  width: 100%;
  padding: 7% 10%;
}

.archive-sermons {
  margin: 4rem;
  text-decoration: underline;
}

.archive-sermons:hover {
  color: green;
  cursor: pointer;
}

.card {
  border-radius: 0;
}

.sermon-play-button {
  border: none;
  color: grey;
  background: transparent;
}

.sermon-play-button:hover {
  color: black;
}
</style>