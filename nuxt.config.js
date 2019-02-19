'use strict';

const STAR_WARS_URL = 'https://starwars.egghead.training';

const config = {
	env: {
		STAR_WARS_URL,
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
		link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
	},
	icon: {
		iconSrc: './src/assets/swtinder.png',
	},
	loading: { color: '#0000ff' },
	manifest: {
		name: 'Star Wars Tinder',
		lang: 'en',
	},
	mode: 'spa',
	modules: ['@nuxtjs/pwa'],
	rootDir: './src',
	workbox: {
		runtimeCaching: [
			{
				urlPattern: 'https://fonts.gstatic.com/s/opensans/.*',
				handler: 'cacheFirst',
				method: 'GET',
			},
			{
				urlPattern: `${STAR_WARS_URL}/.*`,
				handler: 'networkFirst',
				method: 'GET',
			},
		],
	},
};

module.exports = config;
