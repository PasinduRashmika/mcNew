// ============== MIDDLEWARE STACK START =================

// ============== MIDDLEWARE STACK END =================


// ######### Error controllers START #############



// @ DESCRIPTION            =>  Al Error Controllers
// @ ENDPOINT               =>  -------------
// @ ACCESS                 =>  -------------
// @ CREATED BY             =>  Pasindu Rashmika
// @ CREATED DATE           =>  2022/02/04 



//Send Development Errors
const sendErrorDev = (err,res)=>{
    res.status(err.statusCode).json({
        status:err.status,
        error:err,
        message:err.message,
        stack:err.stack
});
}


//Send Production Errors
const sendErrorProd =(req,res)=>{
    //Operational,trusted error:send message client
    if(err.isOperational){
        res.status(err.statusCode).json({
            status:err.status,
            message:err.message
        });
    //Programming or other unknown error :don't leak error details
    }else{
        //1)Log error
        console.error('ERROR 💥',err);

        //2)send generate message
        res.staus(500).json({
            status:'error',
            message:'Something went very wrong'
        })
    }
}

module.exports=(err,req,res,next)=>{
    err.statusCode=err.statusCode || 500;
    err.status=err.status || 'error';

    if(process.env.NODE_ENV==='development'){
        sendErrorDev(err,res)
    }else if (process.env.NODE_ENV==='production'){
        sendErrorProd(err,res)
    }

}

const handleJsonWebTokenError = err => {
    return new AppError('Invalid Token.Please login again!', 401);
}

const handleJWTExpiredError = err => {
    return new AppError('Expired Token. Please Login Again !', 401);
}