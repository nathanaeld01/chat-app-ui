/** @type {import('tailwindcss').Config} */
import plugin from "tailwindcss/plugin";

module.exports = {
	content: ["./src/**/*.{html,js,jsx}"],
	theme: {
		extend: {
			colors: {
				background: "#E6EEFF",
			},
		},
	},
	plugins: [
		plugin(function ({ addUtilities }) {
			addUtilities({
				".background": {
					background: "linear-gradient(to bottom, #e6eeff, #ffffff)",
				},
			});
		}),
	],
};
