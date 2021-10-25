module.exports = {
  root: true,
  env: {
    es6: true,
    node: true,
  },
  extends: [
    "eslint:recommended",
    "google",
  ],
  overrides: [
    {
      files: [
        "*.js",
      ],
      rules: {
        "no-unused-vars": "off",
      },
    },
  ],
  rules: {
    quotes: ["error", "double"],
  },
};
