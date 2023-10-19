const axios = require("axios");
const BASE_URL = "http://localhost:3000/api/activities";

const testGetActivities = async () => {
  const res = await axios.get(BASE_URL);
  const actual = JSON.stringify(res.data);
  const expected = JSON.stringify([{ name: "activity1" }, { name: "activity2" }]);
  if (actual !== expected) {
    console.log(`❌ Test GET api/activities Failed: Expected ${expected} but got ${actual}`);
  } else {
    console.log("✅ Test GET api/activities Passed");
  }
};

module.exports = testGetActivities;
