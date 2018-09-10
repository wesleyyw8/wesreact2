module.exports = {
  verbose: true,
  'collectCoverageFrom': [
    'src/actions/**',
    'src/reducers/**',
    '!src/reducers/index.js'
  ],
  testMatch: ["<rootDir>/../src/**/__tests__/*.js", "<rootDir>/(src/__tests__/.*|\\.(test|spec))\\.(ts|tsx|js)$"],
  moduleNameMapper: {
    '^Actions[/](.+)': '<rootDir>/src/actions/$1',
    '^Actions': '<rootDir>/src/actions/actionTypes.js',
    '^Selectors': '<rootDir>/src/selectors'
  }
};