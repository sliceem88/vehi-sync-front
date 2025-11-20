import { defineConfig } from "eslint/config";
import next from "eslint-config-next";
import tsparser from "@typescript-eslint/parser";
import simpleImportSort from "eslint-plugin-simple-import-sort";

export default defineConfig([
    next,

    {
        files: ["**/*.{ts,tsx}"],
        languageOptions: {
            parser: tsparser,
            parserOptions: {
                project: true,
            },
        },
        plugins: {
            "simple-import-sort": simpleImportSort,
        },
        rules: {
            "@typescript-eslint/no-unused-vars": ["warn"],
            "@typescript-eslint/no-explicit-any": "off",

            // now ESLint can find these rules
            "simple-import-sort/imports": "error",
            "simple-import-sort/exports": "error",

            "object-curly-spacing": ["error", "always"],
            "react/jsx-curly-spacing": [
                "error",
                { when: "always", children: true },
            ],
        },
    },

    {
        ignores: [
            ".next/**",
            "node_modules/**",
            "out/**",
            "build/**",
            "dist/**",
            "next-env.d.ts",
        ],
    },
]);
