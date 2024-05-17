module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      colors: {
        base: {
          100: "hsl(var(--base-100) / <alpha-value>)",
          200: "hsl(var(--base-200) / <alpha-value>)",
          300: "hsl(var(--base-300) / <alpha-value>)",
          400: "hsl(var(--base-400) / <alpha-value>)",
          500: "hsl(var(--base-500) / <alpha-value>)",
          900: "hsl(var(--base-900) / <alpha-value>)",
        },
        primary: "hsl(var(--primary) / <alpha-value>)",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
