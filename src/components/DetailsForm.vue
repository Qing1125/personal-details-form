<template>
  <div id="details-form">
    <v-card>
      <v-card-title>
        <div class="headline">YOUR SHARED DETAILS</div>
        <hr>
        <span>For optimal speed of settlement, the following details about you will be shared with parties in the transaction.</span>
      </v-card-title>
      <v-form ref="form" v-model="valid" lazy-validation v-if="Object.keys(details).length!=0">
        <v-container>
          <v-layout align-end justify-end>
            <v-flex xs1>Incl.</v-flex>
          </v-layout>
          <v-layout>
            <v-flex xs11>
              <v-text-field
                v-model="details.name.value"
                label="Name"
                :rules="nonEmptyRules"
                required
              ></v-text-field>
            </v-flex>
            <v-flex xs1>
              <v-checkbox v-model="details.name.submit" hide-details disabled></v-checkbox>
            </v-flex>
          </v-layout>
          <v-layout>
            <v-flex xs11>
              <v-text-field
                v-model="details.entityType.value"
                label="Entity type"
                :rules="nonEmptyRules"
                required
              ></v-text-field>
            </v-flex>
            <v-flex xs1>
              <v-checkbox v-model="details.entityType.submit" hide-details></v-checkbox>
            </v-flex>
          </v-layout>
          <v-layout>
            <v-flex xs11>
              <v-text-field
                v-model="details.country.value"
                label="Country"
                :rules="nonEmptyRules"
                required
              ></v-text-field>
            </v-flex>
            <v-flex xs1>
              <v-checkbox v-model="details.country.submit" hide-details disabled></v-checkbox>
            </v-flex>
          </v-layout>
          <v-layout>
            <v-flex xs11>
              <v-text-field
                v-model="details.address.value"
                label="Address"
                :rules="nonEmptyRules"
                required
              ></v-text-field>
            </v-flex>
            <v-flex xs1>
              <v-checkbox v-model="details.address.submit" hide-details></v-checkbox>
            </v-flex>
          </v-layout>
          <v-layout>
            <v-flex xs11>
              <v-text-field
                v-model="details.postcode.value"
                label="Postcode"
                :rules="nonEmptyRules"
                required
              ></v-text-field>
            </v-flex>
            <v-flex xs1>
              <v-checkbox v-model="details.postcode.submit" hide-details disabled></v-checkbox>
            </v-flex>
          </v-layout>
          <v-layout>
            <v-flex xs11>
              <v-text-field
                v-model="details.email.value"
                label="Email"
                :rules="emailRules"
                required
              ></v-text-field>
            </v-flex>
            <v-flex xs1>
              <v-checkbox v-model="details.email.submit" hide-details></v-checkbox>
            </v-flex>
          </v-layout>
          <v-layout align-end justify-end>
            <v-btn id="#submitBtn" color="primary" @click="onSubmitClick">Submit</v-btn>
            <v-btn color="primary" @click="onResetClick">Reset</v-btn>
          </v-layout>
        </v-container>
      </v-form>
    </v-card>

    <v-dialog v-model="showResultDialog" max-width="500">
      <v-card>
        <v-toolbar dark color="primary">
          <v-toolbar-title>Results</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-btn icon dark @click="showResultDialog=false">
            <v-icon>close</v-icon>
          </v-btn>
        </v-toolbar>
        <v-card-text>
          <v-layout align-start v-for="item in details" :key="item.text">
            <v-flex v-if="item.submit">
              {{item.text}}: {{item.value}}
            </v-flex>
          </v-layout>
        </v-card-text>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "detail-form",
  data: () => ({
    showResultDialog: false,
    valid: false,
    nonEmptyRules: [v => !!v || "Field is required"],
    emailRules: [
      v => !!v || "E-mail is required",
      v =>
        /^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/.test(v) ||
        "E-mail must be valid"
    ]
  }),

  computed: {
    ...mapState(["details"])
  },

  methods: {
    onSubmitClick() {
      if (this.$refs.form.validate()) {
        this.$store.dispatch("saveDetails", this.details);
        this.showResultDialog = true;
      }
    },
    onResetClick() {
      this.$store.dispatch("resetDetails");
    }
  },

  mounted() {
    this.$store.dispatch("initDetails");
  }
};
</script>

<style lang="scss">
#details-form {
  min-width: 400px;
  max-width: 800px;
  margin: auto;
}
</style>
