/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  verbose: true,
  testMatch: ['**/__tests__/**/*.spec.(tsx|ts)'],
  detectOpenHandles: true,
  transform: {
    '^.+\\.(ts|tsx|js)?$': 'babel-jest',
  },
  coverageDirectory: 'coverage',
  collectCoverageFrom: ['packages/**/src/*.{ts,tsx,js,jsx}', '!*.d.ts'],
  setupFilesAfterEnv: ['<rootDir>/__tests__/setup.ts'],
}
