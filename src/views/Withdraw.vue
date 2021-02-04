<template>
  <div class="client">
    <img src="../assets/bank101.png">
    <table align="center">
      <br>
        <tr>
          <th>Account number:</th>
          <input v-model="withdraws.accNumber" placeholder="account number">
        </tr>
        <tr>
          <th>Amount:</th>
          <input v-model="withdraws.transactionAmount" placeholder="amount">
        </tr>
        <br>
        <tr>
          <th></th>
          <th>
            <button v-on:click="saveInHtml()">Withdraw money</button>
          </th>
        </tr>
      </table>
    <br>
    <h5 align="center">{{withdraw}}</h5>
    <h5 align="center">{{errorText}}</h5>
  </div>
</template>
<script>

let saveInJn = function () {
  this.$http.put('/bank/withdraw', this.withdraws)
      .then(response =>{this.withdraw = response.data
      this.errorText = ''})
      .catch(error => {
        this.errorText = error.response.data.errorMessage
        this.withdraw = ''
      })
}

export default {
  name: 'Withdraw',
  components: {},
  data: function () {
    return {
      withdraws: {},
      withdraw:'',
      errorText:''
    }
  },
  methods: {
    saveInHtml: saveInJn
  }
}
</script>
