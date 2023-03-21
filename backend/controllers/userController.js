const crypto = require("crypto");
const { promisify } = require("util");
const User = require("./../models/userModels");
const catchAsync = require("./../utils/catchAsync");
const jwt = require("jsonwebtoken");
const AppError = require("./../utils/appError");
const sendEmail = require("./../utils/email");
const { log } = require("console");
const Email = require("../utils/email");
var ShoutoutClient = require("shoutout-sdk");

// ============== MIDDLEWARE STACK START =================

// ============== MIDDLEWARE STACK END =================





// ######### User controllers START #############



const filterObj = (obj, ...allowFields) => {
  const newObj = {};
  Object.keys(obj).forEach((el) => {
    if (allowFields.includes(el)) newObj[el] = obj[el];
  });
  return newObj;
};




// @ DESCRIPTION            =>  Create User
// @ ENDPOINT               =>  /api/v1/users/create
// @ ACCESS                 =>  Admin
// @ CREATED BY             =>  Pasindu Rashmika
// @ CREATED DATE           =>  2022/02/13  
exports.createUser = catchAsync(async (req, res) => {
  const newUser = await User.create(req.body);
  if (!newUser) {
    res.status(404).json({
      status: "fail",
      error: error,
    });
  }

  const URL = `${req.protocol}://${req.get("host")}/login`;

  // await new Email(newUser, URL, URL).sendWelcome();

  res.status(201).json({
    status: "success",
    data: {
      user: newUser,
    },
  });


//=======================Send USer Creation SMS=======================================
    const title =newUser.title;  
const userName = newUser.name;
  console.log(userName);
  const contactNumber = "94"+newUser.mobile.slice(1);
  console.log(contactNumber);
  var apiKey = process.env.SMS_API;
  var debug = true,
    verifySSL = false;
  var client = new ShoutoutClient(apiKey, debug, verifySSL);
  const content = "Welcome to the Medical Center Administrative System "+'\n'+ title+"."+userName + ","+'\n'+"Your medical profile has been successfully created...!"+'\n'+"Please check your email and follow instructions."+'\n'+'\n'+"Thank You...!"+'\n'+"University of Ruhuna";

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
//=======================End User Creation SMS=======================================
});




// @ DESCRIPTION            =>  Get All Users
// @ ENDPOINT               =>  /api/v1/users/getUsers
// @ ACCESS                 =>  Admin
// @ CREATED BY             =>  Pasindu Rashmika
// @ CREATED DATE           =>  2022/02/13  
exports.getAllUsers = catchAsync(async (req, res) => {
  const users = await User.find();
  if (!users) {
    res.status(404).json({
      status: "fail",
      error: error,
    });
  }
  res.status(200).json({
    status: "success",
    results: User.lenth,
    data: {
      users,
    },
  });
});




// @ DESCRIPTION            =>  Get A Users
// @ ENDPOINT               =>  /api/v1/users/getUser/:id
// @ ACCESS                 =>  Admin
// @ CREATED BY             =>  Pasindu Rashmika
// @ CREATED DATE           =>  2022/02/13  
exports.getUser = catchAsync(async (req, res) => {
  const user = await User.findById(req.params.id);

  if (!user) {
    res.status(404).json({
      status: "fail",
      error: error,
    });
  }
  res.status(200).json({
    status: "success",
    data: {
      user,
    },
  });
});




// @ DESCRIPTION            =>  Update User
// @ ENDPOINT               =>  /api/v1/users/updateUser/:id
// @ ACCESS                 =>  Admin
// @ CREATED BY             =>  Pasindu Rashmika
// @ CREATED DATE           =>  2022/02/13  
exports.updateUser = catchAsync(async (req, res, next) => {
  //1)create error if user POSTs password data
  if (req.body.password || req.body.passwordConfirm) {
    return next(
      new AppError(
        "This is not for password updates.Please use /updatePassword."
      ),
      400
    );
  }

  //2)FilterOut unwamted fields names that are allowed to be updated
  //only update named fields
  const filteredBody = filterObj(req.body, "name", "email");

  //3)update user document
  const updatedUser = await User.findByIdAndUpdate(req.user.id, filteredBody, {
    new: true,
    runValidators: true,
  });

  res.status(200).json({
    status: "success",
    data: {
      user: updatedUser,
    },
  });
});





// @ DESCRIPTION            =>  Update User Details
// @ ENDPOINT               =>  /api/v1/users/updateUser/:id
// @ ACCESS                 =>  Admin
// @ CREATED BY             =>  Pasindu Rashmika
// @ CREATED DATE           =>  2022/02/13 
exports.updateUserDetails = catchAsync(async (req, res, next) => {
  const userDetails = await User.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });

  if (!userDetails) {
    return next(new AppError("Update User Personal Details is failed"), 400);
  }

  res.status(201).json({
    status: "success",
    data: {
      userDetails,
    },
  });
});





// @ DESCRIPTION            =>  Delete User
// @ ENDPOINT               =>  /api/v1/users/deleteUser/:id
// @ ACCESS                 =>  Admin
// @ CREATED BY             =>  Pasindu Rashmika
// @ CREATED DATE           =>  2022/02/13 
exports.deleteUser = catchAsync(async (req, res) => {
  const user = await User.findByIdAndUpdate(req.params.id, { active: false });

  if (!user) {
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
