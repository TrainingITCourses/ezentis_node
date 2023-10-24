const { expressjwt } = require("express-jwt");
const secret = "ezentis";
const algorithms = ["HS256"];

const guardUser = expressjwt({
  secret,
  algorithms,
  credentialsRequired: true,
  onExpired: (req, res) => {
    res.status(401).send("Token expired");
  },
});

/**
 * Security related middleware functions.
 * @description Configures JWT for user identification and API Key guards.
 */
module.exports = authentication = {
  /**
   * Guard routes that require a valid JWT.
   * @description The User ID is available in req.user.sub
   * @trhows {UnauthorizedError} If the JWT is not valid
   */
  guardUser,
};
