const path = require("node:path");

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		path.join(__dirname, "./apps/*/src/**/*.{html,vue,tsx}"),
		path.join(__dirname, "./apps/*/public/**/*.html"),
		path.join(__dirname, "./apps/*/index.html"),
		// path.join(__dirname, "./packages/!(api|use)/src/**/*.{vue,tsx}"),
	],
};
