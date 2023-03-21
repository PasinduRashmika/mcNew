const express =require('express')

const dailyController = require('./../controllers/dailyCountController');

const router=express.Router();

router.post('/create',dailyController.createDaily);
router.post('/getDailyStudentsCount',dailyController.getDailyStudentsCount);
router.get('/getDailyStudents',dailyController.getDailyStudents);
router.get('/getDailyStudentsList',dailyController.getDailyStudentsList);
router.get('/getDailyStudentsCountByFaculty',dailyController.getDailyStudentsCountByFaculty);
router.get('/getDailyStudentsCountByFaculty/:faculty',dailyController.getDailyStudentsCountByFaculty);

router.get('/getDailyStudent/:id',dailyController.getDailyStudent);
router.delete('/delete/:id',dailyController.deleteDailyStudents);

module.exports= router;