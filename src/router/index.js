import Vue from 'vue'
import Router from 'vue-router'
import Auth from '@/components/Auth'
import Risk from '@/components/Risk'
import Insurance from '@/components/Insurance'
import Planner from '@/components/Planner'
import Goal from '@/components/Goal'
import Home from '@/components/Home'
import Mission from '@/components/Mission'

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
      path: '/mission',
      name: 'Mission',
      component: Mission
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
