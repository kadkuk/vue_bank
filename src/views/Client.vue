<template>
  <div class="client">
    <img src="../assets/bank101.png">
    <table align="center">
      <br>
      <tr>
        <th>First name:</th>
        <input v-model="clients.firstName" placeholder="first name">
      </tr>
      <tr>
        <th>Last name:</th>
        <input v-model="clients.lastName" placeholder="last name">
      </tr>
      <tr>
        <th>Social number:</th>
        <input v-model="clients.socialNumber" placeholder="social number">
      </tr>
      <tr>
        <th>Address:</th>
        <input v-model="clients.address" placeholder="address">
      </tr>
      <tr>
        <th>E-mail:</th>
        <input v-model="clients.email" placeholder="e-mail">
      </tr>
      <tr>
        <th>Password:</th>
        <input v-model="clients.password" type="password" placeholder="password">
      </tr>
      <br>
      <tr>
        <th></th>
        <th>
          <button v-on:click="saveInHtml()">Save your client</button>
        </th>
      </tr>
    </table>
    <br>
    <h5 align="center">{{client}}</h5>
    <h5 align="center">{{errorText}}</h5>
  </div>
</template>
<script>

let saveInJn = function () {
  this.$http.post('/public/client', this.clients)
      .then(response =>{this.client = response.data
        this.errorText = ''

      })
      .catch(error => {
        this.errorText = error.response.data.errorMessage
        this.client = ''
      })
}

export default {
  name: 'Client',
  components: {},
  data: function () {
    return {
      clients: {},
      client:'',
      errorText:'',
    }
  },
  methods: {
    saveInHtml: saveInJn
  }
}
</script>
