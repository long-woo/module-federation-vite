// eslint-disable-next-line @typescript-eslint/no-require-imports
const path = require("node:path");

/* eslint-env node */
module.exports = {
	plugins: {
		tailwindcss: {
			config: path.join(__dirname, "tailwind.config.cjs"),
		},
		autoprefixer: {},
		// ...(process.env.NODE_ENV === 'production' ? { cssnano: {} } : {})
	},
};
