<template>
  <div id="app">
    <Contact />
    <div id="nav">
      <searchbar />
      <router-view />
    </div>
  </div>
</template>
<script>
import searchbar from "@/components/SearchBar.vue";

export default {
  components: {
    searchbar   
  }
};
</script>

<style></style>
