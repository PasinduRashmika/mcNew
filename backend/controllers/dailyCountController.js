const crypto = require('crypto')
const { promisify } = require('util');
const catchAsync = require('./../utils/catchAsync');
const jwt = require('jsonwebtoken');
const AppError = require('./../utils/appError');
const sendEmail = require('./../utils/email');
const DailyCount = require('../models/DailyCountModel');
var ShoutoutClient = require("shoutout-sdk");

// ============== MIDDLEWARE STACK START =================

// ============== MIDDLEWARE STACK END =================


// ######### Daily Count controllers START #############



// @ DESCRIPTION            =>  Add Daily Student
// @ ENDPOINT               =>  /api/v1/daily/create
// @ ACCESS                 =>  Nurse,Receptionist
// @ CREATED BY             =>  Pasindu Rashmika
// @ CREATED DATE           =>  2022/02/10 
exports.createDaily = catchAsync( async(req,res)=>{
    const newDaily = await DailyCount.create(req.body)

    if(!newDaily){
        res.status(404).json({
            status:'fail',
            error:error,
        })
    }
//=======================Send Student Creation SMS=======================================
const title =newDaily.title;  
const studentName = newDaily.name;
console.log(studentName);
const contactNumber = "94"+newDaily.mobile.slice(1);
console.log(contactNumber);
var apiKey = process.env.SMS_API;
var debug = true,
  verifySSL = false;
var client = new ShoutoutClient(apiKey, debug, verifySSL);
const content = title+". "+studentName + ","+'\n'+"You have been registered as new patient. "+'\n'+Date.now()+'\n'+'\n'+"Thank You...!"+'\n'+"Medical Center Administrative System"+'\n'+"University of Ruhuna";

var message = {
  content: {
    sms: content,
  },
  destinations: [contactNumber],
  source: "ShoutDEMO",
  transports: ["SMS"],
};

// client.sendMessage(message, (error, result) => {
//  if (error) {
//   console.error('Error sending message!',error);
//  } else {
//   console.log('Sending message successful!',result);
//  }
// }
// );
//=======================End Student Creation SMS=======================================

    res.status(201).json({
        status: 'success',
        data: {
        user: newDaily,
        },
    })
}
);




// @ DESCRIPTION            =>  Get Daily Student Count
// @ ENDPOINT               =>  /api/v1/daily/getDailyStudentsCount
// @ ACCESS                 =>  Nurse,Receptionist
// @ CREATED BY             =>  Pasindu Rashmika
// @ CREATED DATE           =>  2022/03/01 
exports.getDailyStudentsCount = catchAsync(async(req,res)=>{
    const {date} = req.body;
    console.log(date);
    // date=JSON.stringify(date);
    const dateToCount =  Date.now();
    console.log("passed date "+date);
    // console.log(new Date(date));
    var start = new Date(date);
    start.setHours(0,0,0,0);

    var end = new Date(date);
    end.setHours(23,59,59,999);
    // const dailyStudents = await DailyCount.findOne(dateToCount).count();
    const dailyStudents = await DailyCount.find({ date: {$gte: start, $lt: end} }).count();
    // const num = dailyStudents.countDocuments({dateField: {$eq: new Date("2023-03-06")}});

    if(!dailyStudents){
        res.status(404).json({
            status:'fail',
            error:error,
        })
    }

    res.status(201).json({
        status:'success',
        results:dailyStudents.lenth,
        data:{
            dailyStudents
        }
    })
})
// @ DESCRIPTION            =>  Get Daily Student Count
// @ ENDPOINT               =>  /api/v1/daily/getDailyStudentsCount
// @ ACCESS                 =>  Nurse,Receptionist
// @ CREATED BY             =>  Pasindu Rashmika
// @ CREATED DATE           =>  2022/03/01 
exports.getDailyStudentsList = catchAsync(async(req,res)=>{
    const date = req.params;
    const dateToCount =  Date('2023-03-14');
    console.log(new Date('2023-03-14'));
    var start = new Date('2023-03-14');
    start.setHours(0,0,0,0);

    var end = new Date('2023-03-14');
    end.setHours(23,59,59,999);
    // const dailyStudents = await DailyCount.findOne(dateToCount).count();
    const dailyStudents = await DailyCount.find({ date: {$gte: start, $lt: end} });
    // const num = dailyStudents.countDocuments({dateField: {$eq: new Date("2023-03-06")}});

    if(!dailyStudents){
        res.status(404).json({
            status:'fail',
            error:error,
        })
    }

    res.status(200).json({
        status:'success',
        results:dailyStudents.lenth,
        data:{
            dailyStudents
        }
    })
})

exports.getDailyStudentsCountByFaculty = catchAsync(async(req,res)=>{
    const {faculty} = req.params;
    // console.log(faculty);
    const dateToCount =  Date.now();
    var start = new Date();
    start.setHours(0,0,0,0);

    var end = new Date();
    end.setHours(23,59,59,999);


    const dailyStudents = await DailyCount.find({ date: {$gte: start, $lt: end},faculty:faculty}).count();
    console.log("ggggggg"+dailyStudents);
    // const dailyStudents = await DailyCount.find({faculty:faculty});

    if(!dailyStudents){
        res.status(404).json({
            status:'fail',
            msg:'No Students'
        })
    }

    res.status(200).json({
        status:'success',
        data:{
            dailyStudents
        }
    })
})

// @ DESCRIPTION            =>  Get Daily Student Count
// @ ENDPOINT               =>  /api/v1/daily/getDailyStudentsCount
// @ ACCESS                 =>  Nurse,Receptionist
// @ CREATED BY             =>  Pasindu Rashmika
// @ CREATED DATE           =>  2022/03/01 
exports.getDailyStudents= catchAsync(async(req,res)=>{
    const date = req.params;
    const dateToCount =  Date.now();
    console.log(new Date('2023-03-14'));
    var start = new Date();
    start.setHours(0,0,0,0);

    var end = new Date();
    end.setHours(23,59,59,999);
    // const dailyStudents = await DailyCount.findOne(dateToCount).count();
    const dailyStudents = await DailyCount.find({ date: {$gte: start, $lt: end} });
    // const num = dailyStudents.countDocuments({dateField: {$eq: new Date("2023-03-06")}});

    if(!dailyStudents){
        res.status(404).json({
            status:'fail',
            error:error,
        })
    }

    res.status(201).json({
        status:'success',
        results:dailyStudents.lenth,
        data:{
            dailyStudents
        }
    })
})




// @ DESCRIPTION            =>  Get all  Daily Students
// @ ENDPOINT               =>  /api/v1/daily/getDailyStudents
// @ ACCESS                 =>  Nurse,Receptionist
// @ CREATED BY             =>  Pasindu Rashmika
// @ CREATED DATE           =>  2022/02/10 
exports.getDailyStudents = catchAsync(async(req,res)=>{
    const dailyStudents = await DailyCount.find();

    if(!dailyStudents){
        res.status(404).json({
            status:'fail',
            error:error,
        })
    }

    res.status(201).json({
        status:'success',
        results:dailyStudents.lenth,
        data:{
            dailyStudents
        }
    })
})



// @ DESCRIPTION            =>  Add Daily Student
// @ ENDPOINT               =>  /api/v1/daily/create
// @ ACCESS                 =>  Nurse,Receptionist
// @ CREATED BY             =>  Pasindu Rashmika
// @ CREATED DATE           =>  2022/03/01 
exports.getDailyStudent = catchAsync(async(req,res)=>{
    const dailyStudent = await DailyCount.findById(req.params.id);

    if(!dailyStudent){
        return next(new AppError('No student found with that ID',404))
    }

    res.status(201).json({
        status:'success',
        data:{
            dailyStudent
        }
    })    
});

//                      NOT COMPLETED
// @ DESCRIPTION            =>  Get Daily Student By Date
// @ ENDPOINT               =>  /api/v1/daily/create
// @ ACCESS                 =>  Nurse,Receptionist
// @ CREATED BY             =>  Pasindu Rashmika
// @ CREATED DATE           =>  2022/0/06 
exports.getDailyStudentByDate = catchAsync(async(req,res)=>{
    const dailtStudent = await DailyCount.findOne(req.params).count;

    if(!dailtStudent){
        return next(new AppError('No student found with that ID',404))
    }

    res.status(201).json({
        status:'success',
        data:{
            dailtStudent
        }
    })    
});




//                      NOT COMPLETED
// @ DESCRIPTION            =>  Get Daily Student By Faculty
// @ ENDPOINT               =>  /api/v1/daily/create
// @ ACCESS                 =>  Nurse,Receptionist
// @ CREATED BY             =>  Pasindu Rashmika
// @ CREATED DATE           =>  2022/03/02 
exports.getDailyStudentByFaculty = catchAsync(async(req,res)=>{
    const student = await Student.findOne({faculty:faculty.name , active: true}); 

    if(!dailtStudent){
        return next(new AppError('No student found with that ID',404))
    }

    res.status(201).json({
        status:'success',
        data:{
            dailtStudent
        }
    })    
});




// @ DESCRIPTION            =>  Delete Daily Students
// @ ENDPOINT               =>  /api/v1/daily/delete
// @ ACCESS                 =>  Nurse,Receptionist
// @ CREATED BY             =>  Pasindu Rashmika
// @ CREATED DATE           =>  2022/02/10 
exports.deleteDailyStudents = catchAsync(async(req,res)=>{
    const deleteDailyStudent = await DailyCount.findByIdAndRemove(req.params.id);

    if(!deleteDailyStudent){
        return next(new AppError('No student found with that ID',404))
    }

    res.status(201).json({
        status:'success',
        data:{
            data:null
        }
    }) 
})