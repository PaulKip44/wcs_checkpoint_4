const fs = require("fs");
const path = require("path");
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

  static getOne = (req, res) => {
    const devToolId = parseInt(req.params.id, 10);

    models.user
      .find(devToolId)
      .then((devTool) => {
        if (devTool.length === 0) {
          res.sendStatus(404);
        } else {
          res.send(devTool[0]);
        }
      })
      .catch((err) => res.status(500).send(err));
  };

  static delete = async (req, res) => {
    const id = parseInt(req.params.id, 10);

    const removed = await models.dev_tool.getOne(id);

    try {
      await models.dev_tool.delete(id);
      await fs.promises.unlink(
        path.join(__dirname, `../../public/data/uploads/${removed.logo_name}`)
      );
      return res.status(200).json({ Succès: `dev Tool removed` });
    } catch (error) {
      return res.sendStatus(500);
    }
  };
}

module.exports = DevToolController;
