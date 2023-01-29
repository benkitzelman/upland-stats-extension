<template>
  <main>
    <PageStats />
    <Neighbourhoods v-if="state.viewableNeighbourhoods?.length > 1" />
    <Properties
      v-else-if="state.viewableNeighbourhoods?.length === 1"
      :hood="state.viewableNeighbourhoods[0]"
    />
    <div v-else class="Info">
      <p>Move the viewscreen to an area with properties on the map...</p>
    </div>
  </main>
</template>

<script lang="ts">
import PageStats from "../components/page_stats/PageStatsPanel.vue";
import Neighbourhoods from "../components/CurrentHoods.vue";
import Properties from "../components/CurrentProperties.vue";
import state from "../state";

export default {
  components: { PageStats, Neighbourhoods, Properties },

  data() {
    return {
      state,
    };
  },
};
</script>

<style scoped>
.Info {
  text-align: center;
}
</style>
