const AsyncHandler =(requestHandler)=>{
    (req,res,next)=>{
        Promise.resolve( requestHandler(req ,res, next)).catch((err)=>{
            next(err)
        })
    }
}




export {AsyncHandler}






// higher order function 
// wrapper function
// const AsyncHandler=(func)=> async (req,res,next)=>{
//    try{
//       await func(req ,res , next);
//    }catch(err){
//     res.status(err.code || 500).json({
//         success:false,
//         message:err.message
//     })
//    }
// }