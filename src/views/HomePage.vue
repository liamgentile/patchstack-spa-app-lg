<template>
  <h1>Web App Security Risks</h1>
  <RisksAccordion />
  <router-link :to="{ path: '/add-new-risk' }">
			<button class="btn btn-light">Add new risk</button>
	</router-link>
</template>

<script >
import RisksAccordion from "@/components/RisksAccordion.vue";


export default {
  name: "HomePage",
  components: {
    RisksAccordion
  }
};
</script>

<style scoped>
h1 {
  margin-bottom: 3rem;
}

button {
  font-size: 1rem;
  margin-top: 2rem;
}
</style>
