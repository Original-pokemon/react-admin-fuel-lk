module.exports = {
  env: { browser: true, es2022: true },
  extends: [
    "eslint:recommended",
    "airbnb",
    "airbnb-typescript",
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:unicorn/recommended",
    "plugin:prettier/recommended",
    "plugin:storybook/recommended"
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    project: "tsconfig.json",
  },
  settings: { react: { version: "detect" } },
  plugins: [
    "@typescript-eslint",
    "react",
    "react-refresh",
    "prettier",
    "unicorn",
    "check-file",
    "@emotion"
  ],
  rules: {
    "@emotion/pkg-renaming": "error",
    "react/react-in-jsx-scope": "off",
    "react-refresh/only-export-components": "warn",
    "react/jsx-uses-react": "off",
    "react/function-component-definition": "arrow-function",
    "check-file/filename-naming-convention": [
      "error",
      {
        "**/*.{jsx,tsx,js,ts}": "KEBAB_CASE",
      },
      {
        ignoreMiddleExtensions: true,
      },
    ],
    "check-file/folder-naming-convention": [
      "error",
      {
        "**/": "KEBAB_CASE",
      },
    ],
    "unicorn/no-array-for-each": "off",
  },
};
