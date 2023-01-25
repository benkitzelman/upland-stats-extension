<template>
  <svg
    :fill="color"
    viewBox="0 0 22 22"
    xmlns="http://www.w3.org/2000/svg"
    id="memory-plus"
  >
    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
    <g
      id="SVGRepo_tracerCarrier"
      stroke-linecap="round"
      stroke-linejoin="round"
    ></g>
    <g id="SVGRepo_iconCarrier">
      <path d="M12 17H10V12H5V10H10V5H12V10H17V12H12Z"></path>
    </g>
  </svg>
</template>

<script lang="ts">
export default {
  props: {
    color: {
      type: String,
      required: false,
      default: () => "hsl(160, 100%, 37%)",
    },
  },
};
</script>
