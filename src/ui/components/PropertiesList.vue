<template>
  <h3 v-if="title" class="green">{{ title }}</h3>
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
      <slot name="actions" :property="item" />
    </template>
  </List>
</template>

<script lang="ts">
import List from "./SimpleList.vue";

export default {
  components: { List },
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
        { prop: "roi", header: "ROI" },
        { prop: "monthlyRentUPX", header: "UPX / Mo" },
        { prop: "priceUPX", header: "Price" },
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
