/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        tomato: generateScale("tomato"),
        slate: generateScale("slate"),
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

// Generating radix colors and adding it to the project
function generateScale(name) {
  // Generate an array of scales with 12 values
  let scale = Array.from({ length: 12 }, (_, i) => {
    let id = i + 1;
    // Return an array of arrays and flatten it to be 2 arrays inside the main array
    return [
      [id, `var(--${name}-${id})`],
      [`a${id}`, `var(--${name}-a${id})`],
    ];
  }).flat();

  // Use the array of arrays to create a color object
  return Object.fromEntries(scale);
}
