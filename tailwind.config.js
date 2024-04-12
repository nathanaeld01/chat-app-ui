import plugin from "tailwindcss/plugin";

module.exports = {
	content: ["./src/**/*.{html,js,jsx}", "./public/index.html"],
	theme: {
		fontFamily: {
			poppins: ["Poppins", "sans-serif"],
		},
		extend: {
			colors: {
				green: "#3FE225",
				"ghost-white": "#EFF3FD",
				blue: "#4C82EF",
				gray: "#B1B1B1",
				"dark-gray": "#7A7F8C",
				charcoal: "#333333",
				"light-green": "#DCF7C5",
				"light-blue": "#F2F7FF",
			},
			spacing: {
				12.5: "3.125rem",
				4.5: "1.125rem",
				7.5: "1.875rem",
				62.5: "15.625rem",
			},
			backgroundImage: {
				footer: "linear-gradient(to bottom right, #e6eeffff, #e6eeff00 110%)",
				background:
					"linear-gradient(to bottom right, #e6eeffff 40%, #e6eeff00 100%)",
			},
			zIndex: {
				1: "1",
			},
		},
	},
	plugins: [
		plugin(function ({ addUtilities }) {
			addUtilities({
				".frame-shadow": {
					"box-shadow": "0 0 0 7px #ffffff",
				},
				".input-border": {
					border: "1px solid #E3ECFF",
				},
			});
		}),
	],
};
