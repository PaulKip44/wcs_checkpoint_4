const models = require("../models");
const { hashPassword } = require("../helpers/argonHelper");

class UserController {
  static addOne = async (req, res) => {
    const { password, email } = req.body;

    models.user.findByEmail(email).then((user) => {
      if (user) {
        res.status(500).send("This email alredy exist");
      }
      hashPassword(password)
        .then((hash) => {
          models.user
            .insert({
              ...req.body,
              password: hash,
            })
            .then((newUser) => console.error(newUser))
            .then(() => res.status(201).json({ ...req.body }))
            .catch((err) => {
              res.status(500).send({ err });
            });
        })
        .catch((err) => res.status(500).send({ err }));
    });
  };

  static getOne = (req, res) => {
    const userId = parseInt(req.params.id, 10);

    models.user
      .find(userId)
      .then((user) => {
        if (user.length === 0) {
          res.sendStatus(404);
        } else {
          res.send(user[0]);
        }
      })
      .catch((err) => res.status(500).send(err));
  };
}

module.exports = UserController;
