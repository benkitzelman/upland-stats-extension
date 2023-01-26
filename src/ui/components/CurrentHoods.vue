<template>
  <List
    v-if="loading || (hoods && hoods.length > 0)"
    :items="hoods"
    :cols="cols"
    :loading="loading"
    :sorting="{ prop: 'monthlyYield', dir: 'desc' }"
    @item-hover-on="onHoodHoverIn"
    @item-hover-off="onHoodHoverOut"
    ref="list"
  />
</template>

<script lang="ts">
import List from "./SimpleList.vue";
import * as service from "../../services/neighbourhood";
import Api from "../../lib/api";
import * as ClientMonitor from "../../lib/client";
import state from "../state";
import { compareNumeric } from "../../lib/comparitors";

import type { Neighbourhood } from "../../lib/api/types";
import type { Hood } from "../../services/neighbourhood";

export default {
  components: { List },

  data() {
    return {
      state,
      loading: false,
      hoods: state.viewableNeighbourhoods as Hood[],
      cols: [
        { prop: "name", header: "Neighbourhood" },
        {
          prop: "monthlyYield",
          header: "UPX / ft. / Mo.",
          style: "text-align: right",
          sortFn: compareNumeric,
        },
      ],
    };
  },

  watch: {
    "state.viewableNeighbourhoods"(newHoods: Neighbourhood[]) {
      this.hoods = newHoods;

      for (const hood of newHoods) {
        if (this.hoods.findIndex(({ id }) => id === hood.id) > -1) continue;
        this.hoods.push(hood);
      }

      this.hoods = this.hoods.filter(
        ({ id }) => newHoods.findIndex((p) => id === p.id) !== -1
      );

      this.updateHoods();
    },
  },

  created() {
    this.updateHoods();
  },

  methods: {
    async onHoodHoverIn(hood: Hood) {
      (await ClientMonitor.instance(state)).markNeighbourhoods([hood]);
    },

    async onHoodHoverOut() {
      (await ClientMonitor.instance(state)).markNeighbourhoods([]);
    },

    async updateHoods() {
      if (!state.session?.auth_token || !state.currentCoordinates || !this.hoods) return;

      this.loading = true;

      const api = new Api(state.session?.auth_token);

      const promises = this.hoods.map(async (hood) => {
        const upx = await service.monthlyRentPerUnitFor(hood.id, api);
        hood.monthlyYield ||= upx ? parseFloat(upx.toFixed(2)) : null;
        hood.screenCoords ||= service.screenCoordsFor(hood, state.currentCoordinates as any, state.screenDimensions)
      });

      await Promise.all(promises);

      (this.$refs as any).list?.sort();

      this.loading = false;
    },
  },
};
</script>

<style scoped>
.Hood {
  display: flex;
  justify-content: space-between;
  width: 100%;
}

.Hood .Yield {
  max-width: 100px;
}

.EmptyMsg {
  text-align: center;
}
</style>
