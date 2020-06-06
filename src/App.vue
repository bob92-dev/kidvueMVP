<template>
  <v-app>
    <v-toolbar>
    <v-toolbar-title> 
    </v-toolbar-title>     
      <v-toolbar> 
    <Header />
    <main>

    </main>  
    <v-content>
     
    </v-content>
  </v-app>
</template>

<script>
import Header from "@/components/Header.vue";

export default {
  name: "App",
  components: {
   Header
  },

  data: () => ({
    //
  })
};
</script>
