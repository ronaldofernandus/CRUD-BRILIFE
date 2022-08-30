const jwt = require("jsonwebtoken");
const secretCode = process.env.SECRET_CODE || "twentyfour";

const tokenGenerator = (data) => {
  const { id, user_name, active } = data;
  return jwt.sign(
    {
      id,
      user_name,
      active,
    },
    secretCode
  );
};

const tokenVerifier = (data) => {
  return jwt.verify(data, secretCode);
};

module.exports = {
  tokenGenerator,
  tokenVerifier,
};
