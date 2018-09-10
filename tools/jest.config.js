module.exports = {
  verbose: true,
  'collectCoverageFrom': [
    'src/actions/**',
    'src/reducers/**',
    '!src/reducers/index.js'
  ],
  "rootDir": "../",
  testMatch: ['<rootDir>/../**/__tests__/*.js'],
  moduleNameMapper: {
    '^Actions[/](.+)': '<rootDir>/src/actions/$1',
    '^Actions': '<rootDir>/src/actions/actionTypes.js',
    '^Selectors': '<rootDir>/src/selectors'
  }
};