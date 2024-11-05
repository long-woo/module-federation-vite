import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import legacy from "@vitejs/plugin-legacy";
import vueDevTools from "vite-plugin-vue-devtools";
import topLevelAwait from "vite-plugin-top-level-await";

// https://vite.dev/config/
export default defineConfig({
	// envDir: __dirname,
	plugins: [
		vue(),
		vueJsx(),
		vueDevTools(),
		legacy({
			targets: ["defaults", "not IE 11"],
		}),
		topLevelAwait(),
	],
	resolve: {
		alias: {
			vue: 'vue/dist/vue.esm-bundler.js'
		}
	},
});
