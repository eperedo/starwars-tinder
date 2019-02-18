<template>
  <transition-group id="app" tag="div" name="card">
    <card-item
      v-for="(card, index) in withStyleCards"
      :key="card.id"
      :card="card"
      v-bind="card"
      @selected-card="$emit('selected-card', { $event, index });"
    ></card-item>
  </transition-group>
</template>

<script>
import cardItem from './card-item.vue';

function withStyleCards() {
	const defaultMargin = -10;
	const totalCards = this.cards.length;
	const cardsToShow = totalCards - 4;
	const result = this.cards.map((car, index) => {
		const newCar = { ...car };
		if (index > cardsToShow) {
			const indexPlusOne = totalCards - (index + 1);
			const margin = defaultMargin * indexPlusOne;
			const width = car.width + margin;
			newCar.width = width;
			if (margin !== 0) {
				newCar.style = `margin-top: ${margin}px;`;
			}
		} else {
			newCar.style = 'display: none';
		}
		return newCar;
	});
	return result;
}

export default {
	name: 'card-list',
	components: {
		cardItem,
	},
	computed: {
		withStyleCards,
	},
	props: {
		cards: {
			type: Array,
			default: () => [],
		},
	},
};
</script>

<style scoped>
#app {
	display: grid;
	grid-gap: 5px;
	grid-template-columns: auto;
}

.card-enter-active,
.card-leave-active {
	transition: transform 0.3s ease-out, opacity 0.3s ease-in;
}

.card-enter,
.card-leave-to {
	opacity: 0;
	transform: translateY(120px);
}
</style>
