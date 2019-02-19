<template>
  <main class="wrapper">
    <app-sidebar :model="sidebar" @toggle-menu="toggleMenu"></app-sidebar>
    <button class="hamburguer" @click="toggleMenu">=</button>
    <header class="app-header">
      <h1 class="title">Star Wars Tinder</h1>
    </header>
    <nuxt-child/>
  </main>
</template>

<script>
import appSidebar from '../components/app.sidebar.vue';

export default {
	name: 'layouts-default',
	components: {
		appSidebar,
	},
	data() {
		return {
			sidebar: false,
		};
	},
	methods: {
		toggleMenu() {
			this.sidebar = !this.sidebar;
		},
	},
};
</script>

<style scoped>
.hamburguer {
	background-color: var(--primary);
	border: none;
	color: var(--secondary);
	font-size: 30px;
	justify-self: start;
	padding: 10px;
}

.title {
	color: var(--secondary);
	font-size: 32px;
	font-weight: 300;
	text-align: center;
}

.wrapper {
	align-items: center;
	display: grid;
	grid-template-columns: 20px 1fr;
	grid-row-gap: var(--defaultPadding);
	height: 100vh;
}
</style>