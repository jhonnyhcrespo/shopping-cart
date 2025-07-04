module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  moduleNameMapper: {
    "^@/lib/(.*)$": "<rootDir>/src/lib/$1",
    "^@/app/(.*)$": "<rootDir>/src/app/$1",
  },
  testPathIgnorePatterns: ["<rootDir>/.next/", "<rootDir>/node_modules/"],
};
