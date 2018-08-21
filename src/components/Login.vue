<template>
  <div class="login">
    <h3>Sign In</h3>
    <input type="text" v-model="email" placeholder="email" /><br />
    <input type="password" v-model="password" placeholder="Password" /><br />
    <button v-on:click="login">Connection</button>
    <p>Dont have an account? <router-link to="SignUp">Create one.</router-link></p>
  </div>
</template>

<script>
import firebase from 'firebase'

export default {
  name: 'login',
  data: function () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    login: function () {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then((user) => {
          this.$router.replace('Agenda')
        },
        function (err) {
          console.log(err.message)
        })
    }
  }
}
</script>

<style scoped>
  .login{
    margin-top:40px;
  }
  input{
    margin:10px 0;
    width:20%;
    padding:15px;
  }
  button{
    margin-top:20px;
    width:10%;
    cursor: pointer;
  }
  p{
    margin-top:40px;
    font-size:13px;
  }
  p a{
    text-decoration: underline;
    cursor: pointer;
  }
</style>
