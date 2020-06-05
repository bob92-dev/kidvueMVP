<template>
  <div id="app">
    <Header />
    <div id="nav">
      <searchbar />
      <router-view />
     </div>
     <Footer />
  </div>
</template>

<script>
import searchbar from "@/components/SearchBar.vue";
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue"


export default {
  components: {
    searchbar,   
    Header,
    Footer,

  }
};
</script>

<style scoped>
</style>
