const fs = require("fs");
const path = require("path");
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
    const logoName = req.file.filename;
    // newLanguage = { name: "",

    // name_logo: "" };

    models.language
      .insert({ ...newLanguage, name_logo: logoName, user_Id: 1 })
      .then(([result]) => {
        res.status(201).send({ ...newLanguage, id: result.insertId });
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  };

  static getOne = (req, res) => {
    const languageId = parseInt(req.params.id, 10);

    models.language
      .find(languageId)
      .then((language) => {
        if (language.length === 0) {
          res.sendStatus(404);
        } else {
          res.send(language[0]);
        }
      })
      .catch((err) => res.status(500).send(err));
  };

  static delete = async (req, res) => {
    const id = parseInt(req.params.id, 10);

    const removed = await models.language.find(id);

    try {
      await models.language.delete(id);

      await fs.promises.unlink(
        path.join(
          __dirname,
          `../../public/data/uploads/${removed[0][0].name_logo}`
        )
      );
      return res.status(200).json({ Succès: `language removed` });
    } catch (error) {
      return res.sendStatus(500);
    }
  };
}

module.exports = LanguageController;
