module.exports = {
  roots: ["<rootDir>/packages", "<rootDir>/scripts"],
  preset: "ts-jest",
  setupFilesAfterEnv: ["jest-extended"],
  transform: {
    "^.+\\.(ts|tsx|js)$": "ts-jest",
  },
  transformIgnorePatterns: [
    "<rootDir>/node_modules/(?!(@material-ui/core|@babel/runtime)/)",
  ],
  testMatch: [
    "**/__tests__/**/*.+(ts|tsx|js)",
    "**/?(*.)+(spec|test).+(ts|tsx|js)",
  ],
};
