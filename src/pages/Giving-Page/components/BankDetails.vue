<template>
  <div>
    <v-card class="ways-to-give" color="transparent">
        <!-- <v-chip class="giving-page-chip ma-2 text-caption" color="#9e9497" label>
            <v-icon start icon="mdi-hand-heart"></v-icon>
        </v-chip> -->
        <v-card-title class="text-h4 giving-details-heading text-black"
          >Our Banking Details</v-card-title
        >
        <v-card-text class="pb-1 pl-5 text-overline"
          >Thank you for your donation</v-card-text
        >
        <v-card-text class="text-caption-2 pl-5 text-medium-emphasis">
          A way to give is through EFT payment. Your gift will help to support the needy and helpless both in our communities and within our doors.
        </v-card-text>
        <v-card-text class="banking-details py-0">
            <!-- Table density -->
            <!-- density="compact" -->
          <v-table 
        class="table-details">
            <tbody>
              <tr>
                <td>Bank:</td>
                <td><strong>Absa</strong></td>
              </tr>
              <tr>
                <td>Account Number:</td>
                <td><strong>9843951652</strong></td>
              </tr>
              <tr>
                <td>Branch Code:</td>
                <td><strong>1652</strong></td>
              </tr>
              <tr>
                <td>Branch Name:</td>
                <td><strong>Pinelands</strong></td>
              </tr>
              <tr>
                <td>Account Type:</td>
                <td><strong>Current</strong></td>
              </tr>
              <tr>
                <td>Reference:</td>
                <td><strong>NLV_Gift</strong></td>
              </tr>
            </tbody>
          </v-table>
        </v-card-text>
        <br />
        <v-card-actions>
            <v-btn 
            theme="dark"
            class=""
            block 
            variant="tonal" color="#385F73"
            >
            <!-- #385F73  //  #9e9497 -->
            Contact Us to confirm details (optional)
        </v-btn>
        </v-card-actions>
        <v-card-text class="text-caption pl-5 text-medium-emphasis">
          Contact us at 021 531 3434 or email us at info@nlv.co.za if you have
          any questions
        </v-card-text>
    </v-card>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.ways-to-give {
    max-width: 625px;
    box-shadow: none;
    /* background: grey; */
    padding: 1rem;
    color: #385f73e0;
}

.table-details {
    width: 425px;
}
</style>
