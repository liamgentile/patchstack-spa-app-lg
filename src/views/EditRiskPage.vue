<template>
<h1>Edit {{ $store.state.currentRisk.name }}</h1>
  <RiskForm 
    existing-risk="true"
    />
</template>

<script>
import RiskForm from "@/components/RiskForm.vue";

export default {
  name: "AddRiskPage",
  components: {
    RiskForm,
  },
};
</script>

<style scoped>
h1 {
  margin-bottom: 1.5rem;
}
</style>
