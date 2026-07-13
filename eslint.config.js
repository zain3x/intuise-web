import js from "@eslint/js";
import astro from "eslint-plugin-astro";
import tseslint from "typescript-eslint";

export default [
  {
    ignores: [
      "dist/**",
      "archive/**",
      "legacy/**",
      "node_modules/**",
      ".astro/**",
      ".angular/**",
    ],
  },
  js.configs.recommended,
  ...tseslint.configs.recommended,
  ...astro.configs.recommended,
  { rules: { "no-undef": "off" } },
];
