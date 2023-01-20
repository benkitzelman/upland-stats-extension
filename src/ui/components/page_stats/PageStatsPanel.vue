<template>
  <component v-if="page" :is="page.type" :page="page" class="PageStats" />
</template>

<script lang="ts">
// import state from "../../state";
import PropertyDetails from "./PropertyDetails.vue";

export default {
  components: { PropertyDetails },

  data() {
    return {
      page: undefined as { type: string } | undefined,
    };
  },

  async created() {
    // this.page = await state.monitor?.getPage();
  },
};
</script>

<style scoped>
.PageStats {
  padding-top: 1rem;
}
</style>
