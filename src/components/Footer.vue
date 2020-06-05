<template>

<!-- Footer -->
<footer class="page-footer footer">

<div class="container"></div>
  <!-- Footer Links -->
  <div class="container-fluid text-center text-md-left">

    <!-- Grid row -->
    <div class="row">
      <div class="col-md-3 mb-md-0 mb-3">
        <router-link class="btn btn-outline-secondary" :to="{ name: 'nous' }">Qui sommes nous?</router-link> 
      </div>
      <div class="col-md-3 mb-md-0 mb-3">
         <router-link class="btn btn-outline-secondary" :to="{ name: 'contact' }">Contact</router-link>
      </div>
          <div class="col-md-3 mb-md-0 mb-3">
        <router-link class="btn btn-outline-secondary" :to="{ name: 'cgv' }">CGV/CGU</router-link>    
        
      </div>
      <div><h5 class="text-uppercase">CGV/CGU</h5></div>
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
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 100px;
    line-height: 200px;
    background-color: #f5f5f5;
}
.container {
    height: 150px;
}
</style>