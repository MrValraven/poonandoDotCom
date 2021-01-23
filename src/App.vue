<template>
  <header>
    <div class="logo">
      <router-link to="/">Joana Margarida Calhau</router-link>
    </div>
    <nav id="nav">
      <ul>
        <router-link to="/">Home</router-link>
        <router-link :to="{ name: 'About' }">About</router-link>
        <router-link :to="{ name: 'Teatro' }">Teatro</router-link>
        <router-link :to="{ name: 'Fotografia' }">Fotografia</router-link>
        <router-link :to="{ name: 'Escrita' }">Escrita</router-link>
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
