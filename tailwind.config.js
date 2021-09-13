module.exports = {
	mode: "jit",
	purge: ["*.html"],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			fontFamily: {
				sans: ["Anton", "system-ui", "-apple- system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "Helvetica Neue", "Arial", "Noto Sans", "sans-serif", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"],
			},
			colors: {
				utama: "#323232",
				oren: "#E3763E",
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
