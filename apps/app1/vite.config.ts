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
			port: 8081,
		},
		plugins: [
			federation({
				name: "app1",
				exposes: {
					"./mod": "./src/mod.tsx",
				},
				shared: ["vue", "vue-router"],
				manifest: true
			}),
		],
		resolve: {
			alias: {
				"@": fileURLToPath(new URL("./src", import.meta.url)),
			},
		},
	};

	return mergeConfig(baseConfig ?? {}, config);
});
