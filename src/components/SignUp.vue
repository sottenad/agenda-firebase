<template>
  <div class='sign-up'>
    <h3>Create A New Account</h3>
    <input type='text' v-model='email' placeholder='email' /><br />
    <input type='password' v-model='password' placeholder='Password' /><br />
    <button v-on:click='signUp'>Sign Up</button>
    <p>Or go <router-link to='Login'>back to login</router-link>.</p>
  </div>
</template>

<script>
import firebase from 'firebase'

export default {
  name: 'signUp',
  data: function () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    signUp: function () {
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.email, this.password)
        .then((user) => {
          this.$router.replace('Agenda')
        },
        function (err) {
          alert('Error: ' + err.message)
        }
        )
    }
  }
}
</script>

<style scoped>
.sign-up {
  margin-top: 40px;
}
input {
  margin: 10px 0;
  width: 20%;
  padding: 15px;
}
button {
  margin-top: 20px;
  width: 10%;
  cursor: pointer;
}
p {
  margin-top: 40px;
  font-size: 13px;
}
p a {
  text-decoration: underline;
  cursor: pointer;
}
</style>
