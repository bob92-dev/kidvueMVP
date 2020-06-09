<template>
    <div>
    <h1>page userprofil</h1>
     {{ userDisplayName }}
     
     <button   class="btn btn-outline-secondary" @click="changeShowEditerProfil" >Modifiez votre profile</button>
     <div v-if="showEditerProfil"><EditerProfil /></div>
    <router-link class="btn btn-outline-secondary" :to="{ name: 'editerProfil' }">Modifiez votre profile</router-link> // faut linker le component Editerprofil
    
   
  

</div>
</template>

<script>
import EditerProfil from "@/components/EditerProfil.vue"
export default {    
        data(){
            return {
                showEditerProfil: false
            }
        },
        methods:{
            changeShowEditerProfil(){
                if(this.showEditerProfil==false){
                    this.showEditerProfil = true
                }else{
                    this.showEditerProfil =false
                }
            }
        },
        components:{
            EditerProfil,
        },
        computed:{
        userDisplayName() {
            return this.$store.state.user.data.displayName
        },
       
    },
    
}
</script> 
