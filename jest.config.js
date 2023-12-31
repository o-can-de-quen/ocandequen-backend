/** @type {import('ts-jest').JestConfigWithTsJest} */

const { pathsToModuleNameMapper } = require("ts-jest");
const { compilerOptions } = require("./tsconfig.json");

module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",

  // this enables us to use tsconfig-paths with jest
  modulePaths: [compilerOptions.baseUrl],
  modulePathIgnorePatterns: ["<rootDir>/dist/"],
  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths),
};
