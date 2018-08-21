import Vue from 'vue'
import Router from 'vue-router'
import firebase from 'firebase'

import Login from '@/components/Login'
import SignUp from '@/components/SignUp'
import Agenda from '@/components/Agenda'

Vue.use(Router)

let router = new Router({
  routes: [
    {
      path: '*',
      redirect: 'Login'
    },
    {
      path: '/',
      redirect: 'Login'
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/signup',
      name: 'SignUp',
      component: SignUp
    },
    {
      path: '/agenda',
      name: 'Agenda',
      component: Agenda,
      meta: {
        requiresAuth: true
      }
    }
  ]
})

router.beforeEach((to, from, next) => {
  let currentUser = firebase.auth().currentUser
  let requiresAuth = to.matched.some(record => record.meta.requiresAuth)

  if (requiresAuth && !currentUser) next('Login')
  else if (!requiresAuth && currentUser) next('Agenda')
  else next()
})

export default router
