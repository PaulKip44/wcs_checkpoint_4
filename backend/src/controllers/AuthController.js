const models = require("../models");
const { encodeJwt } = require("../helpers/jwtHelper");
const { verifyPassword } = require("../helpers/argonHelper");

class AuthController {
  static login = (req, res) => {
    const { email, password } = req.body;
    models.user.findByEmail(email).then((user) => {
      if (!user) {
        res.status(401).send("Invalid credentials");
      } else {
        verifyPassword(password, user.password).then((verification) => {
          if (verification) {
            const token = encodeJwt(user);
            res.cookie("auth_token", token, {
              httpOnly: true,
              secure: false,
            });
            res.status(201).json({ ...user });
          } else {
            res.status(401).send("Invalid credentials");
          }
        });
      }
    });
  };

  static logout = (req, res) => {
    res.clearCookie("auth_token").sendStatus(200);
  };
}

module.exports = AuthController;
