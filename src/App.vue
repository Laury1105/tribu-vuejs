<template>
  <div id="app">
    <div class="title">
      <h1>Tribu: Usecase Test</h1>
    </div>
    <div class="container">
      <div class="nav">
        <div
          :class="
            activePage == 'overview' ? 'active-page nav-link' : 'nav-link'
          "
          @click="setActivePage('overview')"
        >
          <router-link to="/" style="text-decoration: none; color: inherit;"
            >Overview</router-link
          >
        </div>
        <div
          :class="activePage == 'upload' ? 'active-page nav-link' : 'nav-link'"
          @click="setActivePage('upload')"
        >
          <router-link
            to="/upload"
            style="text-decoration: none; color: inherit;"
            >Upload</router-link
          >
        </div>
      </div>
      <router-view />
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    setActivePage(page) {
      this.$store.commit("setActivePage", page);
    },
  },
  computed: {
    activePage() {
      return this.$store.state.activePage;
    },
  },
};
</script>
<style lang="scss">
@import "./assets/style/main.scss";
</style>
