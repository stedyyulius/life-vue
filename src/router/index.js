import Vue from 'vue'
import Router from 'vue-router'
import Auth from '@/components/Auth'
import Risk from '@/components/Risk'
import Insurance from '@/components/Insurance'
import Planner from '@/components/Planner'
import Goal from '@/components/Goal'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Risk',
      component: Risk
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
