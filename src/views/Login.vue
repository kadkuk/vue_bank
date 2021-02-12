<template>
  <div class="home">
    <img src="../assets/bank101.png">
    <table align="center">
      <br>
      <tr>
        <th>Login name:</th>
        <input v-model="logins.email" placeholder="e-mail">
      </tr>
      <tr>
        <th>Password:</th>
        <input v-model="logins.password" type="password" placeholder="password">
      </tr>
      <br>
      <tr>
        <th></th>
        <th>
          <button v-on:click="saveInHtml()">Login</button>
        </th>
      </tr>
    </table>
    <br>
    <h5 align="center">{{ errorText }}</h5>
  </div>
</template>
<script>

let saveInJn = function () {
  this.$http.post('/public/login', this.logins)
      .then(response => {
        this.errorText = ''
        localStorage.setItem('user-token', response.data)
        this.$http.defaults.headers.common['Authorization'] = "Bearer " + response.data
      })
      .catch(error => {
        this.errorText = error.response.data.errorMessage
      })
}

export default {
  name: 'Login',
  components: {},
  data: function () {
    return {
      logins: {},
      errorText: ''
    }
  },
  methods: {
    saveInHtml: saveInJn
  }
}
</script>

