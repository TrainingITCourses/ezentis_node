const jwt = require("jsonwebtoken");
const secret = "ezentis";

const register = (credentials) => {
  const payload = { sub: credentials.email };
  const token = jwt.sign(payload, secret, { expiresIn: "1d" });
  return token;
};

const refresh = (oldToken) => {
  let decoded = jwtToken.decode(token, { complete: true });
  let payload = decoded.payload;
  const newToken = jwt.sign(payload, secret, { expiresIn: "1d" });
  return newToken;
};
