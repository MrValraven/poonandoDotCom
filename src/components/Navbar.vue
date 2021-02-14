<template >
	<nav id="navigation">
		<div class="logo">
            <router-link class="logoName" to="/">Joana Margarida Calhau</router-link>
        </div>
		<ul>
			<li><router-link class="navLinks" to="/">Home</router-link></li>
			<li><router-link class="navLinks" :to="{ name: 'About' }">About</router-link></li>
			<li><router-link class="navLinks" :to="{ name: 'Teatro' }">Teatro</router-link></li>
			<li><router-link class="navLinks" :to="{ name: 'Fotografia' }">Fotografia</router-link></li>
			<li><router-link class="navLinks" :to="{ name: 'Escrita' }">Escrita</router-link></li>
		</ul>
		<SocialMedia class="social-media"/>
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

<style scoped>

#navigation {
	position: absolute;
	display: flex;
	justify-content: space-around;
	width: 100vw;
	min-height: 100vh;
	padding: 16px;
}

#navigation ul {
	display: flex;
	flex-direction: row;
	list-style: none;
	text-decoration: none;
}

#navigation ul li {
	padding: 0 10px 0 10px;
	margin-bottom: 16px;
	text-transform: uppercase;
}

#navigation ul li a {
	color: #2c3e50;
}

#navigation ul li a:hover,
#navigation ul li .router-link-exact-active {
	text-decoration: underline;
}

#navigation a.router-link-exact-active {
  color: #42b983;
}

.navLinks {
  font-size: 24px;
  text-decoration: none;
}

.social-media {
	position: relative;
	top: 0;
	height: 50px;
	border: 2px solid red;
}

</style>