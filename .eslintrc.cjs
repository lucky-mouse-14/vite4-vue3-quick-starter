module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:vue/vue3-essential',
    '@antfu',
    './.eslintrc-auto-import.json', // 自动导入忽略
  ],
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'vue',
  ],
  rules: {
    'vue/multi-word-component-names': 'off',
    // '@typescript-eslint/no-this-alias': [
    //   'error',
    //   {
    //     allowDestructuring: false,
    //     allowedNames: ['context', 'arguments'],
    //   },
    // ],
  },
  globals: {
    WeixinJSBridge: 'readonly',
    ElMessage: 'readonly',
    ElMessageBox: 'readonly',
    ElLoading: 'readonly',
  },
}
