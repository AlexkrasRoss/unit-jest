module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
    jest: true
    },

  extends:[
    'airbnb/base',
    "eslint:recommended",
    "pritter"
  ], 
  overrides: [{
    files: [
                ".eslintrc.{js,cjs}"
            ],
            parserOptions: {
                sourceType: "script"
            }
  }],

  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  
  rules: {
    "import/extensions":[
    "error",
    "ignorePackages",
    ]
  },
}
