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
      <div v-if="property.stashed" class="Icon">
        <TickIcon @click.stop="unstash(property)" />
      </div>
      <div v-else class="Icon">
        <PlusIcon @click.stop="stash(property)" />
      </div>
    </template>
  </List>
</template>

<script lang="ts">
import List from "./PropertiesList.vue";
import PlusIcon from "./icons/PlusIcon.vue";
import TickIcon from "./icons/TickIcon.vue";
import state from "../state";
import * as storage from "../../lib/storage";

export default {
  components: { List, PlusIcon, TickIcon },

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
    "state.viewableProperties"(properties) {
      this.state.viewableProperties = properties;
      this.loadProperties();
    },
  },

  created() {
    this.loadProperties();
  },

  methods: {
    async loadProperties() {
      if (!this.state.viewableProperties) return;

      this.loading = true;

      const stash = await storage.getStashedProperties();

      for (const prop of this.state.viewableProperties) {
        if (this.properties.findIndex((p) => p.prop_id == prop.prop_id) > -1) {
          continue;
        }

        this.properties.push({
          ...prop,
          stashed: stash.find(({ id }) => id === prop.prop_id)
        });
      }

      (this.$refs as any).list?.sort();

      this.loading = false;
    },
    async stash(property: any) {
      const stash = await storage.getStashedProperties();

      await storage.setStashedProperties(
        stash.concat({ id: property.prop_id, hoodId: this.hood.id })
      );

      property.stashed = true;
    },
    async unstash(property: any) {
      const properties = await storage.getStashedProperties();

      storage.setStashedProperties(
        properties.filter(({ id }) => id !== property.prop_id)
      );

      property.stashed = false;
    },
  },
};
</script>
