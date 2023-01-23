<template>
  <h3 class="green">{{ hood.name }} Properties</h3>
  <List
    v-if="loading || (properties && properties.length > 0)"
    :properties="properties"
    :loading="loading"
    :actionsCol="true"
    :sorting="{ prop: 'priceUPX', dir: 'asc' }"
    ref="list"
  >
    <template #actions="{ property }">
      <button v-if="property.stashed" @click="unstash(property)">
        Unstash
      </button>
      <button v-else @click="stash(property)">Stash</button>
    </template>
  </List>
</template>

<script lang="ts">
import List from "./PropertiesList.vue";
import state from "../state";
import * as storage from "../../lib/storage";
import Api from "../../lib/api";
import * as service from "../../services/property";

import type { PropertySummary } from "../../lib/api/types";

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

      this.properties = this.properties.map((p) => ({
        ...p,
        stashed: this.isStashed(p.prop_id),
      }));
      (this.$refs as any).list?.sort();

      this.loading = false;
    },
    isStashed(prop_id: number) {
      return !!storage.getStashedProperties().find(({ id }) => id === prop_id);
    },
    stash(property: any) {
      storage.setStashedProperties(
        storage
          .getStashedProperties()
          .concat({ id: property.prop_id, hoodId: this.hood.id })
      );

      property.stashed = true;
    },
    unstash(property: any) {
      const properties = storage.getStashedProperties();

      storage.setStashedProperties(
        properties.filter(({ id }) => id !== property.prop_id)
      );

      property.stashed = false;
    },
  },
};
</script>
