<template>
  <section class="row payment-form">
      <div>  
       <p>{{ stripeValidationError }}</p>
     </div>
      <h5 class="#e0e0e0 grey lighten-4">
      Vous allez payer :  
      <span class="right field"> {{ amount }} euros</span>
    </h5>

    <div class="error red center-align white-text"></div>

    <div class="col s12 card-element field">
      <label>Numéro de carte bancaire</label>
      <div id="card-number-element" class="input-value"></div>
    </div>

    <div class="col s6 card-element field">
      <label>Date d'expiration</label>
      <div id="card-expiry-element"></div>
    </div>

    <div class="col s6 card-element field">
      <label>CVC (3 chiffres derrière la carte)</label>
      <div id="card-cvc-element"></div>
    </div>

    <div class="col s12 place-order-button-block field">
      <button class="btn col s12 #e91e63 pink" @click="placeOrderButtonPressed">PAYER</button>
    </div>
     </section>

 
</template>

<script src="https://js.stripe.com/v3/"></script>
<script>
export default {
  data() {
    return {
      stripe: null,
      cardNumberElement: null,
      cardExpiryElement: null,
      cardCVCElement: null,
      stripeValidationError:null,
      amount:25
    
    }
  },
  mounted() {
    this.stripe = Stripe(
      "pk_test_51GqbrRAPPkYI6bPBI2Pt8MS9dGd7yyImlSS7Y4sWnhOG9KVlYCbCC4mktOMFsAIYFL9wwfizuB84EkuzecXHkExy00yEYgrUo0"
    );
    this.createAndMountFormElements();
  },
  methods: {
    createAndMountFormElements() {
      var elements = this.stripe.elements();

      this.cardNumberElement = elements.create("cardNumber");
      this.cardNumberElement.mount("#card-number-element");

      this.cardExpiryElement = elements.create("cardExpiry");
      this.cardExpiryElement.mount("#card-expiry-element");

      this.cardCvcElement = elements.create("cardCvc");
      this.cardCvcElement.mount("#card-cvc-element");

      this.cardNumberElement.on("change", this.setValidationError);
      this.cardExpiryElement.on("change", this.setValidationError);
      this.cardCVCElement.on("change", this.setValidationError);
    }
  },
  setValidationError(event) {
      this.stripeValidationError = event.error ? event.error.message : "ceci est une erreur.";
 },
 placeOrderButtonPressed(){
    this.stripe.createToken(this.cardNumberElement).then(result => {
        if (result.error) {
          this.stripeValidationError = result.error.message;
        } else {
              var stripeObject = {
                  amount: this.amount,
                  source: result.token
              }

              this.saveDataToFireStore(stripeObject)
        }
     });

  }
}
</script>

<style>
.payment-form {
  max-width: 800px;
  margin: 20px auto;
  border: 5px solid #ececec;
}
.payment-form h5 {
  margin: 0;
  padding: 10px;
  font-size: 1.2rem;
}
.card-element {
  margin-top: 5px;
}
#card-number-element,
#card-expiry-element,
#card-cvc-element {
  background: white;
  padding: 10px;
  border: 1px solid #ececec;
}
.place-order-button-block {
  margin: 10px 0;
}
.field {
  margin-bottom: 24px;
}
</style>