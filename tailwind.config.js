/** @type {import('tailwindcss').Config} */
import plugin from "tailwindcss/plugin";

module.exports = {
	content: ["./src/**/*.{html,js,jsx}"],
	theme: {
		fontFamily: {
			poppins: ["Poppins", "sans-serif"],
		},
		extend: {
			colors: {
				green: "#3FE225",
				"ghost-white": "#EFF3FD",
				blue: "#4C82EF",
			},
			spacing: {
				12.5: "3.125rem",
			},
		},
	},
	plugins: [
		plugin(function ({ addUtilities }) {
			addUtilities({
				".background": {
					background: "linear-gradient(to bottom, #e6eeff, #ffffff)",
				},
				".frame-shadow": {
					"box-shadow": "0 0 0 7px #ffffff",
				},
			});
		}),
	],
};
