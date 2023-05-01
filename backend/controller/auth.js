const userModel  = require("../model/user")
const jwt = require("jsonwebtoken")



const handleError = (err)=>{
    const error  = {email:"",  password:""}
    if(err.message.includes("user validation failed")){
        Object.values(err.errors).forEach(({properties})=>{
            error[properties.path] = properties.message
        })
    }
       
    return error

}

const loginController = (req,res)=>{
    res.json({msg: "Hello world from login controller"})
}





//sigup controller
const createToken =(id)=>{  
    return jwt.sign({id}, "0558119187A" , {expiresIn: "3d"} )
}

const signupController = async (req,res)=>{
    const {email,password , username} = req.body
    try {
        const user = await userModel.create({email,password , username})
        const token = await createToken(user._id)
        res.cookie("jwt", token, {maxAge:2*24*60*60*1000,httpOnly:true} )
        res.status(200).json({user:user})
    } catch (error) {
        const errors =  await handleError(error)
        res.status(400).json({errors})
    }

}


module.exports = {
    loginController,
    signupController
}