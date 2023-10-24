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

const testGetActivity = async () => {
  const res = await axios.get(BASE_URL + "/1");
  const actual = JSON.stringify(res.data);
  const expected = JSON.stringify({ name: "activity1" });
  if (actual !== expected) {
    console.log(`❌ Test GET api/activities Failed: Expected ${expected} but got ${actual}`);
  } else {
    console.log("✅ Test GET api/activities Passed");
  }
};

const testPostActivity = async () => {
  const payload = null; // { name: "activity3" };
  try {
    const res = await axios.post(BASE_URL, payload);
    const actual = JSON.stringify(res.data);
    const expected = JSON.stringify({ name: "activity3" });
    if (res.data.name !== "activity3") {
      console.log(`❌ Test POST api/activities Failed: Expected ${expected} but got ${actual}`);
    } else {
      console.log("✅ Test POST api/activities Passed");
    }
  } catch (err) {
    console.log(`🐞 Test POST api/activities Failed: ${err.response.data.message} ${err.response.status}`);
    return;
  }
};

const testActivities = {
  testGetActivities,
  testGetActivity,
  testPostActivity,
};

module.exports = testActivities;
