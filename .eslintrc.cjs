module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'airbnb',
    'airbnb-typescript',
    'airbnb/hooks',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    'plugin:testing-library/react',
    'plugin:jest-dom/recommended',
  ],
  overrides: [],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: './tsconfig.json',
  },
  plugins: ['react', '@typescript-eslint', 'prettier', 'testing-library', 'jest-dom'],
  rules: {
    'react/react-in-jsx-scope': 'off',
    'react/function-component-definition': [2, { namedComponents: 'arrow-function' }],
    "import/no-extraneous-dependencies": [
      "error",
      {"devDependencies": true}
    ]
  },
  devDependencies: [ 
    'test/**', // tape, common npm pattern 
    'tests/**', // also common npm pattern 
    'spec/**', // mocha, rspec-like pattern 
    '**/__tests__/**', // jest pattern 
    '**/__mocks__/**', // jest pattern 
    'test.{js,jsx}', // repos with a single test file 
    'test-*.{js,jsx}', // repos with multiple top-level test files 
    '**/*{.,_}{test,spec}.{js,jsx}', // tests where the extension or filename suffix denotes that it is a test 
    '**/jest.config.js', // jest config 
    '**/jest.setup.js', // jest setup 
    '**/vue.config.js', // vue-cli config 
    '**/webpack.config.js', // webpack config 
    '**/webpack.config.*.js', // webpack config 
    '**/rollup.config.js', // rollup config 
    '**/rollup.config.*.js', // rollup config 
    '**/gulpfile.js', // gulp config 
    '**/gulpfile.*.js', // gulp config 
    '**/Gruntfile{,.js}', // grunt config 
    '**/protractor.conf.js', // protractor config 
    '**/protractor.conf.*.js', // protractor config 
    '**/karma.conf.js', // karma config 
    '**/.eslintrc.js' // eslint config 
  ], 
};