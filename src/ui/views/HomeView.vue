<template>
  <main>
    <template v-if="state.session">
      <Actions />
      <PageStats />
      <Neighbourhoods />
    </template>
    <template v-else>
      <p>Loading...</p>
    </template>
  </main>
</template>

<script lang="ts">
import Actions from "../components/AppActions.vue";
import PageStats from "../components/page_stats/PageStatsPanel.vue";
import Neighbourhoods from "../components/HoodList.vue";
import state from "../state";

export default {
  components: { Actions, PageStats, Neighbourhoods },

  data() {
    return {
      state,
    };
  },

  watch: {
    'state.session'(newSession) {
      this.state.session = newSession;
    },
  },
};
</script>
