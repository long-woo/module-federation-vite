import { fileURLToPath, URL } from "node:url";

import type { UserConfig } from "vite";
import { defineConfig, loadConfigFromFile, mergeConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig(async (configEnv) => {
	const baseConfig = (
		await loadConfigFromFile(configEnv, "../../vite.config.ts")
	)?.config;
	const config: UserConfig = {
		server: {
			port: 9090,
		},
		resolve: {
			alias: {
				"@": fileURLToPath(new URL("./src", import.meta.url)),
			},
		}
	};

	return mergeConfig(baseConfig ?? {}, config);
});
