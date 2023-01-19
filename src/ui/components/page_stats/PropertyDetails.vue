<template>
  <div>
    <h3 class="green">Property Details</h3>

    <div class="Stat">
      <label>UPX / mo:</label>
      <span>{{ baseMonthlyUPX?.toFixed(0) }}</span>
    </div>
    <div class="Stat">
      <label>UPX / mo (max):</label>
      <span>{{ maxMonthlyUPX?.toFixed(0) }}</span>
    </div>
    <div class="Stat">
      <label>Mo ROI:</label>
      <span>{{ baseMonthlyROI?.toFixed(2) }}%</span>
    </div>
    <div class="Stat">
      <label>Mo ROI (max):</label>
      <span>{{ maxMonthlyROI?.toFixed(2) }}%</span>
    </div>
    <div class="Stat">
      <label>Cost:</label>
      <span>UPX: {{ costUPX }}</span>
      <span>USD: {{ costUSD }}</span>
    </div>
  </div>
</template>

<script lang="ts">
import state from "../../state";
import Api from "../../../lib/api";
import type { Property } from "../../../lib/api/types";

export default {
  props: {
    page: Object,
  },

  data() {
    return {
      ...this.page?.breakdown(),
      property: null as Property | null,
    };
  },

  async created() {
    await this.fetchProperty();
  },

  methods: {
    async fetchProperty() {
      console.log("?S", state);
      if (!state.session?.auth_token || !state.currentPropertyId) return;

      const api = new Api(state.session.auth_token);
      this.property = await api.property(state.currentPropertyId);

      console.log(this.property);
    },
  },
};
</script>

<style scoped>
.Stat {
  padding: 5px 0;
}

.Stat label {
  font-weight: 800;
  width: 135px;
  display: inline-block;
}

.Stat span {
  font-weight: 400;
  margin-left: 5px;
  display: inline-block;
}
</style>
