<template>
  <div id="app">
    <div id="nav">
      <router-link to="/client">Create client</router-link> |
      <router-link to="/login">Login</router-link> |
      <router-link to="/account">Create account</router-link> |
      <router-link to="/deposit">Deposit</router-link> |
      <router-link to="/withdraw">Withdraw</router-link> |
      <router-link to="/transfer">Transfer</router-link> |
      <router-link to="/balance">Get balance</router-link> |
      <router-link to="/history">Transactions history</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: dimgrey;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: dimgrey;
}

#nav a.router-link-exact-active {
  color: orange;
}
</style>
