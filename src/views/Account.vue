<template>
  <div class="account">
    <img src="../assets/bank101.png">
    <table align="center">
      <br>
      <tr>
        <th>Client id:</th>
        <input v-model="accounts.clientId" placeholder="client id">
      </tr>
      <tr>
        <th>Account number:</th>
        <input v-model="accounts.accNumber" placeholder="account number">
      </tr>
      <br>
      <tr>
        <th></th>
        <th>
          <button v-on:click="saveInHtml()">Create new bank account</button>
        </th>
      </tr>
    </table>
    <br>
    <h5 align="center">{{account}}</h5>
    <h5 align="center">{{errorText}}</h5>
  </div>
</template>
<script>

let saveInJn = function () {
  this.$http.put('/bank/createaccount', this.accounts)
      .then(response =>{this.account = response.data
        this.errorText = ''
        })
      .catch(error => {
        this.errorText = error.response.data.errorMessage
        this.account = ''
      })
}

export default {
  name: 'Account',
  components: {},
  data: function () {
    return {
      accounts: {},
      account:'',
      errorText:''
    }
  },
  methods: {
    saveInHtml: saveInJn
  }
}
</script>
