import Vue from 'vue'
import Router from 'vue-router'
import Auth from '@/components/Auth'
import Home from '@/components/Home'
import Insurance from '@/components/Insurance'
import Planner from '@/components/Planner'
import Goal from '@/components/Goal'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/login',
      name: 'Login',
      component: Auth
    },
    {
      path: '/insurance',
      name: 'Insurance',
      component: Insurance
    },
    {
      path: '/planner',
      name: 'Planner',
      component: Planner
    },
    {
      path: '/goal',
      name: 'Goal',
      component: Goal
    }
  ]
})
