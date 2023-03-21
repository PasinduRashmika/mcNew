const express = require("express");

const newsController = require("./../controllers/newsController");

const router = express.Router();

router.get("/getAllNews", newsController.getAllNews);
router.post("/create", newsController.createNews);

router
  .put("/delete/:id", newsController.deleteNews)
  .get("/getNews/:id", newsController.getNews)
  .patch("/updateNews/:id", newsController.updateNews)
  .patch("/deleteNews/:id", newsController.deleteNews);

// router.get("/:regNo", studentController.getStudentByRegNo);

module.exports = router;