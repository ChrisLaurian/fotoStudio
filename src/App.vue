<template>
  <Navbar/>
  <router-view/>
  <Footer/>
  
</template>

<script>
import Navbar from './components/Navbar.vue';
import Footer from './views/Fooder.vue';

export default {
  name: 'App',
  components : {
    Navbar,
    Footer
    
  },
}
</script>

<style>

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  
}

nav a.router-link-exact-active {
  color: orangered;
}
</style>
