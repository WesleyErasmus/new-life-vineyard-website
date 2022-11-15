<template>
    <div id="about-page-wrapper">

        <div class="about-page-top-banner">
            New Life Vineyard Church
        </div>


        <section class="section-1">
            <div class="section-1-meta-data">
                <div class="about-description">
                    <h1 class="section-heading">Our story</h1>
                    <p> NLV has been around for 50 years... Worship / mission ... Lorem ipsum dolor sit amet consectetur
                        adipisicing elit. Iste tempore aliquam ea sint cumque numquam optio, natus vel. Ipsam excepturi
                        voluptatum earum est impedit laudantium ex, laborum veniam a soluta! Lorem ipsum dolor sit amet
                        consectetur adipisicing elit. Sequi atque rem nesciunt tempore labore. Laborum, temporibus quos.
                        Quaerat, voluptates dolores fugiat tenetur explicabo vel, aperiam, aliquam expedita similique
                        qui
                        et?</p>
                </div>

                <img class="church-logo" src="src\assets\nlv-logo-1.jpg" alt="">
            </div>

            <div class="section-1-img">
                <img src="https://images.unsplash.com/photo-1514286969571-5142af56b991?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                    alt="">
            </div>

        </section>

        <section class="section-2">
            <h1 class="section-2-heading">What Drives Us</h1>


            <div class="">
                <div class="row">
                    <div class="col">
                        <div class="card">
                            <div class="card-body">
                                <h5 class="card-title">Authenticity</h5>
                                <p class="card-text">With supporting text below as a natural lead-in to additional
                                    content.</p>
                                <a href="#" class="btn btn-secondary">Go somewhere</a>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="col">
                            <div class="card">
                                <div class="card-body">
                                    <h5 class="card-title">Worship</h5>
                                    <p class="card-text">With supporting text below as a natural lead-in to additional
                                        content.</p>
                                    <a href="#" class="btn btn-secondary">Go somewhere</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="col">
                            <div class="card card-3">
                                <div class="card-body">
                                    <h5 class="card-title">Community</h5>
                                    <p class="card-text">With supporting text below as a natural lead-in to additional
                                        content.</p>
                                    <a href="#" class="btn btn-secondary">Go somewhere</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </section>

        <section class="section-3">
            <div class="diversity-container">
                <div>
                    <img src="src/assets/diversity_print.jpg" alt="" class="diversity-fingerprint">
                </div>


                <!-- <img src="src/assets/diversity_print.jpg" alt="" class="diversity-fingerprint"> -->

                <div class="diversity-meta-data">
                    <h1 class="section-heading-3">Multi-cultural diverse church</h1>
                    <p class="diversity-text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint impedit
                        iste doloribus. Tenetur cum alias
                        provident esse voluptatum voluptatibus libero at vitae repellendus, ad praesentium, dolor rem
                        iusto
                        minima?
                        Laudantium dignissimos officiis ullam tenetur, rerum eaque, culpa commodi odio beatae doloremque
                        enim
                        magni
                        aspernatur vero veritatis consectetur ea mollitia praesentium.</p>
                </div>
            </div>

        </section>

        <section class="section-4">
            <!-- <h1 class="section-heading">Community - discipling the body</h1> -->


            <div class="card discipling-card text-bg-dark">
                <img src="https://images.unsplash.com/photo-1451906702095-62f809fca204?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2097&q=80"
                    class="card-img discipleship-img-bw shadow-lg" alt="...">
                <div class="card-img-overlay">
                    <h1 class="card-title">Discipling the Church</h1>
                    <p class="card-text">Iron sharpens Iron... <br/> Consequatur dolorum
                        impedit fuga ex, tenetur porro a odio cupiditate ratione, architecto doloremque quo? Quas est
                        quaerat laudantium, voluptatum, exercitationem aliquid aspernatur blanditiis, impedit similique
                        voluptates iste et! Obcaecati, itaque ipsum iste dicta, earum ipsa eveniet rem dolor laboriosam
                        officiis quas totam in. Dicta obcaecati a consequuntur nihil quae deleniti perferendis?
                        Sapiente?</p>
                    <p class="card-text"><small>Last updated 3 mins ago</small></p>
                </div>
            </div>


        </section>

        <section class="section-5-values">
            <h1 class="section-heading-values">NLV's values</h1>
            <h5 class="values-subheading">
                As representatives of God's body, our aim is to live out the community and family values in the Bible to create a welcoming and supportive envirenment for all people. These values include <span class="color-values">love</span>, <span class="color-values">generosity</span>, <span class="color-values">prayer</span>, <span class="color-values">family</span>, <span class="color-values">faith</span>.
            </h5>
        </section>

        <section class="section-6">
            <h1 class="section-heading">The team @ NLV</h1>
            <ul>
                <li>person 1</li>
                <li>person 2</li>
                <li>person 3</li>
                <li>person 4</li>
                <li>person 5</li>
            </ul>
        </section>



    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
#about-page-wrapper {
    margin-top: 100px;
    padding: 4rem 10rem;
}

.about-page-top-banner {
    font-size: calc(16px + 0.6rem);
    display: flex;
    align-content: center;
    align-items: center;
    justify-content: center;
    background: #444;
    color: white;
    height: 100px;
    margin-bottom: 4rem;
    box-shadow: var(--shadows);
}

.section-1 {
    display: flex;
    justify-content: space-between;
    margin-bottom: 10rem;
}

.section-1-meta-data {
    width: 45%;
    text-align: center;
    box-shadow: var(--shadows);
}

.about-description {
    /* box-shadow: var(--shadows); */
    padding: 2rem;
}

.church-logo {
    border-radius: 9999px;
    width: 140px;
    box-shadow: var(--shadows);
}

.section-1-img {}

.section-1-img img {
    width: 750px;
    box-shadow: var(--shadows);
}

.section-heading {
    margin-bottom: 2rem;
}

.section-2-heading {
    padding: 3rem 0rem 0 0rem;
    text-align: center;
}

.section-2 {
    background: rgba(0, 0, 0, 0.127);
    box-shadow: var(--shadows);
}

.row {
    flex-wrap: nowrap;
    width: 100%;
    justify-content: center;
    /* background: lightblue; */
    padding: 3rem;
    margin: 0 auto;
    /* box-shadow: var(--shadows); */
}

.card {
    background: transparent;
    border-radius: 0;
    padding: 2rem;
    border: none;
    border-right: 1px solid #000;
}

.card-3 {
    border: none;
}

.section-2 {
    margin-bottom: 5rem;
}

.inline-flex-img-container {
    top: 10%;
    display: flex;
    justify-content: center;
    align-content: center;
    align-items: center;
}

.about-img img {
    top: -71px;
    width: 200px;
    height: 180px;
    margin: 0.3rem;
    /* box-shadow: var(--shadows); */
}

.section-3 {
    margin-bottom: 5rem;
    display: flex;
    justify-content: center;
}

.diversity-container {
    display: flex;
    justify-content: center;
    align-items: center;
}

.diversity-fingerprint {
    width: 100%;
}

.diversity-meta-data {
    width: 100%;
}

.diversity-text {
    width: 500px;
}

.section-4 {
    margin-bottom: 5rem;
}

.discipling-card {
    padding: 0;
}

.discipleship-img-bw {
    -webkit-filter: grayscale(100%);
    filter: grayscale(100%);
}
.card-img-overlay {
    padding: 5rem;
    background: rgba(0, 0, 0, 0.127);
}

.section-5-values {
    padding: 4rem 0;
}

.section-heading-values {
    text-align: center;
}

.values-subheading {
    max-width: 950px;
    text-align: center;
    display: block;
    margin: 0 auto;
}

.color-values {
color: lightcoral;
font-weight: bold;
}
</style>