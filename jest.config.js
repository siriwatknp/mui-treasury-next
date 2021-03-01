module.exports = {
  roots: ['<rootDir>/packages', '<rootDir>/scripts'],
  setupFilesAfterEnv: ['jest-extended'],
  testMatch: [
    '**/__tests__/**/*.+(ts|tsx|js)',
    '**/?(*.)+(spec|test).+(ts|tsx|js)',
  ],
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
  },
};
