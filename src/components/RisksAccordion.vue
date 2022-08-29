<template>
  <div class="accordion accordion-flush" id="accordionFlushExample">
    <div
      class="accordion-item"
      v-for="(accordionItem, index) in $store.state.securityRisks"
      :key="index"
    >
      <h2 class="accordion-header" :id="'flush-heading' + index">
        <button
          class="accordion-button collapsed"
          type="button"
          data-bs-toggle="collapse"
          :data-bs-target="'#flush-collapse' + index"
          aria-expanded="false"
          :aria-controls="'flush-collapse-' + index"
        >
          {{ accordionItem.name }}
        </button>
      </h2>
      <div
        :id="'flush-collapse' + index"
        class="accordion-collapse collapse"
        :aria-labelledby="'flush-heading' + index"
        data-bs-parent="#accordionFlushExample"
      >
        <div class="accordion-body">{{ accordionItem.briefDescription }}</div>
        <router-link :to="{ path: '/view-risk' }">
          <button
          class="btn btn-light read-more-button"
          type="button"
          @click="$store.state.currentRisk = accordionItem"
        >
           read more
        </button>
         </router-link>
         <router-link :to="{ path: '/edit-risk' }">
          <button
          class="btn btn-light edit-button"
          type="button"
          @click="$store.state.currentRisk = accordionItem, $store.state.currentIndex = index"
        >
           edit
        </button>
         </router-link>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "RisksAccordion",
};
</script>

<style scoped>
.accordion {
  width: 55%;
  margin: auto;
}

.accordion-button:hover {
  background-color: #d3d3d3;
  font-weight: 500;
}

.edit-button {
  margin-bottom: 1rem;
}
.read-more-button {
  margin-bottom: 1rem;
  margin-right: 1rem;
}
</style>
