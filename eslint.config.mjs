// eslint.config.js
import { defineConfig } from "eslint/config";
import next from "eslint-config-next";
import tseslint from "@typescript-eslint/eslint-plugin";
import tsparser from "@typescript-eslint/parser";

export default defineConfig([
    // Next.js recommended rules
    ...next(),

    {
        files: ["**/*.{ts,tsx}"],
        languageOptions: {
            parser: tsparser,
            parserOptions: {
                project: true,
            },
        },
        plugins: {
            "@typescript-eslint": tseslint,
        },
        rules: {
            "@typescript-eslint/no-unused-vars": ["warn"],
            "@typescript-eslint/no-explicit-any": "off",
            "simple-import-sort/imports": "error",
            "simple-import-sort/exports": "error",
            "object-curly-spacing": ["error", "always"],
            "react/jsx-curly-spacing": [
                "error",
                {
                    when: "always",
                    children: true,
                },
            ],
        },
    },

    // Global ignores
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
