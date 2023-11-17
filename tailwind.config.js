/** @type {import('tailwindcss').Config} */

const withMT = require("@material-tailwind/react/utils/withMT");
module.exports = withMT({
  plugins: [require("flowbite/plugin")],
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/flowbite/**/*.{js,jsx,ts,tsx}",
    "path-to-your-node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
    "path-to-your-node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        marquee2: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0%)' },
        },
        marquees: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0%)' },
        },
        marquees2: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0%)' },
        },
      },
      animation : {
        'spin-slow-30': 'spin 30s linear infinite',
        'spin-slow-25': 'spin 25s linear infinite',
        'spin-slow-10': 'spin 10s linear infinite',
        'marquee-infinite' : 'marquee 24s linear infinite',
        'marquees-infinite' : 'marquees 24s linear infinite',
      },
      transitionProperty: {
        'all-but-transform': 'all except transform',
      },
      transitionDuration: {
        'half-second': '0.5s',
      },
      transitionTimingFunction: {
        'ease-out': 'cubic-bezier(0, 0, 0.2, 1)',
      },
      screens: {
        xs: "379px", // Custom screen size for smaller than 'sm'
      },
      colors: {
        tan: "#bcad93",

        lightgray: "#d4c9b6",
        "yellow-600": "#9f580a",
        "yellow-400": "#e3a008",
        "yellow-700": "#8e4b10",
        "yellow-900": "#633112",
        "peachpuff": "#e4c9b5",
        "gray-300": "#d1d5db",
        "saddlebrown": "#8e4b10",
        darkkhaki: "#ab995a",
      },
      fontFamily: {
        "dm-serif-display": "DynaPuff",
      },
    },
    fontSize: {
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
});
