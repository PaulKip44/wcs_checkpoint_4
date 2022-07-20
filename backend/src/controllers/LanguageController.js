const models = require("../models");

class LanguageController {
  static getAll = (req, res) => {
    models.language
      .findAll()
      .then(([rows]) => {
        res.send(rows);
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  };

  static addOne = (req, res) => {
    const newLanguage = req.body;

    // newLanguage = { name: "",
    // source_logo: "",
    // name_logo: "" };

    models.language
      .insert({ ...newLanguage, user_Id: 1 })
      .then(([result]) => {
        res.status(201).send({ ...newLanguage, id: result.insertId });
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  };

  static delete = (req, res) => {
    models.language
      .delete(req.params.id)
      .then(() => {
        res.sendStatus(204);
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  };
}

module.exports = LanguageController;
