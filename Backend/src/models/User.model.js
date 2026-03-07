const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,'Username required']
    },
    email:{
        type:String,
        required:[true,'email required'],
        unique:[true,'email must be unique']
    },
    password:{
        type:String,
        require:[true,'password is required'],
        select:false
    },
    role:{
        type:String,
        default:'user'
    }

})

const userModel = mongoose.model('User',userSchema)

module.exports = userModel