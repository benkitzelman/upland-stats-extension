<template>
  <List
    v-if="loading || (hoods && hoods.length > 0)"
    :items="hoods"
    :cols="cols"
    :loading="loading"
    :sorting="{ prop: 'monthlyYield', dir: 'desc' }"
    ref="list"
  />
</template>

<script lang="ts">
import List from "./SimpleList.vue";
import * as service from "../../services/neighbourhood";
import Api from "../../lib/api";
import state from "../state";
import type { Neighbourhood } from "../../lib/api/types";
import { compareNumeric } from "../../lib/comparitors";

type Hood = Neighbourhood & {
  monthlyYield?: number | null;
  key?: number;
};

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

      this.updateYields();
    },
  },

  created() {
    this.updateYields();
  },

  methods: {
    async updateYields() {
      if (!state.session?.auth_token || !this.hoods) return;

      this.loading = true;

      const api = new Api(state.session?.auth_token);

      for (const hood of this.hoods) {
        const upx = await service.monthlyRentPerUnitFor(hood.id, api);
        hood.monthlyYield ||= upx ? parseFloat(upx.toFixed(2)) : null;
      }

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
