<template>
  <div id="app">
    <Header />
       <div id="nav">
       <router-view />
     </div>
   </div>  
 </template>

<script>

import Header from "@/components/Header.vue";

export default {
  components: {
    Header,
 
  }
};
</script>

<style scoped>
</style>
