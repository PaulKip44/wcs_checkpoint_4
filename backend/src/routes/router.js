const express = require("express");

const {
  LanguageController,
  DevToolController,
  ProjectController,
} = require("../controllers");

const router = express.Router();

router.get("/language", LanguageController.browse);
router.post("/language", LanguageController.add);
router.delete("/language/:id", LanguageController.delete);

router.get("/devtool", DevToolController.browse);
router.post("/devtool", DevToolController.add);
router.delete("/devtool/:id", DevToolController.delete);

router.get("/project", ProjectController.browse);
router.post("/project", ProjectController.add);
router.put("/project", ProjectController.edit);
router.delete("/project/:id", ProjectController.delete);

module.exports = router;
