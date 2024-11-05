import { fileURLToPath, URL } from "node:url";

import type { UserConfig } from "vite";
import { defineConfig, loadConfigFromFile, mergeConfig } from "vite";
import { federation } from "@module-federation/vite";

// https://vitejs.dev/config/
export default defineConfig(async (configEnv) => {
	const baseConfig = (
		await loadConfigFromFile(configEnv, "../../vite.config.ts")
	)?.config;
	const config: UserConfig = {
		server: {
			port: 8080,
		},
		plugins: [
			federation({
				// filename: "main.js",
				name: "host",
				remotes: {
					// remote: {
					// 	type: "module",
					// 	name: "remote",
					// 	entry: "http://localhost:9001/index.js",
					// 	entryGlobalName: "remote",
					// 	shareScope: "default",
					// },
					app1: "app1@http://localhost:8081/mf-manifest.json",
				},
				exposes: {},
				// runtimePlugins: ["./mf-plugin.ts"],
			}),
		],
		resolve: {
			alias: {
				"@": fileURLToPath(new URL("./src", import.meta.url)),
			},
		}
	};

	return mergeConfig(baseConfig ?? {}, config);
});
