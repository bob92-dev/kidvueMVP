<template>
  <div class="annonce">
    <div>{{annonce.id}}</div>
    <div>{{annonce.id}}</div>
    <div>{{annonce.user.name}}</div>
    <div>{{annonce.category}}</div>
    <div>{{annonce.marque}}</div>
    <div>{{annonce.titre}}</div>
    <div>{{annonce.description}}</div>
    <div>{{annonce.ville}}</div>
    <div>{{annonce.date}}</div>
    <div>{{annonce.disponibility}}</div>
    <div>{{annonce.photo}}</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      annonce: {
        id: 1,
        user: {
          id: "abc123",
          name: "Adam"
        },
        category: "poussette",
        marque: "safetyfirst",
        titre: "Vends super poussette",
        description: "Yay felines!",
        ville: "Meow Town",
        date: "2019-01-03T21:54:00.000Z",
        disponibility: true,
        photo: "mapoussette.jpeg"
      }
    };
  }
};
</script>
