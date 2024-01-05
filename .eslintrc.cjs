module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
    'vue/setup-compiler-macros': true
  },
  extends: ['@nuxtjs/eslint-config-typescript', 'plugin:vue/vue3-recommended','prettier'],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': ['error'],
    'no-unused-vars': 'off', // 取消禁止未使用變數
    '@typescript-eslint/no-unused-vars': 'off',
    'arrow-body-style': 'off', // 關閉箭頭函式一定要 {}
    'prefer-arrow-callback': 'off', // 關閉 callback 函式一定使用箭頭函式
    'vue/multi-word-component-names': 'off', // 關掉元件一定要多個單字組合
    '@typescript-eslint/naming-convention': [
      'error',
      {
        selector: 'typeLike',
        format: ['PascalCase']
      }
    ] // 類別名稱一定要大寫開頭
  }
}
