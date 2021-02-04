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
          <button v-on:click="getData()">Check your balance</button>
        </th>
      </tr>
    </table>
    <br>
    <h5 align="center">{{balance}}</h5>
    <h5 align="center">{{errorText}}</h5>
  </div>
</template>
<script>

let getData = function () {
  this.$http.get('/bank/getbalance?accNumber='+ this.accNumber)
      .then(response => {this.balance = response.data
        this.errorText = ''})
      .catch(error => {
        this.errorText = error.response.data.errorMessage
        this.balance = ''
      })
}

export default {
  name: 'Balance',
  components: {},
  data: function () {
    return {
      accNumber: '',
      balance:'',
      errorText: ''
    }
  },
  methods: {
    getData: getData
  },
}
</script>
