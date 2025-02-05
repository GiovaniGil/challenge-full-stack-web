module.exports = {
  preset: '@vue/cli-plugin-unit-jest',

  moduleFileExtensions: ['js', 'jsx', 'json', 'vue'],

  transform: {
    '^.+\\.js$': 'babel-jest',
    '^.+\\.vue$': 'vue-jest',
  },

  transformIgnorePatterns: ['<rootDir>/node_modules/'],

  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
    'App/(.*)$': '<rootDir>/src/app/$1',
    'Arch/(.*)$': '<rootDir>/src/app/arch/$1',
    'Assets(.*)$': '<rootDir>/src/assets/$1',
    'Plugins(.*)$': '<rootDir>/src/plugins/$1',
    '^@test/(.*)$': '<rootDir>/tests/unit/$1',
  },

  setupFilesAfterEnv: ['<rootDir>/tests/unit/base-test.js'],

  snapshotSerializers: ['jest-serializer-vue'],

  collectCoverage: true,

  coverageReporters: ['text', 'text-summary', 'lcov', 'html'],

  collectCoverageFrom: [
    'src/app/**/*.{js,vue}',
    '!**/node_modules/**',
    '!<rootDir>/src/main.js',
    '!<rootDir>/src/plugins/**.js',
    '!src/App.vue',
    '!src/app/arch/router/**.js',
    '!src/main.js',
    '!src/app/routes/**.js',
  ],

  watchPlugins: [
    'jest-watch-typeahead/filename',
    'jest-watch-typeahead/testname',
  ],
};
