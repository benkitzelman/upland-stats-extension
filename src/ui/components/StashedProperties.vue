<template>
  <List
    v-if="loading || (properties && properties.length > 0)"
    :properties="properties"
    :loading="loading"
    :actionsCol="true"
    :sorting="{ prop: 'priceUPX', dir: 'asc' }"
    ref="list"
  >
    <template #actions="{ property }">
      <button @click="unstash(property)">Unstash</button>
    </template>
  </List>
  <p v-if="!loading && properties && properties.length === 0" class="EmptyMsg">
    You have no stashed properties.
  </p>
</template>

<script lang="ts">
import List from "./PropertiesList.vue";
import state from "../state";
import * as storage from "../../lib/storage";
import * as service from "../../services/property";
import Api from "../../lib/api";

import type { PropertySummary } from "../../lib/api/types";

export default {
  components: { List },

  data() {
    return {
      state,
      loading: false,
      properties: [] as any[],
    };
  },

  created() {
    this.loadProperties();
  },

  methods: {
    async loadProperties() {
      if (!this.state.session?.auth_token || !this.state.currentCoordinates)
        return;

      this.loading = true;

      const properties = await service.stashedProperties(
        new Api(this.state.session.auth_token)
      );
      this.properties = properties.map((p) => p.toJSON());

      (this.$refs as any).list?.sort();

      this.loading = false;
    },
    unstash({ prop_id }: PropertySummary) {
      const props = storage.getStashedProperties();
      const idx = props.findIndex(({ id }) => id === prop_id);
      props.splice(idx, 1);
      this.properties.splice(idx, 1);
      storage.setStashedProperties(props);
    },
  },
};
</script>

<style scoped>
.EmptyMsg {
  text-align: center;
}
</style>
