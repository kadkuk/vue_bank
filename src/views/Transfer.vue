<template>
  <div class="client">
    <img src="../assets/bank101.png">
    <table align="center">
      <br>
      <tr>
        <th>From account:</th>
        <input v-model="transfers.fromAccount" placeholder="from account">
      </tr>
      <tr>
        <th>To account:</th>
        <input v-model="transfers.toAccount" placeholder="to account">
      </tr>
      <tr>
        <th>Amount:</th>
        <input v-model="transfers.amount" placeholder="amount">
      </tr>
      <br>
      <tr>
        <th></th>
        <th>
          <button v-on:click="saveInHtml()">Transfer money</button>
        </th>
      </tr>
    </table>
    <br>
    <h5 align="center">{{transfer}}</h5>
    <h5 align="center">{{errorText}}</h5>
  </div>
</template>
<script>

let saveInJn = function () {
  this.$http.put('/bank/transfer', this.transfers)
      .then(response =>{this.transfer = response.data
        this.errorText = ''})
      .catch(error => {
        this.errorText = error.response.data.errorMessage
        this.transfer = ''
      })
}

export default {
  name: 'Transfer',
  components: {},
  data: function () {
    return {
      transfers: {},
      transfer:'',
      errorText:''
    }
  },
  methods: {
    saveInHtml: saveInJn
  }
}
</script>
