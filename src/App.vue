<template>
  <div id="app">
    <Header />
    <Contact />
    <div id="nav">
      <searchbar />
      <router-view />
    </div>
  </div>
</template>
<script>
import searchbar from "@/components/SearchBar.vue";
import Header from "@/components/Header.vue";
export default {
  components: {
    searchbar,   
    Header
  }
};
</script>

<style></style>
