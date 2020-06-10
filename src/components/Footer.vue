<template>

<!-- Footer -->
<footer class="page-footer footer">

<div class="container"></div>
  <!-- Footer Links -->
  <div class="container-fluid text-center text-md-left">

    <!-- Grid row -->
    <div class="row">
               <div class="col-md-3 mb-md-0 mb-3">
        <router-link class="text-footer" :to="{ name: 'cgv' }">CGV/CGU</router-link>    
      </div>
      <div class="col-md-3 mb-md-0 mb-3">
        <router-link class="text-footer" :to="{ name: 'nous' }">Qui sommes nous?</router-link> 
      </div>
      <div class="col-md-3 mb-md-0 mb-3">
         <router-link class="text-footer" :to="{ name: 'contact' }">Contact</router-link>
      </div>
      <div class="col-md-3 mb-md-0 mb-3">
         <router-link class="text-footer" :to="{ name: 'nous' }">FAQ</router-link>
      </div>
   
    </div>
  </div>

      <hr class="clearfix w-100 d-md-none pb-3">

  <!-- Copyright -->
  <div class="footer-copyright text-center py-3">© 2020 Copyright:
    <a href="https://kidsOnTrips.com">KidsOnTrips.com</a>
  </div>
  <!-- Copyright -->

</footer>
<!-- Footer -->
</template>

<script>
export default {
    
}
</script>

<style scoped>
.footer{
    position: flex;
    bottom: 0;
    width: 100%;
    height: 100px;
    line-height: 200px;
    padding-top: 80px;
 
}
.container {
   
}
.text-footer{
    color:gray;
}
</style>