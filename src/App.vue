<template>
  <div id="app">
    <Header />
       <div id="nav">
       <router-view />
       <Footer />
     </div>
   </div>  
 </template>

<script>

import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue"

export default {
  components: {
    Header,
    Footer,
  }
};
</script>

<style scoped>
</style>
