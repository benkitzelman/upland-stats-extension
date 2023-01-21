<template>
  <h3 class="green">{{ hood.name }} Properties</h3>
  <List
    v-if="loading || (properties && properties.length > 0)"
    :items="properties"
    :cols="cols"
    :loading="loading"
    :actionsCol="true"
    :sorting="{ prop: 'priceUPX', dir: 'asc' }"
    idKey="prop_id"
    ref="list"
  >
    <template #actions="{ item }">
      <button @click="stash(item)">Stash</button>
    </template>
  </List>
</template>

<script lang="ts">
import List from "./SimpleList.vue";
import state from "../state";
import Api from "@/lib/api";
import * as service from "../../services/property";

import type { PropertySummary } from '../../lib/api/types';

export default {
  components: { List },
  props: {
    hood: {
      required: true,
      type: Object,
    },
  },

  data() {
    return {
      state,
      loading: false,
      properties: [] as any[],
      cols: [
        { prop: "full_address", header: "Address" },
        { prop: "roi", header: "ROI" },
        { prop: "monthlyRentUPX", header: "UPX / Mo" },
        { prop: "priceUPX", header: "Price" },
      ],
    };
  },

  watch: {
    "state.viewableNeighbourhoods"(hoods) {
      this.state.viewableNeighbourhoods = hoods;
      this.loadProperties();
    },
  },

  created() {
    this.loadProperties();
  },

  methods: {
    async loadProperties() {
      if (!this.state.session?.auth_token || !this.state.currentCoordinates)
        return;

      this.loading = true;

      const api = new Api(this.state.session.auth_token);
      this.properties =
        (await service.propertiesWithRent(
          this.state.viewableNeighbourhoods,
          this.state.currentCoordinates,
          api
        )) || [];

      (this.$refs as any).list?.sort();

      this.loading = false;
    },
    stash({ prop_id }: PropertySummary) {
      alert("STASHED" + prop_id);
    },
  },
};
</script>
