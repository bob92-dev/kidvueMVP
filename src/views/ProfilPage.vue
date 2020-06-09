<template>

    <div>
    
     <link href="//netdna.bootstrapcdn.com/bootstrap/3.0.0/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css">
     

    
   <div class="container">
    <div class="row">
        <div class="col-xs-12 col-sm-6 col-md-6">
            <div class="well well-sm">
                <div class="row">
                    <div class="col-sm-6 col-md-4">
                        <img src="http://placehold.it/380x500" alt="" class="img-rounded img-responsive" />
                    </div>
                    <div class="col-sm-6 col-md-8">
                        <h4>{{ userDisplayName }}</h4>
                        <small> {{ ville  }}Paris, France <i class="glyphicon glyphicon-map-marker"></i></small><br/>
                            <i class="glyphicon glyphicon-envelope"></i> Email: {{ authenEmail }}  <br />
                            <i class="glyphicon glyphicon-calendar"></i> Date de naissance:  {{ date }} <br/>
                            <i class="glyphicon glyphicon-phone"></i> Numero de telephone : {{ ville }} <br/>
                             <br/>
                        <div class="btn-group">
                            <button  type="button" class="btn btn-outline-secondary ropdown-toggle" @click="changeShowEditerProfil" >Modifiez votre profile</button><br>
                            <button  type="button" class="btn btn-outline-secondary ropdown-toggle" @click="changeShowMessage" >Message</button>
                     </div>
                        
                    </div>
                    
                </div>
            </div>
        </div>
        
    </div>
</div>
<div v-if="showEditerProfil" class="container"><EditerProfil /></div>
<div v-if="showMessage" class="container"><Message /></div>
</div>
</template>
<script src="//netdna.bootstrapcdn.com/bootstrap/3.0.0/js/bootstrap.min.js"></script>
<script src="//code.jquery.com/jquery-1.11.1.min.js"></script>
<script>
import EditerProfil from "@/components/EditerProfil.vue";
import Message from "@/components/Message.vue";
export default {    
        
        data(){
            return {
                showEditerProfil: false,
                showMessage:false,
                email:'',
                date:'',
                ville:''

            }
        },
        methods:{
            changeShowEditerProfil(){
                if(this.showEditerProfil==false){
                    this.showEditerProfil = true
                }else{
                    this.showEditerProfil =false
                }
            },
            changeShowMessage(){
                if(this.showMessage==false){
                    this.showMessage = true
                }else{
                    this.showMessage =false
                }
            }
        },
        components:{
            EditerProfil,
            Message,
        },
        computed:{
        userDisplayName() {
            return this.$store.state.user.data.displayName
        },
        authenEmail(){
            return this.$store.state.user.data.email
        }
    },
    
}
</script> 

<style scoped>

</style>
