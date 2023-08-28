process.env.NODE_ENV = "test"
module.exports = function (wallaby) {
  return {
    autoDetect: true,
    tests: ["tests/**/*.spec.js", "tests/**/*.spec.ts", "src/**/*.spec.js", "src/**/*.spec.ts"]
    // for node.js tests you need to set env property as well
    // https://wallabyjs.com/docs/integration/node.html
  }
}
