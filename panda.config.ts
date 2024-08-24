import { defineConfig } from "@pandacss/dev";

export default defineConfig({
  include: [
    "./apps/**/*.{ts,tsx,js,jsx}",
    "./packages/ui/**/*.{ts,tsx,js,jsx}",
  ],
  exclude: [],
  theme: {
    extend: {
      tokens: {
        colors: {
          primary: { value: "#1a202c" },
          secondary: { value: "#2d3748" },
          // Add more design tokens here
        },
      },
    },
  },
  outdir: "styled-system", // Output directory
});
