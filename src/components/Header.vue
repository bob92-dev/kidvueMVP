<template>
    <div class="regular-header regular-header--new clearfix hide-sm" id="new-header">
            <div class="comp pull-left">
                
                    <img src="kids_on_tripLogo.png" class="logoKOT" alt="Logo"/>
                
                    <div class="comp pull-right hide-host comp-become-a-host ">
                    <div v-if="connected.loggedIn == true">
                          <a class="black">
                         Bienvenue {{ userDisplayName }} !
                        <router-link class="btn btn-outline-secondary" :to="{ name: 'creationAnnonce' }">Louer votre matériel</router-link>
                        <router-link class="btn btn-outline-secondary" v-on:click.native="deconnexion"  :to="{ name: 'deconnexion' }">Déconnexion</router-link>
                        <router-link class="btn btn-outline-secondary" :to="{ name: 'profil' }">Profil</router-link>
                        </a>
                     
                   
                        
                    </div>
                    <div v-else>
                           <a class="hdr-btn link-reset lys-link text-white">
                        <router-link class="btn btn-outline-secondary" :to="{ name: 'creationAnnonce' }">Louer votre matériel</router-link>
                        <router-link class="btn btn-outline-secondary" :to="{ name: 'inscription' }">Inscription</router-link>
                        <router-link class="btn btn-outline-secondary" :to="{ name: 'connexion' }">Connexion</router-link>   
                    </a>
                      
                    
                    </div>

                </div>  
            </div>
          </div> 
</template>


<script>
import firebase from 'firebase';


export default {

    
   
    data(){
        return {
            connected: this.$store.getters.user,

            
        }
    },
  
      computed:{
        userDisplayName() {
            return this.$store.state.user.data.displayName
        }
    },

     methods:{
deconnexion() {
      console.log("alors?" + this.$store.getters.user.loggedIn)
      firebase
        .auth()
        .signOut()
        .then(() => {
           
          this.$router.replace({
            name: "home",
           
            
          
          });
        });
  
         }
     }
         
    
    
}
</script>

<style scoped>
  .black{
    color:black
  }

</style>