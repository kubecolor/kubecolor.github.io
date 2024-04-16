import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://kubecolor.github.io',
  	// base: '',
	integrations: [
		starlight({
			title: 'kubecolor',
			logo: {
				src: './src/assets/kubecolor_logo.svg',
			},
			social: {
				github: 'https://github.com/kubecolor/kubecolor',
			},
			sidebar: [
				{
					label: 'Guides',
					autogenerate: { directory: 'guides' },
					// items: [
					// 	// Each item here is one entry in the navigation menu.
					// 	{ label: 'Install', link: '/guides/install/' },
					// 	{ label: 'Color Themes', link: '/guides/themes/' },
					// 	{ label: 'Examples', link: '/guides/examples/' },
					// ],
				},
				{
					label: 'Reference',
					autogenerate: { directory: 'reference' },
				},
			],
		}),
	],
});
