/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
        colors: {
          "purple-600": "#ff0000",
        },
        extend: {
            fontSize: {
                "2xs": "0.813rem",
            },
        },
    },
    plugins: [],
};
