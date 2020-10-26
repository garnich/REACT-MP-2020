module.exports = {
  verbose: true,
  moduleNameMapper: {
    "\\.(css|less|scss|sass)$": "identity-obj-proxy"
  },
  snapshotSerializers: ["enzyme-to-json/serializer"],
  transform: {
    "^.+\\.jsx?$": "<rootDir>/node_modules/babel-jest"
  },
  collectCoverageFrom: [
    "src/**/*.{js,jsx}",
    "!src/services/move.schema.js",
    "!**/node_modules/**"
  ]
}