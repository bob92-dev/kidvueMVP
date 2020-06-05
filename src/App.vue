<template>
  <div id="app">
    <Header />
   
    <router-view />
    <Footer />

  </div>
</template>

<script>

import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";


export default {
  components: {
  
    Header,
    Footer,
  },
  computed: {
    userIsAuthenticated () {
        return this.$store.getters.user !== null && this.$store.getters.user !== undefined
      }
  },
  methods: {
      onLogout () {
        this.$store.dispatch('logout')
      }
    }
};
</script>

<style scoped>
</style>
