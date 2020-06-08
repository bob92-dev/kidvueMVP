<template>
  <div>

      <Annonce
       v-for="annonce in Listannonces"
      :key="annonce.id"
      :annonce="annonce"
      />
    
  </div>
</template>


<script>
import Annonce from "@/components/annonce.vue";



export default {
  components: {
    Annonce
  },
     data(){
        return {
            Listannonces:[],

        }
     },
     created(){
    this.Listannonces = this.$store.getters.annonces
  
     },
     mounted:function(){
        this.display()
      },
     methods:{
       display(){
         this.$store.dispatch('displayAdverts')
       }
     }

  

};
</script>
