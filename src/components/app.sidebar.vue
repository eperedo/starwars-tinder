<template>
  <transition name="fade">
    <nav class="navbar" v-if="model">
      <ul class="list">
        <li class="list-item">
          <a href="/">Home</a>
        </li>
        <li class="list-item">
          <a href="#" @click.prevent="$emit('toggle-menu', false)">Cerrar</a>
        </li>
      </ul>
    </nav>
  </transition>
</template>

<script>
export default {
	name: 'edd-sidebar',
	props: {
		model: {
			type: Boolean,
			default: false,
		},
	},
};
</script>

<style scoped>
.navbar {
	background-color: rgb(28, 41, 56);
	position: absolute;
	height: 100vh;
	min-width: 200px;
	left: 0;
	top: 0;
}

.list {
	font-size: 20px;
	list-style: none;
	margin: 2px 0 0 0;
	padding: 0;
}

.list-item {
	background-color: cornflowerblue;
	color: white;
	margin: 1px;
	padding: 15px;
}

.list-item > a {
	color: white;
}

.fade-enter-active,
.fade-leave-active {
	transition: left 0.2s ease-in-out;
}
.fade-enter,
.fade-leave-to {
	left: -200px;
}
</style>
