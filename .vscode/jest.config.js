export default {
  verbose: true,
  setupFilesAfterEnv: ['<rootDir>/tools/jest/test.setup.js', 'jest-localstorage-mock'],
  testEnvironment: 'enzyme',
  testURL: 'http://localhost:8080',
  collectCoverageFrom: [
    'src/**/*.{js,jsx,mjs}',
  ],
  testMatch: [
    '<rootDir>/src/**/__tests__/**/*.{js,jsx,mjs,ts,tsx}',
    '<rootDir>/src/**/?(*.)(spec|test).{js,jsx,mjs,ts,tsx}',
  ],
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
    '^.+\\.(js|jsx|mjs)$': '<rootDir>/node_modules/babel-jest',
    '^.+\\.css$': '<rootDir>/tools/jest/cssTransform.js',
    '^(?!.*\\.(js|jsx|mjs|css|json)$)': '<rootDir>/tools/jest/fileTransform.js',
  },
  transformIgnorePatterns: [
    '[/\\\\]node_modules[/\\\\].+\\.(js|jsx|mjs)$',
  ],
  moduleDirectories: [
    'node_modules',
    'mocks',
  ],
  modulePaths: [],
  reporters: []
};
