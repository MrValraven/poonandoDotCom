<template>
  <header>
    <div class="logo">
      <router-link class="logoName" to="/">Joana Margarida Calhau</router-link>
    </div>
    <nav id="nav">
      <ul>
        <router-link class="navLinks" to="/">Home</router-link>
        <router-link class="navLinks" :to="{ name: 'About' }">About</router-link>|
        <router-link class="navLinks" :to="{ name: 'Teatro' }">Teatro</router-link>|
        <router-link class="navLinks" :to="{ name: 'Fotografia' }">Fotografia</router-link>|
        <router-link class="navLinks" :to="{ name: 'Escrita' }">Escrita</router-link>
      </ul>
    </nav>

    <div class="socialMedia">
      <a href="https://www.facebook.com/joana.calhau"><img src="./assets/facebook.svg" alt=""></a>
      <a href="https://www.instagram.com/poonando/"><img src="./assets/instagram.svg" alt=""></a>
    </div>
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

body {
  background-color: white;
}


header {
  display: flex;
  justify-content: space-around;
}

.logo {
  font-size: 26px;
  margin: 45px 0 0 0;
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
  padding-bottom: 30px;
  margin: 35px 0 0 0;
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

.socialMedia img {
  width: 24px;
  margin: 45px 10px 0px 10px;
  filter: brightness(0%);
  transition: all 1s cubic-bezier(0.075, 0.82, 0.165, 1);
}

.socialMedia img:hover {
  filter: brightness(100%)
}

</style>
