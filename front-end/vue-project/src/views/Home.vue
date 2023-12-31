<template>
    <div>
      <h2>Welcome, {{ $store.state.user.username }}</h2>
      <button @click="logout">Logout</button>
    </div>
  </template>
  
  <script>
  export default {
    methods: {
      logout() {
        // Implement logout logic here
        this.$store.commit('logout');
        this.$router.push('/login');
      },
    },
  };
  </script>