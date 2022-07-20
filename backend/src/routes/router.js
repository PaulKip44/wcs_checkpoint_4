const express = require("express");

const {
  LanguageController,
  DevToolController,
  ProjectController,
  AuthController,
  UserController,
} = require("../controllers");

const router = express.Router();

router.get("/user/:id", UserController.getOne);
router.post("/user", UserController.addOne);

router.post("/login", AuthController.login);
router.get("/logout", AuthController.logout);

router.get("/language", LanguageController.getAll);
router.post("/language", LanguageController.addOne);
router.delete("/language/:id", LanguageController.delete);

router.get("/devtool", DevToolController.getAll);
router.post("/devtool", DevToolController.addOne);
router.delete("/devtool/:id", DevToolController.delete);

router.get("/project", ProjectController.getAll);
router.post("/project", ProjectController.addOne);
router.put("/project/:id", ProjectController.edit);
router.delete("/project/:id", ProjectController.delete);

module.exports = router;
