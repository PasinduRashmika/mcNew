const crypto = require('crypto')
const { promisify } = require('util');
const News = require('./../models/newsModels');
const catchAsync = require('./../utils/catchAsync');
const jwt = require('jsonwebtoken');
const AppError = require('./../utils/appError');

// ============== MIDDLEWARE STACK START =================

// ============== MIDDLEWARE STACK END =================


// ######### News controllers START #############



// @ DESCRIPTION            =>  Create News
// @ ENDPOINT               =>  /api/v1/news/create
// @ ACCESS                 =>  All Students & Users
// @ CREATED BY             =>  Pasindu Rashmika
// @ CREATED DATE           =>  2022/03/01 
exports.createNews = catchAsync(async(req,res)=>{
    const newNews = await News.create(req.body);

    if(!newNews){
        return next(new AppError('New News was not created',404));
    }

    res.status(201).json({
        status:'success',
        data:{
            newNews
        }
    })
});




// @ DESCRIPTION            =>  Get All News
// @ ENDPOINT               =>  /api/v1/news/getAllNews
// @ ACCESS                 =>  All Students & Users
// @ CREATED BY             =>  Pasindu Rashmika
// @ CREATED DATE           =>  2022/03/01 
exports.getAllNews = catchAsync(async(req,res)=>{
    const news = await News.find();

    if(!news){
        return next(new AppError('New News was not found',404));
    }

    res.status(200).json({
        status:'success',
        data:{
            news
        }
    })
});




// @ DESCRIPTION            =>  Get A News
// @ ENDPOINT               =>  /api/v1/news/getNews/:id
// @ ACCESS                 =>  All Students & Users
// @ CREATED BY             =>  Pasindu Rashmika
// @ CREATED DATE           =>  2022/03/01 
exports.getNews = catchAsync(async(req,res)=>{
    const allNews = await News.findById(req.params.id);

    if(!allNews){
        return next(new AppError('New News was not found',404));
    }

    res.status(200).json({
        status:'success',
        data:{
            allNews
        }
    })
});




// @ DESCRIPTION            =>  Update News
// @ ENDPOINT               =>  /api/v1/news/updateNews/:id
// @ ACCESS                 =>  All Students & Users
// @ CREATED BY             =>  Pasindu Rashmika
// @ CREATED DATE           =>  2022/03/01 
exports.updateNews = catchAsync(async(req,res)=>{
    const updatedNews = await News.findByIdAndUpdate(req.params.id,req.body,{new:true})

    console.log(req.params.id);
    if(!updatedNews){
        return next(new AppError('News update was not found',404));
    }

    res.status(201).json({
        status:"success",
        data:{
            updatedNews
        }
    });
});




// @ DESCRIPTION            =>  Delete News
// @ ENDPOINT               =>  /api/v1/news/deleteNews/:id
// @ ACCESS                 =>  All Students & Users
// @ CREATED BY             =>  Pasindu Rashmika
// @ CREATED DATE           =>  2022/03/01 
exports.deleteNews = catchAsync(async(req,res)=>{
    const news = await News.findByIdAndUpdate(req.params.id,req.body,{active:false})
    console.log(req.params.id);
    if(!news){
        return next(new AppError('News deletion was not found',404));
    }

    res.status(201).json({
        status:"success",
        data:null
    });
});


