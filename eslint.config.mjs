import { defineConfig } from "eslint/config";
import next from "eslint-config-next";
import tsparser from "@typescript-eslint/parser";
import simpleImportSort from "eslint-plugin-simple-import-sort";
import unusedImports from "eslint-plugin-unused-imports";

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
            "unused-imports": unusedImports,
        },
        rules: {
            "no-multi-spaces": ["error"],
            "no-multiple-empty-lines": [
                "error",
                { "max": 1, "maxEOF": 0, "maxBOF": 0 }
            ],            "brace-style": ["error", "stroustrup", { "allowSingleLine": false }],
            "curly": ["error", "all"],
            "nonblock-statement-body-position": ["error", "below"],
            "@typescript-eslint/no-unused-vars": ["warn"],
            "@typescript-eslint/no-explicit-any": "off",
            "simple-import-sort/imports": "error",
            "simple-import-sort/exports": "error",
            "object-curly-spacing": ["error", "always"],
            "react/jsx-newline": ["error", { "prevent": true }],
            "react/jsx-curly-spacing": [
                "error",
                { when: "always", children: true },
            ],
            "indent": ["error", 4, {
                "SwitchCase": 1,
                "VariableDeclarator": "first",
                "outerIIFEBody": 1,
                "MemberExpression": 1,
                "FunctionDeclaration": { "parameters": "first", "body": 1 },
                "FunctionExpression": { "parameters": "first", "body": 1 },
                "CallExpression": { "arguments": "first" },
                "ArrayExpression": "first",
                "ObjectExpression": "first",
                "ImportDeclaration": "first",
                "flatTernaryExpressions": false,
                "ignoreComments": false
            }],
            "unused-imports/no-unused-imports": "error",
            "unused-imports/no-unused-vars": [
                "warn",
                { vars: "all", varsIgnorePattern: "^_", args: "after-used", argsIgnorePattern: "^_" },
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
