process.env.NODE_ENV = "test"
module.exports = () => ({
  autoDetect: true,
  tests: [
    "tests/**/*.spec.js",
    "tests/**/*.spec.ts",
    "src/**/*.spec.js",
    "src/**/*.spec.ts"
  ]
})
