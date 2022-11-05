module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [
    require("tailwindcss-debug-screens"),
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
    require("@tailwindcss/line-clamp"),
    require("@tailwindcss/aspect-ratio"),
    ({ addUtilities, addComponents }) => {
      /**
       * @description precedence: utilities > components > base
       * @see https://tailwindcss.com/docs/adding-custom-styles
       */

      addComponents({});

      addUtilities({});
    },
  ],
};
