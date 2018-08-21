<template>
  <div class="login">
    <h3>Agenda</h3>
    <p>Welcome to the agenda page.</p>
    <p><a v-on:click="logOut">Log Out</a></p>
  </div>
</template>

<script>
import firebase from 'firebase'

export default {
  name: 'agenda',
  data: function () {
    return {}
  },
  methods: {
    logOut: function () {
      firebase.auth().signOut().then(() => {
        this.$router.replace('Login')
      })
    }
  }
}
</script>

<style scoped>
  a{
    text-decoration: underline;
    cursor: pointer;
  }
</style>
