import { defineConfig } from "@pandacss/dev";

export default defineConfig({
  presets: ["@pandacss/dev/presets", "@rotate/panda-preset"],
  // Whether to use css reset
  preflight: true,

  // Where to look for your css declarations
  include: ["./src/**/*.{ts,tsx,js,jsx}"],

  // Files to exclude
  exclude: [],

  // The output directory for your css system
  theme: {
    extend: {},
  },
  outdir: "styled-system",
});
