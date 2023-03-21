const express =require('express')

const treatmentController = require('./../controllers/studentTreatmentController');

const router=express.Router();



 router.get('/getTreatments',treatmentController.getTreatments);
router.post('/create',treatmentController.createTreatment);



router.get('/getTreatment/:id',treatmentController.getTreatment);


router.get('/student/:id',treatmentController.getTreatmentStudent);

module.exports= router;
