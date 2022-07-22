const express = require("express");

const {
  LanguageController,
  DevToolController,
  ProjectController,
  AuthController,
  UserController,
} = require("../controllers");

const router = express.Router();

const multer = require("../middlewares/multer");

router.get("/user/:id", UserController.getOne);
router.post("/user", UserController.addOne);

router.post("/login", AuthController.login);
router.get("/logout", AuthController.logout);

router.get("/language/:id", LanguageController.getOne);
router.get("/language", LanguageController.getAll);
router.post("/language", multer, LanguageController.addOne);
router.delete("/language/:id", LanguageController.delete);

router.get("/devtool/:id", DevToolController.getOne);
router.get("/devtool", DevToolController.getAll);
router.post("/devtool", multer, DevToolController.addOne);
router.delete("/devtool/:id", DevToolController.delete);

router.get("/project", ProjectController.getAll);
router.post("/project", multer, ProjectController.addOne);
router.put("/project/:id", ProjectController.edit);
router.delete("/project/:id", ProjectController.delete);

module.exports = router;
