/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                primary: "#02372a",
                secondary: "#1e293b",
                accent: "#38bdf8",
            },
        },
    },
    plugins: [],
};
