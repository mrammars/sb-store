module.exports = {
    mode: "jit",
    purge: ["index.html"],
    darkMode: false,
    theme: {
        extend: {
            fontFamily:{
                // extracondensed : 'Fira Sans Extra Condensed',
                // spinwerad :  'spinwerad',
                // montserrat : 'Montserrat'
            },
            animation: {
                tilt: 'tilt 10s infinite linear'
            },
            keyframes:{
                tilt:{
                "0%. 50%, 100%": {
                    transform: "rotate(0deg)",
                },
                "25%": {
                    transform: "rotate(1deg)",
                },
                "75%": {
                    transform: "rotate(-1deg)",
                },
                }
            }
        },
    },
    plugins: [
        require('@tailwindcss/forms'),
        require('@tailwindcss/line-clamp'),
    ],
}
