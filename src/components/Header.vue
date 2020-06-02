<template>
    <div class="regular-header regular-header--new clearfix hide-sm" id="new-header">
            <div class="comp pull-left">
                
                    <img src="kids_on_tripLogo.png" class="logoKOT" alt="Logo"/>
                
                    <div class="comp pull-right hide-host comp-become-a-host ">
                    <div v-if="connected">
                     <a class="hdr-btn link-reset lys-link text-white">
                        <router-link class="btn btn-outline-secondary" :to="{ name: 'uploader' }">Ajouter une annonce</router-link> 
                        <router-link class="btn btn-outline-secondary">Louer votre matériel</router-link>
                        <router-link class="btn btn-outline-secondary" :to="{ name: '' }">Déconnexion</router-link>
                    </a>
                    </div>
                    <div v-else>
                    <a class="hdr-btn link-reset lys-link text-white">
                        <router-link class="btn btn-outline-secondary" :to="{ name: 'uploader' }">Ajouter une annonce</router-link> 
                        <router-link class="btn btn-outline-secondary">Louer votre matériel</router-link>
                        <router-link class="btn btn-outline-secondary" :to="{ name: 'inscription' }">Inscription</router-link>
                        <router-link class="btn btn-outline-secondary" :to="{ name: 'connexion' }">Connexion</router-link>
                    </a>
                    </div>

                </div>  
            </div>
          </div> 
</template>


<script>

export default {
   
    data(){
        return {
            connected: true
        }
    }
    
}
</script>

<style scoped>

</style>