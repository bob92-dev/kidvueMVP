<template>  
  <form class="contact-form center" @submit.prevent="sendEmail">
    <label>Contactez nous</label>
    <label>Nom:</label>
    <input type="text" name="user_name">
    <label>Email:</label>
    <input type="email" name="user_email">
    <label>Message:</label>
    <textarea name="message"></textarea><br>
    <input class="btn" type="submit" value="Envoyer votre message" @click="sendEmail">
  </form>
</template>

<script>
import emailjs from 'emailjs-com';

export default {
  methods: {
    sendEmail: (e) => {
      emailjs.sendForm('romain', 'template_9oGD6HyL', e.target, 'user_4Epjr97MQiSODRf4hYtlP')
        .then((result) => {
            console.log('SUCCESS!', result.status, result.text);
            alert("Votre mail a été envoyé avec succès!")

        }, (error) => {
            console.log('FAILED...', error);
            alert("Error!")
        });
    }
  }
}
</script>

<style scoped>
.center {
  margin: auto;
  margin-top: 30px;
  width: 50%;
  border: 1px solid rgb(172, 171, 171);
  padding: 10px;
}
</style>