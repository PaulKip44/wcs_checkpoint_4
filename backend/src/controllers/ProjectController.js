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

  static delete = (req, res) => {
    models.project
      .delete(req.params.id)
      .then(() => {
        res.sendStatus(204);
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
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
