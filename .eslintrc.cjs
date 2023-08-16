module.exports = {
  env: { browser: false, es2020: true },
  ignorePatterns: ["node_modules/", "blog_frontend/"],
  extends: [
    'eslint:recommended',
  ],
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
}
