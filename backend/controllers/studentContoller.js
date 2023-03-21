const crypto = require("crypto");
const { promisify } = require("util");
const Student = require("./../models/studentModelNew");
const Drug = require("./../models/drugModels");
const Treatment = require("./../models/studentTreatment");
const catchAsync = require("./../utils/catchAsync");
const jwt = require("jsonwebtoken");
const AppError = require("./../utils/appError");
const Email = require("../utils/email");
var ShoutoutClient = require("shoutout-sdk");

// ============== MIDDLEWARE STACK START =================

// ============== MIDDLEWARE STACK END =================





// ######### Student controllers START #############

// @ DESCRIPTION            =>  sign Token
// @ ENDPOINT               =>  -----------
// @ ACCESS                 =>  -----------
// @ CREATED BY             =>  Pasindu Rashmika
// @ CREATED DATE           =>  2022/02/04
const signToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: "1d",
  });
};




// @ DESCRIPTION            =>  create Token
// @ ENDPOINT               =>  -----------
// @ ACCESS                 =>  -----------
// @ CREATED BY             =>  Pasindu Rashmika
// @ CREATED DATE           =>  2022/02/28
const createSendToken = (Student, statusCode, req, res) => {
  const token = signToken(Student._id);

  const cookieOptions = {
    expires: new Date(Date.now() + 1 * 24 * 60 * 60 * 1000),
    // httpOnly: true,
  };

  if (process.env.NODE_ENV === "production") cookieOptions.secure = true; // cookies are sent only via https

  res.cookie("jwt", token, cookieOptions);

  // remove password field from output
  Student.password = undefined;

  res.status(statusCode).json({
    token,
    status: "success",
    data: {
      user,
    },
  });
};




// @ DESCRIPTION            =>  Create Student
// @ ENDPOINT               =>  /api/v1/students/create
// @ ACCESS                 =>  Doctor,Nurse,Head
// @ CREATED BY             =>  Pasindu Rashmika
// @ CREATED DATE           =>  2022/03/08 Edited 
exports.createStudent = catchAsync(async (req, res, next) => {
  // const password = process.env.DEFAULT_STUDENT_PASSWORD;
  // const newStudent = await Student.create({email,password:password, passwordConfirm: password});
  const newStudent = await Student.create(req.body);

  if (!newStudent) {
    return next(new AppError("New Student was not created", 404));
  }

  const URL = `${req.protocol}://${req.get("host")}/login`;

  // await new Email(newStudent, URL, URL).sendWelcome();

  //=======================Send Student Creation SMS=======================================
  const title = newStudent.title;
  const userName = newStudent.name;
  const studentName = newStudent.name;
  console.log(studentName);
  const contactNumber = "94" + newStudent.mobile.slice(1);
  console.log(contactNumber);
  var apiKey = process.env.SMS_API;
  var debug = true,
    verifySSL = false;
  var client = new ShoutoutClient(apiKey, debug, verifySSL);
  const content =
    "Welcome to the Medical Center Administrative System " +
    "\n" +
    title +
    "." +
    userName +
    "," +
    "\n" +
    "Your medical profile has been successfully created...!" +
    "\n" +
    "Please check your email and follow instructions." +
    "\n" +
    "\n" +
    "Thank You...!" +
    "\n" +
    "University of Ruhuna";

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
  // });
  //=======================End Student Creation SMS=======================================

  res.status(201).json({
    status: "success",
    data: {
      newStudent,
    },
  });
});




// @ DESCRIPTION            =>  Get Students
// @ ENDPOINT               =>  /api/v1/students/getStudents
// @ ACCESS                 =>  All Users
// @ CREATED BY             =>  Pasindu Rashmika
// @ CREATED DATE           =>  2022/03/08 Edited 
exports.getStudents = catchAsync(async (req, res) => {
  const students = await Student.find();
  if (!students) {
    res.status(404).json({
      status: "fail",
      error: error,
    });
  }
  res.status(200).json({
    status: "success",
    results: Student.lenth,
    data: {
      students,
    },
  });
});




// @ DESCRIPTION            =>  Get A Students
// @ ENDPOINT               =>  /api/v1/students/getStudent:id
// @ ACCESS                 =>  All Users
// @ CREATED BY             =>  Pasindu Rashmika
// @ CREATED DATE           =>  2022/03/08 Edited 
exports.getStudent = catchAsync(async (req, res) => {
  const student = await Student.findById(req.params.id);

  const prescriptions = await Treatment.find({ student: student._id });

  const drugs = await Drug.find({ treatment: prescriptions._id });

  console.log(drugs);

  // console.log(student._id);
  // console.log({prescriptions});

  if (!student) {
    res.status(404).json({
      status: "fail",
      error: error,
    });
  }

  res.status(200).json({
    status: "success",
    results: Student.lenth,
    // data:{
    //     student,
    //     prescriptions
    //     :[
    //         prescriptions:{
    //         drug:{
    //             drugs
    //         }
    //     }
    //     ]
    //     }

    data: {
      student,
      prescriptions,
    },
  });
});





// @ DESCRIPTION            =>  Get Student By Pharmacy
// @ ENDPOINT               =>  /api/v1/students/getStudentByPharmacy/:id
// @ ACCESS                 =>  All Users
// @ CREATED BY             =>  Pasindu Rashmika
// @ CREATED DATE           =>  2022/03/08 Edited 
exports.getStudentByPharmacy = catchAsync(async (req, res) => {
  const student = await Student.findById(req.params.id);

  const prescriptions = await Drug.find({ student: student._id });

  console.log({ prescriptions });

  if (!student) {
    res.status(404).json({
      status: "fail",
      error: error,
    });
  }

  res.status(200).json({
    status: "success",
    results: Student.lenth,
    data: {
      regNo: student.regNo,
      name: student.name,
      age: student.age,
      prescriptions,
    },
  });
});




// @ DESCRIPTION            =>  Get Student By RegNo
// @ ENDPOINT               =>  /api/v1/students/getStudentByRegNo/:id
// @ ACCESS                 =>  All Users
// @ CREATED BY             =>  Pasindu Rashmika
// @ CREATED DATE           =>  2022/03/08 Edited 
exports.getStudentByRegNo = catchAsync(async (req, res) => {
  const {regNo} = req.body;

  const student = await Student.findOne({ regNo:regNo , active: true });

  const prescriptions = await Treatment.find({ student: student._id });

  if (!student) {
    res.status(404).json({
      status: "fail",
      error: error,
    });
  }

  res.status(200).json({
    status: "success",
    results: Student.lenth,
    data: {
      student,
      prescriptions,
    },
  });
});



// @ DESCRIPTION            =>  Update Student
// @ ENDPOINT               =>  /api/v1/students/updateStudent/:id"
// @ ACCESS                 =>  All Users
// @ CREATED BY             =>  Pasindu Rashmika
// @ CREATED DATE           =>  2022/03/08 Edited 
exports.updateStudent = catchAsync(async (req, res) => {
  const StudentDetails = await Student.findByIdAndUpdate(
    req.params.id,
    req.body,
    {
      new: true,
    }
  );
  if (!StudentDetails) {
    return next(new AppError("Update Student Personal Details is failed"), 400);
  }

  res.status(201).json({
    status: "success",
    data: {
      StudentDetails,
    },
  });
});




// @ DESCRIPTION            =>  Delete Student
// @ ENDPOINT               =>  /api/v1/students/deleteStudent/:id
// @ ACCESS                 =>  All Users
// @ CREATED BY             =>  Pasindu Rashmika
// @ CREATED DATE           =>  2022/03/08 Edited 
exports.deleteStudent = catchAsync(async (req, res) => {
  const student = await Student.findByIdAndUpdate(req.params.id, {
    active: false,
  });

  if (!student) {
    res.status(404).json({
      status: "fail",
      error: error,
    });
  }

  res.status(204).json({
    status: "success",
    data: null,
  });
});
