const models = require("../models");

class DevToolController {
  static getAll = (req, res) => {
    models.dev_tool
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
    const newDevTool = req.body;

    // newDevTool = { name: "",
    // source_logo: "",
    // name_logo: "" };

    models.dev_tool
      .insert({ ...newDevTool, user_Id: 1 })
      .then(([result]) => {
        res.status(201).send({ ...newDevTool, id: result.insertId });
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  };

  static delete = (req, res) => {
    models.dev_tool
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

module.exports = DevToolController;
