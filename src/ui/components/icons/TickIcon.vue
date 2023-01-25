<template>
  <svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" :fill="color">
    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
    <g
      id="SVGRepo_tracerCarrier"
      stroke-linecap="round"
      stroke-linejoin="round"
    ></g>
    <g id="SVGRepo_iconCarrier">
      <rect x="0" fill="none" width="20" height="20"></rect>
      <g>
        <path d="M15.3 5.3l-6.8 6.8-2.8-2.8-1.4 1.4 4.2 4.2 8.2-8.2"></path>
      </g>
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
