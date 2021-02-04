<template>
  <div class="deposit">
    <img src="../assets/bank101.png">
    <table align="center">
      <br>
      <tr>
        <th>Account number:</th>
        <input v-model="deposits.accNumber" placeholder="account number">
      </tr>
      <tr>
        <th>Amount:</th>
        <input v-model="deposits.transactionAmount" placeholder="amount">
      </tr>
      <br>
      <tr>
        <th></th>
        <th>
          <button v-on:click="saveInHtml()">Deposit money</button>
        </th>
      </tr>
    </table>
    <br>
    <h5 align="center">{{deposit}}</h5>
    <h5 align="center">{{errorText}}</h5>
  </div>
</template>
<script>

let saveInJn = function () {
  this.$http.put('/bank/deposit', this.deposits)
      .then(response =>{this.deposit = response.data
        this.errorText = ''})
      .catch(error => {
        this.errorText = error.response.data.errorMessage
        this.deposit = ''
      })
}

export default {
  name: 'Deposit',
  components: {},
  data: function () {
    return {
      deposits: {},
      deposit:'',
      errorText:''
    }
  },
  methods: {
    saveInHtml: saveInJn
  }
}
</script>
