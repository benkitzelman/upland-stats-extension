<template>
  <div class="Title">
    <h2 class="green">Upland Stats</h2>
    <Spinner :loading="state.loading" color="#3AB982" size="25px" class="Spinner" />
  </div>

  <header>
    <div class="wrapper">
      <nav>
        <RouterLink to="/">Live</RouterLink>
        <RouterLink to="/stash">Stashed Properties</RouterLink>
      </nav>
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
.Title {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

header {
  line-height: 1.5;
  max-height: 100vh;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
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

header {
  display: flex;
  place-items: center;
  width: 100%;
}

header .wrapper {
  display: flex;
  place-items: flex-start;
  flex-wrap: wrap;
  width: 100%;
}

nav {
  text-align: left;
  font-size: 1rem;
  margin-bottom: 1rem;
  margin-top: 0;
  width: 100%;
}
</style>
