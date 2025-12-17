/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: 'class',
    theme: {
        extend: {
            fontFamily: {
                sans: ['"Poppins"', 'sans-serif'],
            },
            colors: {
                brand: {
                    azure: '#007DEB', // Primary Action
                    marian: '#003F88', // Darker Blue / Hover
                    oxford: '#0A1640', // Dark Backgrounds / Text
                    ghost: '#F0F3F9', // Light Backgrounds
                    timberwolf: '#D3D3D3', // Borders / Light Gray
                    xanthous: '#FFC759', // Accent Yellow
                    robin: '#59C3C3', // Accent Teal
                }
            },
            borderRadius: {
                '4xl': '2rem',
                '5xl': '2.5rem',
            }
        }
    },
    plugins: [],
}
