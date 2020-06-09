<template>
    <div >
      <div class="container">
    <link href="//netdna.bootstrapcdn.com/bootstrap/3.0.0/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css">
    <div class="row">
        <div class="col-xs-12 col-sm-6 col-md-6">
            <div class="well well-sm">
                <div class="row">
                    <div class="col-sm-6 col-md-4">
                        <img v-bind:src='imageUrl' alt="" class="img-rounded img-responsive"/> 
                    </div>
                    <div class="col-sm-6 col-md-8">
                        <h4>{{annonce.titre}}</h4>
                        <small> {{annonce.ville}} <i class="glyphicon glyphicon-map-marker"></i></small><br/>
                            <i class="glyphicon glyphicon-euro"></i> Prix: {{annonce.prix}}  <br />
                            <i class="glyphicon glyphicon-tag"></i> Marque:  {{annonce.marque}} <br/>
                            <i class="glyphicon glyphicon-list-alt"></i> Description: {{annonce.description}} <br/>
                             <br/>
                        <div class="btn-group">
                            <router-link class="btn btn-outline-secondary "   :to="{ name: 'detailAnnonce', params: { id: annonce.id } }">Détail annonce</router-link>
                            <button @click="send" type="button" class="btn btn-outline-secondary ropdown-toggle" >contacter le proprio</button>
                            
                     </div>
                        
                    </div>
                    
                </div>
            </div>
        </div>
        
    </div>
</div>

        

  </div>


</template>

<script>


export default {

  props: {
    annonce: Object,
    },
  data() {
    return {
      showContact: false,
      imageUrl: ""
    }
    },
    created(){
        this.imageUrl = this.annonce.imageUrl


  },
  methods:{ send: function(){
    this.showContact = true
  }
  },
  
 };

</script>

<style scoped>

</style>