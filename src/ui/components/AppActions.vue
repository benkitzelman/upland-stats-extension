<template>
  <div class="greetings">
    <p v-if="!isReady()">Loading...</p>
    <div v-else>
      <button @click="onPropertiesForSaleClicked">Properties for sale</button>
    </div>
  </div>
</template>

<script lang="ts">
import { neighbourhoodsWithin } from "../../services/neighbourhood";
import Api from "../../lib/api";
import state from "../state";

import type { AreaCoords, default as UplandApi } from "../../lib/api";

export default {
  data() {
    return {
      state,
    };
  },

  watch: {
    "state.currentCoordinates"(newCoords) {
      this.state.currentCoordinates = newCoords;
    },
  },

  methods: {
    isReady() {
      return !!this.state.currentCoordinates;
    },

    visibleNeighbourhoods(area: AreaCoords, api: UplandApi) {
      // TODO: Get all neighbourhoods within state.currentCoordinates
      return neighbourhoodsWithin(area, api);
    },

    async onPropertiesForSaleClicked() {
      if (!this.state.session?.auth_token || !this.state.currentCoordinates) return;

      const api = new Api(this.state.session.auth_token);

      const hoods = await this.visibleNeighbourhoods(
        this.state.currentCoordinates,
        api
      );
      console.log("VISIBLE", hoods);

      // const resp = await this.api.listAllProperties(state.currentCoordinates);
      // console.log(resp);

      // const rent = await monthlyRentPerUnitFor(hoods[0], this.api);
      // console.log("MONTHLY RENT / UNIT", rent, "AREA", resp.properties[0].area, "TOTAL RENT:", resp.properties[0].area * rent);
    },
  },
};
</script>

<style scoped>
h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
