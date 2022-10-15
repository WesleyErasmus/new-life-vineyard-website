<template>
    <div id="give-component">
        <div class="heading-container">
            <h1 class="give-component-heading">Giving to make a difference</h1>
            <h2 class="give-component-subheading">Your gift could help feed a family in need</h2>
            <p class="give-component-description">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis
                qui saepe quia eveniet reiciendis molestias?</p>
        </div>

        <div class="give-container">
            <div class="data-container">
                <h1 class="container-heading">
                    Ways to Give
                </h1>
                <p class="how-to-give-description">
                    New Life Vineyard is involved in serving communities through food and clothes donations. We provide
                    warm blankets to those in need.

                    You can also give by donating a money to the church. You can find our banking details by clicking on
                    the Give button below.
                </p>
                <div class="give-buttons-container">
                    <button class="more-info-btn global-button">Find out more</button>
                    <button class="give-btn global-button">Give</button>
                </div>
            </div>

            <div class="images-container">
                <div class="image-1">
                    <img src="https://images.unsplash.com/photo-1611598623623-19ed06cf27fd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1175&q=80"
                        alt="Giving Hands">
                </div>
                <div class="image-2">
                    <img src="https://images.unsplash.com/photo-1643321611132-15f7b8a63347?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                        alt="">
                </div>
            </div>

            <!-- End of give container -->
        </div>

    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
#give-component {
  padding: 0 10rem;
    margin: 0 auto;
    margin-bottom: 5rem;
}

.heading-container {
    margin: 0 auto;
    max-width: 600px;
}

.give-component-heading {
    text-align: center;
}

.give-component-subheading {
    margin: 0 auto;
    max-width: 400px;
    text-align: center;
    margin-bottom: 1rem;
}

.give-component-description {
    text-align: center;
    margin: 0 auto;
    max-width: 480px;
    margin-bottom: 5rem;
}

.give-container {
    display: flex;
    justify-content: space-between;
}

.data-container {
    max-width: 40%;
    top: 50px;
    display: flex;
    flex-direction: column;
}

.container-heading {}

.how-to-give-description {}

.give-buttons-container {}

.more-info-btn {
    margin-right: 1rem;
}

.give-btn {
    background: red;
}

.images-container {
    width: 55%;
}


.image-1 img {
    position: relative;
    right: -150px;
    width: 70%;
    box-shadow: var(--shadows);
}

.image-2 img {
    position: relative;
    top: -150px;
    right: -30px;
    width: 50%;
    box-shadow: var(--shadows);
}
</style>