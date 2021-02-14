<template >
	<nav id="navigationMobile">
		<ul>
			<li><router-link class="navLinks" to="/">Home</router-link></li>
			<li><router-link class="navLinks" :to="{ name: 'About' }">About</router-link></li>
			<li><router-link class="navLinks" :to="{ name: 'Teatro' }">Teatro</router-link></li>
			<li><router-link class="navLinks" :to="{ name: 'Fotografia' }">Fotografia</router-link></li>
			<li><router-link class="navLinks" :to="{ name: 'Escrita' }">Escrita</router-link></li>
		</ul>
        <SocialMedia />
	</nav>
    
</template>

<script>

import SocialMedia from './SocialMedia.vue'

export default {
  components: {
      SocialMedia,
  }
}
</script>

<style>

#navigationMobile {
    padding: 20px 0 0 0;
}

#navigationMobile ul {
	list-style-type: none;
    width: 200px;
    padding-left: 40px;
}

#navigationMobile ul li {
    color: white;
    font-size: 2rem;
	font-weight: bold;
    margin-bottom: 20px;
    cursor: pointer;
	text-transform: uppercase;
}

#navigationMobile ul li:hover {
    color: red;
}

#navigationMobile ul li a {
	color: #000000;
}

#navigationMobile ul li a:hover,
#navigationMobile ul li .router-link-exact-active {
	text-decoration: underline;
}

#navigationMobile a.router-link-exact-active {
  color: #42b983;
}

</style>