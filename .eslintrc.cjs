/** @type {import("eslint").Linter.Config} */
const config = {
  overrides: [
    {
      extends: [
        "plugin:@typescript-eslint/recommended-requiring-type-checking",
      ],
      rules:{
        "@typescript-eslint/no-unsafe-assignment" : "off",
        "react/no-unescaped-entities" :  "off",
        "react/jsx-key" : "off",
        "@typescript-eslint/no-unsafe-call" : "off",
        "react/display-name" : "off",
        "@typescript-eslint/no-misused-promises" : "off",
        "@typescript-eslint/restrict-plus-operands" : "off",
        "@typescript-eslint/no-unsafe-member-access" : "off",
        "@typescript-eslint/no-unsafe-argument" : "off",
        "@typescript-eslint/no-unused-vars" : "off",
        "@typescript-eslint/no-explicit-any" : "off",
        "@typescript-eslint/ban-ts-comment" : "off",
        "@typescript-eslint/no-floating-promises" : "off",
        "@typescript-eslint/no-empty-function":"off",
        "@typescript-eslint/require-await":"off",
        "@typescript-eslint/restrict-template-expressions" :"off",
        "@next/next/no-img-element": "off",
        
      },
      files: ["*.ts", "*.tsx"],
      parserOptions: {
        project: "tsconfig.json",
      },
    },
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: "./tsconfig.json",
  },
  plugins: ["@typescript-eslint"],
  extends: ["next/core-web-vitals", "plugin:@typescript-eslint/recommended"],
  rules: {
    "@typescript-eslint/consistent-type-imports": [
      "warn",
      {
        prefer: "type-imports",
        fixStyle: "inline-type-imports",
      },
    ],
  },
};

module.exports = config;
