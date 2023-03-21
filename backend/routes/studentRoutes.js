const express = require("express");

const studentController = require("./../controllers/studentContoller");

const router = express.Router();


router.post("/create", studentController.createStudent);
router.get("/getStudents", studentController.getStudents);


router
  .patch("/deleteStudent/:id", studentController.deleteStudent)
  .get("/getStudent/:id", studentController.getStudent)
  .get("/getStudentByPharmacy/:id", studentController.getStudentByPharmacy)
  .post("/getStudentByRegNo", studentController.getStudentByRegNo)
  .put("/updateStudent/:id", studentController.updateStudent);

router.get("/:regNo", studentController.getStudentByRegNo);

module.exports = router;
