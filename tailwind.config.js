/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{ts,tsx,jsx,js}'],
    theme: {
        extend: {
            colors: {
                primary: {
                    DEFAULT: '#2E3A23',
                },
                secondary: {
                    DEFAULT: '#4DFb99',
                },
                black: {
                    DEFAULT: '#000',
                },
                white: {
                    DEFAULT: '#fff',
                },
            },
        },
    },
    plugins: [],
}
