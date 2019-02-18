'use strict';

const config = {
	env: {
		STAR_WARS_URL: 'https://starwars.egghead.training',
	},
	generate: {
		dir: './../dist',
	},
	head: {
		title: 'Star Wars Tinder',
		meta: [
			{ charset: 'utf-8' },
			{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
			{
				hid: 'description',
				name: 'description',
				content:
					'Find the path either to dark side or the force the tinder way',
			},
		],
		link: [
			{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
			{
				rel: 'stylesheet',
				type: 'text/css',
				href: 'https://fonts.googleapis.com/css?family=Open+Sans:300,400',
			},
		],
	},
	loading: { color: '#0000ff' },
	mode: 'spa',
	rootDir: './src',
};

module.exports = config;
