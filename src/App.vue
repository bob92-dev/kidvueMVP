<template>
  <div id="app">
    <Header />
    <Contact />
    <upload></upload>
    <div id="nav">
      <searchbar />
      <router-view />
     </div>
  </div>
</template>

<script>
import searchbar from "@/components/SearchBar.vue";
import Header from "@/components/Header.vue";

import Upload from './components/Upload.vue'
export default {
  components: {
    searchbar,   
    Header,
    Upload

  }
};
</script>

<style scoped>
</style>
