const axios = require("axios");
const fs = require("fs").promises;

const testActivities = require("./activities.test");

// var assert = require("assert");
const BASE_URL = "http://localhost:3000";

const testRoot = async () => {
  const res = await axios.get(BASE_URL);
  const actual = res.data;
  const expected = "Hello World! From server!";
  // assert.equal(actual, expected);
  if (actual !== expected) {
    try {
      await fs.writeFile("actual.txt", actual);
      console.log(`❌ Test GET Root Expected ${expected} but got ${actual}`);
    } catch (err) {
      console.error(err);
    }
  } else {
    console.log("✅ Test GET Root Passed");
  }
};

console.log("Hello Test;");
testRoot();
runTestActivities();
function runTestActivities() {
  try {
    testActivities.testGetActivities();
    testActivities.testGetActivity();
    testActivities.testPostActivity();
  } catch (err) {
    console.error(err.data.message);
  }
}
