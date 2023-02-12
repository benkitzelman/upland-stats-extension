<template>
  <div class="PropertiesList">
    <List
      v-if="loading || (properties && properties.length > 0)"
      :title="title"
      :items="properties"
      :cols="cols"
      :loading="loading"
      :actionsCol="true"
      :sorting="{ prop: 'priceUPX', dir: 'asc' }"
      :expandable="true"
      idKey="prop_id"
      ref="list"
    >
      <template #actions="{ item }">
        <slot name="actions" :property="item" />
      </template>
      <template #expanded="{ item }">
        <PropertyDetails :id="item.prop_id" />
      </template>
    </List>
  </div>
</template>

<script lang="ts">
import List from "./SimpleList.vue";
import PropertyDetails from "./PropertyDetails.vue";
import { compareNumeric } from "../../lib/comparitors";

export default {
  components: { List, PropertyDetails },
  props: {
    title: {
      type: String,
      required: false,
    },
    properties: {
      type: Array,
      required: true,
    },
    actionsCol: {
      type: Boolean,
      required: false,
      default: () => false,
    },
    loading: {
      type: Boolean,
      required: false,
      default: () => false,
    },
    sorting: {
      type: Object,
      required: false,
      default: () => null,
    },
  },

  data() {
    return {
      cols: [
        { prop: "full_address", header: "Address" },
        { prop: "roi", header: "ROI", sortFn: compareNumeric },
        { prop: "monthlyRentUPX", header: "UPX / Mo", sortFn: compareNumeric },
        { prop: "priceUPX", header: "UPX Price", sortFn: compareNumeric },
        { prop: "currency", header: "Pay in" },
      ],
    };
  },

  methods: {
    sort(...args: any) {
      return (this.$refs as any).list?.sort(...args);
    },
  },
};
</script>
