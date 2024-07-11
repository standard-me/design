/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: {
                'light-gray': '#dddddd',
                'dark-gray': '#333333',
                primary: '#005E88',
                secondary: '',
                'hot-pink': '#FF90BC',
                pink: '#FFC0D9',
                banila: '#F9F9E0',
                soda: '#8ACDD7',
            },
            fontSize: {
                xs: [
                    '0.75rem',
                    {
                        lineHeight: '1rem',
                        // letterSpacing: '-0.01em',
                        // fontWeight: '700',
                    },
                ],
                // '3xl': [
                //     '1.875rem',
                //     {
                //         lineHeight: '2.25rem',
                //         letterSpacing: '-0.02em',
                //         fontWeight: '700',
                //     },
                // ],
            },
        },
    },
    plugins: [],
}
