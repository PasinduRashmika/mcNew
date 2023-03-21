const express =require('express');

const authController = require('./../controllers/authController');

const router=express.Router();

// router.post('/signup',authController.signup);
router.post('/login',authController.login);
router.get('/logout',authController.Logout);


router.post('/forgotPassword',authController.forgotPassword);
router.patch('/resetPassword/:token',authController.resetPassword);
router.patch('/updatePassword/:id',authController.updatePassword);
router.patch('/profileImages/:id',authController.UploadProfileImage);
router.patch('/UploadInitialMedicalReport/:id',authController.UploadInitialMedicalReport);

// router.patch('/updateMe',authController.protect,userController.updateUser);
// router.delete('/deleteMe',authController.protect,userController.deleteMe);


module.exports= router;