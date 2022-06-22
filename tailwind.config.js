module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            animation: {
                blob: "blob 7s infinite",
            },
            keyframes: {
                blob: {
                    "0%": {
                        transform: "translate(0px, 0px) scale(1)",
                    },
                    "33%": {
                        transform: "translate(30px, -50px) scale(1.1)",
                    },
                    "66%": {
                        transform: "translate(-20px, 20px) scale(0.9)",
                    },
                    "100%": {
                        transform: "tranlate(0px, 0px) scale(1)",
                    },
                },
            },

            colors: {
                'eerie-black': '#1B1B1B',
                'lapis-lazuli': '#1C5D99',
                'cadet-blue': '#639FAB',
                'light-steel-blue': '#BBCDE5',
                'azure': '#357DED',
                'queen-blue': '#33658A',
                'honey-yellow': '#F6AE2D',
                'purple-cadet': '#484D6D',
                'space-cadet': '#2C365E',
                'green-blue-cayola': '#0A81D1',
                'mango-tango': '#FF8C42',
                'dark-purple': '#1C0118',
                'oxford-blue': '#101935',
                'dark-blue': '#00011E',
                'emerald': '#1A936F',
                'green-ish': '#6AD174',
                'green-ish-hover': '#48b97a',
                'carmine': '#D62246',
                'blue-bell': '#8E8DBE',
                'coral': '#E8505B',
                'turquoise': '#69FFF1',
                'kobi': '#F0A6CA',
                'lavender': '#EFC3E6',
                'purple-error': '#91a5f6',


            },
            fontFamily: {
                yanone: "'Yanone Kaffeesatz', cursive",
                comforta: "'Comfortaa',cursive",
            },
            backgroundImage: (theme) => ({
                'hero-img': "url('/src/images/doc.svg')",
                'error-img': "url('/src/images/Error RIP.svg')",
                'layer-img': "url('/src/images/layer-waves.svg')",
                'big-img': "url('/src/images/blob-scene-haikei.svg')",
                'big2-img': "url('/src/images/blob-scene-haikei2.svg')",
                'dna-img': "url('/src/images/adn.svg')",

            }),
        },
    },
    plugins: [require("daisyui")],
    daisyui: {
        styled: true,
        themes: true,
        base: true,
        utils: true,
        logs: true,
        rtl: false,
        prefix: "",
        darkTheme: "light",
        themes: ["light", "dark", "cupcake", "bumblebee", "emerald", "corporate", "synthwave", "retro", "cyberpunk", "valentine", "halloween", "garden", "forest", "aqua", "lofi", "pastel", "fantasy", "wireframe", "black", "luxury", "dracula", "cmyk", "autumn", "business", "acid", "lemonade", "night", "coffee", "winter"],
    },
}
