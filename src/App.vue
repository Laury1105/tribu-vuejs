<template>
  <div id="app">
    <div class="title">
      <h2>Tribu: Use case Test</h2>
    </div>
    <div class="container">
      <div class="nav">
       <router-link to="/" 
          :class=" activePage == 'overview' ? 'active-page nav-link' :
          'nav-link' " style="text-decoration: none; color: inherit;" ><div class="link-div" @click="setActivePage('overview')">  Overview</div> 
        </router-link>
        
        <router-link
          to="/upload"
         
          :class="activePage == 'upload' ? 'active-page nav-link' : 'nav-link'"
          style="text-decoration: none; color: inherit;"
        ><div class="link-div" @click="setActivePage('upload')">
          Upload</div>
        </router-link>
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
