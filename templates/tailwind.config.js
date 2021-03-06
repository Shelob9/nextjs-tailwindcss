const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
	theme: {
		...defaultTheme,
	},
	variants: {},
	plugins: [],
	future: {
		removeDeprecatedGapUtilities: true,
	},
	purge: {
		mode: "all",
		content: [
			"pages/**/*.js",
			"pages/**/*.tsx",
			"components/**/*.js",
			"components/**/*.tsx",
		],
		options: {
			keyframes: true,
		},
	},
};
