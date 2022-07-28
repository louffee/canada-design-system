/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  verbose: true,
  testMatch: ['**/tests/**/*.spec.(tsx|ts)'],
  detectOpenHandles: true,
  transform: {
    '^.+\\.(ts|tsx|js)?$': 'babel-jest',
  },
  coverageDirectory: 'coverage',
  collectCoverageFrom: ['src/**/*.{ts,tsx,js,jsx}', '!src/**/*.d.ts'],
  setupFilesAfterEnv: ['<rootDir>/tests/setup.ts'],
}
