<template>
  <div class="footer-component">
    <main>


      <div class="row">

        <div class="footer-column col">
          <ul class="footer-links">
            <li>
              <h6>Get in Touch</h6>
            </li>
            <li>Phone (021) 1234567</li>
            <li>WhatsApp 083 4567890</li>
            <li>Email info@nlv.org</li>
            <li>Facebook</li>
            <li>Newsletter</li>
            <li>Become a Member</li>
            <li>Directions</li>
          </ul>
        </div>
        <div class="footer-column col">
          <ul class="footer-links">
            <li>
              <h6>Church Ministries</h6>
            </li>
            <li>Prayer and Christian Counselling</li>
            <li>Children's Church</li>
            <li>Youth Evenings</li>
            <li>Farming God's Way</li>
            <li>Men's Ministry</li>
            <li>Women's Ministry</li>
          </ul>
        </div>
        <div class="footer-column col">
          <ul class="footer-links">
            <li>
              <h6>Resources</h6>
            </li>
            <li>Sermons</li>
            <li>Christian Resources</li>
            <li>Counselling</li>
            <li>Dealing with Grief</li>
            <li>Becoming a New Christian</li>
          </ul>
        </div>


      </div>
    </main>

    <div class="copyright-container">© 2022 nlv.co.za. All rights reserved.
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.footer-component {
  padding: 10rem 2rem 2rem 2rem;
  background: lightgray;
}

h6 {
  font-weight: bolder;
}

main {
  width: 100%;
  display: flex;
  justify-content: center;
}

.footer-column {
  width: 500px;
}

.footer-links li {
  list-style-type: none;
  padding: 0.25rem 3vw;
}

.copyright-container {
  text-align: center;
  padding: 8rem 4rem 4rem 4rem;
}
</style>