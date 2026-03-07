const { model } = require('mongoose')
const userModel= require('../models/User.model')

async function AllUsers(req,res){
   const role = req.user.role
   
   if(role!=='admin'){
    return res.status(400).json({
        message:'Token Exprired'
    })
   }

   const allUsers = await userModel.find({role:"user"})
   res.status(200).json({
    message:"All users fetched successfully",
    allUsers
   })
   
}

async function getMe(req,res){
    const user = await userModel.findById(req.user.id)
    res.status(200).json({
        message:'User fetched successfully!',
        user
    })
}

module.exports = {
    AllUsers,
    getMe
}