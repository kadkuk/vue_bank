import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login'
import Client from '../views/Client'
import Account from '../views/Account'
import History from "@/views/History";
import Balance from "@/views/Balance";
import Transfer from "@/views/Transfer";
import Withdraw from "@/views/Withdraw";
import Deposit from "@/views/Deposit";
import Home from "@/views/Home";


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/client',
    name: 'Client',
    component: Client
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/account',
    name: 'Account',
    component: Account
  },
  {
    path: '/deposit',
    name: 'Deposit',
    component: Deposit
  },
  {
    path: '/withdraw',
    name: 'Withdraw',
    component: Withdraw
  },
  {
    path: '/transfer',
    name: 'Transfer',
    component: Transfer
  },
  {
    path: '/balance',
    name: 'Balance',
    component: Balance
  },
  {
    path: '/history',
    name: 'History',
    component: History
  },

]

const router = new VueRouter({
  routes
})

export default router
