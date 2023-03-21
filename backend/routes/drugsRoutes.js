const express =require('express')

const drugController = require('./../controllers/drugController');

const router=express.Router();

router.post('/create',drugController.createDrug);
router.get('/getDrugs',drugController.getStudentDrug);
// router.get('/getDailyStudents',dailyController.getDailyStudents);

// router.get('/getDailyStudents/:id',dailyController.getDailyStudent);
// router.delete('/delete/:id',dailyController.deleteDailyStudents);

module.exports= router;