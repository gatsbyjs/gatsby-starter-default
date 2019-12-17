const path = require("path")

module.exports = {
  roots: [path.resolve(__dirname, "../src")],
  transform: {
    "^.+\\.jsx?$": `./jest-preprocess.js`,
  },
  moduleNameMapper: {
    ".+\\.(css|styl|less|sass|scss)$": `identity-obj-proxy`,
    ".+\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": `<rootDir>/__mocks__/file-mock.js`,
  },
  testPathIgnorePatterns: [`node_modules`, `.cache`, `public`],
  transformIgnorePatterns: [`node_modules/(?!(gatsby)/)`],
  globals: {
    __PATH_PREFIX__: ``,
  },
  displayName: "sandbox",
  testMatch: ["**/__tests__/**/*.js", "**/*.test.js"],
  testURL: "http://localhost",
  setupFilesAfterEnv: ["./testUtils.js"],
}
