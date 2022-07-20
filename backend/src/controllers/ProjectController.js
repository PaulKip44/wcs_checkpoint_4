const fs = require("fs");
const path = require("path");
const models = require("../models");

class ProjectController {
  static getAll = (req, res) => {
    models.project
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
    const newProject = req.body;

    // newProject = {
    //   name: "",
    //   source_image: "",
    //   name_image: "",
    //   source: "",
    //   abstract: "",
    //   client_name:"",
    // };

    models.project
      .insert({ ...newProject, user_Id: 1 })
      .then(([result]) => {
        res.status(201).send({ ...newProject, id: result.insertId });
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  };

  static getOne = (req, res) => {
    const projectId = parseInt(req.params.id, 10);

    models.user
      .find(projectId)
      .then((project) => {
        if (project.length === 0) {
          res.sendStatus(404);
        } else {
          res.send(project[0]);
        }
      })
      .catch((err) => res.status(500).send(err));
  };

  static delete = async (req, res) => {
    const id = parseInt(req.params.id, 10);

    const removed = await models.project.getOne(id);

    try {
      await models.project.delete(id);
      await fs.promises.unlink(
        path.join(__dirname, `../../public/data/uploads/${removed.logo_name}`)
      );
      return res.status(200).json({ Succès: `project removed` });
    } catch (error) {
      return res.sendStatus(500);
    }
  };

  static edit = (req, res) => {
    const ProjectId = parseInt(req.params.id, 10);

    models.project
      .modifyOne(ProjectId, { ...req.body })
      .then((info) => console.error(info))
      .then((info) => res.status(201).json(info))
      .catch((err) => res.status(300).send({ err }));
  };
}

module.exports = ProjectController;
