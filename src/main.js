// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import firebase from 'firebase'

Vue.config.productionTip = false

let app
var config = {
  apiKey: 'AIzaSyCLfo9Sr-pjePWjg3ndUUsAhXho6-XYqZc',
  authDomain: 'agenda-8fd39.firebaseapp.com',
  databaseURL: 'https://agenda-8fd39.firebaseio.com',
  projectId: 'agenda-8fd39',
  storageBucket: 'agenda-8fd39.appspot.com',
  messagingSenderId: '698462800956'
}
firebase.initializeApp(config)

firebase.auth().onAuthStateChanged((user) => {
  if (!app) {
    app = new Vue({
      el: '#app',
      router,
      components: { App },
      template: '<App/>'
    })
  }
})
/* eslint-disable no-new */
