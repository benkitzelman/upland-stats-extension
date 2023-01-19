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
      currentCoordinates: state.currentCoordinates,
      loading: false,
      hoods: [] as Hood[],
      cols: [
        { prop: "name", header: "Neighbourhood" },
        { prop: "monthlyYield", header: "UPX / sq. ft. / Mo" },
      ],
    };
  },

  watch: {
    "state.currentCoordinates"(newArea) {
      this.currentCoordinates = newArea;
      this.updateHoods();
    },
  },

  async created() {
    await this.updateHoods();
  },

  methods: {
    api() {
      return state.session?.auth_token
        ? new Api(state.session?.auth_token)
        : null;
    },

    async updateHoods() {
      this.loading = true;

      const api = this.api();

      if (api && this.currentCoordinates) {
        this.hoods = await service.neighbourhoodsWithin(
          this.currentCoordinates,
          api
        );
        await this.updateYields(this.hoods);
      }

      this.loading = false;
    },

    async updateYields(hoods: Hood[]) {
      const api = this.api();

      if (!api || !hoods) return;

      for (const hood of hoods) {
        const upx = await service.monthlyRentPerUnitFor(hood.id, api);
        hood.monthlyYield ||= upx ? parseFloat(upx.toFixed(2)) : null;
      }

      this.key = (this.key || 0) + 1;
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
