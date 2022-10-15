<template>
  <div class="church-ministries-component">

    <div class="ministries-heading-and-blurb-container">
      <h1 class="church-ministries-heading">Church Ministries</h1>
      <p class="church-ministries-blurb">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perferendis earum fugiat, natus maiores recusandae
        quae vero ut animi incidunt qui maxime deleniti in, veniam quam laborum quas, eligendi id asperiores.
      </p>
    </div>


    <div class="ministry-cards-container">
    
      <div class="test-con">
        <img class="img-fluid" src="https://unsplash.it/400/400" alt="" />
        <div class="overlay">
          <span>Woman's Ministry</span>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, dolorem.</p>
        </div>
      </div>
    
      <div class="test-con">
        <img class="img-fluid" src="https://unsplash.it/400/400" alt="" />
        <div class="overlay">
          <span>Woman's Ministry</span>
        </div>
      </div>

      <div class="test-con">
        <img class="img-fluid" src="https://unsplash.it/400/400" alt="" />
        <div class="overlay">
          <span>Woman's Ministry</span>
        </div>
      </div>
      
      <div class="test-con">
        <img class="img-fluid" src="https://unsplash.it/400/400" alt="" />
        <div class="overlay">
          <span>Woman's Ministry</span>
        </div>
      </div>
    

      <div class="test-con">
        <img class="img-fluid" src="https://unsplash.it/400/400" alt="" />
        <div class="overlay">
          <span>Woman's Ministry</span>
        </div>
      </div>
      
      <div class="test-con">
        <img class="img-fluid" src="https://unsplash.it/400/400" alt="" />
        <div class="overlay">
          <span>Woman's Ministry</span>
        </div>
      </div>

    </div>

  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.church-ministries-component {
  /* display: flex; */
  flex-direction: column;
  justify-content: center;
  background: ghostwhite;
  width: 100%;
  padding: 7% 10%;
}

.ministries-heading-and-blurb-container {
  text-align: center;
  display: block;
  margin: 0 auto;
}

.church-ministries-heading {
  margin-bottom: 4rem;
}

.church-ministries-blurb {
  width: 60%;
  display: block;
  margin: 0 auto;
  margin-bottom: 4rem;
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



/* ========== Hover Cards ========== */

.ministry-cards-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  
  margin: 0 auto;
  max-width: 1336px;
}

.test-con {
  max-width: 400px;
  max-height: 300px;
  /* margin: 100px auto; */
  margin: 1rem;
  position: relative;
  overflow: hidden;
}

.test-con:hover .overlay {
  opacity: 1;
  transform: scale(1);
}

.overlay {
  position: absolute;
  background-color: rgba(255, 0, 0, .7);
  width: 100%;
  height: 100%;
  top: 0;
  transform: scale(1.3);
  opacity: 0;
  transition: transform .4s ease 0s;
}

.overlay span {
  position: absolute;
  top: 30%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  font-size: 3em;
  color: #fff;
  font-family: Sans-serif;
}

.overlay p {
  position: absolute;
  top: 70%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  font-size: 14px;
  color: #fff;
  font-family: Sans-serif;
}

.test-con img {
  transition: transform .8s ease;
}

.test-con:hover img {
  transform: scale(1.1);
}
</style>