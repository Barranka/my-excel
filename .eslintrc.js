module.exports = {
  parser: '@babel/eslint-parser',
  parserOptions: {
    babelOptions: {
      configFile: './babel.config.json',
    },
  },
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  extends: ['eslint:recommended', 'google'],
  rules: {
    'require-jsdoc': 'off',
    'jsdoc/require-example': 'off',
    'semi': 'off',
    'max-len': 'off',
    'operator-linebreak': 'off',
    'no-tabs': 'off',
  },
};
