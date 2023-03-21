const crypto = require('crypto')
const { promisify } = require('util');
const catchAsync = require('./../utils/catchAsync');
const jwt = require('jsonwebtoken');
const AppError = require('./../utils/appError');
const sendEmail = require('./../utils/email');
const Drug = require('../models/drugModels');

// ============== MIDDLEWARE STACK START =================

// ============== MIDDLEWARE STACK END =================


// ######### Drugs controllers START #############



// @ DESCRIPTION            =>  Add Drugs 
// @ ENDPOINT               =>  /api/v1/drugs/create
// @ ACCESS                 =>  Doctor Only
// @ CREATED BY             =>  Pasindu Rashmika
// @ CREATED DATE           =>  2022/03/02 
exports.createDrug = catchAsync( async(req,res)=>{
    const newDrug = await Drug.create(req.body)

    if(!newDrug){
        res.status(404).json({
            status:'fail',
            error:error,
        })
    }

    res.status(201).json({
        status: 'success',
        data: {
        user: newDrug,
        },
    })
}
);





// @ DESCRIPTION            =>  Get Student Drugs
// @ ENDPOINT               =>  /api/v1/drugs/getDrugs
// @ ACCESS                 =>  Doctor Only
// @ CREATED BY             =>  Pasindu Rashmika
// @ CREATED DATE           =>  2022/03/02 
exports.getStudentDrug = catchAsync(async(req,res)=>{
    // const {student} = 
    const StudentDrug = await Drug.findById(req.params.id);

    if(!StudentDrug){
        return next(new AppError('No student found with that ID',404))
    }

    res.status(201).json({
        status:'success',
        data:{
            StudentDrug
        }
    })    
});

