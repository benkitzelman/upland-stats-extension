<template>
  <header>
    <h2 class="green">Upland Stats</h2>
    <div class="wrapper">
      <nav>
        <RouterLink to="/">Live</RouterLink>
        <RouterLink to="/stash">Stashed</RouterLink>
        <RouterLink to="/me">Me</RouterLink>
      </nav>
      <Spinner :loading="state.loading" color="#3AB982" size="25px" class="Spinner" />
    </div>
  </header>

  <RouterView />
</template>

<script lang="ts">
import { RouterLink, RouterView } from "vue-router";
import Spinner from "vue-spinner/src/BounceLoader.vue";
import state from "./state";

export default {
  components: { RouterLink, RouterView, Spinner },

  data() {
    return {
      state,
    };
  },

  watch: {
    "state.loading"() {},
  },
};
</script>

<style scoped>

header {
  line-height: 1.5;
  max-height: 100vh;
  justify-content: space-between;
  display: flex;
  place-items: center;
  align-items: baseline;
  width: 100%;
}

header .wrapper {
  display: flex;
  place-items: flex-start;
  flex-wrap: wrap;
  align-items: baseline;
}
header h2 {
  margin-right: 60px;
}
nav {
  margin-top: 2rem;
  text-align: left;
  font-size: 1rem;
  margin-bottom: 1rem;
  margin-top: 0;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}
</style>
