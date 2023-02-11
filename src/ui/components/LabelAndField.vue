<template>
  <div class="LabelAndField">
    <label>{{ label }}</label>
    <div>{{ value }}</div>
  </div>
</template>

<script lang="ts">
export default {
  props: {
    label: {
      type: String,
      required: true,
    },
    value: {
      required: false,
      default: () => "" as any,
    },
  },

  watch: {
    value() {},
  },
};
</script>

<style scoped>
.LabelAndField {
  display: flex;
}

.LabelAndField > label {
  width: 150px;
  font-weight: 600;
  flex-shrink: 0;
}
.LabelAndField > div {
  overflow-x: auto;
}
</style>
