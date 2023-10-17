const axios = require("axios");
const fs = require("fs").promises;
// var assert = require("assert");
const BASE_URL = "http://localhost:3000";

const testRoot = async () => {
  console.log("Testing Root");
  const res = await axios.get(BASE_URL);
  const actual = res.data;
  const expected = "Hello World! From server! BAD";
  // assert.equal(actual, expected);
  if (actual !== expected) {
    try {
      await fs.writeFile("actual.txt", actual);
      console.log(`❌ Expected ${expected} but got ${actual}`);
    } catch (err) {
      console.error(err);
    }
  } else {
    console.log("✅ Test Root Passed");
  }
};

console.log("Hello Test;");
testRoot();
