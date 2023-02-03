<template>
  <div v-if="property" class="PropertyDetails">
    <Field v-for="(prop, index) in keys" :key="index" class="Prop" :label="prop" :value="property[prop]" />
  </div>
</template>

<script lang="ts">
import Field from "./LabelAndField.vue";
import state from "../state";
import Api from "../../lib/api";

import type { Property } from "../../lib/api/types";

export default {
  components: { Field },

  props: {
    id: {
      type: Number,
      required: true,
    },
  },

  data() {
    return {
      state,
      property: null as Property | null,
      keys: [] as (keyof Property)[],
    };
  },

  watch: {
    "state.session"(session) {
      this.state.session = session;
      this.loadProperty();
    },
  },

  created() {
    this.loadProperty();
  },

  methods: {
    async loadProperty() {
      const { auth_token } = this.state.session || {};
      if (!auth_token) return;

      this.state.loading = true;
      this.property = await new Api(auth_token).property(this.id);
      this.keys = Object.keys(this.property).sort() as (keyof Property)[];
      this.state.loading = false;
    },
  },
};
</script>

<style scoped>
.PropertyDetails {
  padding: 15px;
  background: #2f2f2f;
}
.PropertyDetails .Prop {
  display: flex;
}
.PropertyDetails .Prop label {
  width: 200px;
}
</style>
