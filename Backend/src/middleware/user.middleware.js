const jwt = require('jsonwebtoken')
async function identifyUser(req,res,next){
    const token = req.cookies.token
    if(!token){
        return res.status(401).json({
            message:'Token Not provided'
        })
    }

    try{
        let decoded = jwt.verify(token,process.env.JWT_SECRET)
        req.user = decoded
        next()
    }catch(err){
        return res.status(401).json({
            message:'Token expired.'
        })
        
    }
}

module.exports = identifyUser