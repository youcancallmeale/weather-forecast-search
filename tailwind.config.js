// tailwind.config.js
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      height: {
        "2/3": "66.666667%",
      },
      spacing: {
        6: "1.5rem",
        8: "2rem",
        xl: "36rem",
        lg: "32rem",
        3: "0.75rem",
        3.5: "0.875rem",
        4: "1rem",
      },
      fontSize: {
        "3xl": ["1.875rem", { lineHeight: "2.25rem" }],
        "4xl": ["2.25rem", { lineHeight: "2.5rem" }],
        lg: ["1.125rem", { lineHeight: "1.75rem" }],
        sm: "0.875rem",
      },
      lineHeight: {
        tight: "1.25",
        8: "2rem",
        6: "1.5rem",
      },
      borderRadius: {
        "b-lg": "0.5rem",
        md: "0.375rem",
      },
      backgroundColor: {
        "white-5": "rgba(255, 255, 255, 0.05)",
      },
      textColor: {
        white: "#ffffff",
        "gray-300": "#d1d5db",
      },
      borderColor: {
        "dark-gray": "#4b5563",
      },
      ringColor: {
        "white-10": "rgba(255, 255, 255, 0.1)",
        "indigo-500": "#6366f1",
      },
      ringWidth: {
        1: "1px",
        2: "2px",
      },
      maxHeight: {
        "300px": "300px",
      },
      overflow: {
        "y-auto": "auto",
      },
      inset: {
        "1/2": "50%",
      },
      top: {
        0: "0",
        6: "1.5rem",
        "-6": "-1.5rem",
      },
      zIndex: {
        "-10": "-10",
        10: "10",
      },
      translate: {
        "-1/2": "-50%",
      },
      blur: {
        "3xl": "64px",
      },
    },
  },
  variants: {
    extend: {
      borderColor: ["dark"],
      backgroundColor: ["hover", "focus", "dark"],
      textColor: ["hover", "focus", "dark"],
      ringWidth: ["focus"],
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
