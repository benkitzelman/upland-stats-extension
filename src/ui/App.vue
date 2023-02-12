<template>
  <header>
    <h2 class="Green">Upland Stats</h2>

    <div v-if="!state.offline" class="Links">
      <nav>
        <RouterLink to="/">Live</RouterLink>
        <RouterLink to="/stash">Stashed</RouterLink>
        <RouterLink v-if="state.session" to="/me">Me</RouterLink>
      </nav>
      <Spinner
        :loading="state.loading"
        color="#3AB982"
        size="25px"
        class="Spinner"
      />
    </div>
  </header>

  <p v-if="state.offline" class="Offline">
    Open the stats extension while on
    <a href="https://play.upland.me" target="upland">Upland</a>
  </p>

  <RouterView v-else />
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
  margin-bottom: 1rem;
}

header .Links {
  display: flex;
  place-items: flex-start;
  flex-wrap: wrap;
  align-items: center;
}
header h2 {
  margin-right: 60px;
}
nav {
  margin-top: 2rem;
  text-align: left;
  font-size: 1rem;
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
.Offline {
  margin-top: 30px;
  text-align: center;
}
</style>
