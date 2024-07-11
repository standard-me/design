/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {},
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
    plugins: [],
}
