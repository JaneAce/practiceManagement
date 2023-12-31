<template>
    <div>
      <h2>Register</h2>
      <form @submit.prevent="register">
        <label for="username">Username:</label>
        <input type="text" v-model="username" required />
        <label for="password">Password:</label>
        <input type="password" v-model="password" required />
        <button type="submit">Register</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        username: '',
        password: '',
      };
    },
    methods: {
      register() {
        // Implement registration logic here
        // For simplicity, just set a placeholder user
        this.$store.commit('login', { username: this.username });
        this.$router.push('/');
      },
    },
  };
  </script>