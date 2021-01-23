<template>
  <header>
    <div class="logo">
      <router-link class="logoName" to="/">Joana Margarida Calhau</router-link>
    </div>
    <nav id="nav">
      <ul>
        <router-link class="navLinks" to="/">Home</router-link>
        <router-link class="navLinks" :to="{ name: 'About' }">About</router-link>
        <router-link class="navLinks" :to="{ name: 'Teatro' }">Teatro</router-link>
        <router-link class="navLinks" :to="{ name: 'Fotografia' }">Fotografia</router-link>
        <router-link class="navLinks" :to="{ name: 'Escrita' }">Escrita</router-link>
      </ul>
    </nav>
  </header>

  <transition mode="out-in" enter-active-class="animate fade" leave-active-class="animate fade">
    <router-view/>
  </transition>

</template>

<script>

export default {
  
}
</script>

<style>

header {
  display: flex;
  justify-content: space-between;
}

.logo {
  font-size: 40px;
  margin: 20px;
}

a {
  text-decoration: none;
  list-style-type: none;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  overflow: hidden;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
  padding: 10px;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

.navLinks {
  font-size: 24px;
}

@keyframes fade {

  0% {
    opacity: 0;
    transform: translateX(-2em);

  }

  100% {
    opacity: 1;
    transform: translateX(0em);
  }
 
}

.animate {
  animation: fade 0.3s ease-in-out;
}
</style>
