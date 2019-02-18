<template>
  <section class="wrapper">
    <header>
      <h1 class="title">Star Wars Tinder</h1>
    </header>
    <nuxt-child/>
  </section>
</template>

<script>
export default {
	name: 'layouts-default',
};
</script>

<style scoped>
.title {
	color: var(--secondary);
	font-size: 32px;
	font-weight: 300;
	text-align: center;
}

.wrapper {
	align-items: center;
	display: grid;
	grid-row-gap: var(--defaultPadding);
	height: 100vh;
}
</style>