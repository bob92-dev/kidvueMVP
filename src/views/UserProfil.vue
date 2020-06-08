<template>
      <UserProfil />
    
</template>

<script>

import ProfilRempli from "@/components/UserProfil";

export default {
    components:{
        EditerProfil,
        UserProfil
    },
    data(){
        return {
            userId: this.$store.getter.user.id,
        }
    },

}
</script>    