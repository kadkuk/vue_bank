<template>
  <div class="client">
    <img src="../assets/bank101.png">
    <table align="center">
      <br>
      <tr>
        <th>Account number:</th>
        <input v-model="accNumber" placeholder="account number">
      </tr>
      <br>
      <tr>
        <th></th>
        <th>
          <button v-on:click="getData()">Check transactions history</button>
        </th>
      </tr>
    </table>
    <br>
    <table align="center" border="1">
      <tr>
        <th>transaction id</th>
        <th>from account</th>
        <th>to account</th>
        <th>amount (EUR)</th>
        <th>time</th>
        <th>transaction type</th>
      </tr>
      <tr v-for="row in transactionsHistory">
        <td>{{row.transactionId}}</td>
        <td>{{row.fromAccount}}</td>
        <td>{{row.toAccount}}</td>
        <td>{{row.amount}}</td>
        <td>{{row.time}}</td>
        <td>{{row.transactionType}}</td>
      </tr>
    </table>
    <br>
    <h5 align="center">{{errorText}}</h5>
  </div>
</template>
<script>

let getData = function () {
  this.$http.get('/bank/data/history?accNumber='+ this.accNumber)
      .then(response => {this.transactionsHistory = response.data
        this.errorText = ''})
      .catch(error => {this.errorText = error.response.data.errorMessage
        this.transactionsHistory = ''})
}

export default {
  name: 'History',
  components: {},
  data: function () {
    return {
      accNumber: '', //need muutujad kättesaadavad kogu komponendis, sh javas
      transactionsHistory:'', // sama jutt
      errorText:''
    }
  },
  methods: {
    getData: getData
  },
}
</script>
