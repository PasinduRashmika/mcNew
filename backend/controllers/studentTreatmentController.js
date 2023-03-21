const crypto = require('crypto')
const { promisify } = require('util');
const catchAsync = require('./../utils/catchAsync');
const jwt = require('jsonwebtoken');
const AppError = require('./../utils/appError');
const sendEmail = require('./../utils/email');
const StudentTreatment = require('../models/studentTreatment');

// ============== MIDDLEWARE STACK START =================

// ============== MIDDLEWARE STACK END =================





// ######### Student Treatment controllers START #############

// @ DESCRIPTION            =>  Create Student's Treatment
// @ ENDPOINT               =>  /api/v1/history/create
// @ ACCESS                 =>  Doctor,Nurse
// @ CREATED BY             =>  Pasindu Rashmika
// @ CREATED DATE           =>  2022/02/13  
exports.createTreatment = catchAsync(async(req,res)=>{
    const newTreatment = await StudentTreatment.create(req.body);

    if(!newTreatment){
        return next(new AppError('Student Treatment was not added',404))
    }

    res.status(201).json({
        status:'success',
        data:{
            newTreatment
        }
    })
})




// @ DESCRIPTION            =>  Create Student's Get Treatments
// @ ENDPOINT               =>  /api/v1/history/getTreatments
// @ ACCESS                 =>  Doctor,Nurse
// @ CREATED BY             =>  Pasindu Rashmika
// @ CREATED DATE           =>  2022/02/20  
exports.getTreatments = catchAsync(async(req,res)=>{
    const treatments = await StudentTreatment.find();

    if(!treatments){
        return next(new AppError('Treatment is not found',404))
    }

    res.status(201).json({
        status:'success',
        data:{
            treatments
        }
    })
})




// @ DESCRIPTION            =>  Get Student's Treatment
// @ ENDPOINT               =>  /api/v1/history/getTreatment/:id
// @ ACCESS                 =>  Doctor,Nurse
// @ CREATED BY             =>  Pasindu Rashmika
// @ CREATED DATE           =>  2022/02/13  
exports.getTreatment = catchAsync(async(req,res)=>{
    const treatment = await StudentTreatment.findById(req.params.id);

    if(!treatment){
        return next(new AppError('Treatment is not found',404))
    }

    res.status(201).json({
        status:'success',
        data:{
            treatment
        }
    })
})



// @ DESCRIPTION            =>  Get Student's Treatment By RegNo
// @ ENDPOINT               =>  /api/v1/history/getTreatment/:id
// @ ACCESS                 =>  Doctor,Nurse
// @ CREATED BY             =>  Pasindu Rashmika
// @ CREATED DATE           =>  2022/03/02  
exports.getTreatmentStudent = catchAsync(async(req,res)=>{
    const treatment = await StudentTreatment.findById(req.params.student);

    if(!treatment){
        return next(new AppError('Student is not found',404))
    }

    res.status(201).json({
        status:'success',
        data:{
            treatment
        }
    })
})
