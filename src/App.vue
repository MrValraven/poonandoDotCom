<template>
  <div id="appi">
    <NavbarMobile id="mobileNav"/>
    <div class="content" :class="{'open':showNav}">

      <header class="top-bar" >   
          <div id="navigation-icon" v-if="mobileView" @click="showNav = !showNav">
            <i class="fa fa-bars"><span class="menuText">MENU</span></i>
          </div>
          <Navbar v-if="!mobileView" />
        </header>
        
        <transition mode="out-in" enter-active-class="animate fade" leave-active-class="animate fade">
          <router-view></router-view>
        </transition>
    </div>  
  </div>
  
</template>

<script>

import Navbar from './components/Navbar.vue';
import NavbarMobile from './components/NavbarMobile.vue'

export default {
  data: () => {
    return {
      showNav: false,
      mobileView: false,
    }
  },

  components: {
    Navbar,
    NavbarMobile,
  },
  
  methods: {
    handleView() {
      this.mobileView = window.innerWidth <= 1024;
    }
  },
  created() {
    this.handleView();
    window.addEventListener('resize', this.handleView);
  }
}
</script>

<style>

@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css');

* {
  box-sizing: content-box;
}

body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  background-color: #f7f7f7;
}

ul, a {
  list-style-type: none;
  text-decoration: none;
}

#appi {
  position: relative;
  width: 100%;
  height: 100vh;
  color: #333;
  overflow-x: hidden;
}

.top-bar {
  display: flex;
  margin-bottom: 150px;
  width: 100%;
}

#navigation-icon {
  padding: 10px 10px 20px;
  margin-right: 10px;
  cursor: pointer;
}

#navigation-icon i {
  font-size: 2rem;
}

#mobileNav {
  border: 2px solid red;
  font-size: 1.5em;
}

.content {
  position: absolute;
  margin: 0;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  padding: 20px;
  background-color: #f7f7f7;
  transition: 1s transform cubic-bezier(0, .12, .14, 1);
}

header .menuText {
  margin-left: 10px;
  font-size: 1em;
  letter-spacing: 2px;
}


/* 
header {
  position: relative;
  /* display: flex;
  justify-content: space-around; 
  border: 2px solid red;
  z-index: 1;
}

#appi {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  overflow: hidden;
}
*/
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

.open {
  transform: translateX(150px);
}

</style>
