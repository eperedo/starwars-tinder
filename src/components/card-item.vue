<template>
  <div class="card">
    <picture>
      <figure>
        <img :src="img" :height="height" :width="width">
      </figure>
    </picture>
    <h2 class="subtitle">{{ name }}</h2>
    <div class="actions">
      <button class="btn success" @click="selectedCard('yes')">Yes</button>
      <button class="btn error" @click="selectedCard('no')">No</button>
    </div>
  </div>
</template>

<script>
function selectedCard(option) {
	this.$emit('selected-card', { card: this.card, option });
}

export default {
	name: 'card-item',
	props: {
		id: {
			type: Number,
			required: true,
		},
		card: {
			type: Object,
		},
		height: {
			type: Number,
			default: 400,
		},
		img: {
			type: String,
		},
		name: {
			type: String,
		},
		width: {
			type: Number,
			default: 200,
		},
	},
	methods: {
		selectedCard,
	},
};
</script>

<style scoped>
.actions {
	padding: var(--defaultPadding);
	text-align: center;
}

.card {
	background-color: var(--secondary);
	border: 1px solid var(--primary);
	border-radius: 5px;
	grid-column: 1;
	grid-row: 1;
	justify-self: center;
	padding: 5px;
}

.subtitle {
	text-align: center;
}

.btn {
	border: 0;
	border-radius: 50%;
	color: var(--secondary);
	font-size: 18px;
	padding: 20px;
}

.btn.error {
	background-color: var(--danger);
}

.btn.success {
	background-color: var(--success);
}
</style>
