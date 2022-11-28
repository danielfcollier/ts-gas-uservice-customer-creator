import type { Config } from "jest";
import { defaults } from "jest-config";

const config: Config = {
  preset: "ts-jest",
  testEnvironment: "node",
  moduleFileExtensions: [...defaults.moduleFileExtensions, "ts"],
};

export default config;
