<template>
    <div class="church-mission-component-wrapper">

        <!-- Church Mission Content -->
        <section class="church-mission-content">

            <div class="church-mission-header">
                <h1 class="mission-caption">New Life Vineyard believes in Mission.</h1>
                <h3 class="mission-statement">{{ MissionStatement }}</h3>
                <button class="card-button">Find out more about the Vineyard Churches -></button>
            </div>
            <!-- <div class="background-image-container">
            <img class="background-image" src="" alt="">
            add rays effect behind text
            </div> -->
           
        </section>
    </div>
</template>

<script>
export default {
    data() {
        return {
            MissionStatement: "We believe in equipping the saints for the great commission of discipling the greater church body, and sharing what God has given us with other churches. We are a worship and prayer focused ministry with a heart for God's presence. Our goal is to be a diverse multi-cultural church.",
        }
    },
}
</script>

<style scoped>
.church-mission-component-wrapper {
    background: var(--secondary-color);
    position: relative;
    height: 90vh;
    display: flex;
    text-align: center;
    align-items: center;
}

.church-mission-content {
    margin: var(--margin-max-width);
    padding: 4rem;
}

.church-mission-header {
    color: #000;
}

.mission-statement {
    margin-top: 2rem;
    color: #464646;
}

.card-button {
    display: block;
    margin: 0 auto;
    border: none;
    padding: 1rem 2.5rem;
    margin-top: 3rem;
    background: #000;
    color: #fff;
    font-size: calc(14px + 0.4rem);
    font-weight: bold;
    box-shadow: var(--shadows);
}
</style>