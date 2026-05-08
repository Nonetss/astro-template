import node from "@astrojs/node";
import react from "@astrojs/react";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig, fontProviders } from "astro/config";

// https://astro.build/config
export default defineConfig({
	output: "server",
	adapter: node({
		mode: "standalone",
	}),
	prefetch: {
		defaultStrategy: "viewport",
	},
	vite: {
		plugins: [tailwindcss()],
		server: {
			proxy: {
				"/api": {
					target: "http://localhost:3000",
					changeOrigin: true,
				},
			},
		},
	},

	integrations: [react()],

	fonts: [
		{
			provider: fontProviders.google(),
			name: "Domine",
			cssVariable: "--font-bricolage",
			weights: [400, 500, 600, 700],
			styles: ["normal"],
			subsets: ["latin"],
			fallbacks: ["sans-serif"],
		},
		{
			provider: fontProviders.google(),
			name: "Funnel Sans",
			cssVariable: "--font-instrument",
			weights: [400, 500, 600],
			styles: ["normal"],
			subsets: ["latin"],
			fallbacks: ["sans-serif"],
		},
	],
});
