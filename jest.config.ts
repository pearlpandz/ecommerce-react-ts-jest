/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$',
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'json'],
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/tests/__mocks__/fileMock.ts',
    '\\.(css|less)$': '<rootDir>/tests/__mocks__/cssMock.ts',
  },
  setupFilesAfterEnv: ['@testing-library/jest-dom'],
  collectCoverage: true,
  collectCoverageFrom: ["./src/**", "!**/*.stories.tsx"],
  coveragePathIgnorePatterns: [
    "node_modules",
    "main.tsx",
    ".d.ts",
    "__snapshots__"
  ],
  coverageThreshold: {
    global: {
      branches: 20,
      functions: 30,
      lines: 50,
      statements: 50
    }
  },
};
