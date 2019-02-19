<template>
  <section class="cards-container">
    <card-list :cards="cards" @selected-card="nextCard" v-if="!showResults"></card-list>
    <img
      v-if="showResults"
      class="tinder-logo"
      alt="Star Wars Tinder Logo"
      src="~/assets/tinder.svg"
      height="128"
      width="128"
    >
    <section class="result-container" v-if="showResults">
      <h2 class="result-title">It is a Match!
        <br>I mean... In a star wars universe you should look for people who looks like this:
      </h2>
      <div class="result-item">
        <span class="result-label">Gender</span>
        <span class="result-value">{{match.gender[0]}}</span>
      </div>
      <div class="result-item">
        <span class="result-label">Skin</span>
        <span class="result-value">{{match.skin_color[0]}}</span>
      </div>
      <div class="result-item">
        <span class="result-label">Hair</span>
        <span class="result-value">{{match.hair_color[0]}}</span>
      </div>
      <div class="result-item">
        <span class="result-label">Eye Color</span>
        <span class="result-value">{{match.eye_color[0]}}</span>
      </div>
      <div class="result-item">
        <span class="result-label">Mass</span>
        <span class="result-value">{{match.mass[0]}}</span>
      </div>
      <div class="result-item">
        <span class="result-label">Height</span>
        <span class="result-value">{{match.cm[0]}}</span>
      </div>
    </section>
  </section>
</template>

<script>
import cardList from '@/components/card-list.vue';

const STAR_WARS_URL = process.env.STAR_WARS_URL;

function data() {
	return {
		cards: [],
		results: {
			yes: {
				gender: {},
				skin_color: {},
				hair_color: {},
				eye_color: {},
				mass: {},
				cm: {},
			},
			no: {
				gender: {},
				skin_color: {},
				hair_color: {},
				eye_color: {},
				mass: {},
				cm: {},
			},
		},
		showResults: false,
	};
}

async function created() {
	const response = await fetch(`${STAR_WARS_URL}/people`);
	const cards = await response.json();
	this.cards = cards.map(card => {
		const newCard = {
			id: card.id,
			eye_color: card.eye_color,
			cm: card.height,
			gender: card.gender,
			hair_color: card.hair_color,
			height: 300,
			img: `${STAR_WARS_URL}/${card.image}`,
			name: card.name,
			mass: card.mass,
			skin_color: card.skin_color,
			width: 300,
		};
		return newCard;
	});
}

function nextCard({ $event, index }) {
	const { card, option } = $event;
	const { gender, skin_color, eye_color, hair_color, mass, cm } = card;
	this.cards.splice(index, 1);
	const currentOption = this.results[option];
	if (currentOption.gender[gender]) {
		currentOption.gender[gender] += 1;
	} else {
		this.$set(currentOption.gender, gender, 1);
	}

	if (currentOption.skin_color[skin_color]) {
		currentOption.skin_color[skin_color] += 1;
	} else {
		this.$set(currentOption.skin_color, skin_color, 1);
	}

	if (currentOption.eye_color[eye_color]) {
		currentOption.eye_color[eye_color] += 1;
	} else {
		this.$set(currentOption.eye_color, eye_color, 1);
	}

	if (currentOption.hair_color[hair_color]) {
		currentOption.hair_color[hair_color] += 1;
	} else {
		this.$set(currentOption.hair_color, hair_color, 1);
	}

	if (currentOption.mass[mass]) {
		currentOption.mass[mass] += 1;
	} else {
		this.$set(currentOption.mass, mass, 1);
	}

	if (currentOption.cm[cm]) {
		currentOption.cm[cm] += 1;
	} else {
		this.$set(currentOption.cm, cm, 1);
	}
	if (this.cards.length === 0) {
		this.showResults = true;
	}
}

function simpleSort(object) {
	const newObj = { ...object };
	return Object.entries(newObj).sort((arr, arr2) =>
		arr[1] > arr2[1] ? -1 : 1,
	);
}

function match() {
	const result = {
		gender: simpleSort(this.results.yes.gender),
		skin_color: simpleSort(this.results.yes.skin_color),
		hair_color: simpleSort(this.results.yes.hair_color),
		eye_color: simpleSort(this.results.yes.eye_color),
		mass: simpleSort(this.results.yes.mass),
		cm: simpleSort(this.results.yes.cm),
	};

	return {
		gender: result.gender[0],
		skin_color: result.skin_color[0],
		eye_color: result.eye_color[0],
		hair_color: result.hair_color[0],
		mass: result.mass[0],
		cm: result.cm[0],
	};
}

export default {
	name: 'pages-home',
	components: {
		cardList,
	},
	computed: {
		match,
	},
	created,
	data,
	methods: {
		nextCard,
	},
};
</script>

<style scoped>
.cards-container {
	grid-column: 1 / -1;
}

.result-container {
	color: var(--colorFontPrimary);
	font-size: 24px;
	padding: var(--defaultPadding);
	perspective: 100px;
}

.result-item {
	display: flex;
	justify-content: space-around;
	padding: var(--defaultPadding);
	transform: rotateX(5deg);
}

.result-label {
	font-weight: bold;
}

.result-title {
	margin-bottom: var(--defaultPadding);
	text-align: center;
	transform: rotateX(4deg);
}

.result-value {
	font-weight: 300;
}

.tinder-logo {
	width: 100%;
}
</style>
