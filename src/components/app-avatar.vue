<template>
  <img ref="my-img" src="~/assets/loading.svg" :data-url="img" :height="height" :width="width">
</template>

<script>
function mounted() {
	const currentAvatar = this.$refs['my-img'];
	const options = {
		root: null,
		threshold: 0,
	};
	const observer = new IntersectionObserver(entries => {
		entries.forEach(entry => {
			if (entry.isIntersecting) {
				currentAvatar.src = currentAvatar.dataset.url;
				observer.unobserve(currentAvatar);
			}
		});
	}, options);
	observer.observe(currentAvatar);
}

export default {
	name: 'sw-avatar',
	mounted,
	props: ['img', 'height', 'width'],
};
</script>

<style scoped>
</style>