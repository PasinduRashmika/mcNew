const crypto = require("crypto");
const { promisify } = require("util");
const User = require("./../models/userModels");
const StudentNew = require("./../models/studentModelNew");
const catchAsync = require("./../utils/catchAsync");
const jwt = require("jsonwebtoken");
const AppError = require("./../utils/appError");
const sendEmail = require("./../utils/email");
const Email = require("../utils/email");
const multer = require("multer");
const path = require("path");

// ============== MIDDLEWARE STACK START =================

// ============== MIDDLEWARE STACK END =================


// ######### Auth controllers START #############



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
const createSendToken = (user, statusCode, req, res) => {
  const token = signToken(user._id);

  const cookieOptions = {
    expires: new Date(Date.now() + 1 * 24 * 60 * 60 * 1000),
    // httpOnly: true,
  };

  if (process.env.NODE_ENV === "production") cookieOptions.secure = true; // cookies are sent only via https

  res.cookie("jwt", token, cookieOptions);

  // remove password field from output
  user.password = undefined;

  res.status(statusCode).json({
    token,
    status: "success",
    data: {
      user,
    },
  });
};





// @ DESCRIPTION            =>  create Multer Image Storage
// @ ENDPOINT               =>  -----------
// @ ACCESS                 =>  -----------
// @ CREATED BY             =>  Pasindu Rashmika
// @ CREATED DATE           =>  2022/03/03 
const Imagestorage = multer.diskStorage({
  // destination: function(req, file, cb) {
  //   cb(null, 'uploads/')
  // },
  destination: "uploads/profiles",
  filename: (req, file, cb) => {
    // console.log(file.originalname);
    cb(null, Date.now() +'_'+ file.originalname );
  }
});
const image = multer({ storage: Imagestorage }).single('image');






// @ DESCRIPTION            =>  Upload Image
// @ ENDPOINT               =>  /api/v1/auth/profileImages/:id
// @ ACCESS                 =>  users,students
// @ CREATED BY             =>  Pasindu Rashmika
// @ CREATED DATE           =>  2022/03/03 
exports.UploadProfileImage = async (req, res) => {
  try {
    
    // const findUser = await User.findOne({ Email: user.Email });
    const findUser = await User.findById(req.params.id);
    // console.log(findUser);

    // const findStudent = await StudentNew.findOne({ Email: user.Email });
    const findStudent = await StudentNew.findById(req.params.id);
    // console.log(findStudent);

    if (findStudent) {
      image(req, res, (err) => {
        if (err) {
          console.log(err);
        } else {
          findStudent.photo = req.file.filename;
          
        }
      });

      const uploadStudentImage = await findStudent.save();
      const updateStudent = await StudentNew.findByIdAndUpdate(
        findStudent.id,
        uploadStudentImage,
        { new: true }
      );

      res.status(201).json({
        message: "Student Profile Image was Uploaded",
        data: {
          updateStudent,
        },
      });
    } else if (findUser) {
      image(req, res, (err) => {
        if (err) {
          console.log(err);
        } else {
          findUser.photo = req.file.filename;
        }
        
      });
      const uploadUserImage = await findUser.save();
      console.log(uploadUserImage);
      const updateUser = await User.findByIdAndUpdate(
        findUser.id,
        uploadUserImage,
        { new: true }
        
      );
      console.log(updateUser);
      res.status(201).json({
        message: "User Profile Image was Uploaded",
        data: {
          updateUser,
        },
      });
    } else {
      res.status(404).json({
        message: "No user exist",
      });
    }
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};





// @ DESCRIPTION            =>  Upload Initial Medical Report controller
// @ ENDPOINT               =>  /api/v1/auth/UploadInitialMedicalReport/:id
// @ ACCESS                 =>  users,students
// @ CREATED BY             =>  Pasindu Rashmika
// @ CREATED DATE           =>  2022/03/03 

const ImagestorageInitial = multer.diskStorage({
  // destination: function(req, file, cb) {
  //   cb(null, 'uploads/')
  // },
  destination: "uploads/initialMedical",
  filename: (req, file, cb) => {
    console.log(file.originalname);
    cb(null, Date.now() +'_'+ file.originalname );
  }
});
const initialimage = multer({ storage: ImagestorageInitial }).single('image');
exports.UploadInitialMedicalReport = async (req, res) => {
  try {
    // const findStudent = await StudentNew.findOne({ Email: user.Email });
    const findStudent = await StudentNew.findById(req.params.id);
    console.log(findStudent);

    if (findStudent) {
      initialimage(req, res, (err) => {
        if (err) {
          console.log(err);
        } else {
          findStudent.initialMedicalReport = req.file.filename;
          
        }
      });

      const uploadStudentImage = await findStudent.save();
      const updateStudent = await StudentNew.findByIdAndUpdate(
        findStudent.id,
        uploadStudentImage,
        { new: true }
      );

      res.status(201).json({
        message: "Student Initial Medical Report was Uploaded",
        data: {
          updateStudent,
        },
      });
    } else {
      res.status(404).json({
        message: "No user exist",
      });
    }
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};




// @ DESCRIPTION            =>  login controller
// @ ENDPOINT               =>  /api/v1/auth/login
// @ ACCESS                 =>  All students & all users
// @ CREATED BY             =>  Pasindu Rashmika
// @ CREATED DATE           =>  2022/02/04 
exports.login = async (req, res, next) => {
  const { email, password } = req.body;

  //1)Check if email and password exists
  if (!email || !password) {
    return next(new AppError("Please Provide correct email and password", 401));
  }

  //2)Check if user exists && password is correct
  const user = await User.findOne({ email }).select(" +active");
  const student = await StudentNew.findOne({ email }).select(" +active");

  let userType = "";
  let correct = null;

  if (user) {
    if (!user.active) {
      return next(
        new AppError(
          "This account has been deactivated . Contact system admin. ",
          403
        )
      );
    }
    userType = "oneofuser";
    // if (!user || !(await user.correctPassword(password, user.password))) {
    //   return next(new AppError('Incorrect email or password', 401));
    // }

    //3)If everything is ok
    // createSendToken(user,200,req,res);
  } else if (student) {
    console.log(student);
    if (!student.active) {
      return next(
        new AppError(
          "This account has been deactivated . Contact system admin. ",
          403
        )
      );
    }
    userType = "oneofstudent";
  }
  // else if(student){
  //   if (!student || !(await student.correctPassword(password, student.password))) {
  //     return next(new AppError('Incorrect email or password', 401));
  //   }

  //   //3)If everything is ok
  //   createSendToken(student,200,req,res);
  // }

  let token = "";
  console.log(userType);

  switch (userType) {
    case "oneofuser":
      correct = await user.correctPassword(password, user.password);

      if (correct) {
        createSendToken(user, 200, req, res);
      }
      break;

    case "oneofstudent":
      
      correct = await student.correctPassword(password, student.password);
      console.log({ "current pwd": student.password });

      if (correct) {
        createSendToken(student, 200, req, res);
      }
      break;

    default:
      return next(new AppError("Invalid email or password", 401));
  }
  if (!correct) {
    return next(new AppError("Invalid email or password", 401));
  }
};




// @ DESCRIPTION            =>  Logout controller
// @ ENDPOINT               =>  /api/v1/auth/logout
// @ ACCESS                 =>  All students & all users
// @ CREATED BY             =>  Pasindu Rashmika
// @ CREATED DATE           =>  2022/02/04 
exports.Logout = async (req, res) => {
  res.cookie("jwt", "", { maxAge: 1 });
  res.json("User Logging Out");
};




// @ DESCRIPTION            =>  Protect Routes controller
// @ ENDPOINT               =>  -------------
// @ ACCESS                 =>  users,students
// @ CREATED BY             =>  Pasindu Rashmika
// @ CREATED DATE           =>  2022/03/03 
exports.protect = catchAsync(async (req, res, next) => {
  //1)Getting the token and check it's there
  let token;

  token = req.cookies.jwt;

  console.log({ token });
  if (!token) {
    next(new AppError("You are not logged in Please log into get access", 401));
  }

  //2)Verification token
  const decoded = await promisify(jwt.verify)(token, process.env.JWT_SECRET);
  //console.log(decoded);

  //3)Check if user still exixts
  const freshUser = await User.findById(decoded.id);

  if (!freshUser) {
    return next(
      new AppError("The user belonging to this token no longer exists.", 401)
    );

    next();
  }

  //4)Check if user changed passowrd after the token issued
  if (freshUser.changePasswordAfter(decoded.iat)) {
    return next(
      new AppError(
        "User recently changed password! Please log in again...",
        401
      )
    );
  }

  //Grant access to protected route
  req.user = freshUser;
  next();
});



// @ DESCRIPTION            =>  Restict some routes controller
// @ ENDPOINT               =>  ---------------
// @ ACCESS                 =>  some users & students
// @ CREATED BY             =>  Pasindu Rashmika
// @ CREATED DATE           =>  2022/03/03 
exports.restrictTo = (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      return next(
        new AppError(`You don't have permission to perform this action`, 403)
      );
    }
    next();
  };
};




// @ DESCRIPTION            =>  Forgot Password controller
// @ ENDPOINT               =>  /api/v1/auth/forgotPassword
// @ ACCESS                 =>  users,students
// @ CREATED BY             =>  Pasindu Rashmika
// @ CREATED DATE           =>  2022/03/03 
exports.forgotPassword = catchAsync(async (req, res, next) => {
  //1)get user based on posted email
  const OneOfUser = await User.findOne({ email: req.body.email, active: true });
  const OneOfStudent = await StudentNew.findOne({
    email: req.body.email,
    active: true,
  });


  if (!OneOfUser && !OneOfStudent) {
    return next(new AppError(`Threre is no user with email address`, 404));
  }
  //2)Generate random reset token
  let resetToken = "";
  let email = "";
  let user;

  if (OneOfUser) {
    resetToken = OneOfUser.createPasswordResetToken();
    await OneOfUser.save({ validateBeforeSave: false });
    email = OneOfUser.email;
    user = OneOfUser;
  } else {
    // console.log(OneOfStudent);
    resetToken = OneOfStudent.createPasswordesetToken();
    await OneOfStudent.save({ validateBeforeSave: false });
    email = OneOfStudent.email;
    user = OneOfStudent;
  }

  //3)Send it user's email
  const resetURL = `${req.protocol}://${req.get(
    "host"
  )}/api/v1/users/resetPassword/${resetToken}`;
  console.log(resetURL);
  const message = `Fogot your passwor? Submit a PATCH request with your new password and passowrdConfirm to : ${resetURL}.\nIf you didn't  foget your password, please ignore this email.`;

  try {
    // await sendEmail({
    //   email:user.email,
    //   subject:'Your password reset token (valid for 10 minutes)',
    //   message
    // });
    await new Email(user, resetURL, resetURL).sendPasswordReset();
    res.status(200).json({
      status: "success",
      message: "Token sent to email",
    });
  } catch (err) {
    if (OneOfUser) {
      console.log(err);
      OneOfUser.passwordResetToken = undefined;
      OneOfUser.passwordResetExpires = undefined;
      await OneOfUser.save({ validateBeforeSave: false });
    } else {
      OneOfStudent.passwordResetToken = undefined;
      OneOfStudent.passwordResetExpires = undefined;
      await OneOfStudent.save({ validateBeforeSave: false });
    }

    return next(
      new AppError("There was an error sending the email.Try again later"),
      500
    );
  }
});


// @ DESCRIPTION            =>  Reset Password controller
// @ ENDPOINT               =>  /api/v1/auth/resetPassword/:token
// @ ACCESS                 =>  users,students
// @ CREATED BY             =>  Pasindu Rashmika
// @ CREATED DATE           =>  2022/02/28 
exports.resetPassword = catchAsync(async (req, res, next) => {
  //1)Get user based on the token
  const hashedToken = crypto
    .createHash("sha256")
    .update(req.params.token)
    .digest("hex");

  const user = await User.findOne({
    passwordResetToken: hashedToken,
    passwordResetExpires: { $gt: Date.now() },
  });
  
  //2)If token has not expired, and there is usert, set the new password
  if (!user) {
    return next(new AppError("Token is invalid or has expired"), 400);
  }
  if (!student) {
    return next(new AppError("Token is invalid or has expired"), 400);
  }
  console.log(user);
  console.log(student);
  user.password = req.body.password;
  user.passwordConfirm = req.body.passwordConfirm;
  user.passwordResetToken = undefined;
  user.passwordResetExpires = undefined;
  await user.save();

  //3) Update changedPasswordAt property for the user

  //4)Log the user in,send JWT
  const token = signToken(User._id);

  res.status(201).json({
    status: "success",
    token,
  });

});



// @ DESCRIPTION            =>  Update Password controller
// @ ENDPOINT               =>  /api/v1/auth/updatePassword
// @ ACCESS                 =>  All users & students
// @ CREATED BY             =>  Pasindu Rashmika
// @ CREATED DATE           =>  2022/02/28 
exports.updatePassword = catchAsync(async (req, res, next) => {
  //1) Get user from collection
  const user = await User.findById(req.params.id).select("+password");
  const student = await StudentNew.findById(req.params.id).select("+password");

  if (!user && !student) {
    return next(new AppError(`Threre is no user with email address`, 404));
  }

  if(user){
    //2) Check if POSTed current password is corret
    if (!(await user.correctPassword(req.body.passwordCurrent, user.password))) {
      return next(new AppError("Your current password is wrong"), 401);
    }
    //3)If so, update password
    user.password = req.body.password;
    user.passwordConfirm = req.body.passwordConfirm;
    await user.save();

  //4) Log user in, send JWT
  const token = signToken(user._id);
  res.status(200).json({
    token,
    status: "success",
    data: {
      user,
    },
  });
  }else{
    if (!(await student.correctPassword(req.body.passwordCurrent, user.password))) {
      return next(new AppError("Your current password is wrong"), 401);
    }
    //3)If so, update password
    student.password = req.body.password;
    student.passwordConfirm = req.body.passwordConfirm;
    await student.save();

    //4) Log user in, send JWT
    const token = signToken(student._id);
    res.status(200).json({
      token,
      status: "success",
      data: {
        student,
      },
    });
  }

  
});

