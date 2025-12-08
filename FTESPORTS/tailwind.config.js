/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                'neon-green': '#00c701',
                'deep-black': '#050505',
                'charcoal': '#0a0a0a',
                'cyber-gray': '#1a1a1a',
            },
            fontFamily: {
                orbitron: ['Orbitron', 'sans-serif'],
                montserrat: ['Montserrat', 'sans-serif'],
            },
            animation: {
                'glitch': 'glitch 0.3s cubic-bezier(.25, .46, .45, .94) both infinite',
                'typewriter': 'typewriter 3s steps(40) 1s 1 normal both',
                'blink': 'blink 1s step-end infinite',
                'tilt': 'tilt 10s infinite linear',
            },
            keyframes: {
                glitch: {
                    '0%': {
                        transform: 'translate(0)',
                    },
                    '20%': {
                        transform: 'translate(-2px, 2px)',
                    },
                    '40%': {
                        transform: 'translate(-2px, -2px)',
                    },
                    '60%': {
                        transform: 'translate(2px, 2px)',
                    },
                    '80%': {
                        transform: 'translate(2px, -2px)',
                    },
                    '100%': {
                        transform: 'translate(0)',
                    },
                },
                typewriter: {
                    '0%': {
                        width: '0',
                    },
                    '100%': {
                        width: '100%',
                    },
                },
                blink: {
                    '0%, 100%': {
                        opacity: '1',
                    },
                    '50%': {
                        opacity: '0',
                    },
                },
                tilt: {
                    '0%, 50%, 100%': {
                        transform: 'rotate(0deg)',
                    },
                    '25%': {
                        transform: 'rotate(1deg)',
                    },
                    '75%': {
                        transform: 'rotate(-1deg)',
                    },
                },
            },
            backgroundImage: {
                'noise': "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.05'/%3E%3C/svg%3E\")",
            },
        },
    },
    plugins: [],
}
