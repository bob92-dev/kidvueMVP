<template>
  <router-link class="event-link" :to="{ name: 'event-show', params: { id: event.id } }">
    <div class="event-card -shadow">
      <span class="eyebrow">@{{ event.time }} on {{ event.date }}</span>
      <h4 class="title">{{ event.title }}</h4>
      <BaseIcon name="users">{{ event.attendees.length }} attending</BaseIcon>
    </div>
  </router-link>
</template>
<script>

// import firebase from 'firebase';
export default {
    props : ['id'],
    data(){
        return {
            annonce : {}
        }
    }      
        
        /* 
        this.refdb.once('value', function(snapshot) {
            snapshot.forEach(function(childSnapshot) {
                var childKey = childSnapshot.key;
                var childData = childSnapshot.val();
                // ...
                console.log(childKey + " " + childData)
            });
        }) */
    
    } 
</script>