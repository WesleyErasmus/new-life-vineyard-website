<template>
  <div class="join-newsletter-component">
    <h1 class="newsletter-component-heading">Sign up our Community Newsletter</h1>

    <div class="message-container">

    <div class="form-wrapper">

      <!-- User form -->
      <form @submit.prevent="saveMessage(e)" class="message-form">

        <div class="name-email-input-container">
          <div class="form-floating mb-4">
            <!-- Username input -->
            <input type="text" v-model="storedUserMessage.name" class="form-control user-input username-input"
              id="floatingInput name" name="name" placeholder="First Name" />
            <label for="floatingInput">First Name</label>
          </div>
          <div class="form-floating mb-4">
            <!-- Username input -->
            <input type="text" v-model="storedUserMessage.name" class="form-control user-input username-input"
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
        </div>


        
        <div>
          <!-- Submit button -->
          <span><button class="sbmt-btn" type="submit">
              (send icon) Sign up
            </button></span>
        </div>
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
.newsletter-component-heading {
  margin: var(--margin-max-width);
  padding: 4rem 0;
}


.message-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 5rem;
  box-shadow: rgba(33, 35, 38, 0.1) 0px 10px 10px -10px;
  /* padding: var(--card-padding); */
  padding: 2rem;
  /* background: lightgray; */
}
.form-wrapper {
  /*  */
}

.name-email-input-container {
  display: flex;
}


/* Username input field */
.username-input {
  margin-right: 7px;
  width: 30vw;
}


/* User email input field */
.email-input {
  margin-left: 7px;
  width: 30vw;
}

.message-text-area {
  height: 100px;
}

/* Message us form submit button */
.sbmt-btn {
  float: right;
  margin: 1rem 0;
  background: var(--primary-color);
  font-size: calc(14px + 0.4rem);
  color: #fff;
  padding: 1rem 2rem;
  border-radius: 4px;
}

.sbmt-btn:hover {
  opacity: 0.75;
}
</style>