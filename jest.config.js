const nextJest = require('next/jest');

const { compilerOptions } = require('./tsconfig.json');

const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: './',
});

// Any custom config you want to pass to Jest
const customJestConfig = {
  rootDir: './',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  moduleDirectories: ['node_modules', '<rootDir>/'],
  moduleNameMapper: {
    '^api(.*)$': '<rootDir>/src/api/$1',
    '^components(.*)$': '<rootDir>/src/components/$1',
    '^database(.*)$': '<rootDir>/src/database/$1',
    '^hooks(.*)$': '<rootDir>/src/hooks/$1',
    '^interfaces(.*)$': '<rootDir>/src/interfaces/$1',
    '^pages(.*)$': '<rootDir>/src/pages/$1',
    '^providers(.*)$': '<rootDir>/src/providers/$1',
    '^styles(.*)$': '<rootDir>/src/styles/$1',
    '^utils(.*)$': '<rootDir>/src/utils/$1',
  },
  testEnvironment: 'jest-environment-jsdom',
  testPathIgnorePatterns: ['<rootDir>/e2e/'],
};

// createJestConfig is exported in this way to ensure that next/jest can load the Next.js configuration, which is async
module.exports = createJestConfig(customJestConfig);
