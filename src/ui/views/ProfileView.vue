<template>
  <div v-if="profile && state.session?.auth_token">
    <Field label="Collections" :value="profile.dashboard.collections" />
    <Field label="Earning (UPX)" :value="profile.dashboard.earning" />
    <Field label="Net Worth (UPX)" :value="profile.dashboard.networth" />
    <Field label="Properties (UPX)" :value="profile.dashboard.property" />
    <Field label="Wallet (UPX)" :value="profile.dashboard.upx" />
    <PropertiesList
      class="MyProperties"
      :properties="profile.properties"
      title="My Properties"
    />
  </div>
</template>

<script lang="ts">
import Field from "../components/LabelAndField.vue";
import PropertiesList from "../components/PropertiesList.vue";
import * as Service from "../../services/profile";
import Api from "../../lib/api";
import state from "../state";

import type { Profile } from "../../services/profile";

export default {
  components: { Field, PropertiesList },

  data() {
    return {
      state,
      profile: null as Profile | null,
    };
  },

  watch: {
    "state.session"() {},
  },

  async created() {
    state.loading = true;

    const api = new Api(state.session?.auth_token);
    this.profile = await Service.fetch(api);

    state.loading = false;
  },
};
</script>

<style scoped>
.MyProperties {
  margin-top: 15px;
}
</style>
