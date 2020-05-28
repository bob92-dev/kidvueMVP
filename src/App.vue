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
import Contact from "@/components/Contact.vue";
export default {
  components: {
    Contact
  }
};
</script>

<style></style>
