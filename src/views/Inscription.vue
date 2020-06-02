<template>
    <div class="container">
        <h1>Inscription</h1>
        <form>
            <div class ="form-group">
                <label for="email"> E-mail</label>
                <input type="email" id="mail" class="form-control">
            </div>

             <div class ="form-group">
                <label for="password"> Mot de passe</label>
                <input type="password" id="password" class="form-control">
            </div>

             <div class ="form-group">
                <label for="text"> Confirmez le mot de passe</label>
                <input type="password" id="conf-password" class="form-control">
            </div>

            
        </form>
    </div>
</template>

<script>

export default {
    
}
</script>

<style scoped>
.container {
    margin-top: 10;
  position: relative;
  width: 45%;
}
</style>