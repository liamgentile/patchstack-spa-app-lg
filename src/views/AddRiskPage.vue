<template>
  <h1>Add a new security risk</h1>
  <RiskForm />
</template>

<script>
import RiskForm from "@/components/RiskForm.vue";
export default {
  name: "AddRiskPage",
  components: {
    RiskForm
  },
};
</script>

<style scoped>
h1 {
  margin-bottom: 1.5rem;
}
</style>
