const {CustomAPIError}=require('../errors/custom-error')
const errorHandler=(err,req,res,next)=>{
    if(err instanceof CustomAPIError){
        return res.status(err.statusCode).json({msg:err.message})
    }
    // return res.status(err.status).json({message:err.message})
    return res.status(500).json({message:`something went wrong try again`})
}

module.exports=errorHandler