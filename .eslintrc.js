module.exports = {
  root: true,
  "extends": [
    "plugin:vue/recommended",
    "plugin:prettier/recommended",
    "eslint:recommended"
  ],
  
  parserOptions: {
    parser: 'babel-eslint',
    sourceType: 'module'
  },
  env: {
    browser: true,
    node: true
  },
  globals: {
    __static: true
  },
  plugins: [
    'vue'
  ],
  'rules': {
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0
  }
}
