<template>
  <List
    v-if="loading || (hoods && hoods.length > 0)"
    title="Neighbourhoods"
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
import timer from "../../lib/timer";
// import * as ClientMonitor from "../../lib/client";
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
      hoods: [] as Hood[],
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
      this.updateHoods(newHoods);
    },
  },

  created() {
    this.updateHoods(this.state.viewableNeighbourhoods);
  },

  methods: {
    async onHoodHoverIn(hood: Hood) {
      // (await ClientMonitor.instance(state)).markNeighbourhoods([hood]);
    },

    async onHoodHoverOut() {
      // (await ClientMonitor.instance(state)).markNeighbourhoods([]);
    },

    async updateHoods(hoods: (Neighbourhood | Hood)[]) {
      return await timer({ root: "ui", label: "CurrentHoods - updateHoods" }, async (timerOpts) => {
        if (!state.currentCoordinates || !hoods) return;

        this.loading = true;

        this.hoods = await service.decorate(
          hoods,
          state,
          new Api(state.session?.auth_token),
          { timerOpts }
        );

        (this.$refs as any).list?.sort();

        this.loading = false;
      });
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
