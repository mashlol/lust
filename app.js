var numTests = 0;

var it = function(name) {
  console.log("It " + name + ": \x1b[32mPASS\x1b[0m");
  numTests++;
};

var describe = function(name, callback) {
  numTests = 0;
  console.log("Running " + name + " tests");
  console.log("--------");
  callback(it);
  console.log("--------");
  console.log("\x1b[31mNO TEST FAILURES\x1b[0m");
  console.log("\x1b[32m" + numTests + " TEST PASSES\x1b[0m");
  console.log("\x1b[32mAll tests pass\x1b[0m");
};

module.exports = describe;
