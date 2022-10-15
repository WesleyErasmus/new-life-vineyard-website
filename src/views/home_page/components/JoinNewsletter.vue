<template>
  <div class="join-newsletter-component">
    <h1 class="newsletter-component-heading">Join Our Community Newsletter</h1>

    <div class="newsletter-container">

      <div class="form-wrapper">

        <!-- User form -->
        <form @submit.prevent="saveMessage(e)" class="message-form">

          <div class="name-email-input-container">
            <div class="form-floating mb-4">
              <!-- Username input -->
              <input type="text" v-model="storedUserMessage.name" class="form-control user-input"
                id="floatingInput name" name="name" placeholder="First Name" />
              <label for="floatingInput">First Name</label>
            </div>
            <div class="form-floating mb-4">
              <!-- Username input -->
              <input type="text" v-model="storedUserMessage.name" class="form-control user-input"
                id="floatingInput name" name="name" placeholder="Last Name" />
              <label for="floatingInput">Last Name</label>
            </div>


            <!-- User email input -->
            <div class="form-floating mb-4">
              <input v-model="storedUserMessage.email" type="text" class="form-control user-input email-input"
                id="floatingPassword email" placeholder="Email address" name="email" />
              <label for="floatingPassword">Email address</label>
            </div>
            <!-- End of name an input container -->

            <div>
              <!-- Submit button -->
              <button class="sbmt-btn" type="submit">
                (send icon) Sign up
              </button>
            </div>
          </div>



          <!-- <div> -->
          <!-- Submit button -->
          <!-- <span><button class="sbmt-btn" type="submit">
              (send icon) Sign up
            </button></span>
        </div> -->
        </form>

      </div>


    </div>

  </div>
</template>

<script>
export default {
  data() {
    return {
      // User message info - for saving to local storage
      customerMessages: [],

      // User info and message object class
      storedUserMessage: {
        name: null,
        email: null,
        message: null,
      }
    }
  }
}
</script>

<style scoped>
.join-newsletter-component {
  padding: 0 10rem 5rem 10rem;
}

.newsletter-component-heading {
  /* Top only padding */
  padding: 4rem 0 2.5rem 0;
}

.newsletter-container {
  margin-bottom: 5rem;
}

.form-wrapper {
  /*  */
}

.name-email-input-container {
  display: flex;
}

/* Username input fields */
.user-input {
  margin-right: 7px;
  width: 18vw;
}
/* Form submit btn */
.sbmt-btn {
  background: var(--primary-color);
  font-size: calc(14px + 0.4rem);
  color: #fff;
  padding: 0 2rem;
  border-radius: 0.375rem;
  height: calc(3.5rem + 2px);
  line-height: 1.25;
}

.sbmt-btn:hover {
  opacity: 0.75;
}
</style>