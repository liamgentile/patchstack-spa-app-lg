<template>
  <form>
    <div class="form-group">
      <label for="formGroupExampleInput">Name</label>
      <input
        v-if="existingRisk"
        v-model="$store.state.currentRisk.name"
        type="text"
        class="form-control"
        id="formGroupExampleInput"
      />
      <input
        v-else
        v-model="name"
        type="text"
        class="form-control"
        id="formGroupExampleInput"
      />
    </div>
    <div class="form-group">
      <label for="formGroupExampleInput2">Overview</label>
      <input
        v-if="existingRisk"
        v-model="$store.state.currentRisk.overview"
        type="text"
        class="form-control"
        id="formGroupExampleInput"
      />
      <input
        v-else
        v-model="overview"
        type="text"
        class="form-control"
        id="formGroupExampleInput"
      />
    </div>
    <div class="form-group">
      <label for="exampleFormControlTextarea1">Brief Description</label>
      <textarea
        v-if="existingRisk"
        v-model="$store.state.currentRisk.briefDescription"
        class="form-control"
        id="exampleFormControlTextarea1"
        rows="3"
      ></textarea>
      <textarea
        v-else
        v-model="briefDescription"
        class="form-control"
        id="exampleFormControlTextarea1"
        rows="3"
      ></textarea>
    </div>
    <div class="form-group">
      <label for="exampleFormControlTextarea1">Detailed Description</label>
      <textarea
        v-if="existingRisk"
        v-model="$store.state.currentRisk.detailedDescription"
        class="form-control"
        id="exampleFormControlTextarea1"
        rows="3"
      ></textarea>
      <textarea
        v-else
        v-model="detailedDescription"
        class="form-control"
        id="exampleFormControlTextarea1"
        rows="3"
      ></textarea>
    </div>
    <div class="form-group">
      <label for="exampleFormControlTextarea1">How to Prevent</label>
      <textarea
        v-if="existingRisk"
        v-model="$store.state.currentRisk.howToPrevent"
        class="form-control"
        id="exampleFormControlTextarea1"
        rows="3"
      ></textarea>
      <textarea
        v-else
        v-model="howToPrevent"
        class="form-control"
        id="exampleFormControlTextarea1"
        rows="3"
      ></textarea>
    </div>
    <div class="form-group">
      <label for="exampleFormControlTextarea1">Example Attack Scenarios</label>
      <textarea
        v-if="existingRisk"
        v-model="$store.state.currentRisk.exampleAttackScenarios"
        class="form-control"
        id="exampleFormControlTextarea1"
        rows="3"
      ></textarea>
      <textarea
        v-else
        v-model="exampleAttackScenarios"
        class="form-control"
        id="exampleFormControlTextarea1"
        rows="3"
      ></textarea>
    </div>
    <router-link :to="{ path: '/' }">
      <button
        v-if="existingRisk"
        type="submit"
        class="btn btn-light update"
        @click="saveData()"
      >
        Update
      </button>
      <button v-else type="submit" class="btn btn-light" @click="saveData()">
        Submit
      </button>
    </router-link>
    <router-link :to="{ path: '/' }">
      <button class="btn btn-light" @click="deleteRisk()">Delete</button>
    </router-link>
  </form>
</template>

<script>
export default {
  name: "RiskForm",
  props: {
    existingRisk: {
      default: false,
    },
  },
  data() {
    return {
      name: "", 
      overview: "",
      briefDescription: "",
      detailedDescription: "",
      howToPrevent: "",
      exampleAttackScenarios: ""
    }
  },
  computed: {
    // key for securityRisks object ... made with the inputted name transformed to camel case
    key() {
      if (this.existingRisk) {
        return this.$store.state.currentIndex;
      }
      return this.makeCamelCase(this.name);
    
  }},
  methods: {
    // sourced this method from https://stackoverflow.com/questions/2970525/converting-any-string-into-camel-case
    // I want to create keys for the securityRisks interior objects from the inputted name in camel case
    makeCamelCase(str) {
      return (
        str
          .toLowerCase()
          // Replaces any - or _ characters with a space
          .replace(/[-_]+/g, " ")
          // Removes any non alphanumeric characters
          .replace(/[^\w\s]/g, "")
          // Uppercases the first character in each group immediately following a space
          // (delimited by spaces)
          .replace(/ (.)/g, function ($1) {
            return $1.toUpperCase();
          })
          // Removes spaces
          .replace(/ /g, "")
      );
    },
    saveData() {
      // for simplicity's sake i'm not validating here... just not entering data if the user doesn't bother to add a name
      if (this.name.length > 0) {
        this.$store.state.securityRisks[this.key] = {
          name: this.existingRisk ? this.$store.state.currentRisk.name : this.name,
          briefDescription: this.existingRisk ? this.$store.state.currentRisk.briefDescription : this.briefDescription,
          detailedDescription: this.existingRisk ? this.$store.state.currentRisk.detailedDescription : this.detailedDescription,
          overview: this.existingRisk ? this.$store.state.currentRisk.overview : this.overview,
          howToPrevent: this.existingRisk ? this.$store.state.currentRisk.howToPrevent : this.howToPrevent,
          exampleAttackScenarios: this.existingRisk ? this.$store.state.currentRisk.exampleAttackScenarios : this.exampleAttackScenarios,
        };
      }
    },
    deleteRisk() {
      delete this.$store.state.securityRisks[this.key];
    }
  },
};
</script>

<style scoped>
h1 {
  margin-bottom: 1.5rem;
}

.form-group {
  width: 60%;
  margin: auto;
  margin-bottom: 1rem;
}

.longer {
  height: 7rem;
}

.btn {
    margin-right: 1rem;
}
</style>
