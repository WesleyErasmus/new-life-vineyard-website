<template>
  <div class="form-container">
    <!-- Form Card -->
    <v-card class="form-card-body" style="width: 650px"
    variant="" color="#385F73"
    theme=""
    >
        <div style="width: 650px">

          <!-- TOOLBAR -->
          <!-- <v-toolbar class="form-title" color="#385f73c4" cards flat> -->
            <v-card-title class="text-h4 text-black">
              GET IN TOUCH
            </v-card-title>
            <v-spacer></v-spacer>
          <!-- </v-toolbar> -->
          <v-card-text class="text-overline ml-1 text-medium-emphasis">
            Send us a message if you have any enquiries or would like to someone from New Life to get in touch with you.
          </v-card-text>
        </div>
      <v-form ref="form" v-model="form" class="pa-4 pt-6 form-wrapper">
        <v-text-field
          v-model="password"
          :rules="[rules.password, rules.length(6)]"
          variant="filled"
          color=""
          counter="6"
          label="Full Name"
          style="min-height: 96px"
          type="password"
        ></v-text-field>
        <v-text-field
          v-model="phone"
          variant="filled"
          color=""
          label="Email address"
        ></v-text-field>
        <v-text-field
          v-model="email"
          :rules="[rules.email]"
          variant="filled"
          color=""
          label="Phone number"
          type="email"
        ></v-text-field>
        <v-textarea
          v-model="bio"
          auto-grow
          variant="filled"
          color=""
          label="Message"
          rows="1"
        ></v-textarea>
        <!-- <v-checkbox
          v-model="agreement"
          :rules="[rules.required]"
          color="deep-purple"
        >
          <template v-slot:label> Add me to your mailing list </template>
        </v-checkbox> -->
      </v-form>
      <!-- <v-divider></v-divider> -->
      <v-card-actions>
        <!-- <v-btn variant="text" @click="$refs.form.reset()"> Clear </v-btn> -->
        <!-- :disabled="!form" -->
        <v-btn
          class="form-btn-container"
          variant="tonal"
          :loading="isLoading"
          color="#385F73"
          size="large"
          block
        >
          Submit
        </v-btn>
      </v-card-actions>
      <v-divider></v-divider>
    </v-card>
  </div>
</template>
<script>
export default {
  data: () => ({
    agreement: false,
    bio: "",
    dialog: false,
    email: undefined,
    form: false,
    isLoading: false,
    password: undefined,
    phone: undefined,
    rules: {
      email: (v) => !!(v || "").match(/@/) || "Please enter a valid email",
      length: (len) => (v) =>
        (v || "").length >= len || `Invalid character length, required ${len}`,
      password: (v) =>
        !!(v || "").match(
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*(_|[^\w])).+$/
        ) ||
        "Password must contain an upper case letter, a numeric character, and a special character",
      required: (v) => !!v || "This field is required",
    },
  }),
};
</script>
<style scoped>
.form-container {
  margin: 0;
  margin-bottom: 2rem;
  border-radius: 15px;
  /* box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px; */
}
/* .form-title {
  margin: 0 1rem;
} */
.form-wrapper {
  height: 100%;
  padding: 0;
  margin: 0;
  /* color: #385f73c4; */
}
.form-btn-container {
}
.form-card-body {
  margin-bottom: 2rem;
  box-shadow: none !important;
}
</style>
