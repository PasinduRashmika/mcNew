const express =require('express')

const userController = require('./../controllers/userController');
const authController = require('./../controllers/authController');

const router=express.Router();


router.get('/getUsers',userController.getAllUsers);
router.post('/create',userController.createUser);

router.get('/getUser/:id',userController.getUser);
router.patch('/updateUser/:id',userController.updateUserDetails);
router.patch('/deleteUser/:id',userController.deleteUser);


// router
//   .route('/')
// .get(userController.getAllUsers)
//   .post(userController.createUser);

// router
//   .route('/:id')
//   .get(userController.getUser)
//   .put(userController.updateUserDetails)
//   .patch(userController.deleteUser);



module.exports= router;