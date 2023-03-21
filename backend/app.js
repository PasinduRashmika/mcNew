const express =require('express')
const app=express();
var cors = require('cors')
const morgan=require('morgan')
const cookieParser=require('cookie-parser');
const {requireAuth} = require("./middleware/Authmiddleware");

const AppError = require('./utils/appError');
const globaleErrorHandeler = require('./controllers/errorController')
const userRouter = require('./routes/userRoutes');
const authRouter = require('./routes/authRoutes');
const dailyRouter = require('./routes/dailyRoutes');
const studentRouter = require('./routes/studentRoutes');
const HistoryRouter = require('./routes/studentTreatment');
const NewsRouter = require('./routes/newsRoutes');
const DrugRouter = require('./routes/drugsRoutes');


app.get('/',(req,res)=>{
    res.status(200).send("Hello From Server side 👋 😄");
})

        //Middleware
app.use(cors())
app.use(morgan('dev'));
app.use(express.json());
app.use(cookieParser());
app.use((req,res,next)=>{
        req.requestTime = new Date().toISOString();
        next();
})
app.use('/profileImages',express.static('uploads/profiles'));
app.use('/UploadInitialMedicalReport',express.static('uploads/initialMedical'));


        //Routes
app.use('/api/v1/users',userRouter);
app.use('/api/v1/auth',authRouter);
app.use('/api/v1/daily',dailyRouter);
app.use('/api/v1/students',studentRouter);
app.use('/api/v1/history',requireAuth,HistoryRouter);
app.use('/api/v1/news',requireAuth,NewsRouter);
app.use('/api/v1/drugs',requireAuth,DrugRouter);




app.all('*',(req,res,next)=>{
        next(new AppError(`Can't find ${req.originalUrl} on this server!`,404));
});

app.use(globaleErrorHandeler);

module.exports = app;