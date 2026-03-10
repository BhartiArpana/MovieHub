const jwt = require('jsonwebtoken')
const userModel = require('../models/User.model')
const bcrypt = require('bcryptjs')


async function adminRegister(req,res){
   const {name,email,password}= req.body

   const isAlreadyUserExist = await userModel.findOne({email})

   if(isAlreadyUserExist){
    return res.status(409).json({
       message:'User already exists.'
    })
   }

   const hash = await bcrypt.hash(password,10)

   const user = await userModel.create({
   name,
    email,
    password:hash,
    role:"admin"
   })

   const token = jwt.sign({
    id:user._id,
    name:user.name,
    role:user.role
   },process.env.JWT_SECRET,{
    expiresIn:'1d'
   })

   res.cookie('token',token,{
     httpOnly: true,
  secure: false,
  sameSite: "lax"
   })
   res.status(201).json({
    message:'User registerd seccessfully!',
    user,
    token
   })
}

async function adminLogin(req,res){
    const {email,password} = req.body
     
    const user = await userModel.findOne({
        $and:[
            {email},
            {role:"admin"}
        ]
    }).select("+password")

    if(!user){
        return res.status(401).json({
            message:'Invalid Credential'
        })
    }

    const isPasswordCorrect =await bcrypt.compare(password,user.password)
    if(!isPasswordCorrect){
        return res.status(401).json({
            message:'Inavlid Credential'
        })
    }

    const token = jwt.sign({
        id:user._id,
        name:user.name,
        role:user.role
    },process.env.JWT_SECRET)

    res.cookie('token',token,{
         httpOnly: true,
  secure: false,
  sameSite: "lax"
    })
    res.status(200).json({
        message:'User loggedIn successfully!',
        user
    })

}


async function registerUser(req,res){
   const {name,email,password}= req.body

   const isAlreadyUserExist = await userModel.findOne({email})

   if(isAlreadyUserExist){
    return res.status(409).json({
       message:'User already exists.'
    })
   }

   const hash = await bcrypt.hash(password,10)

   const user = await userModel.create({
   name,
    email,
    password:hash
   })

   const token = jwt.sign({
    id:user._id,
    name:user.name,
    role:user.role
   },process.env.JWT_SECRET,{
    expiresIn:'1d'
   })

   res.cookie('token',token,{
     httpOnly: true,
  secure: false,
  sameSite: "lax"
   })
   res.status(201).json({
    message:'User registerd seccessfully!',
    user,
    token
   })
}


async function LoginUser(req,res){
    const {email,password} = req.body
     
    const user = await userModel.findOne({email}).select("+password")

    if(!user){
        return res.status(401).json({
            message:'Invalid Credential'
        })
    }

    const isPasswordCorrect =await bcrypt.compare(password,user.password)
    if(!isPasswordCorrect){
        return res.status(401).json({
            message:'Inavlid Credential'
        })
    }

    const token = jwt.sign({
        id:user._id,
        name:user.name,
        role:user.role
    },process.env.JWT_SECRET)

    res.cookie('token',token,{
         httpOnly: true,
  secure: false,
  sameSite: "lax"
    })
    res.status(200).json({
        message:'User loggedIn successfully!',
        user
    })

}


module.exports = {
    registerUser,
    LoginUser,
    adminRegister,
    adminLogin
    
}
