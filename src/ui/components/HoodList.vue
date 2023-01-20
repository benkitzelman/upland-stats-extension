<template>
  <List v-if="loading || (hoods && hoods.length > 0)" :items="hoods" :cols="cols" :key="key" :loading="loading">
    <template #empty>
      <div class="EmptyMsg">
        <p>Move to view...</p>
      </div>
    </template>
  </List>
</template>

<script lang="ts">
import List from "./SimpleList.vue";
import * as service from "../../services/neighbourhood";
import Api from "../../lib/api";
import state from "../state";
import type { Neighbourhood } from "../../lib/api/types";

type Hood = Neighbourhood & {
  monthlyYield?: number | null;
  key?: number;
};

export default {
  components: { List },

  data() {
    return {
      key: 1,
      state,
      loading: false,
      hoods: state.viewableNeighbourhoods as Hood[],
      cols: [
        { prop: "name", header: "Neighbourhood" },
        { prop: "monthlyYield", header: "UPX / sq. ft. / Mo" },
      ],
    };
  },

  watch: {
    "state.viewableNeighbourhoods"(newHoods) {
      this.hoods = newHoods;
      this.updateYields(this.hoods);
    },
  },

  created() {
    this.updateYields(this.hoods);
  },

  methods: {
    async updateYields(hoods: Hood[]) {
      if (!state.session?.auth_token || !hoods) return;

      this.loading = true;

      const api = new Api(state.session?.auth_token);

      for (const hood of hoods) {
        const upx = await service.monthlyRentPerUnitFor(hood.id, api);
        hood.monthlyYield ||= upx ? parseFloat(upx.toFixed(2)) : null;
      }

      this.key = (this.key || 0) + 1;
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
