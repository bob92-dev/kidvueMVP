<template>
 
  <div class="annonce">
    <router-link
      class="annonce-lien"
      :to="{ name: 'detail-annonce', params: { id: annonce.id } }"
      >Voir le détail de l'annonce
    </router-link>
    <div>{{ annonce.id }}</div>
    <div>{{ annonce.category }}</div>
    <div>{{ annonce.marque }}</div>
    <div>{{ annonce.titre }}</div>
    <div>{{ annonce.description }}</div>
    <div>{{ annonce.ville }}</div>
  </div>
 
</template>

<script>
export default {
  props: {
    annonce: Object
  }
};
</script>
