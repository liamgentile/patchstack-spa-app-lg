<template>
  <h1>{{ $store.state.currentRisk.name }}</h1>
  <h3>Overview</h3>
  <p>{{ $store.state.currentRisk.overview }}</p>
  <h3>Detailed Description</h3>
  <p>{{ $store.state.currentRisk.detailedDescription }}</p>
  <h3>How to Prevent</h3>
  <p>{{ $store.state.currentRisk.howToPrevent }}</p>
  <h3>Example Attack Scenarios</h3>
  <p>{{ $store.state.currentRisk.exampleAttackScenarios }}</p>
</template>

<script>
export default {
  name: "ViewRiskPage",
};
</script>

<style scoped>
h1 {
  margin-bottom: 1.5rem;
}

h3 {
  margin-bottom: 2rem;
}

p {
  margin: auto;
  margin-bottom: 2rem;
  max-width: 70%;
}
</style>
