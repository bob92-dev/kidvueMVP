<template>

    <div>
    
     <link href="//netdna.bootstrapcdn.com/bootstrap/3.0.0/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css">
     

    
   <div class="container">
    <div class="row">
        <div class="col-xs-12 col-sm-6 col-md-6">
            <div class="well well-sm">
                <div class="row">
                    <div class="col-sm-6 col-md-4">
                        <img src="https://xuan.com.my/getattachment/Xuan/2019/XUANENT/SEP/30/%E4%BD%A0%E4%B8%80%E5%AE%9A%E7%94%A8%E8%BF%87%E4%BB%96%E7%9A%84%E8%B4%B4%E5%9B%BE%EF%BC%81-%E5%8A%A0%E6%B2%B9%E5%AE%9D%E5%AE%9D%E2%80%9D%E5%B7%B2%E7%BB%8F%E9%95%BF%E6%88%90%E5%B0%91%E5%B9%B4-%E5%B8%85%E6%9E%81%E4%BA%86%EF%BC%81/1.jpg.aspx" alt="" class="img-rounded img-responsive" />
                    </div>
                    <div class="col-sm-6 col-md-8">
                        <!-- <h4>{{ userDisplayName }}</h4> -->
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
        /*userDisplayName() {
            return this.$store.state.user.data.displayName
        },*/
        authenEmail(){
            return this.$store.state.user.data.email
        }
    },
    
}
</script> 

<style scoped>

</style>
