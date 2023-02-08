/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	daisyui: {
		themes: [
			{
				mytheme: {
					primary: "#5676b5",

					secondary: "#adfff4",

					accent: "#dc2626", //red

					neutral: "#121A21", // black

					"base-100": "#FFFFFF",

					info: "#6987F2",

					success: "#16a34a", // green

					warning: "#F1AD46",

					error: "#EA6462", // error
				},
			},
		],
	},
	theme: {
		extend: {},
	},
	plugins: [require("daisyui")],
};
