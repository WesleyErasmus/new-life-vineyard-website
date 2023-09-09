<template>
  <div class="join-newsletter-component">
    <div class="newsletter-component-heading text-h4">Join Our Community Newsletter</div>

    <!-- Subscription form -->
    <v-form v-model="valid">
      <div class="form-container">
        <v-row>
          <v-col cols="12" md="3">
            <v-text-field
              v-model="firstname"
              :rules="nameRules"
              label="First name"
              required
            ></v-text-field>
          </v-col>

          <v-col cols="12" md="3">
            <v-text-field
              v-model="lastname"
              :rules="nameRules"
              label="Last name"
              required
            ></v-text-field>
          </v-col>

          <v-col cols="12" md="3">
            <v-text-field
              v-model="email"
              :rules="emailRules"
              label="E-mail"
              required
            ></v-text-field>
          </v-col>
          <v-col cols="12" md="3">
            <v-btn
              class="subscribe-btn"
              block
              size="large"
              type="submit"
              variant="elevated"
              color="black"
            >
              Subscribe
              <v-icon icon="mdi-email-outline" class="subscribe-btn-icon" />
            </v-btn>
          </v-col>
        </v-row>
      </div>
    </v-form>
  </div>
</template>

<script>
export default {
  data: () => ({
    valid: false,
    firstname: "",
    lastname: "",
    nameRules: [
      (v) => !!v || "Name is required",
      (v) => v.length <= 10 || "Name must be less than 10 characters",
    ],
    email: "",
    emailRules: [
      (v) => !!v || "E-mail is required",
      (v) => /.+@.+/.test(v) || "E-mail must be valid",
    ],
  }),
};
</script>

<style scoped>
.join-newsletter-component {
  padding: 4rem 15rem 1rem 15rem;  
}

.newsletter-component-heading {
  padding: 0 0 1.5rem 0;
}
.subscribe-btn {
  height: 55px !important;
  padding: 12px;
  background: #000;
  color: #fff;
}
.subscribe-btn-icon {
    margin-left: 7px;
}
</style>
